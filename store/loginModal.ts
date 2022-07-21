import { defineStore } from "pinia";

export const useModalConfig = defineStore("loginModals", {
  state() {
    return {
      loginModalIsOpen: false,
      signupModalIsOpen: false,
    };
  },
  actions: {
    openLogin() {
      this.loginModalIsOpen = true;
    },
    openSignup() {
      this.signupModalIsOpen = true;
    },
    closeLogin() {
      this.loginModalIsOpen = false;
    },
    closeSignup() {
      this.signupModalIsOpen = false;
    },
  },
});