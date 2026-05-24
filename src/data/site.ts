import { absoluteUrl, withBase } from "@/data/urls";

export const site = {
  name: "Margo Boutique",
  logo: withBase("/images/margo-boutique-logo.svg"),
  description:
    "Margo Boutique Bakıda qadın geyimləri, donlar, gündəlik obrazlar və yeni kolleksiyalar təqdim edir.",
  url: absoluteUrl("/"),
  address: "Sarayevo küçəsi 162C / 162-168, Bakı, Azərbaycan",
  phoneDisplay: "+994 70 370 17 67",
  phoneE164: "994703701767",
  phoneTel: "+994703701767",
  instagram: "https://www.instagram.com/margo_boutique__/",
  maps:
    "https://www.google.com/maps/place/Margo/@40.3988903,49.9326974,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICE8uyI-QE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAGiyF3ydESmWYfPLBMkzJK0ni7HBPtDXxAgFqvG7Das_KAzHL70b56jAQr4ljMlmOSoVAUjVomJXcrU_c70T-7ze8PbJnjPHE2yJJNxZP7z9p26V0lWKnxEapoJux_RHmGIlnbeAw%3Dw114-h86-k-no!7i4032!8i3024!4m13!1m2!2m1!1sclothing+stores+near+me!3m9!1s0x4030631f24a9f4f3:0x30ed03dfac9ca55f!8m2!3d40.3863036!4d49.9570057!10e5!14m1!1BCgIgAQ!15sChdjbG90aGluZyBzdG9yZXMgbmVhciBtZSIDkAEBkgEOY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11f9zc5g50",
  hours: "Hər gün, 10:00-21:00",
};

export const whatsappMessages = {
  az: "Salam, Margo Boutique saytından yazıram. Bu məhsul haqqında məlumat ala bilərəm?",
  ru: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать подробнее об этом товаре?",
  en: "Hello, I am writing from the Margo Boutique website. Can I get more information about this item?",
} as const;

export type SiteLang = keyof typeof whatsappMessages;

export function getWhatsappLink(lang: SiteLang = "az") {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(whatsappMessages[lang])}`;
}

export function getCallLink() {
  return `tel:${site.phoneTel}`;
}

export const contactLinks = {
  whatsapp: getWhatsappLink("az"),
  instagram: site.instagram,
  maps: site.maps,
  call: getCallLink(),
};
