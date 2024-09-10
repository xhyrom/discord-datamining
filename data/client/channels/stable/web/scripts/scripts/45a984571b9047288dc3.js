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
      var a = o(735250),
        t = o(470079),
        i = o(442837),
        l = o(481060),
        s = o(565138),
        r = o(693546),
        c = o(937111),
        u = o(689938),
        d = o(27471),
        f = o(364632);
      e.Z = (n) => {
        let {
            headerId: e,
            reapplyText: o,
            onReapply: _,
            confirmText: m,
            onWithdrawApplication: b,
            rejectionReason: I = null,
            guild: C = null,
          } = n,
          E = (0, i.e7)([c.Z], () => {
            var n;
            return c.Z.getCooldown(
              null !== (n = null == C ? void 0 : C.id) && void 0 !== n
                ? n
                : "0",
            );
          });
        t.useEffect(() => {
          null == E && null != C && r.Z.fetchJoinRequestCooldown(C.id);
        }, [E, C]);
        let R = (null != E ? E : 0) > 0,
          N = R && null != E ? Math.ceil((1e3 * E - Date.now()) / 864e5) : 0;
        return (0, a.jsxs)("div", {
          className: d.confirmation,
          children: [
            (0, a.jsxs)("div", {
              className: d.confirmationContent,
              children: [
                null !== C
                  ? (0, a.jsx)(s.Z, {
                      size: s.Z.Sizes.LARGER,
                      guild: C,
                      className: d.guildIcon,
                    })
                  : (0, a.jsx)("img", {
                      alt: u.Z.Messages
                        .MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
                      src: f,
                      className: d.__invalid_verificationStateIcon,
                    }),
                (0, a.jsx)(l.Heading, {
                  id: e,
                  variant: "heading-xl/semibold",
                  className: d.header,
                  children:
                    (null == C ? void 0 : C.name) != null
                      ? u.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format(
                          { guildName: C.name },
                        )
                      : u.Z.Messages
                          .MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE,
                }),
                null != I && "" !== I
                  ? (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)(l.Text, {
                        variant: "text-sm/normal",
                        children: [
                          (0, a.jsx)("span", {
                            className: d.rejectionReasonLabel,
                            children:
                              u.Z.Messages
                                .MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON,
                          }),
                          (0, a.jsx)("span", {
                            className: d.rejectionReason,
                            children: I,
                          }),
                        ],
                      }),
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)("div", {
              className: d.confirmationButtonRow,
              children: [
                (0, a.jsx)(l.TooltipContainer, {
                  className: d.confirmationButton,
                  text: R
                    ? u.Z.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY_COOLDOWN.format(
                        { days: N },
                      )
                    : null,
                  "aria-label": R
                    ? u.Z.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY_COOLDOWN.format(
                        { days: N },
                      )
                    : void 0,
                  children: (0, a.jsx)(l.Button, {
                    className: d.confirmationTooltipContents,
                    onClick: _,
                    color: l.Button.Colors.PRIMARY,
                    submitting: null == E,
                    disabled: R,
                    children: o,
                  }),
                }),
                (0, a.jsx)(l.Button, {
                  onClick: b,
                  color: l.Button.Colors.RED,
                  className: d.confirmationButton,
                  children: m,
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
        l = o(100527),
        s = o(970606),
        r = o(313201),
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
          N = (0, r.Dt)(),
          p = (0, t.e7)([m.Z], () => m.Z.getRequest(e), [e]),
          A = (0, t.e7)([u.Z], () => u.Z.getGuild(e), [e]),
          g = (0, t.e7)([d.default], () => {
            var n;
            return null === (n = d.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id;
          }),
          M = (0, t.e7)(
            [c.ZP],
            () => (null != g ? c.ZP.getMember(e, g) : null),
            [g, e],
          ),
          h = async () => {
            var n;
            if (
              (null !== (n = null == A ? void 0 : A.hasFeature(C.oNc.CLAN)) &&
                void 0 !== n &&
                n &&
                (0, s.Vr)({ guildId: e, source: l.Z.CLAN_REAPPLY }),
              null == A ? void 0 : A.hasFeature(C.oNc.PREVIEW_ENABLED))
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
          "aria-labelledby": N,
          children: (0, a.jsx)(I.Z, {
            ...R,
            headerId: N,
            reapplyText: E.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
            onReapply: h,
            confirmText: E.Z.Messages.OKAY,
            onWithdrawApplication: () => {
              R.onClose(), null == M && (0, b.Z)();
            },
            rejectionReason: null == p ? void 0 : p.rejectionReason,
            guild: A,
          }),
        });
      };
    },
    27471: function (n, e, o) {
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
        confirmationTooltipContents: "confirmationTooltipContents_a74b6f",
        confirmationButtonColumn: "confirmationButtonColumn_a74b6f",
        notice: "notice_a74b6f",
        rejectionReasonLabel: "rejectionReasonLabel_a74b6f",
        rejectionReason: "rejectionReason_a74b6f",
        disclaimerFooter: "disclaimerFooter_a74b6f",
      };
    },
  },
]);
//# sourceMappingURL=45a984571b9047288dc3.js.map
