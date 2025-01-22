"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3378"],
  {
    364632: function (n) {
      n.exports = "/assets/c9d93c20836c4e464602.svg";
    },
    702286: function (n, o, t) {
      t.d(o, {
        Z: function () {
          return a;
        },
      });
      var e = t(703656),
        i = t(981631);
      function a() {
        let n = (0, e.s1)();
        n.length > 0 ? n.goBack() : (0, e.uL)(i.Z5c.ME);
      }
    },
    523924: function (n, o, t) {
      var e = t(200651),
        i = t(192379),
        a = t(442837),
        l = t(481060),
        r = t(565138),
        s = t(693546),
        c = t(937111),
        d = t(388032),
        u = t(832311),
        f = t(364632);
      o.Z = (n) => {
        let {
            headerId: o,
            reapplyText: t,
            onReapply: m,
            confirmText: b,
            onWithdrawApplication: _,
            rejectionReason: p = null,
            guild: g = null,
          } = n,
          C = (0, a.e7)([c.Z], () => {
            var n;
            return c.Z.getCooldown(
              null !== (n = null == g ? void 0 : g.id) && void 0 !== n
                ? n
                : "0",
            );
          });
        i.useEffect(() => {
          null == C && null != g && s.Z.fetchJoinRequestCooldown(g.id);
        }, [C, g]);
        let h = (null != C ? C : 0) > 0,
          j = h && null != C ? Math.ceil((1e3 * C - Date.now()) / 864e5) : 0;
        return (0, e.jsxs)("div", {
          className: u.confirmation,
          children: [
            (0, e.jsxs)("div", {
              className: u.confirmationContent,
              children: [
                null !== g
                  ? (0, e.jsx)(r.Z, {
                      size: r.Z.Sizes.LARGER,
                      guild: g,
                      className: u.guildIcon,
                    })
                  : (0, e.jsx)("img", {
                      alt: d.intl.string(d.t.bFPqMj),
                      src: f,
                      className: u.__invalid_verificationStateIcon,
                    }),
                (0, e.jsx)(l.Heading, {
                  id: o,
                  variant: "heading-xl/semibold",
                  className: u.header,
                  children:
                    (null == g ? void 0 : g.name) != null
                      ? d.intl.formatToPlainString(d.t["P+/gzM"], {
                          guildName: g.name,
                        })
                      : d.intl.string(d.t.gBPcuL),
                }),
                null != p && "" !== p
                  ? (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)(l.Text, {
                        variant: "text-sm/normal",
                        children: [
                          (0, e.jsx)("span", {
                            className: u.rejectionReasonLabel,
                            children: d.intl.string(d.t.cf1psb),
                          }),
                          (0, e.jsx)("span", {
                            className: u.rejectionReason,
                            children: p,
                          }),
                        ],
                      }),
                    })
                  : null,
              ],
            }),
            (0, e.jsxs)("div", {
              className: u.confirmationButtonRow,
              children: [
                (0, e.jsx)(l.TooltipContainer, {
                  className: u.confirmationButton,
                  text: h
                    ? d.intl.formatToPlainString(d.t.A0f0Pz, { days: j })
                    : null,
                  "aria-label": h
                    ? d.intl.formatToPlainString(d.t.A0f0Pz, { days: j })
                    : void 0,
                  children: (0, e.jsx)(l.Button, {
                    className: u.confirmationTooltipContents,
                    onClick: m,
                    color: l.Button.Colors.PRIMARY,
                    submitting: null == C,
                    disabled: h,
                    children: t,
                  }),
                }),
                (0, e.jsx)(l.Button, {
                  onClick: _,
                  color: l.Button.Colors.RED,
                  className: u.confirmationButton,
                  children: b,
                }),
              ],
            }),
          ],
        });
      };
    },
    76075: function (n, o, t) {
      t.r(o);
      var e = t(200651);
      t(192379);
      var i = t(442837),
        a = t(481060),
        l = t(100527),
        r = t(970606),
        s = t(313201),
        c = t(271383),
        d = t(430824),
        u = t(594174),
        f = t(693546),
        m = t(305325),
        b = t(937111),
        _ = t(702286),
        p = t(523924),
        g = t(981631),
        C = t(388032);
      o.default = function (n) {
        let { guildId: o, transitionState: t, ...h } = n,
          j = (0, s.Dt)(),
          v = (0, i.e7)([b.Z], () => b.Z.getRequest(o), [o]),
          B = (0, i.e7)([d.Z], () => d.Z.getGuild(o), [o]),
          R = (0, i.e7)([u.default], () => {
            var n;
            return null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id;
          }),
          x = (0, i.e7)(
            [c.ZP],
            () => (null != R ? c.ZP.getMember(o, R) : null),
            [R, o],
          ),
          I = async () => {
            var n;
            if (
              (null !== (n = null == B ? void 0 : B.hasFeature(g.oNc.CLAN)) &&
                void 0 !== n &&
                n &&
                (0, r.Vr)({ guildId: o, source: l.Z.CLAN_REAPPLY }),
              null == x ? void 0 : x.isPending)
            ) {
              try {
                await f.Z.removeGuildJoinRequest(o);
              } catch (n) {
                throw n;
              }
              h.onClose(), (0, m.hk)(o);
            } else f.Z.resetGuildJoinRequest(o);
          };
        return (0, e.jsx)(a.ModalRoot, {
          size: a.ModalSize.DYNAMIC,
          transitionState: t,
          "aria-labelledby": j,
          children: (0, e.jsx)(p.Z, {
            ...h,
            headerId: j,
            reapplyText: C.intl.string(C.t.I1LYVl),
            onReapply: I,
            confirmText: C.intl.string(C.t.BddRzc),
            onWithdrawApplication: () => {
              h.onClose(), null == x && (0, _.Z)();
            },
            rejectionReason: null == v ? void 0 : v.rejectionReason,
            guild: B,
          }),
        });
      };
    },
    832311: function (n, o, t) {
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
//# sourceMappingURL=bdceb8aab10f0e6b0965.js.map
