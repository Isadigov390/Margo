import { site } from "@/data/site";
import type { Lang } from "@/data/i18n";
import { withBase } from "@/data/urls";

export interface BoutiqueProduct {
  title: string;
  azTitle: string;
  ruTitle: string;
  category: string;
  ruCategory: string;
  enCategory: string;
  image: string;
  instagramUrl: string;
  description: string;
  ruDescription: string;
  enDescription: string;
  whatsappText: string;
  ruWhatsappText: string;
  enWhatsappText: string;
  width: number;
  height: number;
}

export const products: BoutiqueProduct[] = [
  {
    title: "Midnight Dot Grace Midi Dress",
    azTitle: "Qara Nöqtəli Midi Don",
    ruTitle: "Черное Миди-Платье В Горошек",
    category: "Donlar",
    ruCategory: "Платья",
    enCategory: "Dresses",
    image: withBase("/images/products/midnight-dot-grace-midi-dress.jpg"),
    instagramUrl: "https://www.instagram.com/p/DYrood2tIjp/",
    description: "Zərif qara nöqtəli midi don, gündəlik və xüsusi obrazlar üçün.",
    ruDescription: "Элегантное черное миди-платье в горошек для повседневных и особых образов.",
    enDescription: "An elegant black polka-dot midi dress for everyday and special looks.",
    whatsappText: "Salam, Margo Boutique saytından yazıram. Midnight Dot Grace Midi Dress modelinin ölçü, rəng və qiyməti haqqında məlumat ala bilərəm?",
    ruWhatsappText: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать размер, цвет и цену модели Midnight Dot Grace Midi Dress?",
    enWhatsappText: "Hello, I am writing from the Margo Boutique website. Can I get size, color, and price information for the Midnight Dot Grace Midi Dress?",
    width: 1122,
    height: 1402,
  },
  {
    title: "Desert Breeze Tribal Palazzo Set",
    azTitle: "Tribal Palazzo Dəsti",
    ruTitle: "Комплект Tribal Palazzo",
    category: "Dəstlər",
    ruCategory: "Комплекты",
    enCategory: "Sets",
    image: withBase("/images/products/desert-breeze-tribal-palazzo-set.jpg"),
    instagramUrl: "https://www.instagram.com/p/DYpqLpGtJyy/",
    description: "Yüngül palazzo şalvar və tribal naxışlı üst ilə rahat yay obrazı.",
    ruDescription: "Легкий летний образ с брюками палаццо и верхом с tribal-принтом.",
    enDescription: "A light summer look with palazzo trousers and a tribal-print top.",
    whatsappText: "Salam, Margo Boutique saytından yazıram. Desert Breeze Tribal Palazzo Set modelinin ölçü, rəng və qiyməti haqqında məlumat ala bilərəm?",
    ruWhatsappText: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать размер, цвет и цену модели Desert Breeze Tribal Palazzo Set?",
    enWhatsappText: "Hello, I am writing from the Margo Boutique website. Can I get size, color, and price information for the Desert Breeze Tribal Palazzo Set?",
    width: 1122,
    height: 1402,
  },
  {
    title: "Royal Azure Knit Maxi Dress",
    azTitle: "Mavi Trikotaj Maxi Don",
    ruTitle: "Синее Трикотажное Макси-Платье",
    category: "Donlar",
    ruCategory: "Платья",
    enCategory: "Dresses",
    image: withBase("/images/products/royal-azure-knit-maxi-dress.jpg"),
    instagramUrl: "https://www.instagram.com/p/DYpHD3QNE6-/",
    description: "Parlaq mavi rəngdə uzun trikotaj don, diqqətçəkən və zərif seçim.",
    ruDescription: "Яркое синее трикотажное макси-платье, эффектный и элегантный выбор.",
    enDescription: "A bright blue knit maxi dress, bold and elegant at once.",
    whatsappText: "Salam, Margo Boutique saytından yazıram. Royal Azure Knit Maxi Dress modelinin ölçü, rəng və qiyməti haqqında məlumat ala bilərəm?",
    ruWhatsappText: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать размер, цвет и цену модели Royal Azure Knit Maxi Dress?",
    enWhatsappText: "Hello, I am writing from the Margo Boutique website. Can I get size, color, and price information for the Royal Azure Knit Maxi Dress?",
    width: 1122,
    height: 1402,
  },
  {
    title: "Olive & Mocha Polka Duo Maxi Dresses",
    azTitle: "Yaşıl və Qəhvəyi Nöqtəli Maxi Donlar",
    ruTitle: "Оливковое и Мокко Макси-Платья В Горошек",
    category: "Donlar",
    ruCategory: "Платья",
    enCategory: "Dresses",
    image: withBase("/images/products/olive-mocha-polka-duo-maxi-dresses.jpg"),
    instagramUrl: "https://www.instagram.com/p/DYmgqbutXql/",
    description: "Yaşıl və qəhvəyi tonlarda nöqtəli maxi donlar, yay üçün incə seçim.",
    ruDescription: "Макси-платья в оливковых и коричневых тонах в горошек, нежный выбор для лета.",
    enDescription: "Polka-dot maxi dresses in olive and mocha tones, a soft summer choice.",
    whatsappText: "Salam, Margo Boutique saytından yazıram. Olive & Mocha Polka Duo Maxi Dresses modelinin ölçü, rəng və qiyməti haqqında məlumat ala bilərəm?",
    ruWhatsappText: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать размер, цвет и цену модели Olive & Mocha Polka Duo Maxi Dresses?",
    enWhatsappText: "Hello, I am writing from the Margo Boutique website. Can I get size, color, and price information for the Olive & Mocha Polka Duo Maxi Dresses?",
    width: 1122,
    height: 1402,
  },
  {
    title: "Snow Dot Chic Trouser Set",
    azTitle: "Ağ Nöqtəli Şalvar Dəsti",
    ruTitle: "Белый Брючный Комплект В Горошек",
    category: "Dəstlər",
    ruCategory: "Комплекты",
    enCategory: "Sets",
    image: withBase("/images/products/snow-dot-chic-trouser-set.jpg"),
    instagramUrl: "https://www.instagram.com/p/DYmW5DPN4fj/",
    description: "Ağ şalvar, top və nöqtəli köynək kombini ilə təmiz və modern görünüş.",
    ruDescription: "Чистый и современный образ с белыми брюками, топом и рубашкой в горошек.",
    enDescription: "A clean modern look with white trousers, a top, and a polka-dot shirt.",
    whatsappText: "Salam, Margo Boutique saytından yazıram. Snow Dot Chic Trouser Set modelinin ölçü, rəng və qiyməti haqqında məlumat ala bilərəm?",
    ruWhatsappText: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать размер, цвет и цену модели Snow Dot Chic Trouser Set?",
    enWhatsappText: "Hello, I am writing from the Margo Boutique website. Can I get size, color, and price information for the Snow Dot Chic Trouser Set?",
    width: 1122,
    height: 1402,
  },
  {
    title: "Noir & Ivory Pleated Mini Dress Duo",
    azTitle: "Qara və Ağ Mini Donlar",
    ruTitle: "Черное и Белое Мини-Платья",
    category: "Donlar",
    ruCategory: "Платья",
    enCategory: "Dresses",
    image: withBase("/images/products/noir-ivory-pleated-mini-dress-duo.jpg"),
    instagramUrl: "https://www.instagram.com/p/DYmQQpSNp4W/",
    description: "Qara və ağ tonlarda qısa zərif donlar, gündəlik və axşam obrazı üçün.",
    ruDescription: "Короткие элегантные платья в черном и белом цветах для дневного и вечернего образа.",
    enDescription: "Short elegant dresses in black and white for everyday and evening looks.",
    whatsappText: "Salam, Margo Boutique saytından yazıram. Noir & Ivory Pleated Mini Dress Duo modelinin ölçü, rəng və qiyməti haqqında məlumat ala bilərəm?",
    ruWhatsappText: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать размер, цвет и цену модели Noir & Ivory Pleated Mini Dress Duo?",
    enWhatsappText: "Hello, I am writing from the Margo Boutique website. Can I get size, color, and price information for the Noir & Ivory Pleated Mini Dress Duo?",
    width: 1122,
    height: 1402,
  },
  {
    title: "Pearl Tailored Button Dress",
    azTitle: "Ağ Düyməli Klassik Don",
    ruTitle: "Белое Классическое Платье С Пуговицами",
    category: "Klassik obrazlar",
    ruCategory: "Классические образы",
    enCategory: "Classic looks",
    image: withBase("/images/products/pearl-tailored-button-dress.jpg"),
    instagramUrl: "https://www.instagram.com/p/DYmDX_WNsKj/",
    description: "Ağ rəngdə klassik düyməli don, zərif və səliqəli görünüş üçün.",
    ruDescription: "Классическое белое платье с пуговицами для элегантного и аккуратного образа.",
    enDescription: "A classic white button dress for a polished, elegant look.",
    whatsappText: "Salam, Margo Boutique saytından yazıram. Pearl Tailored Button Dress modelinin ölçü, rəng və qiyməti haqqında məlumat ala bilərəm?",
    ruWhatsappText: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать размер, цвет и цену модели Pearl Tailored Button Dress?",
    enWhatsappText: "Hello, I am writing from the Margo Boutique website. Can I get size, color, and price information for the Pearl Tailored Button Dress?",
    width: 1122,
    height: 1402,
  },
  {
    title: "Eclipse & Butter Satin Maxi Dress Duo",
    azTitle: "Qara və Sarı Satin Maxi Donlar",
    ruTitle: "Черное и Желтое Сатиновые Макси-Платья",
    category: "Ziyafət obrazları",
    ruCategory: "Вечерние образы",
    enCategory: "Evening looks",
    image: withBase("/images/products/eclipse-butter-satin-maxi-dress-duo.jpg"),
    instagramUrl: "https://www.instagram.com/p/DYj-IzPs-2f/",
    description: "Qara və sarı uzun satin donlar, zərif ziyafət və yay axşamları üçün.",
    ruDescription: "Черное и желтое длинные сатиновые платья для элегантных вечеров и летних событий.",
    enDescription: "Black and yellow satin maxi dresses for elegant occasions and summer evenings.",
    whatsappText: "Salam, Margo Boutique saytından yazıram. Eclipse & Butter Satin Maxi Dress Duo modelinin ölçü, rəng və qiyməti haqqında məlumat ala bilərəm?",
    ruWhatsappText: "Здравствуйте, пишу с сайта Margo Boutique. Можно узнать размер, цвет и цену модели Eclipse & Butter Satin Maxi Dress Duo?",
    enWhatsappText: "Hello, I am writing from the Margo Boutique website. Can I get size, color, and price information for the Eclipse & Butter Satin Maxi Dress Duo?",
    width: 1122,
    height: 1402,
  },
];

export const featuredProducts = [products[5], products[2], products[6], products[3]];

export const instagramPreviewProducts = [products[0], products[4], products[7], products[1]];

export function getProductTitle(product: BoutiqueProduct, lang: Lang) {
  if (lang === "az") return product.azTitle;
  if (lang === "ru") return product.ruTitle;
  return product.title;
}

export function getProductCategory(product: BoutiqueProduct, lang: Lang) {
  if (lang === "az") return product.category;
  if (lang === "ru") return product.ruCategory;
  return product.enCategory;
}

export function getProductDescription(product: BoutiqueProduct, lang: Lang) {
  if (lang === "az") return product.description;
  if (lang === "ru") return product.ruDescription;
  return product.enDescription;
}

export function getProductWhatsappUrl(product: BoutiqueProduct, lang: Lang = "az") {
  const text =
    lang === "az"
      ? product.whatsappText
      : lang === "ru"
        ? product.ruWhatsappText
        : product.enWhatsappText;
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(text)}`;
}
