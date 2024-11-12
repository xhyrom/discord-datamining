"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45094"],
  {
    332063: function (e, t, n) {
      n(47120);
      var l,
        i = n(200651),
        r = n(192379),
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
      class u extends (l = r.Component) {
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
            hide: r,
            className: s,
          } = this.props;
          if (0 === e.length || r) return null;
          let o = l ? e : e.filter((e) => e.id !== n);
          return (0, i.jsx)(a.SingleSelect, {
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
        i = n(192379),
        r = n(442837),
        s = n(481060),
        a = n(16084),
        o = n(55563),
        d = n(388032);
      class c extends i.Component {
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
            i = null != e && 0 === e.length;
          return (0, l.jsx)(s.SingleSelect, {
            options:
              null != e ? e.map((e) => ({ label: e.name, value: e.id })) : [],
            placeholder: i
              ? d.intl.string(d.t.hKcgPz)
              : d.intl.string(d.t.QV60Ul),
            value: t,
            onChange: this.handleChange,
            className: n,
            isDisabled: i,
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
      t.Z = r.ZP.connectStores([o.Z], (e) => {
        let { applicationId: t } = e;
        return { skus: o.Z.getForApplication(t) };
      })(c);
    },
    218613: function (e, t, n) {
      n.r(t),
        n.d(t, {
          AddMembers: function () {
            return $;
          },
          ChannelTypeBadge: function () {
            return Q;
          },
        }),
        n(653041),
        n(47120),
        n(411104);
      var l,
        i,
        r = n(200651),
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
        A = n(605436),
        O = n(185413),
        b = n(313201),
        L = n(688465),
        f = n(456269),
        D = n(312146),
        M = n(703656),
        _ = n(146085),
        U = n(60222),
        G = n(388131),
        y = n(131704),
        B = n(592125),
        R = n(271383),
        P = n(430824),
        z = n(496675),
        w = n(699516),
        Z = n(594174),
        F = n(934415),
        k = n(823379),
        H = n(63063),
        V = n(981631),
        Y = n(71080),
        W = n(710352),
        K = n(231338),
        X = n(388032),
        q = n(886974);
      function J(e, t, n) {
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
      function Q(e) {
        let { isNew: t, isBeta: n } = e,
          l = null;
        return (
          !0 === t
            ? (l = (0, r.jsx)(C.TextBadge, {
                text: X.intl.string(X.t.psHMa2),
                className: q.newBadge,
                color: m.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER,
              }))
            : !0 === n && (l = (0, r.jsx)(L.Z, { className: q.newBadge })),
          l
        );
      }
      function $(e) {
        let { onChange: t, guildId: n, channelType: l, description: i } = e,
          [a, o] = s.useState({}),
          d = (0, g.e7)([P.Z], () => P.Z.getGuild(n)),
          c = l === V.d4z.GUILD_STAGE_VOICE;
        return (s.useEffect(() => {
          t(a);
        }, [a, t]),
        null == d)
          ? null
          : (0, r.jsx)(C.ModalContent, {
              className: q.addMembersContainer,
              children: (0, r.jsx)(O.AddMembersBody, {
                guild: d,
                channel: null,
                permission: c ? _.yP : (0, y.CG)(l),
                pendingAdditions: a,
                setPendingAdditions: o,
                isStageChannel: c,
                description: i,
              }),
            });
      }
      ((i = l || (l = {})).CHANNEL_INFO = "CHANNEL_INFO"),
        (i.ADD_MEMBERS = "ADD_MEMBERS");
      class ee extends s.PureComponent {
        componentDidMount() {
          let { _input: e } = this;
          null != e && e.select();
          let {
            guildId: t,
            applications: n,
            canCreateStoreChannel: l,
          } = this.props;
          l && null == n && I.Z.fetchApplications(t),
            T.ZP.trackWithMetadata(V.rMx.OPEN_MODAL, {
              type: "Create Channel",
            }),
            f.O2.trackExposure({ guildId: t, location: "45d324_1" });
        }
        componentDidUpdate(e, t) {
          !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === V.d4z.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: V.d4z.GUILD_TEXT }),
            !t.isPrivate &&
              this.state.isPrivate &&
              T.ZP.trackWithMetadata(V.rMx.OPEN_MODAL, {
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
            { isPrivate: n, channelType: l, skuId: i, name: r } = this.state;
          return (
            "" !== r &&
            "" !== r.trim() &&
            (!n || !!(0, A.nT)(l, e, t)) &&
            (l !== V.d4z.GUILD_STORE || null != i) &&
            !0
          );
        }
        getIconComponent() {
          let { isPrivate: e, channelType: t } = this.state;
          switch (t) {
            case V.d4z.GUILD_TEXT:
              return e ? C.TextLockIcon : C.TextIcon;
            case V.d4z.GUILD_FORUM:
              return C.ForumIcon;
            case V.d4z.GUILD_MEDIA:
              return C.ImageIcon;
            case V.d4z.GUILD_VOICE:
              return e ? C.VoiceLockIcon : C.VoiceNormalIcon;
            case V.d4z.GUILD_STORE:
              return C.TagIcon;
            case V.d4z.GUILD_ANNOUNCEMENT:
              return C.AnnouncementsIcon;
            case V.d4z.GUILD_STAGE_VOICE:
              return C.StageIcon;
            default:
              return (0, y.zi)(t) ? C.TextIcon : K.Vq;
          }
        }
        renderHeader() {
          var e, t, n;
          let l;
          let { cloneChannel: i, categoryId: s, onClose: a } = this.props,
            { channelType: o } = this.state;
          let d =
            ((e = i),
            (t = o),
            null != e
              ? X.intl.string(X.t.dEaPc3)
              : t === V.d4z.GUILD_CATEGORY
                ? X.intl.string(X.t["ISN+ND"])
                : X.intl.string(X.t["fUYU+v"]));
          if (null != s) {
            let e = B.Z.getChannel(s);
            l = (0, r.jsx)(C.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: q.subtitle,
              children: X.intl.format(X.t.L1zJgY, {
                categoryName:
                  null !== (n = null == e ? void 0 : e.name) && void 0 !== n
                    ? n
                    : "",
              }),
            });
          }
          return (0, r.jsxs)(C.ModalHeader, {
            separator: !1,
            children: [
              (0, r.jsxs)("div", {
                className: q.header,
                children: [
                  (0, r.jsx)(C.Heading, {
                    id: this.headerId,
                    variant: "heading-lg/semibold",
                    className: q.title,
                    children: d,
                  }),
                  l,
                ],
              }),
              (0, r.jsx)(C.ModalCloseButton, {
                onClick: a,
                className: q.closeButton,
              }),
            ],
          });
        }
        renderName() {
          let e;
          let { cloneChannel: t, guildId: l } = this.props,
            { errors: i, channelType: s } = this.state;
          (null == i ? void 0 : i.name) != null &&
            (e = (0, r.jsx)(C.Text, {
              variant: "text-xs/normal",
              color: "text-danger",
              className: q.error,
              children: i.name,
            }));
          let a = s === V.d4z.GUILD_CATEGORY,
            o = a ? X.intl.string(X.t.OCAkGB) : X.intl.string(X.t.PVbHDg),
            d =
              null != t
                ? (0, r.jsx)(C.FormText, {
                    className: q.channelNameNote,
                    type: C.FormText.Types.DESCRIPTION,
                    children: X.intl.format(X.t.s2ZzZW, {
                      name: (0, v.F6)(t, Z.default, w.Z, !0),
                    }),
                  })
                : s === V.d4z.GUILD_FORUM
                  ? (0, r.jsx)(C.FormText, {
                      className: q.channelNameNote,
                      type: C.FormText.Types.DESCRIPTION,
                      children: X.intl.format(X.t.tbVWyc, {
                        forumUpsellHook: (e, t) =>
                          (0, r.jsx)(
                            C.Anchor,
                            {
                              onClick: () =>
                                (0, C.openModalLazy)(async () => {
                                  let { default: e } = await n
                                    .e("18417")
                                    .then(n.bind(n, 740696));
                                  return (t) =>
                                    (0, r.jsx)(e, { ...t, guildId: l });
                                }),
                              children: e,
                            },
                            t,
                          ),
                      }),
                    })
                  : null,
            c = this.getIconComponent();
          return (0, r.jsx)(b.FG, {
            children: (t) =>
              (0, r.jsxs)(C.FormItem, {
                title: o,
                tag: "label",
                htmlFor: t,
                titleClassName: q.sectionTitle,
                className: q.name,
                children: [
                  (0, r.jsx)(C.TextInput, {
                    value: this.state.name,
                    onChange: this.handleNameChange,
                    id: t,
                    inputRef: this.setInputRef,
                    maxLength: 100,
                    placeholder: (function (e) {
                      switch (e) {
                        case V.d4z.GUILD_CATEGORY:
                          return X.intl.string(X.t.eTVbt7);
                        case V.d4z.GUILD_FORUM:
                          return X.intl.string(X.t["5z1Xam"]);
                        default:
                          return X.intl.string(X.t["bw/b8P"]);
                      }
                    })(s),
                    className: q.inputWrapper,
                    inputClassName: a ? void 0 : q.inputInner,
                    prefixElement: a
                      ? null
                      : (0, r.jsx)(c, {
                          className: q.inputPrefix,
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
              canCreateStageChannel: i,
              canCreateForumChannel: s,
              canCreateMediaChannel: a,
            } = this.props,
            { channelType: o, isPrivate: d } = this.state;
          if (null != e || o === V.d4z.GUILD_CATEGORY) return;
          let c = null != t && t.length > 0;
          return (0, r.jsx)(C.FormItem, {
            className: q.type,
            title: X.intl.string(X.t["7ZcXGx"]),
            children: (0, r.jsx)(C.RadioGroup, {
              options: (function (e) {
                let {
                    isPrivate: t,
                    showStoreChannelOption: n,
                    showAnnouncementChannelOption: l,
                    canCreateStageChannel: i,
                    canCreateForumChannel: s,
                    canCreateMediaChannel: a,
                  } = e,
                  o = [
                    {
                      icon: t ? C.TextLockIcon : C.TextIcon,
                      label: X.intl.string(X.t.pnuRXF),
                      value: V.d4z.GUILD_TEXT,
                      description: X.intl.string(X.t.Hf5Lb2),
                    },
                  ];
                return (
                  o.push({
                    icon: t ? C.VoiceLockIcon : C.VoiceNormalIcon,
                    label: X.intl.string(X.t.Sx55Oj),
                    value: V.d4z.GUILD_VOICE,
                    description: X.intl.string(X.t.pqfkoK),
                  }),
                  s &&
                    o.push({
                      icon: t ? C.ForumLockIcon : C.ForumIcon,
                      label: X.intl.string(X.t.eAVIDw),
                      value: V.d4z.GUILD_FORUM,
                      description: (0, r.jsxs)(C.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: q.radioLabelDescription,
                        children: [
                          X.intl.string(X.t.iZ5pgo),
                          (0, r.jsx)("br", {}),
                          X.intl.format(X.t.fjSvsL, {
                            onClick: () => {
                              open(W.V8);
                            },
                          }),
                        ],
                      }),
                    }),
                  a &&
                    o.push({
                      icon: t ? C.ImageLockIcon : C.ImageIcon,
                      label: X.intl.string(X.t["6x6fVl"]),
                      value: V.d4z.GUILD_MEDIA,
                      description: (0, r.jsxs)(C.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: q.radioLabelDescription,
                        children: [
                          X.intl.string(X.t.JyCrwc),
                          (0, r.jsx)("br", {}),
                          X.intl.format(X.t.fjSvsL, {
                            onClick: () => {
                              open(
                                H.Z.getCreatorSupportArticleURL(
                                  V.BhN.MEDIA_CHANNEL,
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
                      label: X.intl.string(X.t.qr9dEB),
                      value: V.d4z.GUILD_ANNOUNCEMENT,
                      description: X.intl.string(X.t.gBkfzs),
                    }),
                  n &&
                    o.push({
                      icon: C.TagIcon,
                      iconSize: 24,
                      label: X.intl.string(X.t.SxjkXV),
                      value: V.d4z.GUILD_STORE,
                      description: X.intl.string(X.t.nmCPMD),
                    }),
                  i &&
                    o.push({
                      icon: C.StageIcon,
                      iconSize: 24,
                      label: X.intl.string(X.t.pNWst7),
                      value: V.d4z.GUILD_STAGE_VOICE,
                      description: X.intl.string(X.t.VPAwgo),
                    }),
                  o.map((e) => {
                    let {
                      icon: t,
                      iconSize: n,
                      label: l,
                      value: i,
                      description: s,
                      isNew: a,
                      isBeta: o,
                    } = e;
                    return {
                      name: (0, r.jsxs)("div", {
                        className: q.radioItemName,
                        children: [
                          (0, r.jsx)(t, {
                            ...(null != n
                              ? { width: n, height: n, size: "custom" }
                              : { size: "md" }),
                            color: "currentColor",
                            className: q.icon,
                            colorClass: q.foreground,
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsxs)(C.Text, {
                                variant: "text-md/medium",
                                className: q.radioLabelName,
                                children: [
                                  l,
                                  (0, r.jsx)(Q, { isNew: a, isBeta: o }),
                                ],
                              }),
                              "string" == typeof s
                                ? (0, r.jsx)(C.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: q.radioLabelDescription,
                                    children: s,
                                  })
                                : s,
                            ],
                          }),
                        ],
                      }),
                      value: i,
                      radioBarClassName: q.radioBar,
                      radioItemIconClassName: q.radioBarIcon,
                    };
                  })
                );
              })({
                isPrivate: d,
                showStoreChannelOption: n && c,
                showAnnouncementChannelOption: l,
                canCreateStageChannel: i,
                canCreateForumChannel: s,
                canCreateMediaChannel: a,
              }),
              value: o,
              size: C.RadioGroup.Sizes.NOT_SET,
              onChange: this.handleTypeChange,
              itemInfoClassName: q.radioBarLabel,
            }),
          });
        }
        renderChannelTypeDescription(e) {
          let t;
          return (e === V.d4z.GUILD_ANNOUNCEMENT &&
            (t = X.intl.format(X.t.tI7KNT, {
              documentationLink: H.Z.getArticleURL(V.BhN.ANNOUNCEMENT_CHANNELS),
            })),
          null == t)
            ? null
            : (0, r.jsx)(C.FormText, {
                className: q.channelTypeDescription,
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
              showBranches: i,
              hasBranches: a,
            } = this.state;
          if (null == e || 0 === e.length)
            throw Error("Unexpected empty applications");
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)(C.FormTitle, {
                tag: "h5",
                children: X.intl.string(X.t.vPIW2N),
              }),
              (0, r.jsx)(C.SingleSelect, {
                options: e.map((e) => ({ label: e.name, value: e.id })),
                placeholder: X.intl.string(X.t["3XfCPT"]),
                value: t,
                onChange: this.handleApplicationChange,
                className: q.storeChannelOptionSelector,
              }),
              null != t
                ? (0, r.jsxs)(s.Fragment, {
                    children: [
                      (0, r.jsx)(C.FormTitle, {
                        tag: "h5",
                        children: X.intl.string(X.t.XNIWFh),
                      }),
                      (0, r.jsx)(
                        E.Z,
                        {
                          applicationId: t,
                          onChange: this.handleSKUChange,
                          selectedSkuId: n,
                          className: q.storeChannelOptionSelector,
                        },
                        t,
                      ),
                    ],
                  })
                : null,
              null != t && a
                ? (0, r.jsxs)(C.FormSwitch, {
                    hideBorder: !0,
                    onChange: this.handleShowBranchesToggle,
                    value: i,
                    note: X.intl.format(X.t.UVXL1d, {
                      devPortalUrl: V.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                    }),
                    children: [
                      (0, r.jsx)(C.KeyIcon, {
                        size: "md",
                        color: "currentColor",
                        className: q.switchIcon,
                      }),
                      X.intl.string(X.t["3e9mHx"]),
                    ],
                  })
                : null,
              null != t
                ? (0, r.jsxs)(s.Fragment, {
                    children: [
                      i
                        ? (0, r.jsx)(C.FormTitle, {
                            tag: "h5",
                            children: X.intl.string(X.t.o7DqFx),
                          })
                        : null,
                      (0, r.jsx)(
                        x.Z,
                        {
                          applicationId: t,
                          onChange: this.handleBranchChange,
                          selectedBranchId: l,
                          hide: !i,
                          onHasBranchesChange: this.handleHasBranchesChange,
                          className: q.storeChannelOptionSelector,
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
          if (null != e || t === V.d4z.GUILD_ANNOUNCEMENT) return null;
          let l =
              t === V.d4z.GUILD_CATEGORY
                ? X.intl.string(X.t.lEPAZ2)
                : X.intl.string(X.t.aUI70t),
            i =
              t === V.d4z.GUILD_CATEGORY
                ? X.intl.string(X.t["RQUk6+"])
                : X.intl.string(X.t.YguuKi);
          return (0, r.jsx)(
            C.FormItem,
            {
              children: (0, r.jsxs)(C.FormSwitch, {
                hideBorder: !0,
                onChange: this.handlePrivacyChange,
                value: n,
                note: i,
                children: [
                  (0, r.jsx)(C.LockIcon, {
                    size: "md",
                    color: "currentColor",
                    className: q.switchIcon,
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
          let { channelType: n, isPrivate: l, errors: i } = this.state,
            { canConnect: s, canViewChannels: a } = this.props;
          if (Object.values(i).length > 0) {
            if (null != i.message && "" !== i.message) t = i.message;
            else if (e || null == i.name) {
              let e = Object.values(i)[0];
              e.length > 0 && (t = e);
            }
          } else l && !(0, A.nT)(n, a, s) && (t = (0, A.$7)(n));
          if (null != t)
            return (0, r.jsx)("div", {
              className: o()(q.createError, { [q.addMemberError]: e }),
              children: (0, r.jsx)(C.HelpMessage, {
                messageType: C.HelpMessageTypes.ERROR,
                children: t,
              }),
            });
        }
        renderFooter() {
          let e;
          let { channelType: t, onClose: n } = this.props,
            { channelType: l } = this.state,
            { isPrivate: i } = this.state;
          e =
            t === V.d4z.GUILD_CATEGORY
              ? X.intl.string(X.t["ISN+ND"])
              : X.intl.string(X.t["fUYU+v"]);
          let s = i || l === V.d4z.GUILD_STAGE_VOICE;
          return (0, r.jsxs)(C.ModalFooter, {
            className: q.modalFooter,
            children: [
              s
                ? (0, r.jsx)(C.Button, {
                    type: "button",
                    onClick: () => {
                      this.setState({ slide: "ADD_MEMBERS", errors: {} });
                    },
                    disabled: !this.canSubmit(),
                    children: X.intl.string(X.t.PDTjLC),
                  })
                : (0, r.jsx)(C.Button, {
                    type: "submit",
                    disabled: !this.canSubmit(),
                    children: e,
                  }),
              (0, r.jsx)(C.Button, {
                onClick: n,
                look: C.Button.Looks.LINK,
                color: C.Button.Colors.PRIMARY,
                children: X.intl.string(X.t["ETE/oK"]),
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
                ? X.intl.string(X.t["5WxrcX"])
                : t === V.d4z.GUILD_CATEGORY
                  ? X.intl.string(X.t["ISN+ND"])
                  : X.intl.string(X.t["fUYU+v"])),
            (0, r.jsxs)(C.ModalFooter, {
              children: [
                (0, r.jsx)(C.Button, {
                  type: "submit",
                  disabled: !this.canSubmit(),
                  children: e,
                }),
                (0, r.jsx)(C.Button, {
                  onClick: () => {
                    this.setState({ slide: "CHANNEL_INFO" });
                  },
                  look: C.Button.Looks.LINK,
                  color: C.Button.Colors.PRIMARY,
                  children: X.intl.string(X.t["13/7kZ"]),
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
          return (0, r.jsxs)(r.Fragment, {
            children: [
              this.renderHeader(),
              (0, r.jsxs)(C.ModalContent, {
                className: q.modalContent,
                children: [
                  this.renderType(),
                  this.renderName(),
                  e === V.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                  this.renderChannelTypeDescription(e),
                  e === V.d4z.GUILD_STAGE_VOICE
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
            i = this.getIconComponent(),
            s = t === V.d4z.GUILD_STAGE_VOICE;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(C.ModalHeader, {
                separator: !1,
                children: [
                  (0, r.jsxs)("div", {
                    className: q.header,
                    children: [
                      (0, r.jsx)(C.Heading, {
                        variant: "heading-lg/semibold",
                        className: q.title,
                        children: s
                          ? X.intl.string(X.t["S/6zHB"])
                          : X.intl.string(X.t.dMJ3Y2),
                      }),
                      (0, r.jsxs)(C.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: q.subtitle,
                        children: [
                          (0, r.jsx)(i, {
                            size: "xs",
                            color: "currentColor",
                            className: q.subtitleIcon,
                          }),
                          e,
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(C.ModalCloseButton, {
                    onClick: l,
                    className: q.closeButton,
                  }),
                ],
              }),
              this.renderError(!0),
              (0, r.jsx)($, {
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
            t = { impression_group: p.ImpressionGroups.CHANNEL_ADD_FLOW };
          return (0, r.jsx)("div", {
            children: (0, r.jsxs)(C.Slides, {
              activeSlide: e,
              width: 460,
              children: [
                (0, r.jsx)(C.Slide, {
                  id: "CHANNEL_INFO",
                  impressionName: p.ImpressionNames.CHANNEL_ADD_INFO,
                  impressionProperties: t,
                  children: this.renderCreateChannelContent(),
                }),
                (0, r.jsx)(C.Slide, {
                  id: "ADD_MEMBERS",
                  impressionName: p.ImpressionNames.CHANNEL_ADD_MEMBERS,
                  impressionProperties: t,
                  children: this.renderAddMemberSlideContent(),
                }),
              ],
            }),
          });
        }
        render() {
          let { transitionState: e } = this.props;
          return (0, r.jsx)(C.ModalRoot, {
            transitionState: e,
            className: q.modal,
            "aria-labelledby": this.headerId,
            size: C.ModalSize.DYNAMIC,
            children: (0, r.jsx)("form", {
              onSubmit: this.handleSubmit,
              children: this.renderSlides(),
            }),
          });
        }
        constructor(e) {
          super(e),
            J(this, "headerId", (0, b.hQ)()),
            J(this, "_input", void 0),
            J(this, "setInputRef", (e) => {
              this._input = e;
            }),
            J(this, "handleNameChange", (e) => {
              let { channelType: t } = this.state;
              y.xL.has(t) && (e = (0, F.Nj)(e)), this.setState({ name: e });
            }),
            J(this, "handleTypeChange", (e) => {
              let { value: t } = e,
                { name: n } = this.state;
              y.xL.has(t) && (n = (0, F.Nj)(n)),
                t === V.d4z.GUILD_STAGE_VOICE &&
                  this.setState({ isPrivate: !1 }),
                this.setState({ channelType: t, name: n });
            }),
            J(this, "handlePrivacyChange", (e) => {
              this.setState({ isPrivate: e });
            }),
            J(this, "handleApplicationChange", (e) => {
              this.setState({ applicationId: e });
            }),
            J(this, "handleSKUChange", (e) => {
              this.setState({ skuId: e });
            }),
            J(this, "handleShowBranchesToggle", (e) => {
              this.setState({ showBranches: e, branchId: null });
            }),
            J(this, "handleBranchChange", (e) => {
              this.setState({ branchId: e });
            }),
            J(this, "handleHasBranchesChange", (e) => {
              this.setState({ hasBranches: e });
            }),
            J(this, "handleSubmit", async (e) => {
              let t, n, l;
              e.preventDefault();
              let {
                  cloneChannel: i,
                  categoryId: r,
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
                if (null != i)
                  (t = u().values(i.permissionOverwrites)),
                    (n = i.bitrate),
                    (l = i.userLimit);
                else if (m === V.d4z.GUILD_ANNOUNCEMENT) t = (0, F.rt)(x);
                else {
                  if (I) {
                    t = (0, F.oQ)(x, m, [], !0);
                    let e = (0, A.Tj)(p, m);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != c && s.id === c.id;
                    !(t.some((e) => a.has(e.id)) || o || n) &&
                      t.push((0, F.jZ)(s.id, m));
                  }
                  m === V.d4z.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                      let { row: n } = e;
                      null != n.id &&
                        "" !== n.id &&
                        (n.rowType === Y.aC.ROLE
                          ? t.push(
                              (0, G.createModeratorOverwrite)(n.id, S.BN.ROLE),
                            )
                          : n.rowType === Y.aC.MEMBER &&
                            t.push(
                              (0, G.createModeratorOverwrite)(
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
                    parentId: m !== V.d4z.GUILD_CATEGORY ? r : null,
                    skuId: g,
                    branchId: C,
                  });
                  if (null == e || 201 !== e.status) return;
                  let i = e.body;
                  y.xL.has(m) && (0, M.XU)(i.guild_id, i.id), d();
                } catch (e) {
                  null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body })
                    : this.setState({
                        errors: { message: X.intl.string(X.t.fEptJC) },
                      });
                }
              }
            });
          let { channelType: t, cloneChannel: n, prefillChannelName: l } = e;
          (this.state = {
            channelType: null != t ? t : V.d4z.GUILD_TEXT,
            name: null != n ? (0, v.F6)(n, Z.default, w.Z) : null != l ? l : "",
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
        let { channelType: n, guildId: l, cloneChannelId: i } = e,
          s = (0, g.cj)([P.Z, Z.default, z.Z, B.Z, j.Z, R.ZP], () => {
            var e, t, r;
            let s = P.Z.getGuild(l),
              a = Z.default.getCurrentUser();
            c()(null != a, "CreateChannel: user cannot be undefined");
            let o =
                null != s && null != s.ownerId
                  ? Z.default.getUser(s.ownerId)
                  : null,
              d = new Set(
                null !==
                  (t =
                    null === (e = R.ZP.getMember(l, a.id)) || void 0 === e
                      ? void 0
                      : e.roles) && void 0 !== t
                  ? t
                  : [],
              ),
              h = z.Z.can(V.Plq.ADMINISTRATOR, s),
              u = B.Z.getChannel(i);
            return {
              guild: s,
              applications: j.Z.getGuildApplicationIds(l)
                .map((e) => j.Z.getApplication(e))
                .filter(k.lm),
              canCreateStoreChannel: null != s && s.hasFeature(V.oNc.COMMERCE),
              canCreateAnnouncementChannel:
                null != s && s.hasFeature(V.oNc.NEWS),
              user: a,
              owner: o,
              memberRoleIds: d,
              canViewChannels: z.Z.can(V.Plq.VIEW_CHANNEL, s),
              canConnect: z.Z.can(V.Plq.CONNECT, s),
              isAdmin: h,
              cloneChannel: u,
              channelType:
                null !== (r = null == u ? void 0 : u.type) && void 0 !== r
                  ? r
                  : n,
              canManageRoles: z.Z.can(V.Plq.MANAGE_ROLES, s),
              canManageChannels: z.Z.can(V.Plq.MANAGE_CHANNELS, s),
            };
          }),
          { canManageRoles: a, canManageChannels: o } = s,
          d = (0, U.m)(l) && a && o,
          h = (0, f.W3)(l),
          u = (0, D.Ui)(null == s ? void 0 : s.guild);
        return (0, r.jsx)(ee, {
          ...e,
          ...s,
          canCreateStageChannel: d,
          canCreateForumChannel: h,
          canCreateMediaChannel: u,
          ref: t,
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
        i = n(192379),
        r = n(442837),
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
        x = n(456573);
      function E(e, t) {
        return { id: e, type: t, deny: g.Hn, allow: C.yP };
      }
      function S(e) {
        let { transitionState: t, onClose: n, channelId: g } = e,
          S = (0, u.Dt)(),
          T = (0, r.e7)([p.Z], () => p.Z.getChannel(g)),
          j = (0, r.e7)([m.Z], () =>
            m.Z.getGuild(null == T ? void 0 : T.getGuildId()),
          ),
          [v, A] = i.useState({}),
          [O, b] = i.useState(!1),
          [L, f] = i.useState(null);
        if (null == T || null == j) return null;
        let D = async () => {
          b(!0);
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
            b(!1), f(e);
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
              setPendingAdditions: A,
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
                  submitting: O,
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
        i,
        r,
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
      (r = "ApplicationBranchStore"),
        (i = "displayName") in (l = c)
          ? Object.defineProperty(l, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = r),
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
//# sourceMappingURL=7b19b7aa4eff19b2c1b9.js.map
