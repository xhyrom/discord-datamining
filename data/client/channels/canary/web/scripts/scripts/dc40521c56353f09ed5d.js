"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37229"],
  {
    280570: function (e, E, _) {
      _.d(E, {
        Yw: function () {
          return A;
        },
        fc: function () {
          return r;
        },
        qd: function () {
          return a;
        },
      });
      var t = _(544891),
        T = _(570140),
        I = _(626135),
        n = _(292352),
        s = _(981631);
      async function A(e, E) {
        await t.tn
          .patch({
            url: s.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: e, link_status: E },
          })
          .then((e) => {
            let { body: E } = e;
            return (
              T.Z.dispatch({
                type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
                linkedUsers: E,
              }),
              E
            );
          });
      }
      async function r(e) {
        await t.tn
          .del({
            url: s.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: e },
          })
          .then((E) => {
            let { body: _ } = E;
            return (
              T.Z.dispatch({
                type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
                linkedUsers: _,
                deletedUserId: e,
              }),
              _
            );
          });
      }
      async function a() {
        await t.tn.get({ url: s.ANM.FAMILY_CENTER_LINK_CODE }).then((e) => {
          let { body: E } = e,
            _ = E.link_code;
          return (
            T.Z.dispatch({
              type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
              linkCode: _,
            }),
            _
          );
        });
      }
      E.ZP = {
        async initialPageLoad() {
          var e, E, _, I;
          T.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
          let { body: n } = await t.tn.get({
              url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
            }),
            { teen_audit_log: A, linked_users: r, users: a } = n,
            i = {
              teenId: null == A ? void 0 : A.teen_user_id,
              rangeStartId: null == A ? void 0 : A.range_start_id,
              totals:
                null !== (e = null == A ? void 0 : A.totals) && void 0 !== e
                  ? e
                  : {},
              actions:
                null !== (E = null == A ? void 0 : A.actions) && void 0 !== E
                  ? E
                  : [],
              users:
                null !== (_ = null == A ? void 0 : A.users) && void 0 !== _
                  ? _
                  : [],
              guilds:
                null !== (I = null == A ? void 0 : A.guilds) && void 0 !== I
                  ? I
                  : [],
            };
          return (
            T.Z.dispatch({
              type: "FAMILY_CENTER_INITIAL_LOAD",
              familyCenterTeenActivity: i,
              linkedUsers: r,
              users: a,
            }),
            i
          );
        },
        async fetchLinkedUsers() {
          let { body: e } = await t.tn.get({
              url: s.ANM.FAMILY_CENTER_LINKED_USERS,
            }),
            E = { linkedUsers: e.linked_users, users: e.users };
          return (
            T.Z.dispatch({
              type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS",
              ...E,
            }),
            E
          );
        },
        async requestLink(e, E) {
          let { body: _ } = await t.tn.post({
              url: s.ANM.FAMILY_CENTER_LINKED_USERS,
              body: { recipient_id: e, code: E },
            }),
            I = { linkedUsers: _.linked_users, users: _.users };
          return (
            T.Z.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...I }),
            I
          );
        },
        async fetchTeenActivity(e) {
          T.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
          let E = s.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: _ } = await t.tn.get({ url: E }),
            I = _.teen_audit_log,
            n = {
              teenId: I.teen_user_id,
              rangeStartId: I.range_start_id,
              totals: I.totals,
              actions: I.actions,
              users: I.users,
              guilds: I.guilds,
            };
          return (
            T.Z.dispatch({
              type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
              familyCenterTeenActivity: n,
            }),
            n
          );
        },
        async fetchMoreTeenActivity(e, E, _, A) {
          let { body: r } = await t.tn.get({
              url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, E, _, A),
            }),
            { teen_audit_log: a } = r,
            i = {
              teenId: a.teen_user_id,
              rangeStartId: a.range_start_id,
              actions: a.actions,
              users: a.users,
              guilds: a.guilds,
            };
          return (
            I.default.track(s.rMx.FAMILY_CENTER_ACTION, {
              action: n.YC.LoadMore,
              selected_teen_id: e,
              action_display_type: E,
            }),
            T.Z.dispatch({
              type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
              familyCenterTeenActivity: i,
            }),
            a
          );
        },
        selectTab(e) {
          T.Z.dispatch({ type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: e });
        },
      };
    },
    292352: function (e, E, _) {
      _.d(E, {
        AG: function () {
          return g;
        },
        MY: function () {
          return n;
        },
        Mu: function () {
          return r;
        },
        Of: function () {
          return U;
        },
        QH: function () {
          return A;
        },
        TX: function () {
          return b;
        },
        Wz: function () {
          return w;
        },
        YC: function () {
          return i;
        },
        _6: function () {
          return a;
        },
        _w: function () {
          return V;
        },
        dG: function () {
          return s;
        },
        f2: function () {
          return G;
        },
        i0: function () {
          return p;
        },
        iB: function () {
          return Z;
        },
        ip: function () {
          return P;
        },
        ix: function () {
          return v;
        },
        ne: function () {
          return I;
        },
        tx: function () {
          return m;
        },
        vH: function () {
          return h;
        },
        zE: function () {
          return y;
        },
      }),
        _(47120);
      var t,
        T,
        I,
        n,
        s,
        A,
        r,
        a,
        i,
        C,
        N,
        o,
        u,
        S,
        M,
        R,
        l,
        d,
        L,
        D,
        Y,
        c,
        O = _(860911),
        f = _(70956),
        F = _(689938);
      let U = 30 * f.Z.Millis.SECOND,
        g = 8,
        p = 3,
        y = 26,
        P = 64,
        V = (e, E) =>
          "https://discord.com/feature/family-center/my-family/"
            .concat(e, "/")
            .concat(E),
        Z = 4,
        G = 5 * f.Z.Millis.MINUTE,
        h = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        v = (0, O.Ft)(
          Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
          }),
          [":", "?", "@"],
        );
      ((o = t || (t = {}))[(o.DM_MESSAGE_SEND = 1)] = "DM_MESSAGE_SEND"),
        (o[(o.GDM_MESSAGE_SEND = 2)] = "GDM_MESSAGE_SEND"),
        (o[(o.MESSAGE_REACT = 3)] = "MESSAGE_REACT"),
        (o[(o.ADD_FRIEND = 4)] = "ADD_FRIEND"),
        (o[(o.SEND_CALL = 5)] = "SEND_CALL"),
        (o[(o.CALL_JOIN = 6)] = "CALL_JOIN"),
        (o[(o.GUILD_JOIN = 7)] = "GUILD_JOIN"),
        (o[(o.GUILD_MESSAGE_SEND = 8)] = "GUILD_MESSAGE_SEND"),
        (o[(o.GUILD_VC_JOIN = 9)] = "GUILD_VC_JOIN"),
        ((u = T || (T = {}))[(u.PARENT = 1)] = "PARENT"),
        (u[(u.CHILD = 2)] = "CHILD"),
        ((S = I || (I = {}))[(S.PENDING = 1)] = "PENDING"),
        (S[(S.ACTIVE = 2)] = "ACTIVE"),
        (S[(S.INACTIVE = 3)] = "INACTIVE"),
        (S[(S.DECLINED = 4)] = "DECLINED"),
        (S[(S.EXPIRED = 5)] = "EXPIRED"),
        ((M = n || (n = {}))[(M.USER_ADD = 1)] = "USER_ADD"),
        (M[(M.GUILD_ADD = 2)] = "GUILD_ADD"),
        (M[(M.USER_INTERACTION = 3)] = "USER_INTERACTION"),
        (M[(M.GUILD_INTERACTION = 4)] = "GUILD_INTERACTION"),
        (M[(M.USER_CALLED = 5)] = "USER_CALLED"),
        ((R = s || (s = {})).ACTIVITY = "ACTIVITY"),
        (R.REQUESTS = "REQUESTS"),
        (R.SETTINGS = "SETTINGS"),
        ((l = A || (A = {}))[(l.ACTIVITY = 0)] = "ACTIVITY"),
        (l[(l.REQUESTS = 1)] = "REQUESTS"),
        (l[(l.SETTINGS = 2)] = "SETTINGS"),
        ((d = r || (r = {})).SIDENAV = "SIDENAV"),
        (d.SETTINGS = "SETTINGS"),
        ((L = a || (a = {}))[(L.SIDENAV = 0)] = "SIDENAV"),
        (L[(L.SETTINGS = 1)] = "SETTINGS"),
        ((D = i || (i = {}))[(D.TabChange = 0)] = "TabChange"),
        (D[(D.ShowQRCodeModal = 1)] = "ShowQRCodeModal"),
        (D[(D.RevealQRCode = 2)] = "RevealQRCode"),
        (D[(D.ScanQRCodeButton = 3)] = "ScanQRCodeButton"),
        (D[(D.ScanQRCode = 4)] = "ScanQRCode"),
        (D[(D.LoadMore = 5)] = "LoadMore"),
        (D[(D.SelectTeen = 6)] = "SelectTeen"),
        (D[(D.HideQRCode = 7)] = "HideQRCode");
      let m = new Map([
        [
          3,
          {
            tooltipHeader: () =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_HEADER,
            tooltipDescription: (e) =>
              e
                ? F.Z.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT
                : F.Z.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
            sectionHeader: (e) =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_SECTION_HEADER.format(
                { count: e },
              ),
            sectionDescription: (e) =>
              e
                ? F.Z.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT
                : F.Z.Messages
                    .FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
            timestampFormatter: () => ({
              today:
                F.Z.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_TODAY,
              yesterday:
                F.Z.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_YESTERDAY,
              days: F.Z.Messages
                .FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_DAYS,
            }),
          },
        ],
        [
          5,
          {
            tooltipHeader: () =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_HEADER,
            tooltipDescription: (e) =>
              e
                ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT
                : F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
            sectionHeader: (e) =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_SECTION_HEADER.format(
                { count: e },
              ),
            sectionDescription: (e) =>
              e
                ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT
                : F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
            timestampFormatter: () => ({
              today:
                F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_TODAY,
              yesterday:
                F.Z.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_YESTERDAY,
              days: F.Z.Messages
                .FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_DAYS,
            }),
          },
        ],
        [
          1,
          {
            tooltipHeader: () =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_HEADER,
            tooltipDescription: (e) =>
              e
                ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT
                : F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
            sectionHeader: (e) =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_SECTION_HEADER.format(
                { count: e },
              ),
            sectionDescription: (e) =>
              e
                ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT
                : F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
            timestampFormatter: () => ({
              today:
                F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_TODAY,
              yesterday:
                F.Z.Messages
                  .FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_YESTERDAY,
              days: F.Z.Messages
                .FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_DAYS,
            }),
          },
        ],
        [
          2,
          {
            tooltipHeader: () =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_HEADER,
            tooltipDescription: (e) =>
              e
                ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT
                : F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN,
            sectionHeader: (e) =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_SECTION_HEADER.format(
                { count: e },
              ),
            sectionDescription: (e) =>
              e
                ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT
                : F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN,
          },
        ],
        [
          4,
          {
            tooltipHeader: () =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_HEADER,
            tooltipDescription: H,
            sectionHeader: (e) =>
              F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_SECTION_HEADER.format(
                { count: e },
              ),
            sectionDescription: H,
          },
        ],
      ]);
      function H(e, E) {
        return e
          ? E
            ? F.Z.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT_WITH_VC
            : F.Z.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT
          : E
            ? F.Z.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN_WITH_VC
            : F.Z.Messages
                .FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN;
      }
      ((Y = C || (C = {}))[(Y.CHECK = 0)] = "CHECK"),
        (Y[(Y.X = 1)] = "X"),
        ((c = N || (N = {}))[(c.GENERIC_ERROR = 0)] = "GENERIC_ERROR"),
        (c[(c.INELIGIBLE_FOR_FAMILY_CENTER = 1)] =
          "INELIGIBLE_FOR_FAMILY_CENTER"),
        (c[(c.PENDING_REQUEST_EXISTS = 2)] = "PENDING_REQUEST_EXISTS"),
        (c[(c.MAX_CONNECTIONS_REACHED = 3)] = "MAX_CONNECTIONS_REACHED");
      let b = () => ({
          seconds: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_SECONDS,
          minutes: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_MINUTES,
          hours: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_HOURS,
          yesterday: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_YESTERDAY,
          days: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DAYS,
          date: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DATE,
        }),
        w = () => ({
          seconds: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_SECONDS,
          minutes: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_MINUTES,
          hours: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_HOURS,
          yesterday: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_YESTERDAY,
          days: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DAYS,
          date: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DATE,
        });
    },
    735079: function (e, E, _) {
      _.d(E, {
        J: function () {
          return T;
        },
      });
      var t = _(601964);
      class T extends t.ZP {
        constructor(e) {
          var E, _, t;
          super(e),
            (E = this),
            (t = void 0),
            (_ = "approximateMemberCount") in E
              ? Object.defineProperty(E, _, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (E[_] = t),
            (this.approximateMemberCount = e.approximate_member_count);
        }
      }
    },
    914788: function (e, E, _) {
      _(724458), _(47120), _(653041);
      var t = _(133080),
        T = _(412788),
        I = _(594174),
        n = _(709054),
        s = _(280570),
        A = _(735079),
        r = _(546791),
        a = _(292352);
      function i(e, E, _) {
        return (
          E in e
            ? Object.defineProperty(e, E, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[E] = _),
          e
        );
      }
      let C = null,
        N = null,
        o = {},
        u = c(),
        S = O(),
        M = null,
        R = (function () {
          var e, E, _, t;
          return (null === (E = window) || void 0 === E
            ? void 0
            : null === (e = E.location) || void 0 === e
              ? void 0
              : e.pathname) === a.ix.FAMILY_CENTER_MY_FAMILY
            ? a.dG.REQUESTS
            : (null === (t = window) || void 0 === t
                  ? void 0
                  : null === (_ = t.location) || void 0 === _
                    ? void 0
                    : _.pathname) === a.ix.FAMILY_CENTER_SETTINGS
              ? a.dG.SETTINGS
              : a.dG.ACTIVITY;
        })(),
        l = !1,
        d = !1,
        L = null,
        D = null,
        Y = {};
      function c() {
        return {
          [a.MY.USER_ADD]: {},
          [a.MY.GUILD_ADD]: {},
          [a.MY.USER_INTERACTION]: {},
          [a.MY.GUILD_INTERACTION]: {},
          [a.MY.USER_CALLED]: {},
        };
      }
      function O() {
        return {
          [a.MY.USER_ADD]: 0,
          [a.MY.GUILD_ADD]: 0,
          [a.MY.USER_INTERACTION]: 0,
          [a.MY.GUILD_INTERACTION]: 0,
          [a.MY.USER_CALLED]: 0,
        };
      }
      function f() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          E = arguments.length > 1 ? arguments[1] : void 0;
        return (o =
          e.length > 0
            ? e.reduce((e, E) => ({ ...e, [E.user_id]: E }), {})
            : {});
      }
      function F(e) {
        void 0 !== e && (S = e);
      }
      function U(e, E) {
        let _ = E ? u : c();
        return (u = e.reduce((e, E) => {
          let t = E.display_type;
          return (
            void 0 !== _[t] &&
              void 0 === _[t][E.event_id] &&
              (e[t][E.event_id] = E),
            e
          );
        }, _));
      }
      function g(e) {
        Y = e.reduce((e, E) => ({ ...e, [E.id]: new A.J(E) }), Y);
      }
      function p() {
        d = !0;
      }
      function y(e) {
        let { linkedUsers: E, familyCenterTeenActivity: _ } = e,
          { actions: t, guilds: T, totals: I, teenId: s, rangeStartId: A } = _;
        (C = s),
          (N = A),
          U(t),
          F(I),
          g(T),
          f(E),
          (d = !1),
          (L = n.default.fromTimestamp(Date.now())),
          (l = !0);
      }
      function P(e) {
        let { linkedUsers: E } = e;
        f(E);
      }
      function V(e) {
        let { linkedUsers: E } = e;
        f(E);
      }
      function Z(e) {
        let { familyCenterTeenActivity: E } = e;
        if (void 0 === E) return;
        let {
          actions: _,
          totals: t,
          guilds: T,
          teenId: I,
          rangeStartId: s,
        } = E;
        (C = I),
          (N = s),
          U(_),
          F(t),
          g(T),
          (d = !1),
          (L = n.default.fromTimestamp(Date.now()));
      }
      function G(e) {
        let { familyCenterTeenActivity: E } = e,
          { actions: _, guilds: t } = E;
        U(_, !0), g(t);
      }
      function h(e) {
        let { linkedUsers: E } = e;
        f(E);
      }
      function v(e) {
        let { linkedUsers: E } = e;
        f(E, !0);
      }
      function m(e) {
        let { linkCode: E } = e;
        M = E;
      }
      function H(e) {
        let { tab: E } = e;
        R = E;
      }
      function b(e) {
        let { user: E } = e;
        if (void 0 === E.linked_users) return;
        let _ = I.default.getUsers();
        E.linked_users.some((e) => {
          let { user_id: E } = e;
          return void 0 === _[E];
        }) && E.linked_users.length > Object.keys(o).length
          ? s.ZP.fetchLinkedUsers()
          : f(E.linked_users);
      }
      function w(e) {
        var E;
        let { countryCode: _ } = e;
        if (null != _)
          D = null !== (E = (0, t.Zz)(_)) && void 0 !== E ? E : null;
      }
      function k() {
        (C = null),
          (N = null),
          (o = {}),
          (u = c()),
          (S = O()),
          (Y = {}),
          (d = !1),
          (L = null);
      }
      class Q extends T.Z {
        initialize() {
          this.waitFor(I.default);
        }
        loadCache() {
          let e = this.readSnapshot(Q.LATEST_SNAPSHOT_VERSION);
          if (null != e)
            f(e.linkedUsers),
              g(e.guilds),
              U(e.teenActivity),
              (S = e.teenActivityTotals.reduce((e, E) => {
                let [_, t] = E.split(":"),
                  T = (0, r.jV)(_);
                return void 0 === T ? e : { ...e, [T]: parseInt(t, 10) };
              }, O()));
        }
        takeSnapshot() {
          return {
            version: Q.LATEST_SNAPSHOT_VERSION,
            data: {
              linkedUsers: Object.values(o),
              teenActivityTotals: Object.entries(S).map((e) => {
                let [E, _] = e;
                return "".concat(E, ":").concat(_);
              }),
              teenActivity: (function () {
                let e = [];
                return (
                  Object.entries(u).forEach((E) => {
                    let [_, t] = E;
                    e.push(...Object.values(t));
                  }),
                  e
                );
              })(),
              guilds: Object.values(Y),
            },
          };
        }
        getSelectedTeenId() {
          return C;
        }
        getLinkedUsers() {
          return o;
        }
        getLinkTimestamp(e) {
          var E;
          let _ = o[e];
          return null == _
            ? null
            : null !== (E = _.updated_at) && void 0 !== E
              ? E
              : _.created_at;
        }
        getRangeStartTimestamp() {
          return null == N ? null : n.default.extractTimestamp(N);
        }
        getActionsForDisplayType(e) {
          return Object.values(u[e]);
        }
        getTotalForDisplayType(e) {
          return S[e];
        }
        getLinkCode() {
          return M;
        }
        getGuild(e) {
          return Y[e];
        }
        getSelectedTab() {
          return R;
        }
        getStartId() {
          return N;
        }
        getIsInitialized() {
          return l;
        }
        getUserCountry() {
          return D;
        }
        isLoading() {
          return d;
        }
        canRefetch() {
          return null === L || n.default.age(L) > a.Of;
        }
        constructor() {
          super({
            CURRENT_USER_UPDATE: b,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: y,
            FAMILY_CENTER_FETCH_START: p,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: P,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: Z,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: G,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: V,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: h,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: v,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: m,
            FAMILY_CENTER_HANDLE_TAB_SELECT: H,
            SET_LOCATION_METADATA: w,
            LOGOUT: k,
          });
        }
      }
      i(Q, "displayName", "FamilyCenterStore"),
        i(Q, "LATEST_SNAPSHOT_VERSION", 3),
        (E.Z = new Q());
    },
    546791: function (e, E, _) {
      _.d(E, {
        LI: function () {
          return N;
        },
        Qr: function () {
          return C;
        },
        f0: function () {
          return S;
        },
        iB: function () {
          return u;
        },
        jV: function () {
          return M;
        },
        lx: function () {
          return o;
        },
        t3: function () {
          return i;
        },
      }),
        _(47120);
      var t = _(913527),
        T = _.n(t),
        I = _(292352),
        n = _(689938);
      let s = 3600,
        A = 86400,
        r = 172800,
        a = 604800,
        i = () => ({
          today: n.Z.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_TODAY,
          yesterday: n.Z.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_YESTERDAY,
          days: n.Z.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_DAYS,
        }),
        C = (e) =>
          e
            ? {
                today:
                  n.Z.Messages
                    .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_TODAY,
                yesterday:
                  n.Z.Messages
                    .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_YESTERDAY,
                days: n.Z.Messages
                  .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_DAYS,
              }
            : {
                today:
                  n.Z.Messages
                    .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_TODAY,
                yesterday:
                  n.Z.Messages
                    .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_YESTERDAY,
                days: n.Z.Messages
                  .FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_DAYS,
              },
        N = (e, E, _) => {
          let t = T()().diff(T()(e), "s"),
            I = E(),
            n = T()(e).format("LL");
          return (n =
            t < A
              ? I.today
              : t < r
                ? I.yesterday
                : I.days.format({
                    days: Math.min(Math.floor(t / A), null != _ ? _ : 999),
                  }));
        },
        o = (e, E) => {
          let _ = T()().diff(T()(e), "s"),
            t = E(),
            I = T()(e).format("LL");
          return (I =
            _ < 60
              ? t.seconds
              : _ < s
                ? t.minutes.format({ count: Math.floor(_ / 60) })
                : _ < A
                  ? t.hours.format({ count: Math.floor(_ / s) })
                  : _ < r
                    ? t.yesterday
                    : _ < a
                      ? t.days.format({ count: Math.floor(_ / A) })
                      : t.date.format({ date: I }));
        },
        u = (e) =>
          e.display_type === I.MY.USER_ADD ||
          e.display_type === I.MY.USER_INTERACTION ||
          e.display_type === I.MY.USER_CALLED,
        S = (e) =>
          e.display_type === I.MY.GUILD_ADD ||
          e.display_type === I.MY.GUILD_INTERACTION,
        M = (e) => {
          for (let E of Object.values(I.MY)) if (E.toString() === e) return E;
        };
    },
    485664: function (e, E, _) {
      _.d(E, {
        o: function () {
          return i;
        },
      }),
        _(47120);
      var t = _(470079),
        T = _(399606),
        I = _(823162),
        n = _(706454),
        s = _(914788),
        A = _(880257);
      let r = new Set(["US"]),
        a = new Set(["en-US", "es-ES"]),
        i = () => {
          let e = (0, A.Z)(),
            E = (0, T.e7)([s.Z], () => s.Z.getUserCountry()),
            _ = (0, T.e7)([n.default], () => n.default.locale);
          return (
            t.useEffect(() => {
              null == E && (0, I.hi)();
            }, [E]),
            !e && null != E && r.has(E.alpha2) && a.has(_)
          );
        };
    },
    880257: function (e, E, _) {
      _.d(E, {
        Z: function () {
          return I;
        },
      });
      var t = _(442837),
        T = _(594174);
      function I() {
        return (0, t.e7)([T.default], () => {
          var e;
          return null === (e = T.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.nsfwAllowed;
        });
      }
    },
    863653: function (e, E, _) {
      _.d(E, {
        zF: function () {
          return T;
        },
      });
      let t = (0, _(818083).B)({
        kind: "user",
        id: "2024-05_throughline_care",
        label: "Throughline Care Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable throughline care links",
            config: { enabled: !0 },
          },
        ],
      });
      function T(e) {
        return t.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
  },
]);
//# sourceMappingURL=dc40521c56353f09ed5d.js.map
