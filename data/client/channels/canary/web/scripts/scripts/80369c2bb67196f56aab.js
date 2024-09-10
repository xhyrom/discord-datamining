"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97573"],
  {
    914814: function (e) {
      e.exports = "/assets/bb9dbec63310ef1d5269.svg";
    },
    370392: function (e) {
      e.exports = "/assets/56b4ca8deff0b44cbc6f.svg";
    },
    776226: function (e) {
      e.exports = "/assets/c824173d0d5f34be9341.svg";
    },
    878799: function (e) {
      e.exports = "/assets/80f2c4e73f4aba89fc3c.svg";
    },
    225433: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return d;
        },
      });
      var n = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        a = t(481060),
        o = t(689938),
        l = t(60179);
      let c = Object.freeze({ DEFAULT: l.default, FILLED: l.filled });
      function d(e) {
        let {
          className: s,
          onClick: t,
          "aria-label": r,
          look: d = c.DEFAULT,
        } = e;
        return (0, n.jsx)(a.Clickable, {
          "aria-label": null != r ? r : o.Z.Messages.REMOVE,
          className: i()(l.button, d, s),
          onClick: t,
        });
      }
      d.Looks = c;
    },
    892382: function (e, s, t) {
      t.r(s), t(47120);
      var n = t(735250),
        r = t(470079),
        i = t(120356),
        a = t.n(i),
        o = t(392711),
        l = t.n(o),
        c = t(442837),
        d = t(544891),
        h = t(481060),
        u = t(447543),
        m = t(225433),
        p = t(129861),
        x = t(700582),
        I = t(367907),
        g = t(346486),
        v = t(600164),
        T = t(210887),
        b = t(758449),
        N = t(598077),
        Z = t(592125),
        E = t(246946),
        _ = t(626135),
        f = t(981631),
        C = t(689938),
        j = t(278942),
        S = t(869042),
        k = t(113207);
      function M(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      class w extends r.PureComponent {
        render() {
          let {
              invite: e,
              hideDiscriminator: s,
              hideInviteCode: t,
            } = this.props,
            r = new N.Z(e.inviter);
          return (0, n.jsxs)(v.Z, {
            className: a()(j.row, S.card),
            children: [
              (0, n.jsxs)(v.Z, {
                align: v.Z.Align.CENTER,
                className: j.userColumn,
                children: [
                  (0, n.jsx)(x.Z, {
                    user: r,
                    size: h.AvatarSizes.SIZE_24,
                    className: j.avatar,
                  }),
                  (0, n.jsx)(p.Z, {
                    user: r,
                    hideDiscriminator: s,
                    usernameClass: j.username,
                    discriminatorClass: j.discrimClass,
                  }),
                ],
              }),
              (0, n.jsx)(v.Z, {
                align: v.Z.Align.CENTER,
                grow: 0,
                shrink: 0,
                basis: 100,
                className: j.boostZIndex,
                children: (0, n.jsx)(h.Text, {
                  className: j.code,
                  variant: "text-sm/normal",
                  children: t ? "..." : e.code,
                }),
              }),
              (0, n.jsxs)(v.Z, {
                basis: 100,
                grow: 0,
                shrink: 0,
                align: v.Z.Align.CENTER,
                justify: v.Z.Justify.END,
                className: j.boostZIndex,
                children: [
                  (0, n.jsx)(h.Text, {
                    className: j.countdown,
                    variant: "text-sm/normal",
                    children: (0, n.jsx)(g.Z, {
                      deadline: e.getExpiresAt(),
                      showDays: !1,
                    }),
                  }),
                  (0, n.jsx)(m.Z, {
                    className: j.revokeInvite,
                    onClick: this.handleRevokeInvite,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            M(this, "handleRevokeInvite", () => {
              let { onRevoke: e, invite: s } = this.props;
              null != e && e(s);
            });
        }
      }
      class R extends r.PureComponent {
        componentDidMount() {
          let { channelId: e } = this.props;
          d.tn
            .get({
              url: f.ANM.INSTANT_INVITES(e),
              retries: 3,
              oldFormErrors: !0,
            })
            .then((e) => {
              let s = e.body.map(
                (e) =>
                  new b.Z({
                    ...e,
                    maxUses: e.max_uses,
                    maxAge: e.max_age,
                    createdAt: e.created_at,
                  }),
              );
              this.setState({ loading: !1, invites: s });
            }),
            _.default.track(f.rMx.OPEN_MODAL, {
              ...(0, I.v_)(Z.Z.getChannel(e)),
              type: "Group DM Invites",
              source: "Group DM Menu",
            });
        }
        renderContent() {
          let { loading: e, invites: s } = this.state;
          return e || null == s
            ? (0, n.jsx)(h.Spinner, {
                className: k.marginTop20,
                type: h.Spinner.Type.SPINNING_CIRCLE,
              })
            : l().isEmpty(s)
              ? this.renderEmpty()
              : (0, n.jsxs)("div", {
                  className: j.container,
                  children: [this.renderHeader(), this.renderInvites()],
                });
        }
        renderEmpty() {
          return (0, n.jsxs)(h.EmptyState, {
            theme: this.props.theme,
            children: [
              (0, n.jsx)(h.EmptyStateImage, {
                darkSrc: t(914814),
                lightSrc: t(370392),
                width: 256,
                height: 130,
                style: { marginBottom: 0 },
              }),
              (0, n.jsx)(h.EmptyStateText, {
                className: k.marginTop20,
                children: C.Z.Messages.NO_INVITES_CAPTION,
              }),
            ],
          });
        }
        renderHeader() {
          return (0, n.jsxs)(v.Z, {
            children: [
              (0, n.jsx)(v.Z.Child, {
                wrap: !0,
                children: (0, n.jsx)(h.FormTitle, {
                  children: C.Z.Messages.INSTANT_INVITE_INVITER,
                }),
              }),
              (0, n.jsx)(v.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                basis: 100,
                children: (0, n.jsx)(h.FormTitle, {
                  children: C.Z.Messages.INSTANT_INVITE_INVITE_CODE,
                }),
              }),
              (0, n.jsx)(v.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                basis: 100,
                children: (0, n.jsx)(h.FormTitle, {
                  className: j.alignRight,
                  children: C.Z.Messages.INSTANT_INVITE_EXPIRES,
                }),
              }),
            ],
          });
        }
        renderInvites() {
          let { hideDiscriminators: e, hideInviteCodes: s } = this.props;
          return l()(this.state.invites)
            .sortBy((e) => {
              var s;
              return (
                null !== (s = e.inviter.username) && void 0 !== s ? s : ""
              ).toLocaleLowerCase();
            })
            .map((t) =>
              (0, n.jsx)(
                w,
                {
                  invite: t,
                  hideDiscriminator: e,
                  hideInviteCode: s,
                  onRevoke: this.handleRevoke,
                },
                t.code,
              ),
            )
            .value();
        }
        render() {
          return (0, n.jsxs)(h.ModalRoot, {
            transitionState: this.props.transitionState,
            "aria-label": C.Z.Messages.INVITES,
            size: h.ModalSize.MEDIUM,
            children: [
              (0, n.jsxs)(h.ModalHeader, {
                direction: v.Z.Direction.VERTICAL,
                align: v.Z.Align.START,
                separator: !1,
                children: [
                  (0, n.jsx)(h.FormTitle, {
                    tag: h.FormTitleTags.H1,
                    children: C.Z.Messages.INVITES,
                  }),
                  (0, n.jsx)(h.FormText, {
                    type: h.FormTextTypes.DESCRIPTION,
                    children: C.Z.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE,
                  }),
                ],
              }),
              (0, n.jsx)(h.ModalContent, { children: this.renderContent() }),
              (0, n.jsx)(h.ModalFooter, {
                children: (0, n.jsx)(h.Button, {
                  onClick: this.handleClose,
                  children: C.Z.Messages.DONE,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            M(this, "state", { loading: !0, invites: null }),
            M(this, "handleRevoke", (e) => {
              u.Z.revokeInvite(e),
                this.setState({
                  invites: this.state.invites.filter((s) => s !== e),
                });
            }),
            M(this, "handleClose", () => {
              let { onClose: e } = this.props;
              null == e || e();
            });
        }
      }
      s.default = c.ZP.connectStores([E.Z, T.Z], () => ({
        hideDiscriminators: E.Z.hidePersonalInformation,
        hideInviteCodes: E.Z.hideInstantInvites,
        theme: T.Z.theme,
      }))(R);
    },
    60179: function (e, s, t) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    278942: function (e, s, t) {
      e.exports = {
        container: "container_cbc7d5",
        row: "row_cbc7d5",
        revokeInvite: "revokeInvite_cbc7d5",
        boostZIndex: "boostZIndex_cbc7d5",
        userColumn: "userColumn_cbc7d5 boostZIndex_cbc7d5",
        code: "code_cbc7d5",
        username: "username_cbc7d5",
        avatar: "avatar_cbc7d5",
        discrimClass: "discrimClass_cbc7d5",
        alignRight: "alignRight_cbc7d5",
        countdown: "countdown_cbc7d5 alignRight_cbc7d5",
      };
    },
    869042: function (e, s, t) {
      t.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=80369c2bb67196f56aab.js.map
