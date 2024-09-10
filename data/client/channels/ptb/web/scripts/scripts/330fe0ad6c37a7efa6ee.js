"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54642"],
  {
    45217: function (e) {
      e.exports = "/assets/089d28a7beb630543571.svg";
    },
    574542: function (e) {
      e.exports = "/assets/5a1894c68b30d79488dd.svg";
    },
    720589: function (e, t, n) {
      n.r(t), n(47120), n(724458);
      var l = n(735250),
        a = n(470079),
        s = n(120356),
        r = n.n(s),
        i = n(442837),
        o = n(481060),
        d = n(570140),
        c = n(528963),
        h = n(933557),
        u = n(471445),
        g = n(313201),
        m = n(565138),
        M = n(592125),
        p = n(984933),
        _ = n(430824),
        O = n(496675),
        x = n(699516),
        L = n(944486),
        b = n(594174),
        C = n(626135),
        N = n(709054),
        F = n(981631),
        Z = n(689938),
        f = n(922834);
      function j(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class I extends a.PureComponent {
        componentDidMount() {
          C.default.track(F.rMx.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
          });
        }
        getDefaultChannelId(e) {
          let t = e.find((e) => {
              let { channel: t } = e;
              return "general" === (0, h.F6)(t, b.default, x.Z);
            }),
            n = null != t ? t : e[0];
          return null != n ? n.channel.id : null;
        }
        renderFooter() {
          let {
              selectedGuildId: e,
              selectedChannelId: t,
              submitting: n,
            } = this.state,
            { onClose: s } = this.props;
          return (0, l.jsxs)(a.Fragment, {
            children: [
              (0, l.jsx)(o.Button, {
                submitting: n,
                onClick: this.handleFollow,
                disabled: null == e || null == t,
                children: Z.Z.Messages.FOLLOW,
              }),
              (0, l.jsx)(o.Button, {
                look: o.Button.Looks.LINK,
                color: o.Button.Colors.PRIMARY,
                onClick: s,
                children: Z.Z.Messages.CANCEL,
              }),
            ],
          });
        }
        renderForm() {
          let { guilds: e } = this.props,
            {
              channels: t,
              selectedGuildId: n,
              selectedChannelId: s,
              errorMessage: r,
            } = this.state,
            i = N.default.keys(e).map((t) => {
              let { guild: n } = e[t];
              return { value: t, label: n.toString(), guild: n };
            }),
            d = t.map((e) => {
              let { channel: t, category: n } = e;
              return {
                value: t.id,
                label: (0, h.F6)(t, b.default, x.Z),
                channel: t,
                category: n,
              };
            }),
            c = 0 === i.length,
            g = c
              ? Z.Z.Messages.FOLLOW_MODAL_HINT_NO_PERMS
              : Z.Z.Messages.FOLLOW_MODAL_HINT;
          return (0, l.jsxs)(a.Fragment, {
            children: [
              (0, l.jsx)(o.FormItem, {
                className: f.bottomMargin,
                title: Z.Z.Messages.FORM_LABEL_SEND_TO,
                children: (0, l.jsx)(o.SearchableSelect, {
                  value: n,
                  options: i,
                  isDisabled: c,
                  onChange: this.handleGuildSelect,
                  renderOptionPrefix: (e) =>
                    (function (e) {
                      if (null == e) return null;
                      let { guild: t } = e;
                      return (0, l.jsx)(m.Z, {
                        guild: t,
                        size: m.Z.Sizes.MINI,
                      });
                    })(e),
                }),
              }),
              (0, l.jsx)(o.FormItem, {
                className: f.bottomMargin,
                title: Z.Z.Messages.FORM_LABEL_SELECT_CHANNEL,
                children: (0, l.jsx)(o.SearchableSelect, {
                  value: s,
                  options: d,
                  isDisabled: 0 === d.length,
                  onChange: this.handleChannelSelect,
                  renderOptionPrefix: (e) =>
                    (function (e) {
                      if (null == e) return null;
                      let { channel: t } = e,
                        n = (0, u.KS)(t);
                      return (
                        null != n &&
                        (0, l.jsx)(n, {
                          size: "xs",
                          color: "currentColor",
                          className: f.icon,
                        })
                      );
                    })(e),
                }),
              }),
              (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: c || null != r ? "text-danger" : "text-muted",
                className: f.bottomMargin,
                children: null != r ? r : g,
              }),
            ],
          });
        }
        renderBody() {
          let {
            channel: { nsfw: e },
          } = this.props;
          return (0, l.jsxs)("div", {
            className: f.body,
            children: [
              (0, l.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                id: this.state.headerId,
                children: Z.Z.Messages.FOLLOW_MODAL_TITLE,
              }),
              (0, l.jsx)(o.Text, {
                color: "text-muted",
                className: r()(f.topMargin, { [f.formMargin]: !e }),
                variant: "text-sm/normal",
                children: Z.Z.Messages.FOLLOW_MODAL_BODY,
              }),
              e
                ? (0, l.jsx)(o.Text, {
                    className: r()(f.formMargin, f.topMargin),
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: Z.Z.Messages.FOLLOW_MODAL_WARNING,
                  })
                : null,
            ],
          });
        }
        renderHeader() {
          var e;
          let {
              guildToFollow: t,
              channelNameToFollow: n,
              channel: a,
            } = this.props,
            s =
              null !== (e = (0, u.KS)(a)) && void 0 !== e
                ? e
                : o.AnnouncementsIcon;
          return (0, l.jsxs)(o.ModalHeader, {
            className: f.header,
            children: [
              (0, l.jsx)(m.Z, { guild: t, size: m.Z.Sizes.LARGE }),
              (0, l.jsx)("div", {
                className: f.channelContainer,
                children: (0, l.jsxs)("div", {
                  className: f.channel,
                  children: [
                    (0, l.jsx)(s, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: f.channelIcon,
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/medium",
                      className: f.channelName,
                      children: n,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        render() {
          let { transitionState: e } = this.props;
          return (0, l.jsxs)(o.ModalRoot, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            children: [
              this.renderHeader(),
              (0, l.jsxs)(o.ModalContent, {
                className: f.content,
                children: [this.renderBody(), this.renderForm()],
              }),
              (0, l.jsx)(o.ModalFooter, { children: this.renderFooter() }),
            ],
          });
        }
        constructor(e) {
          super(e),
            j(this, "handleGuildSelect", (e) => {
              let { guilds: t } = this.props,
                { selectedGuildId: n } = this.state,
                l = t[e].channels,
                a = this.getDefaultChannelId(l);
              n !== e &&
                this.setState({
                  selectedGuildId: e,
                  selectedChannelId: a,
                  channels: l,
                });
            }),
            j(this, "handleChannelSelect", (e) => {
              this.setState({ selectedChannelId: e });
            }),
            j(this, "handleFollow", () => {
              let { channel: e, onClose: t } = this.props,
                { selectedChannelId: a, selectedGuildId: s } = this.state;
              null != a &&
                (this.setState({ submitting: !0 }),
                c.Z.createChannelFollower(a, e.id)
                  .then(() => {
                    d.Z.dispatch({
                      type: "CHANNEL_FOLLOWER_CREATED",
                      channelId: a,
                      guildId: s,
                    }),
                      t(),
                      (0, o.openModalLazy)(async () => {
                        let { default: e } = await n
                          .e("14760")
                          .then(n.bind(n, 897140));
                        return (t) => (0, l.jsx)(e, { ...t });
                      });
                  })
                  .catch((e) => {
                    e.body.code === F.evJ.TOO_MANY_WEBHOOKS
                      ? this.setState({
                          errorMessage:
                            Z.Z.Messages.FOLLOW_MODAL_TOO_MANY_WEBHOOKS,
                          submitting: !1,
                        })
                      : this.setState({
                          errorMessage: Z.Z.Messages.FOLLOW_MODAL_FAIL,
                          submitting: !1,
                        });
                  }));
            });
          let { guilds: t, lastChannelFollowingDestination: a } = e,
            { guildId: s, channelId: r } = a;
          this.state = {
            selectedGuildId: s,
            selectedChannelId: r,
            channels: null != s && null != t[s] ? t[s].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.hQ)("modal"),
          };
        }
      }
      t.default = i.ZP.connectStores(
        [_.Z, M.Z, p.ZP, O.Z, L.Z],
        (e) => {
          let { channel: t } = e,
            n = _.Z.getGuild(t.guild_id),
            l = Object.values(_.Z.getGuilds()).reduce((e, t) => {
              let n = p.ZP.getChannels(t.id)
                .SELECTABLE.map((e) => e.channel)
                .filter(
                  (e) =>
                    e.type === F.d4z.GUILD_TEXT &&
                    O.Z.can(F.Plq.MANAGE_WEBHOOKS, e),
                )
                .map((e) => {
                  let t = M.Z.getChannel(e.parent_id);
                  return { channel: e, category: null != t ? t.name : null };
                });
              return n.length > 0 && (e[t.id] = { guild: t, channels: n }), e;
            }, {}),
            a = L.Z.getLastChannelFollowingDestination();
          return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != a ? a : {},
          };
        },
        { forwardRef: !0 },
      )(I);
    },
    922834: function (e, t, n) {
      e.exports = {
        bottomMargin: "bottomMargin_a3e381",
        topMargin: "topMargin_a3e381",
        body: "body_a3e381",
        header: "header_a3e381",
        formMargin: "formMargin_a3e381",
        content: "content_a3e381 noScroll_a3e381",
        icon: "icon_a3e381",
        channelContainer: "channelContainer_a3e381",
        channel: "channel_a3e381",
        channelName: "channelName_a3e381",
        channelIcon: "channelIcon_a3e381",
      };
    },
  },
]);
//# sourceMappingURL=330fe0ad6c37a7efa6ee.js.map
