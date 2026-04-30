"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94842"],
  {
    348858(e, t, n) {
      n.d(t, { I: () => a });
      var l = n(627968),
        i = n(64700),
        s = n(744682);
      let r = {
          deafen: { name: "deafen", start: 0, duration: 70 },
          undeafen: { name: "undeafen", start: 110, duration: 70 },
          hover_undeafened: {
            name: "hover_undeafened",
            start: 200,
            duration: 70,
          },
          hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
        },
        a = (e) => {
          let t = i.useRef(null),
            a = i.useRef(e);
          a.current = e;
          let o = i.useMemo(
              () => () => {
                null != t.current && t.current.play(e);
              },
              [e],
            ),
            c = i.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.play(n);
            }, [e]),
            d = i.useCallback(() => {
              if (null == t.current) return;
              let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
              t.current.stopIfPlaying(n);
            }, [e]),
            u = i.useCallback(
              (e) =>
                (0, l.jsx)(s.P, {
                  ...e,
                  src: () => n.e("93768").then(n.t.bind(n, 894619, 19)),
                  ref: t,
                  initialAnimation: a.current,
                  markers: r,
                }),
              [],
            );
          return {
            events: { onClick: o, onMouseEnter: c, onMouseLeave: d },
            play: o,
            getDuration: i.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(
              () => t.current?.getCurrentFrame() ?? null,
              [],
            ),
            Component: u,
          };
        };
    },
    29160(e, t, n) {
      n.d(t, { A: () => c });
      var l = n(627968),
        i = n(64700),
        s = n(503698),
        r = n.n(s),
        a = n(80477);
      class o extends i.PureComponent {
        static defaultProps = { tag: "div", forceHover: !1 };
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: i,
            forceHover: s,
            ...o
          } = this.props;
          return (0, l.jsxs)("div", {
            ...o,
            className: r()(i, a.oM, { [a.r9]: null == n, [a.EE]: s }),
            children: [
              (0, l.jsx)(e, { className: a.yo, children: n }),
              (0, l.jsx)(e, { className: a.Ay, children: t }),
            ],
          });
        }
      }
      let c = o;
    },
    617354(e, t, n) {
      n.d(t, { A: () => i });
      var l = n(985018);
      function i(e, t, n) {
        return n
          ? l.intl.string(l.t["2Ne/Y1"])
          : t
            ? l.intl.string(l.t.QZ7WSS)
            : e
              ? l.intl.string(l.t["2US872"])
              : l.intl.string(l.t.wjcRFX);
      }
    },
    18235(e, t, n) {
      n.d(t, { A: () => r });
      var l = n(827343),
        i = n(579872),
        s = n(985018);
      function r(e, t) {
        e
          ? i.A.show({
              title: s.intl.string(s.t.QZ7WSS),
              body: s.intl.string(s.t.Tl9JpL),
            })
          : l.A.toggleSelfDeaf({ location: t });
      }
    },
    361157(e, t, n) {
      n.d(t, { K: () => l });
      let l = (0, n(353640).v)((e) => ({
        clipsButtonRef: null,
        setClipsButtonRef: (t) => e({ clipsButtonRef: t }),
      }));
    },
    710315(e, t, n) {
      n.d(t, { $: () => l });
      let l = (0, n(945810).mj)({
        kind: "user",
        name: "2026-04-clips-primary-entry-point",
        defaultConfig: { topBarButton: !1, userStatusMenu: !1 },
        variations: {
          1: { topBarButton: !0, userStatusMenu: !1 },
          2: { topBarButton: !1, userStatusMenu: !0 },
          3: { topBarButton: !0, userStatusMenu: !0 },
        },
      });
    },
    302223(e, t, n) {
      n.d(t, { A: () => o });
      var l = n(627968);
      n(64700);
      var i = n(503698),
        s = n.n(i),
        r = n(51183),
        a = n(729688);
      function o(e) {
        let {
          activity: t,
          className: n,
          emojiClassName: i,
          textClassName: o,
          placeholderText: c,
          soloEmojiClassName: d,
          animate: u = !0,
          hideTooltip: h = !1,
          hideEmoji: g = !1,
          children: p,
        } = e;
        if (null == t) return null;
        let { emoji: m } = t,
          x = null != t.state && "" !== t.state ? t.state : c;
        return (0, l.jsxs)("div", {
          className: s()(a.__invalid_container, n),
          children: [
            g || null == m
              ? null
              : (0, l.jsx)(r.A, {
                  emoji: m,
                  className: s()(
                    a.Z,
                    i,
                    null != d ? { [d]: null == x || "" === x } : null,
                  ),
                  animate: u,
                  hideTooltip: h,
                }),
            null != x && x.length > 0
              ? (0, l.jsx)("span", { className: o, children: x })
              : null,
            p,
          ],
        });
      }
    },
    38910(e, t, n) {
      n.d(t, { A: () => r });
      var l = n(636537),
        i = n(228366),
        s = n(652215);
      let r = {
        async fetch() {
          try {
            let e = await l.Bo.get({
              url: s.Rsh.FRIEND_SUGGESTIONS,
              rejectWithError: !0,
            });
            i.h.dispatch({
              type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
              suggestions: e.body,
            });
          } catch (e) {
            i.h.dispatch({ type: "LOAD_FRIEND_SUGGESTIONS_FAILURE" });
          }
        },
        ignore(e) {
          l.Bo.del({ url: s.Rsh.FRIEND_SUGGESTION(e), rejectWithError: !0 });
        },
      };
    },
    936649(e, t, n) {
      n.d(t, { AG: () => a, XT: () => o, gj: () => r });
      var l,
        i,
        s,
        r = /^(14256|21552)$/.test(n.j)
          ? (((l = {}).INVITE = "member_joined"),
            (l.CHANNEL = "create_channel"),
            (l.AVATAR = "avatar"),
            (l.MESSAGE = "send_message"),
            (l.COMPLETED = "completed"),
            (l.DISMISSED = "dismissed"),
            l)
          : null,
        a =
          (((i = {}).PERSONALIZE_SERVER = "Personalize Server"),
          (i.INVITE = "Invite Friends"),
          (i.CREATE_CHANNEL = "Create Channel"),
          (i.SEND_MESSAGE = "Send Message"),
          (i.DOWNLOAD = "Download"),
          (i.ADD_APP = "Add App"),
          (i.DISMISS_GUILD_PROGRESS = "Dismiss Guild Progress"),
          (i.DISCORD_OVERVIEW_VIDEO = "Discord Overview Video"),
          (i.JOIN_GUILD = "Join Guild"),
          (i.CONTACT_SYNC = "Sync Contacts"),
          (i.DISMISS = "Dismiss"),
          i),
        o =
          (((s = {}).CHANNEL_WELCOME = "Channel Welcome CTA"),
          (s.GUILD_PROGRESS = "Guild Progress"),
          (s.HUB_PROGRESS = "Hub Progress"),
          s);
    },
    95550(e, t, n) {
      n.d(t, { Ay: () => ev, Jz: () => eE, NE: () => e_ }), n(321073);
      var l = n(627968),
        i = n(64700),
        s = n(735438),
        r = n(989349),
        a = n.n(r),
        o = n(189213),
        c = n(17928),
        d = n(862482),
        u = n(939249),
        h = n(97808),
        g = n(778712),
        p = n(834730),
        m = n(821609),
        x = n(292666),
        N = n(187322),
        f = n(452027),
        C = n(109802),
        A = n(231723),
        E = n(192308);
      if (21552 == n.j) var v = n(888366);
      if (21552 == n.j) var _ = n(241541);
      var I = n(228366),
        T = n(387755),
        S = n(308528),
        R = n(711950),
        j = n(376728),
        y = n(888906),
        D = n(49229),
        O = n(684136),
        P = n(964486),
        b = n(793574),
        M = n(58149),
        w = n(688810),
        L = n(571694),
        U = n(47167),
        k = n(915089),
        G = n(66442),
        F = n(279208),
        B = n(267102),
        V = n(976860),
        H = n(219271),
        z = n(427358),
        Z = n(95701),
        K = n(734057),
        W = n(958590),
        X = n(584777),
        Y = n(763827),
        J = n(222823),
        q = n(994500),
        $ = n(351906),
        Q = n(287809),
        ee = n(954571),
        et = n(957565),
        en = n(625494),
        el = n(403362),
        ei = n(935208),
        es = n(427262),
        er = n(41e4),
        ea = n(662367),
        eo = n(58736),
        ec = n(286498),
        ed = n(652215),
        eu = n(650583),
        eh = n(985018),
        eg = n(426057);
      let ep = (0, k.Ld)(),
        em = (e) => {
          let { channel: t, onClose: n } = e,
            i = (0, U.Ay)(t) ?? "",
            s = (0, c.bG)([J.Ay], () => J.Ay.lastMessageId(t.id) ?? t.id);
          return (0, l.jsx)(u.D, {
            onClick: () => {
              (0, V.uh)(ed.ME, t.id), n();
            },
            children: (0, l.jsxs)("div", {
              className: eg.us,
              children: [
                (0, l.jsx)(h.eu, {
                  src: (0, L.Y)(t),
                  size: g._3.SIZE_24,
                  "aria-label": i,
                }),
                (0, l.jsx)("span", { className: eg.J2, children: i }),
                (0, l.jsx)("span", {
                  className: eg.Pd,
                  children: a()(ei.default.extractTimestamp(s)).fromNow(),
                }),
              ],
            }),
          });
        },
        ex = (e) => {
          let { onConfirm: t, channelIds: n, ...i } = e,
            s = (0, c.yK)([K.A], () => Array.from(n).map(K.A.getChannel), [n]);
          return (0, l.jsx)(o.Modal, {
            title: eh.intl.string(eh.t.uFHxNd),
            subtitle: eh.intl.string(eh.t.rIsSqE),
            actions: [
              {
                variant: "secondary",
                text: eh.intl.string(eh.t["ETE/oC"]),
                onClick: i.onClose,
              },
              {
                variant: "primary",
                text: eh.intl.string(eh.t.KCNNJu),
                onClick: () => {
                  t(), i.onClose();
                },
              },
            ],
            input: (0, l.jsx)(p.E, {
              variant: "text-md/normal",
              className: eg.Jv,
              children: eh.intl.string(eh.t.cjE7wH),
            }),
            ...i,
            children: s
              .filter(el.Vq)
              .sort((e, t) => {
                let n = e.lastMessageId ?? e.id,
                  l = t.lastMessageId ?? t.id;
                return ei.default.compare(l, n);
              })
              .map((e) =>
                (0, l.jsx)(em, { onClose: i.onClose, channel: e }, e.id),
              ),
          });
        };
      class eN extends i.PureComponent {
        state = {
          separator: !1,
          copied: !1,
          newChannelName: "",
          previewIcon: void 0,
        };
        static contextType = B.Ay;
        copyTimeout;
        scrollerRef = i.createRef();
        searchBarRef = i.createRef();
        _mobileCloseRef = i.createRef();
        _searchCounter = 0;
        _existingTimeout = null;
        _getAnalyticsEntryPoint() {
          let { channel: e } = this.props,
            t = "",
            n = "";
          return (
            null != e
              ? e.isDM()
                ? ((t = "Add Friends to DM"), (n = "DM"))
                : ((t = "Add Friends to DM"), (n = "Group DM"))
              : ((t = "New Group DM"), (n = "Friends List")),
            { entryPointType: t, entryPointSource: n }
          );
        }
        componentDidMount() {
          let { channel: e } = this.props;
          I.h.wait(() => y.A.open(e?.id));
          let t = (0, M.dI)(e);
          ee.default.track(ed.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
          }),
            en._.subscribe(ed.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.subscribe(ed.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
              this.forceFocus();
            }, 0);
        }
        componentWillUnmount() {
          en._.unsubscribe(ed.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.unsubscribe(ed.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            I.h.wait(() => y.A.close());
        }
        scrollPageUp = () => {
          this.scrollerRef.current?.scrollPageUp({ animate: !0 });
        };
        scrollPageDown = () => {
          this.scrollerRef.current?.scrollPageDown({ animate: !0 });
        };
        isNotFriends() {
          let { channel: e, isStaffOnlyDM: t } = this.props;
          if (null == e || !e.isDM()) return !1;
          let n = e.getRecipientId();
          if (null == n) throw Error("no recipient in DM");
          return !q.A.isFriend(n) && !t;
        }
        createInvite() {
          let { channel: e } = this.props;
          if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
          let t = (0, ea.i)({ location: "5326c5_1" });
          j.Ay.createInvite(e.id, { max_age: t }, ed.PE1.GROUP_DM);
        }
        isPartyFull() {
          let { channel: e } = this.props;
          return (
            null != e && e.recipients.length + 1 >= this.getMaxParticipants()
          );
        }
        getMaxParticipants() {
          let { channel: e } = this.props,
            t = Q.default.getCurrentUser();
          return null != t && t.isStaff()
            ? ed.$aF
            : null != e && e.userLimit > 0
              ? e.userLimit
              : ed.wLU;
        }
        getRemaining() {
          let { channel: e, selectedUsers: t } = this.props,
            n = (null == e ? 0 : e.recipients.length) + 1;
          return this.getMaxParticipants() - t.size - n;
        }
        getCreateGroupButtonAction() {
          let { channel: e, selectedUsers: t } = this.props,
            n = this.getRemaining(),
            l = (null != e && 0 === t.size) || n < 0,
            i =
              t.size > 1 || null != e
                ? eh.intl.string(eh.t["h1/FMu"])
                : eh.intl.string(eh.t.bA875g);
          return {
            variant: "primary",
            disabled: l,
            onClick: this.handleInviteUsers,
            text: i,
          };
        }
        renderAddUsersButton() {
          let { channel: e, selectedUsers: t } = this.props;
          if (null == e || e.isDM()) return;
          let n = this.getRemaining(),
            i = 0 === t.size || n < 0;
          return (0, l.jsx)(m.$, {
            variant: "primary",
            text: eh.intl.string(eh.t.OYkgVk),
            disabled: i,
            onClick: this.handleInviteUsers,
          });
        }
        getTitle() {
          if (this.isNotFriends()) return eh.intl.string(eh.t.Xjlbvs);
          if (this.isPartyFull()) return eh.intl.string(eh.t.OtTQDz);
          let { channel: e } = this.props;
          return null == e
            ? eh.intl.string(eh.t.jD1qzM)
            : eh.intl.string(e.isMultiUserDM() ? eh.t.AQAPts : eh.t.Xjlbvs);
        }
        getSubtitle() {
          let { channel: e, hasFriends: t } = this.props;
          if (!t) {
            if (null != e && e.isDM()) {
              let t = e.getRecipientId();
              if (null != t) {
                let e = Q.default.getUser(t),
                  n = null != e ? e.username : "";
                return eh.intl.format(eh.t["eg+R9x"], { username: n });
              }
            }
            return eh.intl.string(eh.t["1x/UBX"]);
          }
          if (this.isPartyFull()) return;
          if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = Q.default.getUser(t),
              l = null != n ? n.username : "";
            return eh.intl.format(eh.t["eg+R9x"], { username: l });
          }
          let n = this.getRemaining();
          return n <= 0
            ? eh.intl.formatToPlainString(eh.t.xYr004, {
                number: this.getMaxParticipants(),
              })
            : eh.intl.formatToPlainString(eh.t.HrSDPF, { number: n });
        }
        handleKeyDown(e) {
          let {
              selectedRow: t,
              selectedUsers: n,
              results: l,
              query: i,
            } = this.props,
            { current: s } = this.searchBarRef;
          if (null == s) return;
          let r = t;
          switch (e.key) {
            case eu.dh.BACKSPACE:
              (null == i || 0 === i.length) &&
                n.size > 0 &&
                (e.preventDefault(),
                e.stopPropagation(),
                this.handleRemoveTag(n.size - 1));
              break;
            case eu.dh.ARROW_DOWN:
              e.preventDefault(),
                e.stopPropagation(),
                ++r >= l.length && (r = 0),
                this.handleSelectionChange(r);
              break;
            case eu.dh.ARROW_UP:
              e.preventDefault(),
                e.stopPropagation(),
                --r < 0 && (r = l.length - 1),
                this.handleSelectionChange(r);
              break;
            case eu.dh.ENTER:
              e.preventDefault(),
                e.stopPropagation(),
                l.length > r && this.handleSelect(r);
          }
        }
        renderSearchBar() {
          let { query: e, hasFriends: t, selectedUsers: n } = this.props;
          if (!t || this.isNotFriends() || this.isPartyFull()) return null;
          let i = [];
          n.forEach((e) => {
            let t = Q.default.getUser(e);
            null != t && i.push({ id: e, label: es.Ay.getName(t) });
          });
          let { results: s, selectedRow: r } = this.props,
            a = s.length > 0;
          return (0, l.jsxs)("div", {
            className: eg.ON,
            children: [
              (0, l.jsx)(x.k, {
                inputRef: this.searchBarRef,
                autoFocus: !0,
                fullWidth: !0,
                placeholder: 0 === n.size ? eh.intl.string(eh.t.K5e6bn) : "",
                disabled: this.isPartyFull(),
                value: e,
                leading: {
                  type: "tags",
                  items: i,
                  onRemove: this.handleRemoveUser,
                },
                onChange: this.handleQueryChange,
                onKeyDown: this.handleKeyDown.bind(this),
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-haspopup": "listbox",
                "aria-controls": ep,
                "aria-expanded": a,
                "aria-activedescendant": a ? `user-row-${r}` : void 0,
              }),
              this.renderAddUsersButton(),
            ],
          });
        }
        renderMobileCloseButton = () =>
          (0, l.jsx)("div", {
            className: eg.Lh,
            ref: this._mobileCloseRef,
            children: (0, l.jsx)(N.xp, {
              containerRef: this._mobileCloseRef,
              children: (0, l.jsx)("div", {
                children: (0, l.jsx)(O.A, {
                  className: eg.RR,
                  closeAction: this.props.onClose,
                  keybind: "ESC",
                }),
              }),
            }),
          });
        renderBody() {
          let { hasFriends: e } = this.props;
          return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, l.jsx)("div", {
                  children: eh.intl.format(eh.t.xYr004, {
                    number: this.getMaxParticipants(),
                  }),
                })
              : null;
        }
        getListProps() {
          let { hasFriends: e, results: t } = this.props;
          if (!(!e || this.isNotFriends() || this.isPartyFull()))
            return 0 === t.length
              ? {
                  sections: [1],
                  sectionHeight: 0,
                  rowHeight: 32,
                  renderRow: () =>
                    (0, l.jsx)("div", {
                      className: eg.wV,
                      children: (0, l.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: eh.intl.string(eh.t.z3yXsY),
                      }),
                    }),
                }
              : {
                  ref: this.scrollerRef,
                  sections: [t.length],
                  className: eg.XG,
                  innerClassName: eg.bv,
                  renderRow: this.renderRow,
                  rowHeight: this.getRowHeight,
                  renderSection: this.renderSection,
                  sectionHeight: 0,
                  onScroll: this.handleScroll,
                  paddingTop: 0,
                  paddingBottom: 14,
                  fade: !0,
                  role: void 0,
                  innerRole: "group",
                  innerId: ep,
                };
        }
        getRowHeight = (e, t) => {
          if (e > 0) return 0;
          let { results: n } = this.props;
          return 48 * (null != n[t]);
        };
        renderRow = (e) => {
          let { section: t, row: n } = e;
          if (t > 0) return null;
          let {
              results: i,
              selectedUsers: s,
              selectedRow: r,
              hideDiscriminator: a,
              channel: o,
            } = this.props,
            c = i[n];
          if (null == c) return null;
          let { user: d, comparator: u } = c,
            h = s.has(d.id) || o?.recipients.includes(d.id),
            g =
              (!h && 0 >= this.getRemaining()) || o?.recipients.includes(d.id);
          return (0, l.jsx)(
            ec.A,
            {
              row: n,
              user: d,
              hideDiscriminator: a,
              comparator: u,
              checked: h,
              disabled: g,
              selected: n === r,
              onClick: this.handleClick,
              onMouseEnter: this.focusResult,
              "aria-posinset": n + 1,
              "aria-setsize": i.length,
            },
            d.id,
          );
        };
        renderSection() {
          return null;
        }
        getInviteLinkFooter() {
          let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: i } = this.state;
          if (null == e || !e.isMultiUserDM() || this.isPartyFull())
            return null;
          let s = null != t ? (0, F.A)(t.code) : "",
            r = s.length > 0;
          return (0, l.jsx)(f.D, {
            label: eh.intl.string(eh.t.t3O2BR),
            helperText:
              s.length > 0
                ? eh.intl.format(eh.t.ZVdJMy, { numHours: "24" })
                : void 0,
            children: (0, l.jsx)(C.e, {
              supportsCopy: et.p5,
              placeholder: (0, F.A)(eh.intl.string(eh.t.lPVBqP)),
              value: r ? (n ? eh.intl.string(eh.t["6HzNgZ"]) : s) : "",
              buttonColor: d.$n.Colors.BRAND,
              text: r
                ? i
                  ? eh.intl.string(eh.t.q30c5i)
                  : eh.intl.string(eh.t.OpuAlK)
                : eh.intl.string(eh.t.qzxqUf),
              mode: i ? C.q.SUCCESS : C.q.DEFAULT,
              onCopy: () => {
                r ? this.handleCopyInvite(s) : this.createInvite();
              },
            }),
          });
        }
        getFooterProps() {
          let {
            hasFriends: e,
            channel: t,
            selectedUsers: n,
            addToDMUpdatesEnabled: i,
          } = this.props;
          if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = Q.default.getUser(e),
              l =
                null != n &&
                q.A.getRelationshipType(n.id) === ed.eA$.PENDING_OUTGOING;
            return {
              actions: [
                {
                  variant: "primary",
                  text: l
                    ? eh.intl.string(eh.t.xMH6vD)
                    : eh.intl.string(eh.t["PMsq/b"]),
                  disabled: l,
                  onClick: () => (null != n ? this.handleAddFriend(n) : null),
                },
              ],
            };
          }
          if (!e)
            return {
              actions: [
                {
                  variant: "primary",
                  text: eh.intl.string(eh.t.w5uwoI),
                  onClick: this.handleAddFriendNavigation,
                },
              ],
            };
          if (this.isPartyFull()) return {};
          if (null == t || (t.isDM() && i))
            return {
              actionBarInput:
                null != t || n.size > 1
                  ? (0, l.jsx)(ef, {
                      previewIcon: this.state.previewIcon,
                      selectedUsers: n,
                      channelName: this.state.newChannelName,
                      onChange: this.handleChannelNameChange,
                      onIconChange: this.handleIconChange,
                      onIconRemove: this.handleIconRemove,
                    })
                  : void 0,
              actions: [
                {
                  variant: "secondary",
                  text: eh.intl.string(eh.t["ETE/oC"]),
                  onClick: this.props.onClose,
                },
                this.getCreateGroupButtonAction(),
              ],
            };
          if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
          let s = this.getInviteLinkFooter();
          return null != s ? { actionBarInput: s } : {};
        }
        render() {
          let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: i } = this.getFooterProps();
          return (0, l.jsx)(o.Modal, {
            transitionState: e ?? A.ip.ENTERED,
            onClose: async () => await t(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: this.renderSearchBar() ?? void 0,
            actionBarInput: n,
            listProps: this.getListProps(),
            actions: i ?? [],
            children: this.renderBody(),
          });
        }
        handleAddFriend(e) {
          this.props.onClose(),
            D.A.sendRequest({
              discordTag: es.Ay.getUserTag(e, { identifiable: "always" }),
              context: { location: "Group DM" },
            });
        }
        forceFocus = () => {
          let e = this.searchBarRef.current;
          e?.focus();
        };
        focusResult = (e) => {
          y.A.select(e);
        };
        handleSelect = (e) => {
          let { results: t, channel: n } = this.props;
          if (null == e) y.A.clear(n?.id);
          else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
          }
        };
        handleSelectionChange = (e) => {
          y.A.select(e);
          let t = this.scrollerRef.current;
          null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
        };
        handleQueryChange = (e) => {
          let { channel: t } = this.props,
            n = (0, M.dI)(t);
          y.A.search(e, t?.id),
            null != this._existingTimeout &&
              clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
              ee.default.track(ed.HAw.SEARCH_USER_LIST_STARTED, {
                ...n,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source:
                  this._getAnalyticsEntryPoint().entryPointSource,
                search_query_length: e.length,
              }),
                this._searchCounter++;
            }, 500));
        };
        handleRemoveTag = (e) => {
          let t = Array.from(this.props.selectedUsers);
          y.A.removeUser(t[e]);
        };
        handleRemoveUser = (e) => {
          e.forEach((e) => {
            y.A.removeUser(e);
          }),
            this.forceFocus();
        };
        handleClick = (e) => {
          let { selectedUsers: t, query: n, channel: l } = this.props;
          l?.recipients.includes(e) ||
            (t.has(e)
              ? y.A.removeUser(e)
              : this.getRemaining() > 0 &&
                (y.A.addUser(e),
                n.length > 0 && (y.A.clear(l?.id), this.forceFocus())));
        };
        handleAddFriendNavigation = () => {
          R.A.transitionToSection(ed.m3P.ADD_FRIEND, { explicit: !0 }),
            this.props.onClose();
        };
        handleScroll = () => {
          let e = this.scrollerRef.current;
          null != e && this.setState({ separator: !e.isScrolledToTop() });
        };
        _getUserAffinities(e) {
          return {
            affinities: e.map((e) => {
              let t = z.A.getUserAffinity(e);
              return t?.communicationProbability ?? -1;
            }),
          };
        }
        handleChannelNameChange = (e) => {
          this.setState({ newChannelName: e });
        };
        handleIconChange = (e) => {
          let { imageUri: t } = e;
          this.setState({ previewIcon: t });
        };
        handleIconRemove = () => {
          this.setState({ previewIcon: null });
        };
        updateGDM = (e, t) => {
          let n = {};
          "" !== this.state.newChannelName &&
            (n.name = this.state.newChannelName),
            null != this.state.previewIcon && (n.icon = this.state.previewIcon),
            (null != n.name || null != n.icon) && S.A.updateChannel(e, n, t),
            ee.default.track(ed.HAw.GDM_EDIT_INTERACTED, {
              channel_id: e,
              channel_type: ed.rbe.GROUP_DM,
              location: t,
              new_name_set: "" !== this.state.newChannelName,
              new_icon_set: null != this.state.previewIcon,
            });
        };
        createNewDM = (e) => {
          let t = this._searchCounter,
            { channel: n } = this.props,
            l = (0, M.dI)(n),
            i = !0;
          1 === e.length && (i = null == S.A._openCachedDMChannel(e[0])),
            ee.default.track(ed.HAw.CREATE_DM_USER_LIST_CLICKED, {
              ...l,
              is_new_dm: i,
              entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
              entry_point_source:
                this._getAnalyticsEntryPoint().entryPointSource,
              recipient_ids: e,
              num_searches: t,
              affinity_score: this._getUserAffinities(e).affinities,
              name_is_set: "" !== this.state.newChannelName,
              icon_is_set: null != this.state.previewIcon,
            }),
            S.A.openPrivateChannel({
              recipientIds: e,
              location: "New Group DM",
            }).then((e) => {
              this.props.onComplete?.(e),
                this.updateGDM(e, b.A.NEW_GROUP_DM_INVITE_MODAL);
            });
        };
        pushToExistingDM = (e, t) => {
          let { addToDMUpdatesEnabled: n } = this.props,
            l = this._searchCounter,
            i = (0, M.dI)(e),
            s = Y.A.getChannelId() === e.id;
          S.A.addRecipients(e.id, t, ed.ThZ.ADD_FRIENDS_TO_DM).then((l) => {
            if (
              (this.props.onComplete?.(l),
              n && this.updateGDM(l, ed.ThZ.ADD_FRIENDS_TO_DM),
              s)
            ) {
              if (e.isDM() && l !== e.id) return void T.A.call(l, !1, !0);
              T.A.ring(l, t, "dm_invite");
            }
          }),
            ee.default.track(ed.HAw.CREATE_DM_USER_LIST_CLICKED, {
              ...i,
              is_new_dm: !0,
              entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
              entry_point_source:
                this._getAnalyticsEntryPoint().entryPointSource,
              recipient_ids: t,
              num_searches: l,
              affinity_score: this._getUserAffinities(t).affinities,
            });
        };
        handleInviteUsers = () => {
          let { channel: e, selectedUsers: t, onClose: n } = this.props,
            i = Array.from(t);
          if (null != e) {
            let t = eI(Array.from(new Set([...e.recipients, ...i])));
            t.size > 0
              ? (0, E.openModal)(
                  (n) =>
                    (0, l.jsx)(ex, {
                      ...n,
                      onConfirm: () => this.pushToExistingDM(e, i),
                      channelIds: t,
                    }),
                  {},
                  (0, E.modalContextFromAppContext)(this.context.appContext),
                )
              : this.pushToExistingDM(e, i);
          } else {
            let e = eI(i);
            i.length > 1 && e.size > 0
              ? (0, E.openModal)(
                  (t) =>
                    (0, l.jsx)(ex, {
                      ...t,
                      onConfirm: () => this.createNewDM(i),
                      channelIds: e,
                    }),
                  {},
                  (0, E.modalContextFromAppContext)(this.context.appContext),
                )
              : this.createNewDM(i);
          }
          n();
        };
        handleCopyInvite = (e) => {
          let { channel: t, invite: n } = this.props;
          null != n && (0, et.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
              this.setState({ copied: !1 });
            }, 1e3)),
            ee.default.track(ed.HAw.COPY_INSTANT_INVITE, {
              server: null,
              channel: null != t ? t.id : null,
              channel_type: null != t ? t.type : null,
              location: ed.ThZ.ADD_FRIENDS_TO_DM,
              code: null != n ? n.code : null,
            });
        };
        scrollToCounterSearchBarHeightChange = (e) => {
          let t = this.scrollerRef.current?.getScrollerNode?.();
          null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
        };
      }
      function ef(e) {
        let {
            selectedUsers: t,
            channelName: n,
            previewIcon: i,
            onIconChange: s,
            onIconRemove: r,
            onChange: a,
          } = e,
          { analyticsLocations: o } = (0, w.Ay)(b.A.NEW_GROUP_DM_INVITE_MODAL),
          c = (0, U.Jo)(Array.from(t), Q.default, q.A);
        return (0, l.jsxs)("div", {
          className: eg.zj,
          children: [
            (0, l.jsx)(G.X, {
              className: eg.r9,
              channel: null,
              previewIcon: i,
              onIconChange: s,
              onIconRemove: r,
              analyticsLocations: o,
              petite: !0,
              allowRemovingIcon: !1,
            }),
            (0, l.jsx)(p.E, {
              className: eg.hL,
              variant: "text-sm/medium",
              color: "text-muted",
              children: eh.intl.string(eh.t.YynaLK),
            }),
            (0, l.jsx)(x.k, {
              "aria-label": eh.intl.string(eh.t.YynaLK),
              name: "create-gdm-channel-name",
              placeholder: c,
              value: n,
              onChange: a,
            }),
          ],
        });
      }
      function eC(e) {
        let { channel: t, onComplete: n, ...i } = e,
          s = (0, c.cf)([X.A, W.A, $.A], () => {
            let e;
            return (
              null != t &&
                null != (e = W.A.getInvite(t.id)) &&
                e.isExpired() &&
                (e = null),
              {
                ...X.A.getState(),
                invite: e,
                hideDiscriminator: $.A.hidePersonalInformation,
                hideInstantInvites: $.A.hideInstantInvites,
              }
            );
          }),
          r = (0, c.bG)(
            [Q.default],
            () =>
              !!Q.default.getCurrentUser()?.isStaff() &&
              null != t &&
              !!t.isDM() &&
              t.recipients.every((e) => Q.default.getUser(e)?.isStaff()),
            [t],
          ),
          { enabled: a } = er.A.useConfig({
            location: t?.isDM()
              ? "DM Channel Invite Modal"
              : "Invalid Channel for Experiment",
          });
        return (0, l.jsx)(eN, {
          channel: t,
          isStaffOnlyDM: r,
          onComplete: n,
          addToDMUpdatesEnabled: !!(t?.isDM() && a),
          ...i,
          ...s,
        });
      }
      function eA(e) {
        let { channel: t, subscribeToGlobalHotkey: n } = e,
          s = `channel-invite-modal-${t?.id}`,
          r = (0, E.useHasModalOpen)(s),
          a = i.useCallback(
            () =>
              (0, E.openModalLazy)(
                () =>
                  Promise.resolve((e) => (0, l.jsx)(eC, { ...e, channel: t })),
                { modalKey: s },
              ),
            [t, s],
          ),
          o = i.useCallback(() => (r ? (0, E.closeModal)(s) : a()), [r, s, a]);
        return (
          i.useEffect(
            () => (
              n && en._.subscribe(ed.jej.TOGGLE_DM_CREATE, o),
              () => {
                en._.unsubscribe(ed.jej.TOGGLE_DM_CREATE, o);
              }
            ),
            [n, o],
          ),
          (0, P.Ay)(() => {
            (0, H.u)();
          }),
          { showModal: a, toggleVisible: o }
        );
      }
      function eE(e) {
        let { channel: t, onComplete: n } = e,
          i =
            t?.id != null
              ? `channel-invite-modal-${t.id}`
              : "channel-invite-modal-new";
        (0, E.openModalLazy)(
          () =>
            Promise.resolve((e) =>
              (0, l.jsx)(eC, { ...e, channel: t, onComplete: n }),
            ),
          { modalKey: i },
        );
      }
      function ev(e) {
        let {
            channel: t,
            iconClassName: n,
            className: s,
            icon: r,
            tooltip: a,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
          } = e,
          u = i.useRef(null),
          h = r ?? (null == t ? v.g : _.D),
          { showModal: g } = eA({ channel: t, subscribeToGlobalHotkey: d }),
          p = (0, c.bG)([Q.default], () =>
            Q.default.getUser(t?.getRecipientId()),
          );
        return p?.bot || p?.isProvisional
          ? null
          : (0, l.jsx)(eo.Ay.Icon, {
              ref: u,
              onClick: g,
              icon: h,
              className: s,
              iconClassName: n,
              tooltip: a,
              tooltipPosition: o,
            });
      }
      function e_(e) {
        let {
            channel: t,
            fullWidth: n = !1,
            text: s,
            icon: r,
            subscribeToGlobalHotkey: a = !1,
            ...o
          } = e,
          c = i.useRef(null),
          { showModal: d } = eA({ channel: t, subscribeToGlobalHotkey: a });
        return (0, l.jsx)(m.$, {
          ...o,
          onClick: d,
          variant: "primary",
          buttonRef: c,
          text: s,
          "aria-label": s,
          icon: r,
          fullWidth: n,
        });
      }
      function eI(e) {
        let t = eT(e);
        return new Set(
          (0, s.chain)(K.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, Z.MK)(e.type))
            .filter((e) => eT(e.recipients) === t)
            .map((e) => e.id)
            .value(),
        );
      }
      function eT(e) {
        return JSON.stringify(e.sort());
      }
    },
    290987(e, t, n) {
      n.d(t, { $l: () => s.$l, Ay: () => r, pJ: () => s.pJ });
      var l = n(627968);
      n(64700);
      var i = n(439447),
        s = n(499979);
      let r = (0, i.A)(function (e) {
        let { children: t, className: n } = e;
        return (0, l.jsx)("span", { className: n, children: t });
      });
    },
    957283(e, t, n) {
      n.d(t, { N: () => r });
      var l = n(17928),
        i = n(940382),
        s = n(761640);
      function r() {
        let e = (0, l.bG)([s.Ay], () => s.Ay.getSidebarState(s.fe)),
          t = e?.type === i.PE.VIEW_MESSAGE_REQUEST ? e : null;
        return {
          channelId: t?.channelId,
          hasSingleMessageRequest:
            t?.details != null &&
            t.details.type === i.LU.MESSAGE_REQUEST &&
            t.details.hasSingleMessageRequest,
        };
      }
    },
    914853(e, t, n) {
      n.d(t, { x: () => i });
      var l,
        i =
          (((l = {}).FRIENDS = "friends"),
          (l.MESSAGES = "messages"),
          (l.VOICE = "voice"),
          l);
    },
    830618(e, t, n) {
      n.d(t, { A: () => e_ });
      var l = n(627968),
        i = n(64700),
        s = n(503698),
        r = n.n(s),
        a = n(17928),
        o = n(761508),
        c = n(534514),
        d = n(915089),
        u = n(763827),
        h = n(977997),
        g = n(572487),
        p = n(798286),
        m = n(83942),
        x = n(259374),
        N = n(205693),
        f = n(691540),
        C = n(857250),
        A = n(97483),
        E = n(194261),
        v = n(661531),
        _ = n(349288),
        I = n(811893),
        T = n(624479),
        S = n(233545),
        R = n(229659),
        j = n(253932),
        y = n(51760),
        D = n(954571),
        O = n(957565),
        P = n(975571),
        b = n(917592),
        M = n(652215),
        w = n(731854),
        L = n(985018),
        U = n(666153);
      let k = () => {
        y.Ay.getMediaEngine().once(N.bg.ConnectionStats, (e) => {
          let t = JSON.stringify(
            Object.values(w.x)
              .map((t) => {
                let n = e
                  .filter((e) => {
                    let { connection: n } = e;
                    return n.context === t;
                  })
                  .map((e, n) => {
                    let l = e.stats;
                    return (l.context = t), (l.index = n), l;
                  });
                for (let e of n)
                  e?.transport?.localAddress != null &&
                    (e.transport.localAddress = "(redacted)");
                return n;
              })
              .filter((e) => e.length > 0),
            null,
            2,
          );
          (0, O.C)(t, () =>
            (0, f.P0)((0, C.o)(L.intl.string(L.t.t5VZ88), A.Ck.SUCCESS)),
          );
        });
      };
      function G(e) {
        (0, i.useEffect)(() => {
          D.default.track(M.HAw.OPEN_POPOUT, { type: "RTC Connection" });
        }, []);
        let t = (0, i.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), S.ho();
          }, [e]),
          n = (0, i.useCallback)(() => {
            let {
                hostname: t,
                averagePing: n,
                lastPing: s,
                outboundLossRate: a,
              } = e,
              o = j.Q_.getSetting();
            return (0, l.jsxs)(i.Fragment, {
              children: [
                o &&
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("div", {
                        className: U.o0,
                        children: (0, l.jsx)(R.A, {
                          dataPoints: e.pings,
                          width: 258,
                          height: 80,
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: U.xB,
                        children: (0, l.jsx)("strong", {
                          children: b.A.getShortHostname(t),
                        }),
                      }),
                    ],
                  }),
                (0, l.jsx)("div", {
                  className: U.xB,
                  children: L.intl.format(L.t["X58/lN"], {
                    averagePing: n.toFixed(0),
                  }),
                }),
                null != s
                  ? (0, l.jsx)("div", {
                      className: U.xB,
                      children: L.intl.format(L.t["6iv2TF"], {
                        lastPing: s.toFixed(0),
                      }),
                    })
                  : null,
                null != a
                  ? (0, l.jsx)("div", {
                      className: U.xB,
                      children: L.intl.format(L.t["VIBJM+"], {
                        outboundLossRate: a.toFixed(1),
                      }),
                    })
                  : null,
                (0, l.jsxs)("div", {
                  className: r()(U.xB, U.xJ),
                  children: [
                    null == a
                      ? L.intl.formatToPlainString(L.t.vggaMt, { badPing: 250 })
                      : null,
                    null != a
                      ? L.intl.formatToPlainString(L.t["3pFz1P"], {
                          badPing: 250,
                          badLossRate: 10,
                        })
                      : null,
                  ],
                }),
              ],
            });
          }, [e]),
          { connectionState: s, connectionTypeText: a } = e,
          o = j.Q_.getSetting(),
          c = {
            [M.S7L.AWAITING_ENDPOINT]: L.intl.format(L.t.Eu2vUR, {
              url: M.qF7.STATUS,
            }),
            [M.S7L.CONNECTING]: L.intl.string(L.t["y+E8aD"]),
            [M.S7L.AUTHENTICATING]: L.intl.string(L.t["5lGIZH"]),
            [M.S7L.DISCONNECTED]: L.intl.string(L.t.fOX25I),
            [M.S7L.RTC_CONNECTING]: L.intl.string(L.t.b5Ubd5),
            [M.S7L.ICE_CHECKING]: L.intl.format(L.t.SyoYUb, {
              url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.DTLS_CONNECTING]: L.intl.format(L.t.SyoYUb, {
              url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.RTC_CONNECTED]: n,
            [M.S7L.NO_ROUTE]: L.intl.format(L.t["2tgQnk"], {
              url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.RTC_DISCONNECTED]: L.intl.string(L.t.fOX25I),
          }[s];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            "function" == typeof c
              ? c()
              : (0, l.jsx)("p", { className: r()(U.xB, U.xJ), children: c }),
            (0, l.jsx)("hr", { className: U.me }),
            (0, l.jsxs)("div", {
              className: U.Vf,
              children: [
                (0, l.jsxs)("span", {
                  className: r()(U.uO, U.ro),
                  children: [
                    (0, l.jsx)(E.X, {
                      size: "xxs",
                      color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                      className: U.__invalid_icon,
                    }),
                    a,
                  ],
                }),
                o &&
                  y.Ay.supports(w.O5.DIAGNOSTICS) &&
                  !__OVERLAY__ &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)(_.Anchor, {
                        className: r()(U.Ce, U.ro),
                        onClick: t,
                        children: [
                          L.intl.string(L.t.KBoWg9),
                          (0, l.jsx)(I.t, {
                            size: "xxs",
                            color: "currentColor",
                            className: U.__invalid_icon,
                          }),
                        ],
                      }),
                      (0, l.jsxs)(_.Anchor, {
                        className: r()(U.d3, U.ro),
                        onClick: k,
                        title: "Copy to clipboard",
                        children: [
                          L.intl.string(L.t["XEb+Sj"]),
                          (0, l.jsx)(T.T, {
                            size: "xxs",
                            color: "currentColor",
                            className: U.__invalid_icon,
                          }),
                        ],
                      }),
                    ],
                  }),
                !o &&
                  !__OVERLAY__ &&
                  (0, l.jsx)(_.Anchor, {
                    className: U.Ce,
                    href: P.A.getArticleURL(M.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                    children: L.intl.string(L.t.hvVgAZ),
                  }),
              ],
            }),
          ],
        });
      }
      var F = n(834730),
        B = n(814278),
        V = n(998759),
        H = n(289873),
        z = n(277639);
      function Z(e) {
        let { chunks: t, columns: n, className: s } = e,
          a = i.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
        return null == t
          ? (0, l.jsx)("div", {
              className: z.Lq,
              children: (0, l.jsx)(H.y, {}),
            })
          : (0, l.jsx)("div", {
              style: a,
              className: r()(z.aY, s),
              children: t.map((e, t) =>
                (0, l.jsx)(
                  "div",
                  {
                    className: r()(z.iv, { [z.yF]: t > n - 1 }),
                    children: (0, l.jsx)(F.E, {
                      className: z.ph,
                      variant: "code",
                      color: "text-default",
                      children: e,
                    }),
                  },
                  `${e}-${t}`,
                ),
              ),
            });
      }
      var K = n(930840),
        W = n(603266),
        X = n(555273);
      function Y(e) {
        let { channelId: t } = e,
          n = (0, a.bG)(
            [u.A],
            () => u.A.getSecureFramesState()?.epochAuthenticator,
          ),
          s = (0, V.z)({
            fingerprintBase64: n,
            chunkSize: 5,
            desiredLength: 30,
          }),
          r = i.useCallback(() => {
            (0, p.k0)({ channelId: t });
          }, [t]);
        return (0, l.jsxs)("div", {
          className: X.kL,
          children: [
            (0, l.jsxs)("div", {
              className: X.Tc,
              children: [
                (0, l.jsx)(E.X, {
                  size: "xxs",
                  color: v.A.colors.TEXT_FEEDBACK_POSITIVE,
                }),
                (0, l.jsx)(F.E, {
                  variant: "text-xs/medium",
                  color: "text-feedback-positive",
                  children: L.intl.string(L.t["3BogKe"]),
                }),
              ],
            }),
            (0, l.jsx)(F.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: L.intl.string(L.t.B9JNsl),
            }),
            (0, l.jsxs)("div", {
              className: X.wx,
              children: [
                (0, l.jsx)(c.D, {
                  variant: "text-sm/bold",
                  color: "text-strong",
                  children: L.intl.string(L.t.cTQI5t),
                }),
                null != s &&
                  (0, l.jsx)(K.c, {
                    chunks: s,
                    color: v.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                    onCopy: r,
                  }),
              ],
            }),
            (0, l.jsx)(Z, { className: X.aY, chunks: s, columns: 3 }),
            (0, l.jsx)(F.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: L.intl.format(L.t.wKxADe, { helpArticle: (0, B.aW)() }),
            }),
          ],
        });
      }
      var J = n(821609),
        q = n(92446),
        $ = n(939249),
        Q = n(628284),
        ee = n(359778),
        et = n(394952),
        en = n(291614);
      let el = function (e) {
        let [t, n] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          D.default.track(M.HAw.OPEN_POPOUT, { type: "RTC Connection" });
        }, []);
        let s = (0, i.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), S.ho();
          }, [e]),
          r = (0, i.useCallback)(() => {
            var e;
            (e = () => {
              n(!0), setTimeout(() => n(!1), 2e3);
            }),
              y.Ay.getMediaEngine().once(N.bg.ConnectionStats, (t) => {
                let n = JSON.stringify(
                  Object.values(w.x)
                    .map((e) => {
                      let n = t
                        .filter((t) => {
                          let { connection: n } = t;
                          return n.context === e;
                        })
                        .map((t, n) => {
                          let l = t.stats;
                          return (l.context = e), (l.index = n), l;
                        });
                      for (let e of n)
                        e?.transport?.localAddress != null &&
                          (e.transport.localAddress = "(redacted)");
                      return n;
                    })
                    .filter((e) => e.length > 0),
                  null,
                  2,
                );
                (0, O.C)(n, e);
              });
          }, []),
          a =
            null != e.outboundLossRate
              ? L.intl.formatToPlainString(L.t["3pFz1P"], {
                  badPing: 250,
                  badLossRate: 10,
                })
              : L.intl.formatToPlainString(L.t.vggaMt, { badPing: 250 }),
          o = (0, i.useCallback)(() => {
            let {
                hostname: t,
                averagePing: n,
                lastPing: s,
                outboundLossRate: r,
              } = e,
              o = j.Q_.getSetting();
            return (0, l.jsxs)(i.Fragment, {
              children: [
                o &&
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("div", {
                        className: et.o0,
                        children: (0, l.jsx)(R.A, {
                          dataPoints: e.pings,
                          width: 258,
                          height: 80,
                        }),
                      }),
                      (0, l.jsx)(F.E, {
                        variant: "text-sm/bold",
                        color: "text-default",
                        className: et.VU,
                        children: b.A.getShortHostname(t),
                      }),
                    ],
                  }),
                (0, l.jsx)("div", {
                  className: et.ew,
                  children: (0, l.jsxs)("div", {
                    className: et.zS,
                    children: [
                      (0, l.jsx)(F.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: et.VU,
                        children: L.intl.format(L.t["X58/lN"], {
                          averagePing: n.toFixed(0),
                        }),
                      }),
                      null != s
                        ? (0, l.jsx)(F.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: et.VU,
                            children: L.intl.format(L.t["6iv2TF"], {
                              lastPing: s.toFixed(0),
                            }),
                          })
                        : null,
                      null != r
                        ? (0, l.jsx)(F.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: et.VU,
                            children: L.intl.format(L.t["VIBJM+"], {
                              outboundLossRate: r.toFixed(1),
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
                (0, l.jsx)(F.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: a,
                }),
              ],
            });
          }, [e, a]),
          { connectionState: c, connectionTypeText: d } = e,
          u = j.Q_.getSetting(),
          h = {
            [M.S7L.AWAITING_ENDPOINT]: L.intl.format(L.t.Eu2vUR, {
              url: M.qF7.STATUS,
            }),
            [M.S7L.CONNECTING]: L.intl.string(L.t["y+E8aD"]),
            [M.S7L.AUTHENTICATING]: L.intl.string(L.t["5lGIZH"]),
            [M.S7L.DISCONNECTED]: L.intl.string(L.t.fOX25I),
            [M.S7L.RTC_CONNECTING]: L.intl.string(L.t.b5Ubd5),
            [M.S7L.ICE_CHECKING]: L.intl.format(L.t.SyoYUb, {
              url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.DTLS_CONNECTING]: L.intl.format(L.t.SyoYUb, {
              url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.RTC_CONNECTED]: o,
            [M.S7L.NO_ROUTE]: L.intl.format(L.t["2tgQnk"], {
              url: P.A.getArticleURL(M.MVz.VOICE_CONNECTION_ERRORS),
            }),
            [M.S7L.RTC_DISCONNECTED]: L.intl.string(L.t.fOX25I),
          }[c];
        return (0, l.jsxs)("div", {
          className: et.kL,
          children: [
            "function" == typeof h
              ? h()
              : (0, l.jsx)(F.E, {
                  tag: "p",
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: h,
                }),
            u &&
              y.Ay.supports(w.O5.DIAGNOSTICS) &&
              !__OVERLAY__ &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("hr", { className: en.me }),
                  (0, l.jsxs)("div", {
                    className: et.pw,
                    children: [
                      (0, l.jsx)(J.$, {
                        icon: q.Q,
                        text: L.intl.string(L.t.KBoWg9),
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        onClick: s,
                      }),
                      (0, l.jsxs)($.D, {
                        className: `${en.n2} ${et.n2}`,
                        onClick: r,
                        children: [
                          (0, l.jsx)("div", {
                            className: t ? en.Dx : en.t6,
                            children: (0, l.jsx)(J.$, {
                              icon: T.T,
                              text: L.intl.string(L.t["XEb+Sj"]),
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: t ? en.t6 : en.Dx,
                            children: (0, l.jsx)(J.$, {
                              icon: Q.y,
                              text: L.intl.string(L.t.t5VZ88),
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            (0, l.jsxs)(ee.Z, {
              type: ee.Z.Types.SUCCESS,
              className: en.g4,
              children: [
                (0, l.jsx)(E.X, {
                  size: "xxs",
                  color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
                (0, l.jsx)(F.E, {
                  variant: "text-xs/medium",
                  color: "text-feedback-positive",
                  children: d,
                }),
              ],
            }),
            !u &&
              !__OVERLAY__ &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("hr", { className: en.me }),
                  (0, l.jsx)(_.Anchor, {
                    className: et.CU,
                    href: P.A.getArticleURL(M.MVz.VOICE_VIDEO_TROUBLESHOOTING),
                    children: L.intl.string(L.t.hvVgAZ),
                  }),
                ],
              }),
          ],
        });
      };
      var ei = n(75811),
        es = n(209426);
      function er(e) {
        let { channelId: t } = e,
          n = (0, a.bG)(
            [u.A],
            () => u.A.getSecureFramesState()?.epochAuthenticator,
          ),
          s = (0, V.z)({
            fingerprintBase64: n,
            chunkSize: 5,
            desiredLength: 30,
          }),
          [r, o] = i.useState(!1),
          d = i.useMemo(() => s?.join(" "), [s]),
          h = i.useCallback(() => {
            null != d &&
              (0, O.C)(d, () => {
                o(!0),
                  (0, p.k0)({ channelId: t }),
                  setTimeout(() => o(!1), 2e3);
              });
          }, [t, d]);
        return (0, l.jsxs)("div", {
          className: es.kL,
          children: [
            (0, l.jsx)(c.D, {
              variant: "text-sm/bold",
              color: "text-strong",
              children: L.intl.string(L.t.cTQI5t),
            }),
            (0, l.jsx)(F.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: L.intl.format(L.t.wKxADe, { helpArticle: (0, B.aW)() }),
            }),
            (0, l.jsx)("div", {
              className: es.on,
              children: (0, l.jsx)(ei.j, {
                chunks: s,
                columns: 3,
                className: es.lu,
              }),
            }),
            null != s &&
              (0, l.jsxs)($.D, {
                className: en.n2,
                onClick: h,
                children: [
                  (0, l.jsx)("div", {
                    className: r ? en.Dx : en.t6,
                    children: (0, l.jsx)(J.$, {
                      icon: T.T,
                      text: L.intl.string(L.t.OpuAlK),
                      variant: "secondary",
                      size: "sm",
                      fullWidth: !0,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: r ? en.t6 : en.Dx,
                    children: (0, l.jsx)(J.$, {
                      icon: Q.y,
                      text: L.intl.string(L.t.t5VZ88),
                      variant: "secondary",
                      size: "sm",
                      fullWidth: !0,
                    }),
                  }),
                ],
              }),
            (0, l.jsx)("hr", { className: en.me }),
            (0, l.jsx)(F.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: L.intl.string(L.t.B9JNsl),
            }),
            (0, l.jsxs)(ee.Z, {
              type: ee.Z.Types.SUCCESS,
              className: en.g4,
              children: [
                (0, l.jsx)(E.X, {
                  size: "xxs",
                  color: v.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
                (0, l.jsx)(F.E, {
                  variant: "text-xs/medium",
                  color: "text-feedback-positive",
                  children: L.intl.string(L.t["3BogKe"]),
                }),
              ],
            }),
          ],
        });
      }
      let ea = (0, n(250105).Ay)({
        name: "2026-04-rtc-voice-details-refresh",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
      });
      var eo = n(172115),
        ec = n(9934),
        ed = n(824078);
      function eu() {
        return (0, a.cf)([u.A], () => ({
          connectionState: u.A.getState(),
          hostname: u.A.getHostname(),
          averagePing: u.A.getAveragePing(),
          lastPing: u.A.getLastPing(),
          outboundLossRate: u.A.getOutboundLossRate(),
          pings: u.A.getPings(),
        }));
      }
      function eh(e) {
        return (0, a.cf)([g.A], () => ({
          connectionState: g.A.getConnectionState(e),
          hostname: g.A.getHostname(e),
          averagePing: g.A.getAveragePing(e),
          lastPing: g.A.getLastPing(e),
          pings: g.A.getPings(),
          outboundLossRate: g.A.getOutboundLossRate(e),
        }));
      }
      function eg(e) {
        let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
          s = eh(t);
        return (0, l.jsx)(el, { ...s, closePopout: i, connectionTypeText: n });
      }
      function ep(e) {
        let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
          s = eh(t);
        return (0, l.jsx)(G, { ...s, closePopout: i, connectionTypeText: n });
      }
      function em(e) {
        let { closePopout: t, connectionTypeText: n } = e,
          i = eu();
        return (0, l.jsx)(el, { ...i, closePopout: t, connectionTypeText: n });
      }
      function ex(e) {
        let { closePopout: t, connectionTypeText: n } = e,
          i = eu();
        return (0, l.jsx)(G, { ...i, closePopout: t, connectionTypeText: n });
      }
      function eN(e) {
        let { channelId: t, isOverlay: n, lobbyId: i, closePopout: s } = e,
          r = (0, x.k)({ channelId: t })
            ? L.intl.string(L.t["3BogKe"])
            : L.intl.string(L.t.ETIVvg);
        return n
          ? (0, l.jsx)(eg, {
              lobbyId: i,
              closePopout: s,
              connectionTypeText: r,
            })
          : (0, l.jsx)(em, { closePopout: s, connectionTypeText: r });
      }
      function ef(e) {
        let { channelId: t, isOverlay: n, lobbyId: i, closePopout: s } = e,
          r = (0, x.k)({ channelId: t })
            ? L.intl.string(L.t["3BogKe"])
            : L.intl.string(L.t.ETIVvg);
        return n
          ? (0, l.jsx)(ep, {
              lobbyId: i,
              closePopout: s,
              connectionTypeText: r,
            })
          : (0, l.jsx)(ex, { closePopout: s, connectionTypeText: r });
      }
      function eC(e) {
        let [t, n] = i.useState(W.Rj.RTC_DEBUG_PANEL),
          s = (0, d.GV)(),
          a = [
            { id: W.Rj.RTC_DEBUG_PANEL, content: (0, l.jsx)(eN, { ...e }) },
            {
              id: W.Rj.RTC_SECURE_FRAMES,
              content: (0, l.jsx)(er, { channelId: e.channelId }),
            },
          ];
        i.useEffect(() => {
          (0, p.Hg)({ channelId: e.channelId, selectedTab: t });
        }, [e.channelId, t]);
        let c = (0, m.c)();
        return (
          i.useEffect(() => {
            c && n(W.Rj.RTC_DEBUG_PANEL);
          }, [c]),
          (0, l.jsxs)("div", {
            className: r()(ed.popover, ec.kL),
            children: [
              (0, l.jsxs)(o.V, {
                className: ec.vR,
                selectedItem: t,
                type: "top",
                look: "brand",
                onItemSelect: n,
                children: [
                  (0, l.jsx)(o.V.Item, {
                    id: W.Rj.RTC_DEBUG_PANEL,
                    className: ec.YU,
                    children: L.intl.string(L.t.MBY1Pm),
                  }),
                  c
                    ? null
                    : (0, l.jsx)(o.V.Item, {
                        id: W.Rj.RTC_SECURE_FRAMES,
                        className: ec.YU,
                        children: L.intl.string(L.t.zC6o3s),
                      }),
                ],
              }),
              (0, l.jsx)("div", {
                className: ec.SZ,
                children: a.map((e) => {
                  let { id: n, content: i } = e;
                  return (0, l.jsx)(
                    o.V.Panel,
                    {
                      id: n,
                      "aria-labelledby": s,
                      className: n !== t ? ec._t : void 0,
                      children: i,
                    },
                    n,
                  );
                }),
              }),
            ],
          })
        );
      }
      function eA(e) {
        let t = (0, a.bG)([h.A], () => h.A.hasVideo(e.channelId)),
          [n, s] = i.useState(W.Rj.RTC_DEBUG_PANEL),
          r = (0, d.GV)(),
          u = i.useMemo(() => {
            switch (n) {
              case W.Rj.RTC_DEBUG_PANEL:
                return (0, l.jsx)(ef, { ...e });
              case W.Rj.RTC_SECURE_FRAMES:
                return (0, l.jsx)(Y, { channelId: e.channelId });
            }
          }, [e, n]);
        i.useEffect(() => {
          (0, p.Hg)({ channelId: e.channelId, selectedTab: n });
        }, [e.channelId, n]);
        let g = (0, m.c)();
        return (
          i.useEffect(() => {
            g && s(W.Rj.RTC_DEBUG_PANEL);
          }, [g]),
          (0, l.jsxs)("div", {
            className: eo.kL,
            children: [
              (0, l.jsx)(c.D, {
                className: eo.DD,
                variant: "heading-lg/bold",
                color: "text-strong",
                children: t
                  ? L.intl.string(L.t.IlHdW8)
                  : L.intl.string(L.t.WsOisp),
              }),
              (0, l.jsxs)(o.V, {
                className: eo.vR,
                selectedItem: n,
                type: "top",
                look: "brand",
                onItemSelect: s,
                children: [
                  (0, l.jsx)(o.V.Item, {
                    id: W.Rj.RTC_DEBUG_PANEL,
                    className: eo.YU,
                    children: L.intl.string(L.t.MBY1Pm),
                  }),
                  g
                    ? null
                    : (0, l.jsx)(o.V.Item, {
                        id: W.Rj.RTC_SECURE_FRAMES,
                        className: eo.YU,
                        children: L.intl.string(L.t.zC6o3s),
                      }),
                ],
              }),
              (0, l.jsx)(o.V.Panel, {
                id: n,
                "aria-labelledby": r,
                children: u,
              }),
            ],
          })
        );
      }
      function eE(e) {
        return (0, x.k)({ channelId: e.channelId })
          ? (0, l.jsx)(eA, { ...e })
          : (0, l.jsx)("div", {
              className: eo.L3,
              children: (0, l.jsx)("section", {
                className: eo.J8,
                children: (0, l.jsx)(ef, { ...e }),
              }),
            });
      }
      function ev(e) {
        return (0, x.k)({ channelId: e.channelId })
          ? (0, l.jsx)(eC, { ...e })
          : (0, l.jsx)("div", {
              className: r()(ed.popover, ec.L3),
              children: (0, l.jsx)(eN, { ...e }),
            });
      }
      function e_(e) {
        return ea.useConfig({ location: "RTCConnectionPopout" }).enabled
          ? (0, l.jsx)(ev, { ...e })
          : (0, l.jsx)(eE, { ...e });
      }
    },
    999751(e, t, n) {
      n.d(t, { A: () => y });
      var l = n(627968),
        i = n(64700),
        s = n(503698),
        r = n.n(s),
        a = n(990078),
        o = n(200192),
        c = n(526701),
        d = n(522937),
        u = n(653766),
        h = n(922016),
        g = n(939249),
        p = n(793574),
        m = n(384059),
        x = n(917592),
        N = n(830618),
        f = n(834730),
        C = n(29160),
        A = n(985018),
        E = n(60062);
      let v = function (e) {
        let {
            className: t,
            hasVideo: n,
            text: i,
            hasConnectedChannel: s,
            textVariant: a = "text-md/medium",
          } = e,
          o = n ? A.intl.string(A.t.IlHdW8) : A.intl.string(A.t.WsOisp);
        return (0, l.jsx)(C.A, {
          className: r()(t, E.H),
          hoverText: s
            ? (0, l.jsx)(f.E, {
                variant: a,
                color: "currentColor",
                children: o,
              })
            : null,
          children: (0, l.jsx)(f.E, {
            variant: a,
            color: "currentColor",
            children: i,
          }),
        });
      };
      var _ = n(652215),
        I = n(648881);
      let T = {
          [_.vkP.CONNECTED]: I.nf,
          [_.vkP.CONNECTING]: I._6,
          [_.vkP.ERROR]: I.Il,
        },
        S = {
          [_.bFR.FINE]: I.LP,
          [_.bFR.AVERAGE]: I.mq,
          [_.bFR.BAD]: I.yA,
          [_.bFR.UNKNOWN]: null,
        },
        R = {
          [_.bFR.FINE]: o.Q,
          [_.bFR.AVERAGE]: c.j,
          [_.bFR.BAD]: d.R,
          [_.bFR.UNKNOWN]: u.e,
        };
      function j(e) {
        let { quality: t, largePing: n, ...i } = e,
          s = R[t];
        return (0, l.jsx)(s, { className: r()(I.hU, { [I.kV]: n }), ...i });
      }
      function y(e) {
        let {
            quality: t,
            lastPing: n,
            state: s,
            className: o,
            children: c,
            channelId: d,
            childrenAsSubtitle: u,
            connectionStatusTextVariant: f,
            hasVideo: C,
          } = e,
          A = i.useRef(null),
          E = s === _.S7L.RTC_CONNECTED,
          R = i.useCallback(
            (e) => (0, l.jsx)(N.A, { ...e, channelId: d }),
            [d],
          ),
          { connectionStatus: y, connectionStatusText: D } = x.A.getStatus(
            s,
            C,
          );
        return (0, l.jsxs)("div", {
          className: I.pe,
          children: [
            (0, l.jsx)("div", {
              className: r()(I.yH, S[t], o),
              ref: A,
              children: (0, l.jsx)(h.Y, {
                targetElementRef: A,
                renderPopout: R,
                position: "top",
                children: (e) => {
                  let { onClick: i } = e;
                  return (0, l.jsxs)(l.Fragment, {
                    children: [
                      E &&
                        (0, l.jsx)(a.m, {
                          text:
                            t !== _.bFR.UNKNOWN && null != n
                              ? `${n.toFixed(0)} ms`
                              : null,
                          children: (0, l.jsx)(g.D, {
                            className: I.xr,
                            onClick: (e) => {
                              (0, m.X)(p.A.RTC_PANEL, m.O.CONNECTION_STATUS),
                                i(e);
                            },
                            children: (0, l.jsx)(j, {
                              quality: t,
                              largePing: u,
                            }),
                          }),
                        }),
                      (0, l.jsxs)("div", {
                        className: I.ei,
                        children: [
                          (0, l.jsx)(g.D, {
                            onClick: (e) => {
                              (0, m.X)(p.A.RTC_PANEL, m.O.CONNECTION_STATUS),
                                i(e);
                            },
                            children: (0, l.jsx)(v, {
                              text: D,
                              textVariant: f,
                              hasVideo: C,
                              className: T[y],
                              hasConnectedChannel: null != d,
                            }),
                          }),
                          u ? c : null,
                        ],
                      }),
                    ],
                  });
                },
              }),
            }),
            u ? null : c,
          ],
        });
      }
    },
    229659(e, t, n) {
      n.d(t, { A: () => o });
      var l = n(627968),
        i = n(64700),
        s = n(502671),
        r = n(661531),
        a = n(602853);
      function o(e) {
        let t = (0, i.useRef)(null),
          [n, o] = (0, i.useState)(null),
          [c] = (0, i.useState)(() => new s.TimelineDataSeries()),
          d = (0, a.r)(r.A.colors.BACKGROUND_BASE_LOW).hsl(),
          u = (0, a.r)(r.A.colors.TEXT_DEFAULT).hsl(),
          h = (0, a.r)(r.A.colors.BACKGROUND_MOD_MUTED).hsl(),
          g = (0, a.r)(r.A.unsafe_rawColors.BRAND_500).hsl();
        (0, i.useEffect)(() => {
          let e = t.current;
          if (null == e) return;
          let n = new s.TimelineGraphView(e, window.devicePixelRatio ?? 1);
          (n.backgroundColor = d),
            (n.textColor = u),
            (n.gridColor = h),
            (n.timeOptions = { timeStyle: "short" }),
            (n.fontFamily = "gg sans"),
            (n.fontSize = 11),
            c.setColor(g),
            n.addDataSeries(c),
            n.updateEndDate(),
            o(n);
        }, [t, d, g, h, u, c]);
        let p = e.converter,
          m =
            null != p
              ? e.dataPoints.map((e) => ({ ...e, value: p(e.value) }))
              : e.dataPoints;
        c.setPoints(m), n?.updateEndDate();
        let x = { width: e.width, height: e.height };
        return (0, l.jsx)(
          "canvas",
          { style: x, width: e.width, height: e.height, ref: t },
          "canvas",
        );
      }
    },
    167579(e, t, n) {
      n.d(t, { A: () => a });
      var l = n(17928),
        i = n(495544),
        s = n(51760),
        r = n(977997);
      function a(e) {
        return (0, l.cf)(
          [r.A, s.Ay, i.default],
          () =>
            (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r.A,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : s.Ay,
                l =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : i.default,
                a =
                  null != e ? t.getVoiceState(e.getGuildId(), l.getId()) : null;
              return { selfDeaf: n.isSelfDeaf(), deaf: a?.deaf ?? !1 };
            })(e, r.A, s.Ay, i.default),
          [e],
        );
      }
    },
    804980(e, t, n) {
      n.d(t, { Ay: () => F, LN: () => k });
      var l = n(627968),
        i = n(64700),
        s = n(503698),
        r = n.n(s),
        a = n(17928),
        o = n(990078),
        c = n(778712),
        d = n(834730),
        u = n(821609),
        h = n(212245),
        g = n(933958),
        p = n(62583),
        m = n(878549),
        x = n(969151),
        N = n(550151),
        f = n(902439),
        C = n(283488),
        A = n(732637),
        E = n(315206),
        v = n(104171),
        _ = n(594007),
        I = n(227042),
        T = n(793574),
        S = n(688810),
        R = n(698141),
        j = n(429913),
        y = n(567249),
        D = n(495544),
        O = n(186111),
        P = n(287809),
        b = n(403362),
        M = n(562153),
        w = n(985018),
        L = n(301094);
      let U = ["embedded_background"];
      function k(e) {
        let { avatarSize: t, guildId: n, channelId: i, users: s } = e,
          r = t ?? c._3.SIZE_32,
          a = (0, c.FT)(r);
        return (0, l.jsx)(v.Ay, {
          size: a,
          guildId: n,
          users: s,
          max: 4,
          renderUser: (e) => {
            if (null == e || e === v.mt) return null;
            let t = M.Ay.getName(n, i, e);
            return (0, l.jsx)(
              o.m,
              {
                text: t,
                children: (0, l.jsx)(
                  "img",
                  { src: e.getAvatarURL(n, a), alt: t, className: L.my },
                  e.id,
                ),
              },
              e.id,
            );
          },
        });
      }
      function G(e) {
        let { participants: t, application: n, channel: s, width: o } = e,
          x = o > 400 ? 2 : +(o > 300),
          [f] =
            o > 400
              ? [c._3.SIZE_56, 56]
              : o > 300
                ? [c._3.SIZE_32, 32]
                : [c._3.SIZE_24, 24],
          C = (0, a.yK)([P.default, D.default], () =>
            Array.from(t)
              .map((e) =>
                (0, m.S)(e, D.default) ? null : P.default.getUser(e.userId),
              )
              .filter(b.Vq),
          ),
          A = (0, a.bG)(
            [g.Ay],
            () =>
              g.Ay.getEmbeddedActivitiesForChannel(s.id).find(
                (e) => e.applicationId === n.id,
              ) ??
              g.Ay.getEmbeddedActivitiesForStartingChannel(s.id).find(
                (e) => e.applicationId === n.id,
              ),
          ),
          { analyticsLocations: E } = (0, S.Ay)(),
          v = (0, h.p)(),
          _ = M.Ay.getName(s.getGuildId(), s.id, C?.[0]),
          I =
            (0, N.vG)({
              userId: P.default.getCurrentUser()?.id,
              channelId: s.id,
              application: n,
            }) === N.Gy.CAN_JOIN,
          T = s.getGuildId() ?? void 0,
          j = i.useId(),
          y = n.id,
          O = i.useMemo(() => ({ channel: s, type: "channel" }), [s]),
          { submitting: U } = (0, R.A)({
            applicationId: y,
            context: O,
            launchingComponentId: j,
          });
        return (0, l.jsxs)("div", {
          className: L.Yi,
          children: [
            (0, l.jsx)(k, {
              avatarSize: f,
              guildId: T,
              channelId: s.id,
              users: C,
            }),
            (0, l.jsx)(d.E, {
              className: r()(L.m_, { [L.EX]: 0 === x, [L.Y]: 1 === x }),
              variant: "text-sm/normal",
              children:
                C.length > 1
                  ? w.intl.formatToPlainString(w.t.cpe6CK, {
                      username: _,
                      count: C.length - 1,
                    })
                  : w.intl.formatToPlainString(w.t["7Uuia2"], { username: _ }),
            }),
            (0, l.jsx)(d.E, {
              className: r()(L.wx, { [L.EX]: 0 === x, [L.Y]: 1 === x }),
              variant: "text-sm/normal",
              children: n.name,
            }),
            (0, l.jsx)("div", {
              className: L.Uo,
              children: I
                ? (0, l.jsx)(u.$, {
                    text: w.intl.string(w.t["4i2vj+"]),
                    onClick: function (e) {
                      e.stopPropagation(),
                        null != A &&
                          (0, p.A)({
                            applicationId: A.applicationId,
                            activityChannelId: s.id,
                            locationObject: v.location,
                            analyticsLocations: E,
                            componentId: j,
                          });
                    },
                    loading: U,
                    size: 2 === x ? "md" : "sm",
                    variant: "overlay-primary",
                  })
                : null,
            }),
          ],
        });
      }
      function F(e) {
        let {
            participant: t,
            width: n,
            selected: s,
            interactible: r,
            channel: o,
          } = e,
          { analyticsLocations: c } = (0, S.Ay)(T.A.ACTIVITY_TILE),
          { applicationId: d } = t,
          u = (0, f.A)(),
          h =
            null != u && (0, x.H)(u.location) === o.id && u.applicationId === d,
          [g] = (0, j.A)([d]),
          { url: p } = (0, C.A)({ applicationId: d, names: U, size: 1024 }),
          m = !s && h,
          N = !h,
          v = !h && !s,
          R = (0, a.bG)([O.A, y.A], () =>
            (0, I.A)({ LayerStore: O.A, PopoutWindowStore: y.A }),
          );
        return (
          i.useEffect(() => {
            if (m && null != u && !R) {
              let e = (0, _.A)(u.location.id, u.applicationId);
              (0, E.cK)(e);
            }
          }, [m, u, R]),
          (0, l.jsx)(S.f5, {
            value: c,
            children: (0, l.jsxs)("div", {
              className: L.kL,
              children: [
                m &&
                  null != u &&
                  (0, l.jsx)(A.A, {
                    className: L.pU,
                    embedId: (0, _.A)(u.location.id, d),
                  }),
                N && null != g && null != p && "" !== p
                  ? (0, l.jsx)("img", { className: L.j0, alt: g.name, src: p })
                  : null,
                v &&
                  null != g &&
                  (0, l.jsx)(G, {
                    width: n,
                    channel: o,
                    participants: t.participants,
                    application: g,
                  }),
                r || N ? null : (0, l.jsx)("div", { className: L.OB }),
              ],
            }),
          })
        );
      }
    },
    572487(e, t, n) {
      n.d(t, { A: () => d });
      var l = n(17928),
        i = n(228366),
        s = n(652215);
      let r = {};
      function a(e) {
        let t = r[(e = e ?? "null")];
        return (
          null == t &&
            (t = r[e] =
              {
                state: s.S7L.DISCONNECTED,
                quality: s.bFR.UNKNOWN,
                pings: [],
                hostname: null,
                lossRate: null,
              }),
          t
        );
      }
      function o(e, t, n) {
        let l = r[(e = e ?? "null")];
        return null != l ? t(l) : n;
      }
      class c extends l.Ay.Store {
        static displayName = "OverlayRTCConnectionStore";
        getConnectionState(e) {
          return o(
            e,
            (e) => {
              let { state: t } = e;
              return t;
            },
            s.S7L.DISCONNECTED,
          );
        }
        getQuality(e) {
          return o(
            e,
            (e) => {
              let { quality: t } = e;
              return t;
            },
            s.bFR.UNKNOWN,
          );
        }
        getHostname(e) {
          return o(
            e,
            (e) => {
              let { hostname: t } = e;
              return t;
            },
            null,
          );
        }
        getPings(e) {
          return o(
            e,
            (e) => {
              let { pings: t } = e;
              return t;
            },
            [],
          );
        }
        getAveragePing(e) {
          let t = this.getPings(e);
          return 0 === t.length
            ? 0
            : t.reduce((e, t) => e + t.value, 0) / t.length;
        }
        getLastPing(e) {
          let t = this.getPings(e);
          return 0 === t.length ? 0 : t[t.length - 1]?.value;
        }
        getOutboundLossRate(e) {
          return o(
            e,
            (e) => {
              let { lossRate: t } = e;
              return t;
            },
            null,
          );
        }
      }
      let d = new c(i.h, {
        OVERLAY_INITIALIZE: function (e) {
          r = e.rtcConnectionStates;
        },
        RTC_CONNECTION_STATE: function (e) {
          if (null != e.streamKey) return !1;
          let t = a(e.lobbyId);
          (t.state = e.state), (t.hostname = e.hostname);
        },
        RTC_CONNECTION_PING: function (e) {
          let t = a(e.lobbyId);
          (t.pings = e.pings), (t.quality = e.quality);
        },
        RTC_CONNECTION_LOSS_RATE: function (e) {
          a(e.lobbyId).lossRate = e.lossRate;
        },
      });
    },
    917592(e, t, n) {
      n.d(t, { A: () => s });
      var l = n(652215),
        i = n(985018);
      let s = {
        getStatus: function (e) {
          let t,
            n,
            s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          switch (e) {
            case l.S7L.CONNECTING:
              (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.MzW9sN));
              break;
            case l.S7L.AUTHENTICATING:
              (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.GxXwE2));
              break;
            case l.S7L.AWAITING_ENDPOINT:
              (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.xEbu0Q));
              break;
            case l.S7L.RTC_CONNECTED:
              (t = l.vkP.CONNECTED),
                (n = s ? i.intl.string(i.t.HtVOdd) : i.intl.string(i.t.daXg45));
              break;
            case l.S7L.RTC_CONNECTING:
              (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.Gp51dl));
              break;
            case l.S7L.ICE_CHECKING:
              (t = l.vkP.CONNECTING), (n = i.intl.string(i.t["rdCyA/"]));
              break;
            case l.S7L.DTLS_CONNECTING:
              (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.UvB3gV));
              break;
            case l.S7L.NO_ROUTE:
              (t = l.vkP.ERROR), (n = i.intl.string(i.t.mGhOIi));
              break;
            case l.S7L.RTC_DISCONNECTED:
              (t = l.vkP.ERROR), (n = i.intl.string(i.t.M7LDmE));
              break;
            case l.S7L.DISCONNECTED:
            default:
              (t = l.vkP.ERROR), (n = i.intl.string(i.t.NLKQbx));
          }
          return { connectionStatus: t, connectionStatusText: n };
        },
        getShortHostname: function (e) {
          return null == e ? "" : e.split(".")[0];
        },
      };
    },
    780338(e, t, n) {
      n.d(t, { a: () => a });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, l.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.13 16.13c.11.27.46.28.66.08L15.73 4.27a.47.47 0 0 0-.07-.74 6.97 6.97 0 0 0-1.35-.64.62.62 0 0 1-.38-.43 2 2 0 0 0-3.86 0 .62.62 0 0 1-.38.43A7 7 0 0 0 5 9.5v2.09a.5.5 0 0 1-.13.33l-1.1 1.22A3 3 0 0 0 3 15.15v.28c0 .24.04.48.13.7ZM18.64 9.36c.13-.13.36-.05.36.14v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-.46 0-.9-.01-1.33-.03a.48.48 0 0 1-.3-.83l8.27-8.28ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.84 24.84 0 0 1-5.64 0Z",
            className: c,
          }),
        });
      };
    },
    888366(e, t, n) {
      n.d(t, { g: () => a });
      var l = n(627968);
      n(64700);
      var i = n(661531);
      if (21552 == n.j) var s = n(996682);
      if (21552 == n.j) var r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, l.jsxs)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              fill: "string" == typeof o ? o : o.css,
              className: c,
            }),
            (0, l.jsx)("path", {
              d: "M20.76 12.57c.4.3 1.23.13 1.24-.37V12a10 10 0 1 0-18.44 5.36c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 4.76-2.43Z",
              fill: "string" == typeof o ? o : o.css,
              className: c,
            }),
          ],
        });
      };
    },
    526701(e, t, n) {
      n.d(t, { j: () => a });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.ICON_FEEDBACK_WARNING,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, l.jsxs)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M3 7a1 1 0 0 0 0 2 12 12 0 0 1 12 12 1 1 0 1 0 2 0A14 14 0 0 0 3 7Z",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
              className: c,
            }),
          ],
        });
      };
    },
    522937(e, t, n) {
      n.d(t, { R: () => a });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.ICON_FEEDBACK_CRITICAL,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, l.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M2 13a1 1 0 0 1 1-1 9 9 0 0 1 9 9 1 1 0 1 1-2 0 7 7 0 0 0-7-7 1 1 0 0 1-1-1ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
            className: c,
          }),
        });
      };
    },
    200192(e, t, n) {
      n.d(t, { Q: () => a });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.ICON_FEEDBACK_POSITIVE,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, l.jsxs)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M2 3a1 1 0 0 1 1-1 19 19 0 0 1 19 19 1 1 0 1 1-2 0A17 17 0 0 0 3 4a1 1 0 0 1-1-1Z",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M2 8a1 1 0 0 1 1-1 14 14 0 0 1 14 14 1 1 0 1 1-2 0A12 12 0 0 0 3 9a1 1 0 0 1-1-1Z",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M3 12a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
              className: c,
            }),
          ],
        });
      };
    },
    653766(e, t, n) {
      n.d(t, { e: () => a });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, l.jsxs)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M2 3a1 1 0 0 1 1-1c6.92 0 12.97 3.7 16.3 9.22.22.37-.15.86-.6.9-.2.02-.4.06-.6.12a.58.58 0 0 1-.67-.22C14.43 7.2 9.1 4 3 4a1 1 0 0 1-1-1ZM15.48 15.15a.5.5 0 0 0 .02-.47A14 14 0 0 0 3 7a1 1 0 0 0 0 2 12 12 0 0 1 10.95 7.09c.18.39.74.44.96.07l.57-1.01ZM2 13a1 1 0 0 1 1-1 9 9 0 0 1 9 9 1 1 0 1 1-2 0 7 7 0 0 0-7-7 1 1 0 0 1-1-1ZM2 17.83c0-.46.37-.83.83-.83C5.13 17 7 18.87 7 21.17c0 .46-.37.83-.83.83H3a1 1 0 0 1-1-1v-3.17Z",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    173054(e, t, n) {
      n.d(t, { M: () => a });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, l.jsxs)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM16.62 13.17c-.22.28-.65.37-.92.14-.34-.3-.7-.57-1.09-.82-.52-.33-.7-1.05-.47-1.63.11-.27.2-.57.26-.87.11-.54.55-1 1.1-.92 1.27.16 2.44.65 3.42 1.37.46.34-.31 1.53-.85 1.7a2.99 2.99 0 0 0-1.45 1.03ZM15.19 15.61c.13.16.02.39-.19.39a3 3 0 0 0-1.52 5.59c.2.12.26.41.02.41h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5a7.5 7.5 0 0 1 13.19-4.89Z",
              fill: "string" == typeof o ? o : o.css,
              className: c,
            }),
            (0, l.jsx)("path", {
              d: "M14.97 20a1 1 0 0 1 .03-2h5.59l-2-2-.3-.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3h-5.62ZM9.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15.5 22Z",
              fill: "string" == typeof o ? o : o.css,
              className: c,
            }),
          ],
        });
      };
    },
    446576(e, t, n) {
      n.d(t, { g: () => a });
      var l = n(627968);
      n(64700);
      var i = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...d
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, l.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M15 4v3.59l5.3-5.3a1 1 0 1 1 1.4 1.42L16.42 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0ZM9 16.41l-5.3 5.3a1 1 0 0 1-1.4-1.42L7.58 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.59Z",
            className: c,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=94842.feb33a78aa03f010.js.map
