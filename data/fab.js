import { useModalConfig } from "@/store/loginModal.ts";

const mainConfig = useModalConfig();

const router = useRouter();

export default [
  {
    name: "Home",
    route: () => {
      router.push("/");
    },
    key: "home",
    tooltip: "Go Home",
    routeIcon: "home",
  },
  {
    name: "Report",
    route: () => {
      router.push("/report");
    },
    key: "report",
    tooltip: "Add A Report",
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
