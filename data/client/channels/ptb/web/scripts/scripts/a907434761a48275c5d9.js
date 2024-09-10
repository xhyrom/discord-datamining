"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45094"],
  {
    332063: function (e, t, s) {
      s(47120);
      var n,
        a = s(735250),
        r = s(470079),
        l = s(442837),
        i = s(481060),
        o = s(274616),
        d = s(560587),
        c = s(689938);
      function h(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class u extends (n = r.Component) {
        componentDidMount() {
          let {
            applicationId: e,
            branches: t,
            onHasBranchesChange: s,
          } = this.props;
          (0, o.Z)(e), null == s || s(t.length > 0);
        }
        componentDidUpdate(e) {
          let { onHasBranchesChange: t, branches: s } = this.props,
            n = s.length > 0;
          null != t && n !== e.branches.length > 0 && t(n);
        }
        render() {
          let {
            branches: e,
            selectedBranchId: t,
            applicationId: s,
            includeMaster: n,
            hide: r,
            className: l,
          } = this.props;
          if (0 === e.length || r) return null;
          let o = n ? e : e.filter((e) => e.id !== s);
          return (0, a.jsx)(i.SingleSelect, {
            options: o.map((e) => ({ label: e.getName(s), value: e.id })),
            placeholder: c.Z.Messages.CREATE_STORE_CHANNEL_SELECT_BRANCH,
            value: t,
            onChange: this.handleChange,
            className: l,
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
        (t.Z = l.ZP.connectStores([d.Z], (e) => {
          let { applicationId: t } = e;
          return { branches: d.Z.getBranches(t) };
        })(u));
    },
    620123: function (e, t, s) {
      s(47120);
      var n = s(735250),
        a = s(470079),
        r = s(442837),
        l = s(481060),
        i = s(16084),
        o = s(55563),
        d = s(689938);
      class c extends a.Component {
        componentDidMount() {
          let {
            applicationId: e,
            skus: t,
            selectedSkuId: s,
            onChange: n,
          } = this.props;
          null == t || 0 === t.length
            ? (0, i.uE)(e, !1)
            : 1 === t.length && null == s && n(t[0].id);
        }
        componentDidUpdate() {
          let { skus: e, selectedSkuId: t, onChange: s } = this.props;
          null != e && 1 === e.length && null == t && s(e[0].id);
        }
        render() {
          let { skus: e, selectedSkuId: t, className: s } = this.props,
            a = null != e && 0 === e.length;
          return (0, n.jsx)(l.SingleSelect, {
            options:
              null != e ? e.map((e) => ({ label: e.name, value: e.id })) : [],
            placeholder: a
              ? d.Z.Messages.CREATE_STORE_CHANNEL_NO_SKUS
              : d.Z.Messages.CREATE_STORE_CHANNEL_SELECT_SKU,
            value: t,
            onChange: this.handleChange,
            className: s,
            isDisabled: a,
          });
        }
        constructor(...e) {
          var t, s, n;
          super(...e),
            (t = this),
            (s = "handleChange"),
            (n = (e) => {
              this.props.onChange(e);
            }),
            s in t
              ? Object.defineProperty(t, s, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[s] = n);
        }
      }
      t.Z = r.ZP.connectStores([o.Z], (e) => {
        let { applicationId: t } = e;
        return { skus: o.Z.getForApplication(t) };
      })(c);
    },
    218613: function (e, t, s) {
      s.r(t),
        s.d(t, {
          AddMembers: function () {
            return J;
          },
          ChannelTypeBadge: function () {
            return $;
          },
        }),
        s(653041),
        s(47120),
        s(411104);
      var n,
        a,
        r = s(735250),
        l = s(470079),
        i = s(120356),
        o = s.n(i),
        d = s(512722),
        c = s.n(d),
        h = s(392711),
        u = s.n(h),
        E = s(990547),
        N = s(831209),
        C = s(442837),
        p = s(481060),
        m = s(333848),
        _ = s(749210),
        g = s(332063),
        A = s(620123),
        I = s(911969),
        T = s(367907),
        M = s(812206),
        L = s(933557),
        S = s(605436),
        O = s(185413),
        R = s(313201),
        x = s(688465),
        D = s(456269),
        Z = s(312146),
        j = s(703656),
        v = s(146085),
        b = s(60222),
        P = s(388131),
        G = s(131704),
        f = s(592125),
        H = s(271383),
        U = s(430824),
        y = s(496675),
        B = s(699516),
        z = s(594174),
        F = s(934415),
        w = s(823379),
        k = s(63063),
        Y = s(981631),
        V = s(71080),
        K = s(710352),
        W = s(231338),
        X = s(689938),
        q = s(886974);
      function Q(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function $(e) {
        let { isNew: t, isBeta: s } = e,
          n = null;
        return (
          !0 === t
            ? (n = (0, r.jsx)(p.TextBadge, {
                text: X.Z.Messages.CHANNEL_TYPE_NEW,
                className: q.newBadge,
                color: N.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER,
              }))
            : !0 === s && (n = (0, r.jsx)(x.Z, { className: q.newBadge })),
          n
        );
      }
      function J(e) {
        let { onChange: t, guildId: s, channelType: n, description: a } = e,
          [i, o] = l.useState({}),
          d = (0, C.e7)([U.Z], () => U.Z.getGuild(s)),
          c = n === Y.d4z.GUILD_STAGE_VOICE;
        return (l.useEffect(() => {
          t(i);
        }, [i, t]),
        null == d)
          ? null
          : (0, r.jsx)(p.ModalContent, {
              className: q.addMembersContainer,
              children: (0, r.jsx)(O.AddMembersBody, {
                guild: d,
                channel: null,
                permission: c ? v.yP : (0, G.CG)(n),
                pendingAdditions: i,
                setPendingAdditions: o,
                isStageChannel: c,
                description: a,
              }),
            });
      }
      ((a = n || (n = {})).CHANNEL_INFO = "CHANNEL_INFO"),
        (a.ADD_MEMBERS = "ADD_MEMBERS");
      class ee extends l.PureComponent {
        componentDidMount() {
          let { _input: e } = this;
          null != e && e.select();
          let {
            guildId: t,
            applications: s,
            canCreateStoreChannel: n,
          } = this.props;
          n && null == s && _.Z.fetchApplications(t),
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
            { isPrivate: s, channelType: n, skuId: a, name: r } = this.state;
          return (
            "" !== r &&
            "" !== r.trim() &&
            (!s || !!(0, S.nT)(n, e, t)) &&
            (n !== Y.d4z.GUILD_STORE || null != a) &&
            !0
          );
        }
        getIconComponent() {
          let { isPrivate: e, channelType: t } = this.state;
          switch (t) {
            case Y.d4z.GUILD_TEXT:
              return e ? p.TextLockIcon : p.TextIcon;
            case Y.d4z.GUILD_FORUM:
              return p.ForumIcon;
            case Y.d4z.GUILD_MEDIA:
              return p.ImageIcon;
            case Y.d4z.GUILD_VOICE:
              return e ? p.VoiceLockIcon : p.VoiceNormalIcon;
            case Y.d4z.GUILD_STORE:
              return p.TagIcon;
            case Y.d4z.GUILD_ANNOUNCEMENT:
              return p.AnnouncementsIcon;
            case Y.d4z.GUILD_STAGE_VOICE:
              return p.StageIcon;
            default:
              return (0, G.zi)(t) ? p.TextIcon : W.Vq;
          }
        }
        renderHeader() {
          var e, t, s;
          let n;
          let { cloneChannel: a, categoryId: l, onClose: i } = this.props,
            { channelType: o } = this.state;
          let d =
            ((e = a),
            (t = o),
            null != e
              ? X.Z.Messages.CLONE_CHANNEL
              : t === Y.d4z.GUILD_CATEGORY
                ? X.Z.Messages.CREATE_CATEGORY
                : X.Z.Messages.CREATE_CHANNEL);
          if (null != l) {
            let e = f.Z.getChannel(l);
            n = (0, r.jsx)(p.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: q.subtitle,
              children: X.Z.Messages.IN_CATEGORY.format({
                categoryName:
                  null !== (s = null == e ? void 0 : e.name) && void 0 !== s
                    ? s
                    : "",
              }),
            });
          }
          return (0, r.jsxs)(p.ModalHeader, {
            separator: !1,
            children: [
              (0, r.jsxs)("div", {
                className: q.header,
                children: [
                  (0, r.jsx)(p.Heading, {
                    id: this.headerId,
                    variant: "heading-lg/semibold",
                    className: q.title,
                    children: d,
                  }),
                  n,
                ],
              }),
              (0, r.jsx)(p.ModalCloseButton, {
                onClick: i,
                className: q.closeButton,
              }),
            ],
          });
        }
        renderName() {
          let e;
          let { cloneChannel: t, guildId: n } = this.props,
            { errors: a, channelType: l } = this.state;
          (null == a ? void 0 : a.name) != null &&
            (e = (0, r.jsx)(p.Text, {
              variant: "text-xs/normal",
              color: "text-danger",
              className: q.error,
              children: a.name,
            }));
          let i = l === Y.d4z.GUILD_CATEGORY,
            o = i
              ? X.Z.Messages.CATEGORY_NAME
              : X.Z.Messages.FORM_LABEL_CHANNEL_NAME,
            d =
              null != t
                ? (0, r.jsx)(p.FormText, {
                    className: q.channelNameNote,
                    type: p.FormText.Types.DESCRIPTION,
                    children: X.Z.Messages.CLONE_CHANNEL_HELP.format({
                      name: (0, L.F6)(t, z.default, B.Z, !0),
                    }),
                  })
                : l === Y.d4z.GUILD_FORUM
                  ? (0, r.jsx)(p.FormText, {
                      className: q.channelNameNote,
                      type: p.FormText.Types.DESCRIPTION,
                      children: X.Z.Messages.FORUM_CHANNEL_NAME_NOTE.format({
                        forumUpsellHook: (e, t) =>
                          (0, r.jsx)(
                            p.Anchor,
                            {
                              onClick: () =>
                                (0, p.openModalLazy)(async () => {
                                  let { default: e } = await s
                                    .e("18417")
                                    .then(s.bind(s, 740696));
                                  return (t) =>
                                    (0, r.jsx)(e, { ...t, guildId: n });
                                }),
                              children: e,
                            },
                            t,
                          ),
                      }),
                    })
                  : null,
            c = this.getIconComponent();
          return (0, r.jsx)(R.FG, {
            children: (t) =>
              (0, r.jsxs)(p.FormItem, {
                title: o,
                tag: "label",
                htmlFor: t,
                titleClassName: q.sectionTitle,
                className: q.name,
                children: [
                  (0, r.jsx)(p.TextInput, {
                    value: this.state.name,
                    onChange: this.handleNameChange,
                    id: t,
                    inputRef: this.setInputRef,
                    maxLength: 100,
                    placeholder: (function (e) {
                      switch (e) {
                        case Y.d4z.GUILD_CATEGORY:
                          return X.Z.Messages.CATEGORY_NAME_PLACEHOLDER;
                        case Y.d4z.GUILD_FORUM:
                          return X.Z.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER;
                        default:
                          return X.Z.Messages.CHANNEL_NAME_PLACEHOLDER;
                      }
                    })(l),
                    className: q.inputWrapper,
                    inputClassName: i ? void 0 : q.inputInner,
                    prefixElement: i
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
              canCreateStoreChannel: s,
              canCreateAnnouncementChannel: n,
              canCreateStageChannel: a,
              canCreateForumChannel: l,
              canCreateMediaChannel: i,
            } = this.props,
            { channelType: o, isPrivate: d } = this.state;
          if (null != e || o === Y.d4z.GUILD_CATEGORY) return;
          let c = null != t && t.length > 0;
          return (0, r.jsx)(p.FormItem, {
            className: q.type,
            title: X.Z.Messages.CHANNEL_TYPE,
            children: (0, r.jsx)(p.RadioGroup, {
              options: (function (e) {
                let {
                    isPrivate: t,
                    showStoreChannelOption: s,
                    showAnnouncementChannelOption: n,
                    canCreateStageChannel: a,
                    canCreateForumChannel: l,
                    canCreateMediaChannel: i,
                  } = e,
                  o = [
                    {
                      icon: t ? p.TextLockIcon : p.TextIcon,
                      label: X.Z.Messages.TEXT_CHANNEL_TYPE,
                      value: Y.d4z.GUILD_TEXT,
                      description: X.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION,
                    },
                  ];
                return (
                  o.push({
                    icon: t ? p.VoiceLockIcon : p.VoiceNormalIcon,
                    label: X.Z.Messages.VOICE_CHANNEL_TYPE,
                    value: Y.d4z.GUILD_VOICE,
                    description: X.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION,
                  }),
                  l &&
                    o.push({
                      icon: t ? p.ForumLockIcon : p.ForumIcon,
                      label: X.Z.Messages.FORUM_CHANNEL_TYPE,
                      value: Y.d4z.GUILD_FORUM,
                      description: (0, r.jsxs)(p.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: q.radioLabelDescription,
                        children: [
                          X.Z.Messages.FORUM_CHANNEL_DESCRIPTION,
                          (0, r.jsx)("br", {}),
                          X.Z.Messages.LEARN_MORE_CLICK.format({
                            onClick: () => {
                              open(K.V8);
                            },
                          }),
                        ],
                      }),
                    }),
                  i &&
                    o.push({
                      icon: t ? p.ImageLockIcon : p.ImageIcon,
                      label: X.Z.Messages.MEDIA_CHANNEL_TYPE,
                      value: Y.d4z.GUILD_MEDIA,
                      description: (0, r.jsxs)(p.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: q.radioLabelDescription,
                        children: [
                          X.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                          (0, r.jsx)("br", {}),
                          X.Z.Messages.LEARN_MORE_CLICK.format({
                            onClick: () => {
                              open(
                                k.Z.getCreatorSupportArticleURL(
                                  Y.BhN.MEDIA_CHANNEL,
                                ),
                              );
                            },
                          }),
                        ],
                      }),
                      isBeta: !0,
                    }),
                  n &&
                    o.push({
                      icon: p.AnnouncementsIcon,
                      iconSize: 24,
                      label: X.Z.Messages.NEWS_CHANNEL_TYPE,
                      value: Y.d4z.GUILD_ANNOUNCEMENT,
                      description: X.Z.Messages.CREATE_NEWS_CHANNEL_DESCRIPTION,
                    }),
                  s &&
                    o.push({
                      icon: p.TagIcon,
                      iconSize: 24,
                      label: X.Z.Messages.STORE_CHANNEL_TYPE,
                      value: Y.d4z.GUILD_STORE,
                      description:
                        X.Z.Messages.CREATE_STORE_CHANNEL_DESCRIPTION,
                    }),
                  a &&
                    o.push({
                      icon: p.StageIcon,
                      iconSize: 24,
                      label: X.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                      value: Y.d4z.GUILD_STAGE_VOICE,
                      description:
                        X.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION,
                    }),
                  o.map((e) => {
                    let {
                      icon: t,
                      iconSize: s,
                      label: n,
                      value: a,
                      description: l,
                      isNew: i,
                      isBeta: o,
                    } = e;
                    return {
                      name: (0, r.jsxs)("div", {
                        className: q.radioItemName,
                        children: [
                          (0, r.jsx)(t, {
                            ...(null != s
                              ? { width: s, height: s, size: "custom" }
                              : { size: "md" }),
                            color: "currentColor",
                            className: q.icon,
                            colorClass: q.foreground,
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsxs)(p.Text, {
                                variant: "text-md/medium",
                                className: q.radioLabelName,
                                children: [
                                  n,
                                  (0, r.jsx)($, { isNew: i, isBeta: o }),
                                ],
                              }),
                              "string" == typeof l
                                ? (0, r.jsx)(p.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: q.radioLabelDescription,
                                    children: l,
                                  })
                                : l,
                            ],
                          }),
                        ],
                      }),
                      value: a,
                      radioBarClassName: q.radioBar,
                      radioItemIconClassName: q.radioBarIcon,
                    };
                  })
                );
              })({
                isPrivate: d,
                showStoreChannelOption: s && c,
                showAnnouncementChannelOption: n,
                canCreateStageChannel: a,
                canCreateForumChannel: l,
                canCreateMediaChannel: i,
              }),
              value: o,
              size: p.RadioGroup.Sizes.NOT_SET,
              onChange: this.handleTypeChange,
              itemInfoClassName: q.radioBarLabel,
            }),
          });
        }
        renderChannelTypeDescription(e) {
          let t;
          return (e === Y.d4z.GUILD_ANNOUNCEMENT &&
            (t = X.Z.Messages.FORM_HELP_NEWS.format({
              documentationLink: k.Z.getArticleURL(Y.BhN.ANNOUNCEMENT_CHANNELS),
            })),
          null == t)
            ? null
            : (0, r.jsx)(p.FormText, {
                className: q.channelTypeDescription,
                type: p.FormText.Types.DESCRIPTION,
                children: t,
              });
        }
        renderStoreOptions() {
          let { applications: e } = this.props,
            {
              applicationId: t,
              skuId: s,
              branchId: n,
              showBranches: a,
              hasBranches: i,
            } = this.state;
          if (null == e || 0 === e.length)
            throw Error("Unexpected empty applications");
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)(p.FormTitle, {
                tag: "h5",
                children: X.Z.Messages.CREATE_STORE_CHANNEL_APPLICATION,
              }),
              (0, r.jsx)(p.SingleSelect, {
                options: e.map((e) => ({ label: e.name, value: e.id })),
                placeholder:
                  X.Z.Messages.CREATE_STORE_CHANNEL_SELECT_APPLICATION,
                value: t,
                onChange: this.handleApplicationChange,
                className: q.storeChannelOptionSelector,
              }),
              null != t
                ? (0, r.jsxs)(l.Fragment, {
                    children: [
                      (0, r.jsx)(p.FormTitle, {
                        tag: "h5",
                        children: X.Z.Messages.CREATE_STORE_CHANNEL_SKU,
                      }),
                      (0, r.jsx)(
                        A.Z,
                        {
                          applicationId: t,
                          onChange: this.handleSKUChange,
                          selectedSkuId: s,
                          className: q.storeChannelOptionSelector,
                        },
                        t,
                      ),
                    ],
                  })
                : null,
              null != t && i
                ? (0, r.jsxs)(p.FormSwitch, {
                    hideBorder: !0,
                    onChange: this.handleShowBranchesToggle,
                    value: a,
                    note: X.Z.Messages.CREATE_STORE_CHANNEL_BETA_NOTE.format({
                      devPortalUrl: Y.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                    }),
                    children: [
                      (0, r.jsx)(p.KeyIcon, {
                        size: "md",
                        color: "currentColor",
                        className: q.switchIcon,
                      }),
                      X.Z.Messages.CREATE_STORE_CHANNEL_BETA_TITLE,
                    ],
                  })
                : null,
              null != t
                ? (0, r.jsxs)(l.Fragment, {
                    children: [
                      a
                        ? (0, r.jsx)(p.FormTitle, {
                            tag: "h5",
                            children: X.Z.Messages.CREATE_STORE_CHANNEL_BRANCH,
                          })
                        : null,
                      (0, r.jsx)(
                        g.Z,
                        {
                          applicationId: t,
                          onChange: this.handleBranchChange,
                          selectedBranchId: n,
                          hide: !a,
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
            { channelType: t, isPrivate: s } = this.state;
          if (null != e || t === Y.d4z.GUILD_ANNOUNCEMENT) return null;
          let n =
              t === Y.d4z.GUILD_CATEGORY
                ? X.Z.Messages.PRIVATE_CATEGORY
                : X.Z.Messages.PRIVATE_CHANNEL,
            a =
              t === Y.d4z.GUILD_CATEGORY
                ? X.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION
                : X.Z.Messages
                    .CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_NEW;
          return (0, r.jsx)(
            p.FormItem,
            {
              children: (0, r.jsxs)(p.FormSwitch, {
                hideBorder: !0,
                onChange: this.handlePrivacyChange,
                value: s,
                note: a,
                children: [
                  (0, r.jsx)(p.LockIcon, {
                    size: "md",
                    color: "currentColor",
                    className: q.switchIcon,
                  }),
                  n,
                ],
              }),
            },
            "privacy-switch",
          );
        }
        renderError(e) {
          let t;
          let { channelType: s, isPrivate: n, errors: a } = this.state,
            { canConnect: l, canViewChannels: i } = this.props;
          if (Object.values(a).length > 0) {
            if (null != a.message && "" !== a.message) t = a.message;
            else if (e || null == a.name) {
              let e = Object.values(a)[0];
              e.length > 0 && (t = e);
            }
          } else n && !(0, S.nT)(s, i, l) && (t = (0, S.$7)(s));
          if (null != t)
            return (0, r.jsx)("div", {
              className: o()(q.createError, { [q.addMemberError]: e }),
              children: (0, r.jsx)(p.HelpMessage, {
                messageType: p.HelpMessageTypes.ERROR,
                children: t,
              }),
            });
        }
        renderFooter() {
          let e;
          let { channelType: t, onClose: s } = this.props,
            { channelType: n } = this.state,
            { isPrivate: a } = this.state;
          e =
            t === Y.d4z.GUILD_CATEGORY
              ? X.Z.Messages.CREATE_CATEGORY
              : X.Z.Messages.CREATE_CHANNEL;
          let l = a || n === Y.d4z.GUILD_STAGE_VOICE;
          return (0, r.jsxs)(p.ModalFooter, {
            className: q.modalFooter,
            children: [
              l
                ? (0, r.jsx)(p.Button, {
                    type: "button",
                    onClick: () => {
                      this.setState({ slide: "ADD_MEMBERS", errors: {} });
                    },
                    disabled: !this.canSubmit(),
                    children: X.Z.Messages.NEXT,
                  })
                : (0, r.jsx)(p.Button, {
                    type: "submit",
                    disabled: !this.canSubmit(),
                    children: e,
                  }),
              (0, r.jsx)(p.Button, {
                onClick: s,
                look: p.Button.Looks.LINK,
                color: p.Button.Colors.PRIMARY,
                children: X.Z.Messages.CANCEL,
              }),
            ],
          });
        }
        renderAddMemberFooter() {
          let e;
          let { channelType: t } = this.props,
            { pendingPermissionOverwrites: s } = this.state;
          return (
            (e =
              0 === Object.keys(s).length
                ? X.Z.Messages.SKIP
                : t === Y.d4z.GUILD_CATEGORY
                  ? X.Z.Messages.CREATE_CATEGORY
                  : X.Z.Messages.CREATE_CHANNEL),
            (0, r.jsxs)(p.ModalFooter, {
              children: [
                (0, r.jsx)(p.Button, {
                  type: "submit",
                  disabled: !this.canSubmit(),
                  children: e,
                }),
                (0, r.jsx)(p.Button, {
                  onClick: () => {
                    this.setState({ slide: "CHANNEL_INFO" });
                  },
                  look: p.Button.Looks.LINK,
                  color: p.Button.Colors.PRIMARY,
                  children: X.Z.Messages.BACK,
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
              (0, r.jsxs)(p.ModalContent, {
                className: q.modalContent,
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
            { guildId: s, onClose: n } = this.props,
            a = this.getIconComponent(),
            l = t === Y.d4z.GUILD_STAGE_VOICE;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(p.ModalHeader, {
                separator: !1,
                children: [
                  (0, r.jsxs)("div", {
                    className: q.header,
                    children: [
                      (0, r.jsx)(p.Heading, {
                        variant: "heading-lg/semibold",
                        className: q.title,
                        children: l
                          ? X.Z.Messages.CHANNEL_PERMISSIONS_ADD_MODERATOR_TITLE
                          : X.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                      }),
                      (0, r.jsxs)(p.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: q.subtitle,
                        children: [
                          (0, r.jsx)(a, {
                            size: "xs",
                            color: "currentColor",
                            className: q.subtitleIcon,
                          }),
                          e,
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(p.ModalCloseButton, {
                    onClick: n,
                    className: q.closeButton,
                  }),
                ],
              }),
              this.renderError(!0),
              (0, r.jsx)(J, {
                onChange: this.handlePermissionOverwriteChange,
                guildId: s,
                channelType: t,
              }),
              this.renderAddMemberFooter(),
            ],
          });
        }
        renderSlides() {
          let { slide: e } = this.state,
            t = { impression_group: E.ImpressionGroups.CHANNEL_ADD_FLOW };
          return (0, r.jsx)("div", {
            children: (0, r.jsxs)(p.Slides, {
              activeSlide: e,
              width: 460,
              children: [
                (0, r.jsx)(p.Slide, {
                  id: "CHANNEL_INFO",
                  impressionName: E.ImpressionNames.CHANNEL_ADD_INFO,
                  impressionProperties: t,
                  children: this.renderCreateChannelContent(),
                }),
                (0, r.jsx)(p.Slide, {
                  id: "ADD_MEMBERS",
                  impressionName: E.ImpressionNames.CHANNEL_ADD_MEMBERS,
                  impressionProperties: t,
                  children: this.renderAddMemberSlideContent(),
                }),
              ],
            }),
          });
        }
        render() {
          let { transitionState: e } = this.props;
          return (0, r.jsx)(p.ModalRoot, {
            transitionState: e,
            className: q.modal,
            "aria-labelledby": this.headerId,
            size: p.ModalSize.DYNAMIC,
            children: (0, r.jsx)("form", {
              onSubmit: this.handleSubmit,
              children: this.renderSlides(),
            }),
          });
        }
        constructor(e) {
          super(e),
            Q(this, "headerId", (0, R.hQ)()),
            Q(this, "_input", void 0),
            Q(this, "setInputRef", (e) => {
              this._input = e;
            }),
            Q(this, "handleNameChange", (e) => {
              let { channelType: t } = this.state;
              G.xL.has(t) && (e = (0, F.Nj)(e)), this.setState({ name: e });
            }),
            Q(this, "handleTypeChange", (e) => {
              let { value: t } = e,
                { name: s } = this.state;
              G.xL.has(t) && (s = (0, F.Nj)(s)),
                t === Y.d4z.GUILD_STAGE_VOICE &&
                  this.setState({ isPrivate: !1 }),
                this.setState({ channelType: t, name: s });
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
              let t, s, n;
              e.preventDefault();
              let {
                  cloneChannel: a,
                  categoryId: r,
                  user: l,
                  memberRoleIds: i,
                  isAdmin: o,
                  onClose: d,
                  owner: c,
                } = this.props,
                {
                  name: h,
                  pendingPermissionOverwrites: E,
                  channelType: N,
                  skuId: C,
                  branchId: p,
                  isPrivate: _,
                } = this.state,
                g = this.getGuildId();
              if (null != g) {
                if (null != a)
                  (t = u().values(a.permissionOverwrites)),
                    (s = a.bitrate),
                    (n = a.userLimit);
                else if (N === Y.d4z.GUILD_ANNOUNCEMENT) t = (0, F.rt)(g);
                else {
                  if (_) {
                    t = (0, F.oQ)(g, N, [], !0);
                    let e = (0, S.Tj)(E, N);
                    e.length > 0 && (t = t.concat(e));
                    let s = null != c && l.id === c.id;
                    !(t.some((e) => i.has(e.id)) || o || s) &&
                      t.push((0, F.jZ)(l.id, N));
                  }
                  N === Y.d4z.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(E).forEach((e) => {
                      let { row: s } = e;
                      null != s.id &&
                        "" !== s.id &&
                        (s.rowType === V.aC.ROLE
                          ? t.push(
                              (0, P.createModeratorOverwrite)(s.id, I.BN.ROLE),
                            )
                          : s.rowType === V.aC.MEMBER &&
                            t.push(
                              (0, P.createModeratorOverwrite)(
                                s.id,
                                I.BN.MEMBER,
                              ),
                            ));
                    }));
                }
                this.setState({ errors: {} });
                try {
                  let e = await m.Z.createChannel({
                    guildId: g,
                    type: N,
                    name: h,
                    permissionOverwrites: t,
                    bitrate: s,
                    userLimit: n,
                    parentId: N !== Y.d4z.GUILD_CATEGORY ? r : null,
                    skuId: C,
                    branchId: p,
                  });
                  if (null == e || 201 !== e.status) return;
                  let a = e.body;
                  G.xL.has(N) && (0, j.XU)(a.guild_id, a.id), d();
                } catch (e) {
                  null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body })
                    : this.setState({
                        errors: {
                          message: X.Z.Messages.ERROR_OCCURRED_TRY_AGAIN,
                        },
                      });
                }
              }
            });
          let { channelType: t, cloneChannel: s, prefillChannelName: n } = e;
          (this.state = {
            channelType: null != t ? t : Y.d4z.GUILD_TEXT,
            name: null != s ? (0, L.F6)(s, z.default, B.Z) : null != n ? n : "",
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
      t.default = l.forwardRef(function (e, t) {
        let { channelType: s, guildId: n, cloneChannelId: a } = e,
          l = (0, C.cj)([U.Z, z.default, y.Z, f.Z, M.Z, H.ZP], () => {
            var e, t, r;
            let l = U.Z.getGuild(n),
              i = z.default.getCurrentUser();
            c()(null != i, "CreateChannel: user cannot be undefined");
            let o =
                null != l && null != l.ownerId
                  ? z.default.getUser(l.ownerId)
                  : null,
              d = new Set(
                null !==
                  (t =
                    null === (e = H.ZP.getMember(n, i.id)) || void 0 === e
                      ? void 0
                      : e.roles) && void 0 !== t
                  ? t
                  : [],
              ),
              h = y.Z.can(Y.Plq.ADMINISTRATOR, l),
              u = f.Z.getChannel(a);
            return {
              guild: l,
              applications: M.Z.getGuildApplicationIds(n)
                .map((e) => M.Z.getApplication(e))
                .filter(w.lm),
              canCreateStoreChannel: null != l && l.hasFeature(Y.oNc.COMMERCE),
              canCreateAnnouncementChannel:
                null != l && l.hasFeature(Y.oNc.NEWS),
              user: i,
              owner: o,
              memberRoleIds: d,
              canViewChannels: y.Z.can(Y.Plq.VIEW_CHANNEL, l),
              canConnect: y.Z.can(Y.Plq.CONNECT, l),
              isAdmin: h,
              cloneChannel: u,
              channelType:
                null !== (r = null == u ? void 0 : u.type) && void 0 !== r
                  ? r
                  : s,
              canManageRoles: y.Z.can(Y.Plq.MANAGE_ROLES, l),
              canManageChannels: y.Z.can(Y.Plq.MANAGE_CHANNELS, l),
            };
          }),
          { canManageRoles: i, canManageChannels: o } = l,
          d = (0, b.m)(n) && i && o,
          h = (0, D.W3)(n),
          u = (0, Z.Ui)(null == l ? void 0 : l.guild);
        return (0, r.jsx)(ee, {
          ...e,
          ...l,
          canCreateStageChannel: d,
          canCreateForumChannel: h,
          canCreateMediaChannel: u,
          ref: t,
        });
      });
    },
    388131: function (e, t, s) {
      s.r(t),
        s.d(t, {
          createModeratorOverwrite: function () {
            return A;
          },
          default: function () {
            return I;
          },
        }),
        s(47120);
      var n = s(735250),
        a = s(470079),
        r = s(442837),
        l = s(481060),
        i = s(741361),
        o = s(881052),
        d = s(911969),
        c = s(185413),
        h = s(600164),
        u = s(313201),
        E = s(592125),
        N = s(430824),
        C = s(700785),
        p = s(146085),
        m = s(71080),
        _ = s(689938),
        g = s(456573);
      function A(e, t) {
        return { id: e, type: t, deny: C.Hn, allow: p.yP };
      }
      function I(e) {
        let { transitionState: t, onClose: s, channelId: C } = e,
          I = (0, u.Dt)(),
          T = (0, r.e7)([E.Z], () => E.Z.getChannel(C)),
          M = (0, r.e7)([N.Z], () =>
            N.Z.getGuild(null == T ? void 0 : T.getGuildId()),
          ),
          [L, S] = a.useState({}),
          [O, R] = a.useState(!1),
          [x, D] = a.useState(null);
        if (null == T || null == M) return null;
        let Z = async () => {
          R(!0);
          try {
            await (function (e, t) {
              let s = Object.values(t)
                .filter((e) => {
                  let { row: t } = e;
                  return null != t.id;
                })
                .map((e) => {
                  let { row: t } = e;
                  return t.rowType === m.aC.ROLE
                    ? A(t.id, d.BN.ROLE)
                    : A(t.id, d.BN.MEMBER);
                });
              return (0, i.hw)(e.id, s, !0);
            })(T, L),
              s();
          } catch (t) {
            let e = new o.Hx(t);
            R(!1), D(e);
          }
        };
        return (0, n.jsxs)(l.ModalRoot, {
          transitionState: t,
          "aria-labelledby": I,
          size: l.ModalSize.SMALL,
          className: g.modalRoot,
          children: [
            (0, n.jsxs)(l.ModalHeader, {
              separator: !1,
              direction: h.Z.Direction.VERTICAL,
              align: h.Z.Align.CENTER,
              className: g.header,
              children: [
                (0, n.jsx)(l.Heading, {
                  variant: "heading-xl/semibold",
                  children: _.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                }),
                (0, n.jsxs)(l.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: g.headerSubtitle,
                  children: [
                    (0, n.jsx)(l.StageIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: g.headerSubtitleIcon,
                    }),
                    T.name,
                  ],
                }),
              ],
            }),
            (0, n.jsx)(c.AddMembersBody, {
              guild: M,
              channel: T,
              permission: p.yP,
              pendingAdditions: L,
              setPendingAdditions: S,
            }),
            null != x
              ? (0, n.jsx)(l.Text, {
                  className: g.error,
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: x.getAnyErrorMessage(),
                })
              : null,
            (0, n.jsxs)(l.ModalFooter, {
              children: [
                (0, n.jsx)(l.Button, {
                  onClick: Z,
                  submitting: O,
                  children: _.Z.Messages.ADD,
                }),
                (0, n.jsx)(l.Button, {
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.PRIMARY,
                  onClick: s,
                  children: _.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    560587: function (e, t, s) {
      var n,
        a,
        r,
        l,
        i = s(442837),
        o = s(570140);
      let d = {};
      class c extends (l = i.ZP.Store) {
        getBranches(e) {
          var t;
          return null !== (t = d[e]) && void 0 !== t ? t : [];
        }
      }
      (r = "ApplicationBranchStore"),
        (a = "displayName") in (n = c)
          ? Object.defineProperty(n, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[a] = r),
        (t.Z = new c(o.Z, {
          OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
            let { applicationId: t, branches: s } = e;
            d[t] = s;
          },
          LOGOUT: function () {
            d = {};
          },
        }));
    },
  },
]);
//# sourceMappingURL=a907434761a48275c5d9.js.map
