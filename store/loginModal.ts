import { defineStore } from "pinia";

export const useModalConfig = defineStore("loginModals", {
  state() {
    return {
      loginModalIsOpen: false,
      signupModalIsOpen: false,
      feedbackModalIsOpen: false,
      loggedIn: false,
      username: "",
    };
  },
  actions: {
    login(name: string) {
      this.loggedIn = true;
      this.username = name;
    },
    logout() {
      this.loggedIn = false;
    },
    openLogin() {
      this.loginModalIsOpen = true;
    },
    openSignup() {
      this.signupModalIsOpen = true;
    },
    openFeedback() {
      this.feedbackModalIsOpen = true;
    },
    closeLogin() {
      this.loginModalIsOpen = false;
    },
    closeFeedback() {
      this.feedbackModalIsOpen = false;
    },
    closeSignup() {
      this.signupModalIsOpen = false;
    },
  },
});