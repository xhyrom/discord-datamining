"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3378"],
  {
    364632: function (n) {
      n.exports = "/assets/c9d93c20836c4e464602.svg";
    },
    702286: function (n, e, o) {
      o.d(e, {
        Z: function () {
          return i;
        },
      });
      var a = o(703656),
        t = o(981631);
      function i() {
        let n = (0, a.s1)();
        n.length > 0 ? n.goBack() : (0, a.uL)(t.Z5c.ME);
      }
    },
    523924: function (n, e, o) {
      var a = o(735250);
      o(470079);
      var t = o(481060),
        i = o(565138),
        r = o(689938),
        s = o(807907),
        l = o(364632);
      e.Z = (n) => {
        let {
          headerId: e,
          reapplyText: o,
          onReapply: c,
          confirmText: u,
          onWithdrawApplication: d,
          rejectionReason: f = null,
          guild: _ = null,
        } = n;
        return (0, a.jsxs)("div", {
          className: s.confirmation,
          children: [
            (0, a.jsxs)("div", {
              className: s.confirmationContent,
              children: [
                null !== _
                  ? (0, a.jsx)(i.Z, {
                      size: i.Z.Sizes.LARGER,
                      guild: _,
                      className: s.guildIcon,
                    })
                  : (0, a.jsx)("img", {
                      alt: r.Z.Messages
                        .MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
                      src: l,
                      className: s.__invalid_verificationStateIcon,
                    }),
                (0, a.jsx)(t.Heading, {
                  id: e,
                  variant: "heading-xl/semibold",
                  className: s.header,
                  children:
                    (null == _ ? void 0 : _.name) != null
                      ? r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format(
                          { guildName: _.name },
                        )
                      : r.Z.Messages
                          .MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE,
                }),
                null != f && "" !== f
                  ? (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)(t.Text, {
                        variant: "text-sm/normal",
                        children: [
                          (0, a.jsx)("span", {
                            className: s.rejectionReasonLabel,
                            children:
                              r.Z.Messages
                                .MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON,
                          }),
                          (0, a.jsx)("span", {
                            className: s.rejectionReason,
                            children: f,
                          }),
                        ],
                      }),
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)("div", {
              className: s.confirmationButtonRow,
              children: [
                (0, a.jsx)(t.Button, {
                  onClick: c,
                  color: t.Button.Colors.PRIMARY,
                  className: s.confirmationButton,
                  children: o,
                }),
                (0, a.jsx)(t.Button, {
                  onClick: d,
                  color: t.Button.Colors.RED,
                  className: s.confirmationButton,
                  children: u,
                }),
              ],
            }),
          ],
        });
      };
    },
    76075: function (n, e, o) {
      o.r(e);
      var a = o(735250);
      o(470079);
      var t = o(442837),
        i = o(481060),
        r = o(100527),
        s = o(970606),
        l = o(313201),
        c = o(271383),
        u = o(430824),
        d = o(594174),
        f = o(693546),
        _ = o(305325),
        m = o(937111),
        b = o(702286),
        I = o(523924),
        C = o(981631),
        E = o(689938);
      e.default = function (n) {
        let { guildId: e, transitionState: o, ...R } = n,
          p = (0, l.Dt)(),
          N = (0, t.e7)([m.Z], () => m.Z.getRequest(e), [e]),
          g = (0, t.e7)([u.Z], () => u.Z.getGuild(e), [e]),
          h = (0, t.e7)([d.default], () => {
            var n;
            return null === (n = d.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id;
          }),
          A = (0, t.e7)(
            [c.ZP],
            () => (null != h ? c.ZP.getMember(e, h) : null),
            [h, e],
          ),
          B = async () => {
            var n;
            if (
              (null !== (n = null == g ? void 0 : g.hasFeature(C.oNc.CLAN)) &&
                void 0 !== n &&
                n &&
                (0, s.Vr)({ guildId: e, source: r.Z.CLAN_REAPPLY }),
              null == g ? void 0 : g.hasFeature(C.oNc.PREVIEW_ENABLED))
            ) {
              try {
                await f.Z.removeGuildJoinRequest(e);
              } catch (n) {
                throw n;
              }
              R.onClose(), (0, _.hk)(e);
            } else f.Z.resetGuildJoinRequest(e);
          };
        return (0, a.jsx)(i.ModalRoot, {
          size: i.ModalSize.DYNAMIC,
          transitionState: o,
          "aria-labelledby": p,
          children: (0, a.jsx)(I.Z, {
            ...R,
            headerId: p,
            reapplyText: E.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
            onReapply: B,
            confirmText: E.Z.Messages.OKAY,
            onWithdrawApplication: () => {
              R.onClose(), null == A && (0, b.Z)();
            },
            rejectionReason: null == N ? void 0 : N.rejectionReason,
            guild: g,
          }),
        });
      };
    },
    807907: function (n, e, o) {
      n.exports = {
        container: "container_a74b6f",
        guildSidebar: "guildSidebar_a74b6f",
        guildDescription: "guildDescription_a74b6f",
        guildIcon: "guildIcon_a74b6f",
        guildIconNoIcon: "guildIconNoIcon_a74b6f",
        guildName: "guildName_a74b6f",
        emojisContainer: "emojisContainer_a74b6f",
        emoji: "emoji_a74b6f",
        onlineCount: "onlineCount_a74b6f",
        dotOnline: "dotOnline_a74b6f dot_a74b6f",
        dotMembers: "dotMembers_a74b6f dot_a74b6f",
        divider: "divider_a74b6f",
        modal: "modal_a74b6f",
        sequencer: "sequencer_a74b6f",
        modalContent: "modalContent_a74b6f",
        content: "content_a74b6f",
        centerContent: "centerContent_a74b6f",
        closeButton: "closeButton_a74b6f",
        applicationIconContainer: "applicationIconContainer_a74b6f",
        applicationIcon: "applicationIcon_a74b6f",
        animationAndSparklesContainer: "animationAndSparklesContainer_a74b6f",
        sparkleIcon: "sparkleIcon_a74b6f",
        sparkleTop: "sparkleTop_a74b6f",
        sparkleBottom: "sparkleBottom_a74b6f",
        animation: "animation_a74b6f",
        header: "header_a74b6f",
        subheader: "subheader_a74b6f",
        footer: "footer_a74b6f",
        submitButton: "submitButton_a74b6f",
        formItem: "formItem_a74b6f",
        resendButton: "resendButton_a74b6f",
        confirmation: "confirmation_a74b6f",
        confirmationContent: "confirmationContent_a74b6f",
        confirmationButtonRow: "confirmationButtonRow_a74b6f",
        confirmationButton: "confirmationButton_a74b6f",
        confirmationButtonColumn: "confirmationButtonColumn_a74b6f",
        notice: "notice_a74b6f",
        rejectionReasonLabel: "rejectionReasonLabel_a74b6f",
        rejectionReason: "rejectionReason_a74b6f",
        disclaimerFooter: "disclaimerFooter_a74b6f",
      };
    },
  },
]);
//# sourceMappingURL=81c1f81aeb14cd7b2e3e.js.map
