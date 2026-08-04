"use client";

import type { ComponentPropsWithoutRef } from "react";
import { captureAnalyticsEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "6281316203008";
const DEFAULT_MESSAGE = "Halo saya tertarik dengan jasa Anda";

interface TrackedWhatsAppLinkProps
  extends Omit<
    ComponentPropsWithoutRef<"a">,
    "href" | "onClick" | "rel" | "target"
  > {
  ctaLabel: string;
  ctaLocation: string;
  message?: string;
  plan?: string;
}

export default function TrackedWhatsAppLink({
  ctaLabel,
  ctaLocation,
  message = DEFAULT_MESSAGE,
  plan,
  ...anchorProps
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      {...anchorProps}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      data-ph-no-autocapture
      onClick={() => {
        captureAnalyticsEvent("whatsapp cta clicked", {
          cta_label: ctaLabel,
          cta_location: ctaLocation,
          ...(plan ? { plan } : {}),
        });
      }}
    />
  );
}
