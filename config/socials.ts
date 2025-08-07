import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@vishalshrestha115",
    icon: Icons.gitHub,
    link: "https://github.com/vishalshrestha115",
  },
  {
    name: "LinkedIn",
    username: "Vishal Shrestha",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/vishal-shrestha-24a31b370/",
  },
  {
    name: "Gmail",
    username: "shresthavishal0001",
    icon: Icons.gmail,
    link: "mailto:shresthavishal0001@gmail.com",
  },
  {
    name: "Facebook",
    username: "",
    icon: Icons.facebook,
    link: "https://www.facebook.com/vishal.shrestha.792624?rdid=l5TJ6oEddo29k84m&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DfL5rRJBK%2F#",
  },
  {
    name: "Instagram",
    username: "",
    icon: Icons.instagramm,
    link: "https://www.instagram.com/beesaalshrestha/",
  },
];
