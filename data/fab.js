import { useModalConfig } from "@/store/loginModal.ts";

const mainConfig = useModalConfig();

//const router = useRouter();

export default [
  {
    name: "Home",
    route: () => {
    },
    key: "home",
    tooltip: "Go Home",
    routeIcon: "home",
  },
  {
    name: "Report",
    route: () => {
      mainConfig.openReport();
    },
    key: "report",
    tooltip: "Report",
    routeIcon: "crosscircle",
  },
  {
    name: "Feedback",
    route: () => {
      mainConfig.openFeedback();
    },
    key: "feedback",
    tooltip: "Feedback",
    routeIcon: "edit",
  },
];
