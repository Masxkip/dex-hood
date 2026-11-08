import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { MessageSquareText, X } from "lucide-react";
import QuoteForm from "../QuoteForm/QuoteForm";
import "./FloatingQuoteWidget.css";

export default function FloatingQuoteWidget() {
  const [phase, setPhase] = useState("closed");
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const bodyRef = useRef(null);
  const launcherRef = useRef(null);
  const id = useId();
  const isOpen = phase === "open";
  const location = useLocation();
  const previousLocationKey = useRef(location.key);

  useEffect(() => {
    const dialog = dialogRef.current;
    let frame1;
    let frame2;
    let timer;

    const resetScroll = () => {
      if (bodyRef.current) {
        bodyRef.current.scrollTop = 0;
      }
    };

    if (phase === "open") {
      if (!dialog.open) {
        dialog.showModal();
      }

      closeRef.current?.focus({ preventScroll: true });
      resetScroll();

      frame1 = requestAnimationFrame(() => {
        frame2 = requestAnimationFrame(() => {
          // Reset after the form's own effects have run.
          resetScroll();
          dialog.dataset.visible = "true";
        });
      });
    } else if (phase === "closing") {
      dialog.dataset.visible = "false";

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      timer = setTimeout(() => {
        dialog.close();

        // Reset after the closing animation finishes.
        resetScroll();

        setPhase("closed");
        launcherRef.current?.focus({ preventScroll: true });
      }, reduced ? 0 : 320);
    }

    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
      clearTimeout(timer);
    };
  }, [phase]);

    useEffect(() => {
    if (previousLocationKey.current === location.key) return;

    previousLocationKey.current = location.key;

    const frame = requestAnimationFrame(() => {
      setPhase((current) =>
        current === "closed" ? "closed" : "closing"
      );
    });

    return () => cancelAnimationFrame(frame);
  }, [location.key]);

  
  const isPresent = phase !== "closed";
  useEffect(() => {
    if (!isPresent) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = oldOverflow; };
  }, [isPresent]);

  useEffect(() => {
    const viewport = window.visualViewport;
    const update = () => {
      const node = dialogRef.current;
      if (!node) return;
      const height = viewport?.height ?? window.innerHeight;
      const bottom = Math.max(0, window.innerHeight - height - (viewport?.offsetTop ?? 0));
      node.style.setProperty("--quote-viewport-height", `${height}px`);
      node.style.setProperty("--quote-keyboard-bottom", `${bottom}px`);
    };
    update();
    viewport?.addEventListener("resize", update);
    viewport?.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      viewport?.removeEventListener("resize", update);
      viewport?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const close = () => { if (phase === "open") setPhase("closing"); };

  return createPortal(
    <>
      <button
        ref={launcherRef}
        type="button"
        className="floating-quote__launcher"
        aria-label="Open quote request form"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setPhase("open")}
      >
        <MessageSquareText size={23} strokeWidth={1.8} aria-hidden="true" />
        <span>Request a Quote</span>
      </button>

      <dialog
        ref={dialogRef}
        id={id}
        className="floating-quote__panel"
        aria-labelledby={`${id}-title`}
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClick={(event) => {
          // A backdrop click targets the dialog but is outside its rectangle.
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
          }
        }}
      >
        <div className="floating-quote__header">
          <div className="floating-quote__heading">
            <MessageSquareText size={22} aria-hidden="true" />
            <h2 id={`${id}-title`}>Request a Quote</h2>
          </div>
          <button ref={closeRef} type="button" className="floating-quote__close" aria-label="Close quote request form" onClick={close}>
            <X size={23} aria-hidden="true" />
          </button>
        </div>
        <div
          ref={bodyRef}
          className="floating-quote__body"
          onClick={(event) => {
          // Let React Router handle the link; close the overlay as it navigates.
          if (event.target.closest("a[href]") && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) close();
        }}>
          <QuoteForm variant="widget" isActive={isOpen} />
        </div>
      </dialog>
    </>,
    document.body
  );
}
