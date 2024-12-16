"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45094"],
  {
    332063: function (e, t, n) {
      n(47120);
      var l,
        r = n(200651),
        i = n(192379),
        s = n(442837),
        a = n(481060),
        o = n(274616),
        d = n(560587),
        c = n(388032);
      function h(e, t, n) {
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
      class u extends (l = i.Component) {
        componentDidMount() {
          let {
            applicationId: e,
            branches: t,
            onHasBranchesChange: n,
          } = this.props;
          (0, o.Z)(e), null == n || n(t.length > 0);
        }
        componentDidUpdate(e) {
          let { onHasBranchesChange: t, branches: n } = this.props,
            l = n.length > 0;
          null != t && l !== e.branches.length > 0 && t(l);
        }
        render() {
          let {
            branches: e,
            selectedBranchId: t,
            applicationId: n,
            includeMaster: l,
            hide: i,
            className: s,
          } = this.props;
          if (0 === e.length || i) return null;
          let o = l ? e : e.filter((e) => e.id !== n);
          return (0, r.jsx)(a.SingleSelect, {
            options: o.map((e) => ({ label: e.getName(n), value: e.id })),
            placeholder: c.intl.string(c.t.Sw7pHB),
            value: t,
            onChange: this.handleChange,
            className: s,
          });
        }
        constructor(...e) {
          super(...e),
            h(this, "handleChange", (e) => {
              this.props.onChange(e);
            });
        }
      }
      h(u, "defaultProps", { includeMaster: !1 }),
        (t.Z = s.ZP.connectStores([d.Z], (e) => {
          let { applicationId: t } = e;
          return { branches: d.Z.getBranches(t) };
        })(u));
    },
    620123: function (e, t, n) {
      n(47120);
      var l = n(200651),
        r = n(192379),
        i = n(442837),
        s = n(481060),
        a = n(16084),
        o = n(55563),
        d = n(388032);
      class c extends r.Component {
        componentDidMount() {
          let {
            applicationId: e,
            skus: t,
            selectedSkuId: n,
            onChange: l,
          } = this.props;
          null == t || 0 === t.length
            ? (0, a.uE)(e, !1)
            : 1 === t.length && null == n && l(t[0].id);
        }
        componentDidUpdate() {
          let { skus: e, selectedSkuId: t, onChange: n } = this.props;
          null != e && 1 === e.length && null == t && n(e[0].id);
        }
        render() {
          let { skus: e, selectedSkuId: t, className: n } = this.props,
            r = null != e && 0 === e.length;
          return (0, l.jsx)(s.SingleSelect, {
            options:
              null != e ? e.map((e) => ({ label: e.name, value: e.id })) : [],
            placeholder: r
              ? d.intl.string(d.t.hKcgPz)
              : d.intl.string(d.t.QV60Ul),
            value: t,
            onChange: this.handleChange,
            className: n,
            isDisabled: r,
          });
        }
        constructor(...e) {
          var t, n, l;
          super(...e),
            (t = this),
            (n = "handleChange"),
            (l = (e) => {
              this.props.onChange(e);
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = l);
        }
      }
      t.Z = i.ZP.connectStores([o.Z], (e) => {
        let { applicationId: t } = e;
        return { skus: o.Z.getForApplication(t) };
      })(c);
    },
    218613: function (e, t, n) {
      n.r(t),
        n.d(t, {
          AddMembers: function () {
            return ee;
          },
          ChannelTypeBadge: function () {
            return $;
          },
        }),
        n(653041),
        n(47120),
        n(411104);
      var l,
        r,
        i = n(200651),
        s = n(192379),
        a = n(120356),
        o = n.n(a),
        d = n(512722),
        c = n.n(d),
        h = n(392711),
        u = n.n(h),
        p = n(990547),
        m = n(831209),
        g = n(442837),
        C = n(481060),
        N = n(333848),
        I = n(749210),
        x = n(332063),
        E = n(620123),
        S = n(911969),
        T = n(367907),
        j = n(812206),
        v = n(933557),
        b = n(605436),
        A = n(185413),
        O = n(313201),
        L = n(540059),
        f = n(688465),
        D = n(456269),
        M = n(312146),
        _ = n(703656),
        U = n(146085),
        G = n(60222),
        y = n(388131),
        R = n(131704),
        B = n(592125),
        P = n(271383),
        z = n(430824),
        w = n(496675),
        Z = n(699516),
        F = n(594174),
        k = n(934415),
        H = n(823379),
        V = n(63063),
        Y = n(981631),
        W = n(71080),
        K = n(710352),
        X = n(231338),
        q = n(388032),
        J = n(355069);
      function Q(e, t, n) {
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
      function $(e) {
        let { isNew: t, isBeta: n } = e,
          l = null;
        return (
          !0 === t
            ? (l = (0, i.jsx)(C.TextBadge, {
                text: q.intl.string(q.t.psHMa2),
                className: J.newBadge,
                color: m.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER,
              }))
            : !0 === n && (l = (0, i.jsx)(f.Z, { className: J.newBadge })),
          l
        );
      }
      function ee(e) {
        let { onChange: t, guildId: n, channelType: l, description: r } = e,
          [a, o] = s.useState({}),
          d = (0, g.e7)([z.Z], () => z.Z.getGuild(n)),
          c = l === Y.d4z.GUILD_STAGE_VOICE;
        return (s.useEffect(() => {
          t(a);
        }, [a, t]),
        null == d)
          ? null
          : (0, i.jsx)(C.ModalContent, {
              className: J.addMembersContainer,
              children: (0, i.jsx)(A.AddMembersBody, {
                guild: d,
                channel: null,
                permission: c ? U.yP : (0, R.CG)(l),
                pendingAdditions: a,
                setPendingAdditions: o,
                isStageChannel: c,
                description: r,
              }),
            });
      }
      ((r = l || (l = {})).CHANNEL_INFO = "CHANNEL_INFO"),
        (r.ADD_MEMBERS = "ADD_MEMBERS");
      class et extends s.PureComponent {
        componentDidMount() {
          let { _input: e } = this;
          null != e && e.select();
          let {
            guildId: t,
            applications: n,
            canCreateStoreChannel: l,
          } = this.props;
          l && null == n && I.Z.fetchApplications(t),
            T.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, {
              type: "Create Channel",
            }),
            D.O2.trackExposure({ guildId: t, location: "45d324_1" });
        }
        componentDidUpdate(e, t) {
          !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === Y.d4z.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: Y.d4z.GUILD_TEXT }),
            !t.isPrivate &&
              this.state.isPrivate &&
              T.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, {
                type: "Create Private Channel",
              });
        }
        getGuildId() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return e.guildId;
        }
        canSubmit() {
          let { canViewChannels: e, canConnect: t } = this.props,
            { isPrivate: n, channelType: l, skuId: r, name: i } = this.state;
          return (
            "" !== i &&
            "" !== i.trim() &&
            (!n || !!(0, b.nT)(l, e, t)) &&
            (l !== Y.d4z.GUILD_STORE || null != r) &&
            !0
          );
        }
        getIconComponent() {
          let { isPrivate: e, channelType: t } = this.state;
          switch (t) {
            case Y.d4z.GUILD_TEXT:
              return e ? C.TextLockIcon : C.TextIcon;
            case Y.d4z.GUILD_FORUM:
              return C.ForumIcon;
            case Y.d4z.GUILD_MEDIA:
              return C.ImageIcon;
            case Y.d4z.GUILD_VOICE:
              return e ? C.VoiceLockIcon : C.VoiceNormalIcon;
            case Y.d4z.GUILD_STORE:
              return C.TagIcon;
            case Y.d4z.GUILD_ANNOUNCEMENT:
              return C.AnnouncementsIcon;
            case Y.d4z.GUILD_STAGE_VOICE:
              return C.StageIcon;
            default:
              return (0, R.zi)(t) ? C.TextIcon : X.Vq;
          }
        }
        renderHeader() {
          var e, t, n;
          let l;
          let { cloneChannel: r, categoryId: s, onClose: a } = this.props,
            { channelType: o } = this.state;
          let d =
            ((e = r),
            (t = o),
            null != e
              ? q.intl.string(q.t.dEaPc3)
              : t === Y.d4z.GUILD_CATEGORY
                ? q.intl.string(q.t["ISN+ND"])
                : q.intl.string(q.t["fUYU+v"]));
          if (null != s) {
            let e = B.Z.getChannel(s);
            l = (0, i.jsx)(C.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: J.subtitle,
              children: q.intl.format(q.t.L1zJgY, {
                categoryName:
                  null !== (n = null == e ? void 0 : e.name) && void 0 !== n
                    ? n
                    : "",
              }),
            });
          }
          return (0, i.jsxs)(C.ModalHeader, {
            separator: !1,
            children: [
              (0, i.jsxs)("div", {
                className: J.header,
                children: [
                  (0, i.jsx)(C.Heading, {
                    id: this.headerId,
                    variant: "heading-lg/semibold",
                    className: J.title,
                    children: d,
                  }),
                  l,
                ],
              }),
              (0, i.jsx)(C.ModalCloseButton, {
                onClick: a,
                className: J.closeButton,
              }),
            ],
          });
        }
        renderName() {
          let e;
          let { cloneChannel: t, guildId: l } = this.props,
            { errors: r, channelType: s } = this.state;
          (null == r ? void 0 : r.name) != null &&
            (e = (0, i.jsx)(C.Text, {
              variant: "text-xs/normal",
              color: "text-danger",
              className: J.error,
              children: r.name,
            }));
          let a = s === Y.d4z.GUILD_CATEGORY,
            o = a ? q.intl.string(q.t.OCAkGB) : q.intl.string(q.t.PVbHDg),
            d =
              null != t
                ? (0, i.jsx)(C.FormText, {
                    className: J.channelNameNote,
                    type: C.FormText.Types.DESCRIPTION,
                    children: q.intl.format(q.t.s2ZzZW, {
                      name: (0, v.F6)(t, F.default, Z.Z, !0),
                    }),
                  })
                : s === Y.d4z.GUILD_FORUM
                  ? (0, i.jsx)(C.FormText, {
                      className: J.channelNameNote,
                      type: C.FormText.Types.DESCRIPTION,
                      children: q.intl.format(q.t.tbVWyc, {
                        forumUpsellHook: (e, t) =>
                          (0, i.jsx)(
                            C.Anchor,
                            {
                              onClick: () =>
                                (0, C.openModalLazy)(async () => {
                                  let { default: e } = await n
                                    .e("18417")
                                    .then(n.bind(n, 740696));
                                  return (t) =>
                                    (0, i.jsx)(e, { ...t, guildId: l });
                                }),
                              children: e,
                            },
                            t,
                          ),
                      }),
                    })
                  : null,
            c = this.getIconComponent();
          return (0, i.jsx)(O.FG, {
            children: (t) =>
              (0, i.jsxs)(C.FormItem, {
                title: o,
                tag: "label",
                htmlFor: t,
                titleClassName: J.sectionTitle,
                className: J.name,
                children: [
                  (0, i.jsx)(C.TextInput, {
                    value: this.state.name,
                    onChange: this.handleNameChange,
                    id: t,
                    inputRef: this.setInputRef,
                    maxLength: 100,
                    placeholder: (function (e) {
                      switch (e) {
                        case Y.d4z.GUILD_CATEGORY:
                          return q.intl.string(q.t.eTVbt7);
                        case Y.d4z.GUILD_FORUM:
                          return q.intl.string(q.t["5z1Xam"]);
                        default:
                          return q.intl.string(q.t["bw/b8P"]);
                      }
                    })(s),
                    className: J.inputWrapper,
                    inputClassName: a ? void 0 : J.inputInner,
                    prefixElement: a
                      ? null
                      : (0, i.jsx)(c, {
                          className: J.inputPrefix,
                          size: "xs",
                          color: "currentColor",
                        }),
                    autoFocus: !0,
                  }),
                  e,
                  d,
                ],
              }),
          });
        }
        renderType() {
          let {
              cloneChannel: e,
              applications: t,
              canCreateStoreChannel: n,
              canCreateAnnouncementChannel: l,
              canCreateStageChannel: r,
              canCreateForumChannel: s,
              canCreateMediaChannel: a,
            } = this.props,
            { channelType: o, isPrivate: d } = this.state;
          if (null != e || o === Y.d4z.GUILD_CATEGORY) return;
          let c = null != t && t.length > 0;
          return (0, i.jsx)(C.FormItem, {
            className: J.type,
            title: q.intl.string(q.t["7ZcXGx"]),
            children: (0, i.jsx)(C.RadioGroup, {
              options: (function (e) {
                let {
                    isPrivate: t,
                    showStoreChannelOption: n,
                    showAnnouncementChannelOption: l,
                    canCreateStageChannel: r,
                    canCreateForumChannel: s,
                    canCreateMediaChannel: a,
                  } = e,
                  o = [
                    {
                      icon: t ? C.TextLockIcon : C.TextIcon,
                      label: q.intl.string(q.t.pnuRXF),
                      value: Y.d4z.GUILD_TEXT,
                      description: q.intl.string(q.t.Hf5Lb2),
                    },
                  ];
                return (
                  o.push({
                    icon: t ? C.VoiceLockIcon : C.VoiceNormalIcon,
                    label: q.intl.string(q.t.Sx55Oj),
                    value: Y.d4z.GUILD_VOICE,
                    description: q.intl.string(q.t.pqfkoK),
                  }),
                  s &&
                    o.push({
                      icon: t ? C.ForumLockIcon : C.ForumIcon,
                      label: q.intl.string(q.t.eAVIDw),
                      value: Y.d4z.GUILD_FORUM,
                      description: (0, i.jsxs)(C.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: J.radioLabelDescription,
                        children: [
                          q.intl.string(q.t.iZ5pgo),
                          (0, i.jsx)("br", {}),
                          q.intl.format(q.t.fjSvsL, {
                            onClick: () => {
                              open(K.V8);
                            },
                          }),
                        ],
                      }),
                    }),
                  a &&
                    o.push({
                      icon: t ? C.ImageLockIcon : C.ImageIcon,
                      label: q.intl.string(q.t["6x6fVl"]),
                      value: Y.d4z.GUILD_MEDIA,
                      description: (0, i.jsxs)(C.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: J.radioLabelDescription,
                        children: [
                          q.intl.string(q.t.JyCrwc),
                          (0, i.jsx)("br", {}),
                          q.intl.format(q.t.fjSvsL, {
                            onClick: () => {
                              open(
                                V.Z.getCreatorSupportArticleURL(
                                  Y.BhN.MEDIA_CHANNEL,
                                ),
                              );
                            },
                          }),
                        ],
                      }),
                      isBeta: !0,
                    }),
                  l &&
                    o.push({
                      icon: C.AnnouncementsIcon,
                      iconSize: 24,
                      label: q.intl.string(q.t.qr9dEB),
                      value: Y.d4z.GUILD_ANNOUNCEMENT,
                      description: q.intl.string(q.t.gBkfzs),
                    }),
                  n &&
                    o.push({
                      icon: C.TagIcon,
                      iconSize: 24,
                      label: q.intl.string(q.t.SxjkXV),
                      value: Y.d4z.GUILD_STORE,
                      description: q.intl.string(q.t.nmCPMD),
                    }),
                  r &&
                    o.push({
                      icon: C.StageIcon,
                      iconSize: 24,
                      label: q.intl.string(q.t.pNWst7),
                      value: Y.d4z.GUILD_STAGE_VOICE,
                      description: q.intl.string(q.t.VPAwgo),
                    }),
                  o.map((e) => {
                    let {
                      icon: t,
                      iconSize: n,
                      label: l,
                      value: r,
                      description: s,
                      isNew: a,
                      isBeta: o,
                    } = e;
                    return {
                      name: (0, i.jsxs)("div", {
                        className: J.radioItemName,
                        children: [
                          (0, i.jsx)(t, {
                            ...(null != n
                              ? { width: n, height: n, size: "custom" }
                              : { size: "md" }),
                            color: "currentColor",
                            className: J.icon,
                            colorClass: J.foreground,
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)(C.Text, {
                                variant: "text-md/medium",
                                className: J.radioLabelName,
                                children: [
                                  l,
                                  (0, i.jsx)($, { isNew: a, isBeta: o }),
                                ],
                              }),
                              "string" == typeof s
                                ? (0, i.jsx)(C.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: J.radioLabelDescription,
                                    children: s,
                                  })
                                : s,
                            ],
                          }),
                        ],
                      }),
                      value: r,
                      radioBarClassName: J.radioBar,
                      radioItemIconClassName: J.radioBarIcon,
                    };
                  })
                );
              })({
                isPrivate: d,
                showStoreChannelOption: n && c,
                showAnnouncementChannelOption: l,
                canCreateStageChannel: r,
                canCreateForumChannel: s,
                canCreateMediaChannel: a,
              }),
              value: o,
              size: C.RadioGroup.Sizes.NOT_SET,
              onChange: this.handleTypeChange,
              itemInfoClassName: J.radioBarLabel,
            }),
          });
        }
        renderChannelTypeDescription(e) {
          let t;
          return (e === Y.d4z.GUILD_ANNOUNCEMENT &&
            (t = q.intl.format(q.t.tI7KNT, {
              documentationLink: V.Z.getArticleURL(Y.BhN.ANNOUNCEMENT_CHANNELS),
            })),
          null == t)
            ? null
            : (0, i.jsx)(C.FormText, {
                className: J.channelTypeDescription,
                type: C.FormText.Types.DESCRIPTION,
                children: t,
              });
        }
        renderStoreOptions() {
          let { applications: e } = this.props,
            {
              applicationId: t,
              skuId: n,
              branchId: l,
              showBranches: r,
              hasBranches: a,
            } = this.state;
          if (null == e || 0 === e.length)
            throw Error("Unexpected empty applications");
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(C.FormTitle, {
                tag: "h5",
                children: q.intl.string(q.t.vPIW2N),
              }),
              (0, i.jsx)(C.SingleSelect, {
                options: e.map((e) => ({ label: e.name, value: e.id })),
                placeholder: q.intl.string(q.t["3XfCPT"]),
                value: t,
                onChange: this.handleApplicationChange,
                className: J.storeChannelOptionSelector,
              }),
              null != t
                ? (0, i.jsxs)(s.Fragment, {
                    children: [
                      (0, i.jsx)(C.FormTitle, {
                        tag: "h5",
                        children: q.intl.string(q.t.XNIWFh),
                      }),
                      (0, i.jsx)(
                        E.Z,
                        {
                          applicationId: t,
                          onChange: this.handleSKUChange,
                          selectedSkuId: n,
                          className: J.storeChannelOptionSelector,
                        },
                        t,
                      ),
                    ],
                  })
                : null,
              null != t && a
                ? (0, i.jsxs)(C.FormSwitch, {
                    hideBorder: !0,
                    onChange: this.handleShowBranchesToggle,
                    value: r,
                    note: q.intl.format(q.t.UVXL1d, {
                      devPortalUrl: Y.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                    }),
                    children: [
                      (0, i.jsx)(C.KeyIcon, {
                        size: "md",
                        color: "currentColor",
                        className: J.switchIcon,
                      }),
                      q.intl.string(q.t["3e9mHx"]),
                    ],
                  })
                : null,
              null != t
                ? (0, i.jsxs)(s.Fragment, {
                    children: [
                      r
                        ? (0, i.jsx)(C.FormTitle, {
                            tag: "h5",
                            children: q.intl.string(q.t.o7DqFx),
                          })
                        : null,
                      (0, i.jsx)(
                        x.Z,
                        {
                          applicationId: t,
                          onChange: this.handleBranchChange,
                          selectedBranchId: l,
                          hide: !r,
                          onHasBranchesChange: this.handleHasBranchesChange,
                          className: J.storeChannelOptionSelector,
                        },
                        t,
                      ),
                    ],
                  })
                : null,
            ],
          });
        }
        renderPrivacyOptions() {
          let { cloneChannel: e } = this.props,
            { channelType: t, isPrivate: n } = this.state;
          if (null != e || t === Y.d4z.GUILD_ANNOUNCEMENT) return null;
          let l =
              t === Y.d4z.GUILD_CATEGORY
                ? q.intl.string(q.t.lEPAZ2)
                : q.intl.string(q.t.aUI70t),
            r =
              t === Y.d4z.GUILD_CATEGORY
                ? q.intl.string(q.t["RQUk6+"])
                : q.intl.string(q.t.YguuKi);
          return (0, i.jsx)(
            C.FormItem,
            {
              children: (0, i.jsxs)(C.FormSwitch, {
                hideBorder: !0,
                onChange: this.handlePrivacyChange,
                value: n,
                note: r,
                children: [
                  (0, i.jsx)(C.LockIcon, {
                    size: "md",
                    color: "currentColor",
                    className: J.switchIcon,
                  }),
                  l,
                ],
              }),
            },
            "privacy-switch",
          );
        }
        renderError(e) {
          let t;
          let { channelType: n, isPrivate: l, errors: r } = this.state,
            { canConnect: s, canViewChannels: a } = this.props;
          if (Object.values(r).length > 0) {
            if (null != r.message && "" !== r.message) t = r.message;
            else if (e || null == r.name) {
              let e = Object.values(r)[0];
              e.length > 0 && (t = e);
            }
          } else l && !(0, b.nT)(n, a, s) && (t = (0, b.$7)(n));
          if (null != t)
            return (0, i.jsx)("div", {
              className: o()(J.createError, { [J.addMemberError]: e }),
              children: (0, i.jsx)(C.HelpMessage, {
                messageType: C.HelpMessageTypes.ERROR,
                children: t,
              }),
            });
        }
        renderFooter() {
          let e;
          let { channelType: t, onClose: n } = this.props,
            { channelType: l } = this.state,
            { isPrivate: r } = this.state;
          e =
            t === Y.d4z.GUILD_CATEGORY
              ? q.intl.string(q.t["ISN+ND"])
              : q.intl.string(q.t["fUYU+v"]);
          let s = r || l === Y.d4z.GUILD_STAGE_VOICE;
          return (0, i.jsxs)(C.ModalFooter, {
            className: J.modalFooter,
            children: [
              s
                ? (0, i.jsx)(C.Button, {
                    type: "button",
                    onClick: () => {
                      this.setState({ slide: "ADD_MEMBERS", errors: {} });
                    },
                    disabled: !this.canSubmit(),
                    children: q.intl.string(q.t.PDTjLC),
                  })
                : (0, i.jsx)(C.Button, {
                    type: "submit",
                    disabled: !this.canSubmit(),
                    children: e,
                  }),
              (0, i.jsx)(C.Button, {
                onClick: n,
                look: C.Button.Looks.LINK,
                color: C.Button.Colors.PRIMARY,
                children: q.intl.string(q.t["ETE/oK"]),
              }),
            ],
          });
        }
        renderAddMemberFooter() {
          let e;
          let { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
          return (
            (e =
              0 === Object.keys(n).length
                ? q.intl.string(q.t["5WxrcX"])
                : t === Y.d4z.GUILD_CATEGORY
                  ? q.intl.string(q.t["ISN+ND"])
                  : q.intl.string(q.t["fUYU+v"])),
            (0, i.jsxs)(C.ModalFooter, {
              children: [
                (0, i.jsx)(C.Button, {
                  type: "submit",
                  disabled: !this.canSubmit(),
                  children: e,
                }),
                (0, i.jsx)(C.Button, {
                  onClick: () => {
                    this.setState({ slide: "CHANNEL_INFO" });
                  },
                  look: C.Button.Looks.LINK,
                  color: C.Button.Colors.PRIMARY,
                  children: q.intl.string(q.t["13/7kZ"]),
                }),
              ],
            })
          );
        }
        handlePermissionOverwriteChange(e) {
          this.setState({ pendingPermissionOverwrites: e });
        }
        renderCreateChannelContent() {
          let { channelType: e } = this.state;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              this.renderHeader(),
              (0, i.jsxs)(C.ModalContent, {
                className: J.modalContent,
                children: [
                  this.renderType(),
                  this.renderName(),
                  e === Y.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                  this.renderChannelTypeDescription(e),
                  e === Y.d4z.GUILD_STAGE_VOICE
                    ? null
                    : this.renderPrivacyOptions(),
                ],
              }),
              this.renderError(),
              this.renderFooter(),
            ],
          });
        }
        renderAddMemberSlideContent() {
          let { name: e, channelType: t } = this.state,
            { guildId: n, onClose: l } = this.props,
            r = this.getIconComponent(),
            s = t === Y.d4z.GUILD_STAGE_VOICE;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(C.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsxs)("div", {
                    className: J.header,
                    children: [
                      (0, i.jsx)(C.Heading, {
                        variant: "heading-lg/semibold",
                        className: J.title,
                        children: s
                          ? q.intl.string(q.t["S/6zHB"])
                          : q.intl.string(q.t.dMJ3Y2),
                      }),
                      (0, i.jsxs)(C.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: J.subtitle,
                        children: [
                          (0, i.jsx)(r, {
                            size: "xs",
                            color: "currentColor",
                            className: J.subtitleIcon,
                          }),
                          e,
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(C.ModalCloseButton, {
                    onClick: l,
                    className: J.closeButton,
                  }),
                ],
              }),
              this.renderError(!0),
              (0, i.jsx)(ee, {
                onChange: this.handlePermissionOverwriteChange,
                guildId: n,
                channelType: t,
              }),
              this.renderAddMemberFooter(),
            ],
          });
        }
        renderSlides() {
          let { slide: e } = this.state,
            { width: t } = this.props,
            n = { impression_group: p.ImpressionGroups.CHANNEL_ADD_FLOW };
          return (0, i.jsx)("div", {
            children: (0, i.jsxs)(C.Slides, {
              activeSlide: e,
              width: t,
              children: [
                (0, i.jsx)(C.Slide, {
                  id: "CHANNEL_INFO",
                  impressionName: p.ImpressionNames.CHANNEL_ADD_INFO,
                  impressionProperties: n,
                  children: this.renderCreateChannelContent(),
                }),
                (0, i.jsx)(C.Slide, {
                  id: "ADD_MEMBERS",
                  impressionName: p.ImpressionNames.CHANNEL_ADD_MEMBERS,
                  impressionProperties: n,
                  children: this.renderAddMemberSlideContent(),
                }),
              ],
            }),
          });
        }
        render() {
          let { transitionState: e } = this.props;
          return (0, i.jsx)(C.ModalRoot, {
            transitionState: e,
            className: J.modal,
            "aria-labelledby": this.headerId,
            size: C.ModalSize.DYNAMIC,
            children: (0, i.jsx)("form", {
              onSubmit: this.handleSubmit,
              children: this.renderSlides(),
            }),
          });
        }
        constructor(e) {
          super(e),
            Q(this, "headerId", (0, O.hQ)()),
            Q(this, "_input", void 0),
            Q(this, "setInputRef", (e) => {
              this._input = e;
            }),
            Q(this, "handleNameChange", (e) => {
              let { channelType: t } = this.state;
              R.xL.has(t) && (e = (0, k.Nj)(e)), this.setState({ name: e });
            }),
            Q(this, "handleTypeChange", (e) => {
              let { value: t } = e,
                { name: n } = this.state;
              R.xL.has(t) && (n = (0, k.Nj)(n)),
                t === Y.d4z.GUILD_STAGE_VOICE &&
                  this.setState({ isPrivate: !1 }),
                this.setState({ channelType: t, name: n });
            }),
            Q(this, "handlePrivacyChange", (e) => {
              this.setState({ isPrivate: e });
            }),
            Q(this, "handleApplicationChange", (e) => {
              this.setState({ applicationId: e });
            }),
            Q(this, "handleSKUChange", (e) => {
              this.setState({ skuId: e });
            }),
            Q(this, "handleShowBranchesToggle", (e) => {
              this.setState({ showBranches: e, branchId: null });
            }),
            Q(this, "handleBranchChange", (e) => {
              this.setState({ branchId: e });
            }),
            Q(this, "handleHasBranchesChange", (e) => {
              this.setState({ hasBranches: e });
            }),
            Q(this, "handleSubmit", async (e) => {
              let t, n, l;
              e.preventDefault();
              let {
                  cloneChannel: r,
                  categoryId: i,
                  user: s,
                  memberRoleIds: a,
                  isAdmin: o,
                  onClose: d,
                  owner: c,
                } = this.props,
                {
                  name: h,
                  pendingPermissionOverwrites: p,
                  channelType: m,
                  skuId: g,
                  branchId: C,
                  isPrivate: I,
                } = this.state,
                x = this.getGuildId();
              if (null != x) {
                if (null != r)
                  (t = u().values(r.permissionOverwrites)),
                    (n = r.bitrate),
                    (l = r.userLimit);
                else if (m === Y.d4z.GUILD_ANNOUNCEMENT) t = (0, k.rt)(x);
                else {
                  if (I) {
                    t = (0, k.oQ)(x, m, [], !0);
                    let e = (0, b.Tj)(p, m);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != c && s.id === c.id;
                    !(t.some((e) => a.has(e.id)) || o || n) &&
                      t.push((0, k.jZ)(s.id, m));
                  }
                  m === Y.d4z.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                      let { row: n } = e;
                      null != n.id &&
                        "" !== n.id &&
                        (n.rowType === W.aC.ROLE
                          ? t.push(
                              (0, y.createModeratorOverwrite)(n.id, S.BN.ROLE),
                            )
                          : n.rowType === W.aC.MEMBER &&
                            t.push(
                              (0, y.createModeratorOverwrite)(
                                n.id,
                                S.BN.MEMBER,
                              ),
                            ));
                    }));
                }
                this.setState({ errors: {} });
                try {
                  let e = await N.Z.createChannel({
                    guildId: x,
                    type: m,
                    name: h,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: l,
                    parentId: m !== Y.d4z.GUILD_CATEGORY ? i : null,
                    skuId: g,
                    branchId: C,
                  });
                  if (null == e || 201 !== e.status) return;
                  let r = e.body;
                  R.xL.has(m) && (0, _.XU)(r.guild_id, r.id), d();
                } catch (e) {
                  null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body })
                    : this.setState({
                        errors: { message: q.intl.string(q.t.fEptJC) },
                      });
                }
              }
            });
          let { channelType: t, cloneChannel: n, prefillChannelName: l } = e;
          (this.state = {
            channelType: null != t ? t : Y.d4z.GUILD_TEXT,
            name: null != n ? (0, v.F6)(n, F.default, Z.Z) : null != l ? l : "",
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            prevGuildId: e.guildId,
            applicationId: null,
            skuId: null,
            branchId: null,
            showBranches: !1,
            hasBranches: !1,
            slide: "CHANNEL_INFO",
            errors: {},
          }),
            (this.handlePermissionOverwriteChange =
              this.handlePermissionOverwriteChange.bind(this));
        }
      }
      t.default = s.forwardRef(function (e, t) {
        let { channelType: n, guildId: l, cloneChannelId: r } = e,
          s = (0, g.cj)([z.Z, F.default, w.Z, B.Z, P.ZP], () => {
            var e, t, i;
            let s = z.Z.getGuild(l),
              a = F.default.getCurrentUser();
            c()(null != a, "CreateChannel: user cannot be undefined");
            let o =
                null != s && null != s.ownerId
                  ? F.default.getUser(s.ownerId)
                  : null,
              d = w.Z.can(Y.Plq.ADMINISTRATOR, s),
              h = B.Z.getChannel(r);
            return {
              guild: s,
              canCreateStoreChannel: null != s && s.hasFeature(Y.oNc.COMMERCE),
              canCreateAnnouncementChannel:
                null != s && s.hasFeature(Y.oNc.NEWS),
              user: a,
              owner: o,
              memberRoles:
                null !==
                  (t =
                    null === (e = P.ZP.getMember(l, a.id)) || void 0 === e
                      ? void 0
                      : e.roles) && void 0 !== t
                  ? t
                  : [],
              canViewChannels: w.Z.can(Y.Plq.VIEW_CHANNEL, s),
              canConnect: w.Z.can(Y.Plq.CONNECT, s),
              isAdmin: d,
              cloneChannel: h,
              channelType:
                null !== (i = null == h ? void 0 : h.type) && void 0 !== i
                  ? i
                  : n,
              canManageRoles: w.Z.can(Y.Plq.MANAGE_ROLES, s),
              canManageChannels: w.Z.can(Y.Plq.MANAGE_CHANNELS, s),
            };
          }),
          a = (0, g.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(l)
              .map((e) => j.Z.getApplication(e))
              .filter(H.lm),
          ),
          o = new Set(s.memberRoles),
          { canManageRoles: d, canManageChannels: h } = s,
          u = (0, G.m)(l) && d && h,
          p = (0, D.W3)(l),
          m = (0, M.Ui)(null == s ? void 0 : s.guild),
          C = (0, L.Q3)("CreateChannel");
        return (0, i.jsx)(et, {
          ...e,
          ...s,
          memberRoleIds: o,
          applications: a,
          canCreateStageChannel: u,
          canCreateForumChannel: p,
          canCreateMediaChannel: m,
          ref: t,
          width: C ? 496 : 460,
        });
      });
    },
    388131: function (e, t, n) {
      n.r(t),
        n.d(t, {
          createModeratorOverwrite: function () {
            return E;
          },
          default: function () {
            return S;
          },
        }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        i = n(442837),
        s = n(481060),
        a = n(741361),
        o = n(881052),
        d = n(911969),
        c = n(185413),
        h = n(600164),
        u = n(313201),
        p = n(592125),
        m = n(430824),
        g = n(700785),
        C = n(146085),
        N = n(71080),
        I = n(388032),
        x = n(105167);
      function E(e, t) {
        return { id: e, type: t, deny: g.Hn, allow: C.yP };
      }
      function S(e) {
        let { transitionState: t, onClose: n, channelId: g } = e,
          S = (0, u.Dt)(),
          T = (0, i.e7)([p.Z], () => p.Z.getChannel(g)),
          j = (0, i.e7)([m.Z], () =>
            m.Z.getGuild(null == T ? void 0 : T.getGuildId()),
          ),
          [v, b] = r.useState({}),
          [A, O] = r.useState(!1),
          [L, f] = r.useState(null);
        if (null == T || null == j) return null;
        let D = async () => {
          O(!0);
          try {
            await (function (e, t) {
              let n = Object.values(t)
                .filter((e) => {
                  let { row: t } = e;
                  return null != t.id;
                })
                .map((e) => {
                  let { row: t } = e;
                  return t.rowType === N.aC.ROLE
                    ? E(t.id, d.BN.ROLE)
                    : E(t.id, d.BN.MEMBER);
                });
              return (0, a.hw)(e.id, n, !0);
            })(T, v),
              n();
          } catch (t) {
            let e = new o.Hx(t);
            O(!1), f(e);
          }
        };
        return (0, l.jsxs)(s.ModalRoot, {
          transitionState: t,
          "aria-labelledby": S,
          size: s.ModalSize.SMALL,
          className: x.modalRoot,
          children: [
            (0, l.jsxs)(s.ModalHeader, {
              separator: !1,
              direction: h.Z.Direction.VERTICAL,
              align: h.Z.Align.CENTER,
              className: x.header,
              children: [
                (0, l.jsx)(s.Heading, {
                  variant: "heading-xl/semibold",
                  children: I.intl.string(I.t.dMJ3Y2),
                }),
                (0, l.jsxs)(s.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: x.headerSubtitle,
                  children: [
                    (0, l.jsx)(s.StageIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: x.headerSubtitleIcon,
                    }),
                    T.name,
                  ],
                }),
              ],
            }),
            (0, l.jsx)(c.AddMembersBody, {
              guild: j,
              channel: T,
              permission: C.yP,
              pendingAdditions: v,
              setPendingAdditions: b,
            }),
            null != L
              ? (0, l.jsx)(s.Text, {
                  className: x.error,
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: L.getAnyErrorMessage(),
                })
              : null,
            (0, l.jsxs)(s.ModalFooter, {
              children: [
                (0, l.jsx)(s.Button, {
                  onClick: D,
                  submitting: A,
                  children: I.intl.string(I.t.OYkgVl),
                }),
                (0, l.jsx)(s.Button, {
                  look: s.Button.Looks.LINK,
                  color: s.Button.Colors.PRIMARY,
                  onClick: n,
                  children: I.intl.string(I.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    560587: function (e, t, n) {
      var l,
        r,
        i,
        s,
        a = n(442837),
        o = n(570140);
      let d = {};
      class c extends (s = a.ZP.Store) {
        getBranches(e) {
          var t;
          return null !== (t = d[e]) && void 0 !== t ? t : [];
        }
      }
      (i = "ApplicationBranchStore"),
        (r = "displayName") in (l = c)
          ? Object.defineProperty(l, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = i),
        (t.Z = new c(o.Z, {
          OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
            let { applicationId: t, branches: n } = e;
            d[t] = n;
          },
          LOGOUT: function () {
            d = {};
          },
        }));
    },
  },
]);
//# sourceMappingURL=5c660736d80bef50bc41.js.map
