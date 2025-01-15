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
      var l = n(200651),
        a = n(192379),
        r = n(120356),
        s = n.n(r),
        i = n(442837),
        o = n(481060),
        d = n(570140),
        c = n(528963),
        h = n(933557),
        u = n(471445),
        g = n(313201),
        m = n(565138),
        p = n(592125),
        x = n(984933),
        b = n(430824),
        C = n(496675),
        M = n(699516),
        f = n(944486),
        j = n(594174),
        N = n(626135),
        _ = n(709054),
        S = n(981631),
        v = n(388032),
        I = n(429297);
      function F(e, t, n) {
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
      class Z extends a.PureComponent {
        componentDidMount() {
          N.default.track(S.rMx.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
          });
        }
        getDefaultChannelId(e) {
          let t = e.find((e) => {
              let { channel: t } = e;
              return "general" === (0, h.F6)(t, j.default, M.Z);
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
            { onClose: r } = this.props;
          return (0, l.jsxs)(a.Fragment, {
            children: [
              (0, l.jsx)(o.Button, {
                submitting: n,
                onClick: this.handleFollow,
                disabled: null == e || null == t,
                children: v.intl.string(v.t["3aOv+v"]),
              }),
              (0, l.jsx)(o.Button, {
                look: o.Button.Looks.LINK,
                color: o.Button.Colors.PRIMARY,
                onClick: r,
                children: v.intl.string(v.t["ETE/oK"]),
              }),
            ],
          });
        }
        renderForm() {
          let { guilds: e } = this.props,
            {
              channels: t,
              selectedGuildId: n,
              selectedChannelId: r,
              errorMessage: s,
            } = this.state,
            i = _.default.keys(e).map((t) => {
              let { guild: n } = e[t];
              return { value: t, label: n.toString(), guild: n };
            }),
            d = t.map((e) => {
              let { channel: t, category: n } = e;
              return {
                value: t.id,
                label: (0, h.F6)(t, j.default, M.Z),
                channel: t,
                category: n,
              };
            }),
            c = 0 === i.length,
            g = c ? v.intl.string(v.t["6b6QoK"]) : v.intl.string(v.t.Z0quyM);
          return (0, l.jsxs)(a.Fragment, {
            children: [
              (0, l.jsx)(o.FormItem, {
                className: I.bottomMargin,
                title: v.intl.string(v.t.xFn72t),
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
                className: I.bottomMargin,
                title: v.intl.string(v.t.PDn2fX),
                children: (0, l.jsx)(o.SearchableSelect, {
                  value: r,
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
                          className: I.icon,
                        })
                      );
                    })(e),
                }),
              }),
              (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: c || null != s ? "text-danger" : "text-muted",
                className: I.bottomMargin,
                children: null != s ? s : g,
              }),
            ],
          });
        }
        renderBody() {
          let {
            channel: { nsfw: e },
          } = this.props;
          return (0, l.jsxs)("div", {
            className: I.body,
            children: [
              (0, l.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                id: this.state.headerId,
                children: v.intl.string(v.t.mvPFbG),
              }),
              (0, l.jsx)(o.Text, {
                color: "text-muted",
                className: s()(I.topMargin, { [I.formMargin]: !e }),
                variant: "text-sm/normal",
                children: v.intl.string(v.t.kbpkxM),
              }),
              e
                ? (0, l.jsx)(o.Text, {
                    className: s()(I.formMargin, I.topMargin),
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: v.intl.string(v.t["DrNm//"]),
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
            r =
              null !== (e = (0, u.KS)(a)) && void 0 !== e
                ? e
                : o.AnnouncementsIcon;
          return (0, l.jsxs)(o.ModalHeader, {
            className: I.header,
            children: [
              (0, l.jsx)(m.Z, { guild: t, size: m.Z.Sizes.LARGE }),
              (0, l.jsx)("div", {
                className: I.channelContainer,
                children: (0, l.jsxs)("div", {
                  className: I.channel,
                  children: [
                    (0, l.jsx)(r, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: I.channelIcon,
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/medium",
                      className: I.channelName,
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
                className: I.content,
                children: [this.renderBody(), this.renderForm()],
              }),
              (0, l.jsx)(o.ModalFooter, { children: this.renderFooter() }),
            ],
          });
        }
        constructor(e) {
          super(e),
            F(this, "handleGuildSelect", (e) => {
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
            F(this, "handleChannelSelect", (e) => {
              this.setState({ selectedChannelId: e });
            }),
            F(this, "handleFollow", () => {
              let { channel: e, onClose: t } = this.props,
                { selectedChannelId: a, selectedGuildId: r } = this.state;
              null != a &&
                (this.setState({ submitting: !0 }),
                c.Z.createChannelFollower(a, e.id)
                  .then(() => {
                    d.Z.dispatch({
                      type: "CHANNEL_FOLLOWER_CREATED",
                      channelId: a,
                      guildId: r,
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
                    e.body.code === S.evJ.TOO_MANY_WEBHOOKS
                      ? this.setState({
                          errorMessage: v.intl.string(v.t["1eZ4aG"]),
                          submitting: !1,
                        })
                      : this.setState({
                          errorMessage: v.intl.string(v.t.LgwhuL),
                          submitting: !1,
                        });
                  }));
            });
          let { guilds: t, lastChannelFollowingDestination: a } = e,
            { guildId: r, channelId: s } = a;
          this.state = {
            selectedGuildId: r,
            selectedChannelId: s,
            channels: null != r && null != t[r] ? t[r].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.hQ)("modal"),
          };
        }
      }
      t.default = i.ZP.connectStores(
        [b.Z, p.Z, x.ZP, C.Z, f.Z],
        (e) => {
          let { channel: t } = e,
            n = b.Z.getGuild(t.guild_id),
            l = Object.values(b.Z.getGuilds()).reduce((e, t) => {
              let n = x.ZP.getChannels(t.id)
                .SELECTABLE.map((e) => e.channel)
                .filter(
                  (e) =>
                    e.type === S.d4z.GUILD_TEXT &&
                    C.Z.can(S.Plq.MANAGE_WEBHOOKS, e),
                )
                .map((e) => {
                  let t = p.Z.getChannel(e.parent_id);
                  return { channel: e, category: null != t ? t.name : null };
                });
              return n.length > 0 && (e[t.id] = { guild: t, channels: n }), e;
            }, {}),
            a = f.Z.getLastChannelFollowingDestination();
          return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != a ? a : {},
          };
        },
        { forwardRef: !0 },
      )(Z);
    },
    429297: function (e, t, n) {
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
//# sourceMappingURL=71009ef3fe8caf84c267.js.map
