"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70271"],
  {
    223901: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return d;
          },
        });
      var n = t(200651),
        c = t(192379),
        r = t(481060),
        o = t(91159),
        s = t(593130),
        i = t(388032),
        b = t(595290);
      function d(e) {
        let { channel: a, onClose: t, transitionState: d } = e;
        return (
          c.useEffect(() => {
            (0, o.U4)();
          }, []),
          (0, n.jsx)(r.ModalRoot, {
            className: b.modal,
            transitionState: d,
            "aria-label": i.intl.string(i.t.B2panJ),
            size: r.ModalSize.DYNAMIC,
            children: (0, n.jsx)(s.Z, {
              className: b.browser,
              channel: a,
              onClose: t,
            }),
          })
        );
      }
    },
    115888: function (e, a, t) {
      e.exports = {
        container: "container_e664f3",
        header: "header_e664f3",
        threadIcon: "threadIcon_e664f3",
        title: "title_e664f3",
        divider: "divider_e664f3",
        closeIcon: "closeIcon_e664f3",
        spacer: "spacer_e664f3",
        createButton: "createButton_e664f3",
        searchBox: "searchBox_e664f3",
      };
    },
    118473: function (e, a, t) {
      e.exports = {
        container: "container_ebd74a",
        iconContainer: "iconContainer_ebd74a",
        icon: "icon_ebd74a",
        stars: "stars_ebd74a",
        header: "header_ebd74a",
        cta: "cta_ebd74a",
      };
    },
    595290: function (e, a, t) {
      e.exports = { modal: "modal_a60b1b", browser: "browser_a60b1b" };
    },
    21250: function (e, a, t) {
      e.exports = {
        container: "container_acb8b3",
        left: "left_acb8b3",
        subtext: "subtext_acb8b3",
        authorName: "authorName_acb8b3",
        startedByName: "startedByName_acb8b3",
        threadName: "threadName_acb8b3",
        parentName: "parentName_acb8b3",
        messageContent: "messageContent_acb8b3",
        threadNameLine: "threadNameLine_acb8b3",
        facepile: "facepile_acb8b3",
        avatar: "avatar_acb8b3",
        noAvatarIcon: "noAvatarIcon_acb8b3",
        messageContentTrailingIcon: "messageContentTrailingIcon_acb8b3",
        messageContentLeadingIcon: "messageContentLeadingIcon_acb8b3",
        bullet: "bullet_acb8b3",
      };
    },
    721767: function (e, a, t) {
      e.exports = {
        list: "list_c6aa12",
        activeThreadsList: "activeThreadsList_c6aa12",
        sectionHeader: "sectionHeader_c6aa12",
        spinner: "spinner_c6aa12",
      };
    },
  },
]);
//# sourceMappingURL=407ed8cabea31e6fd023.js.map
