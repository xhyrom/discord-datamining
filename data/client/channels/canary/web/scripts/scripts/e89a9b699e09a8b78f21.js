"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37229"],
  {
    260722: function (t, e, n) {
      n.d(e, {
        Yw: function () {
          return a;
        },
        fc: function () {
          return u;
        },
        qd: function () {
          return s;
        },
      });
      var i = n(544891),
        r = n(570140),
        l = n(626135),
        o = n(292352),
        E = n(981631);
      async function a(t, e) {
        await i.tn
          .patch({
            url: E.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: t, link_status: e },
            rejectWithError: !1,
          })
          .then((t) => {
            let { body: e } = t;
            return (
              r.Z.dispatch({
                type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
                linkedUsers: e,
              }),
              e
            );
          });
      }
      async function u(t) {
        await i.tn
          .del({
            url: E.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: t },
            rejectWithError: !1,
          })
          .then((e) => {
            let { body: n } = e;
            return (
              r.Z.dispatch({
                type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
                linkedUsers: n,
                deletedUserId: t,
              }),
              n
            );
          });
      }
      async function s() {
        await i.tn
          .get({ url: E.ANM.FAMILY_CENTER_LINK_CODE, rejectWithError: !1 })
          .then((t) => {
            let { body: e } = t,
              n = e.link_code;
            return (
              r.Z.dispatch({
                type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
                linkCode: n,
              }),
              n
            );
          });
      }
      e.ZP = {
        async initialPageLoad() {
          var t, e, n, l;
          r.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
          let { body: o } = await i.tn.get({
              url: E.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
              rejectWithError: !1,
            }),
            { teen_audit_log: a, linked_users: u, users: s } = o,
            _ = {
              teenId: null == a ? void 0 : a.teen_user_id,
              rangeStartId: null == a ? void 0 : a.range_start_id,
              totals:
                null !== (t = null == a ? void 0 : a.totals) && void 0 !== t
                  ? t
                  : {},
              actions:
                null !== (e = null == a ? void 0 : a.actions) && void 0 !== e
                  ? e
                  : [],
              users:
                null !== (n = null == a ? void 0 : a.users) && void 0 !== n
                  ? n
                  : [],
              guilds:
                null !== (l = null == a ? void 0 : a.guilds) && void 0 !== l
                  ? l
                  : [],
            };
          return (
            r.Z.dispatch({
              type: "FAMILY_CENTER_INITIAL_LOAD",
              familyCenterTeenActivity: _,
              linkedUsers: u,
              users: s,
            }),
            _
          );
        },
        async fetchLinkedUsers() {
          let { body: t } = await i.tn.get({
              url: E.ANM.FAMILY_CENTER_LINKED_USERS,
              rejectWithError: !1,
            }),
            e = { linkedUsers: t.linked_users, users: t.users };
          return (
            r.Z.dispatch({
              type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS",
              ...e,
            }),
            e
          );
        },
        async requestLink(t, e) {
          let { body: n } = await i.tn.post({
              url: E.ANM.FAMILY_CENTER_LINKED_USERS,
              body: { recipient_id: t, code: e },
              rejectWithError: !1,
            }),
            l = { linkedUsers: n.linked_users, users: n.users };
          return (
            r.Z.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...l }),
            l
          );
        },
        async fetchTeenActivity(t) {
          r.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
          let e = E.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: n } = await i.tn.get({ url: e, rejectWithError: !1 }),
            l = n.teen_audit_log,
            o = {
              teenId: l.teen_user_id,
              rangeStartId: l.range_start_id,
              totals: l.totals,
              actions: l.actions,
              users: l.users,
              guilds: l.guilds,
            };
          return (
            r.Z.dispatch({
              type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
              familyCenterTeenActivity: o,
            }),
            o
          );
        },
        async fetchMoreTeenActivity(t, e, n, a) {
          let { body: u } = await i.tn.get({
              url: E.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, a),
              rejectWithError: !1,
            }),
            { teen_audit_log: s } = u,
            _ = {
              teenId: s.teen_user_id,
              rangeStartId: s.range_start_id,
              actions: s.actions,
              users: s.users,
              guilds: s.guilds,
            };
          return (
            l.default.track(E.rMx.FAMILY_CENTER_ACTION, {
              action: o.YC.LoadMore,
              selected_teen_id: t,
              action_display_type: e,
            }),
            r.Z.dispatch({
              type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
              familyCenterTeenActivity: _,
            }),
            s
          );
        },
        selectTab(t) {
          r.Z.dispatch({ type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: t });
        },
      };
    },
    292352: function (t, e, n) {
      n.d(e, {
        AG: function () {
          return Y;
        },
        MY: function () {
          return o;
        },
        Mu: function () {
          return u;
        },
        Of: function () {
          return U;
        },
        QH: function () {
          return a;
        },
        TX: function () {
          return V;
        },
        Wz: function () {
          return P;
        },
        YC: function () {
          return _;
        },
        _6: function () {
          return s;
        },
        _w: function () {
          return m;
        },
        dG: function () {
          return E;
        },
        f2: function () {
          return G;
        },
        i0: function () {
          return h;
        },
        iB: function () {
          return O;
        },
        ip: function () {
          return F;
        },
        ix: function () {
          return w;
        },
        ne: function () {
          return l;
        },
        tx: function () {
          return b;
        },
        vH: function () {
          return H;
        },
        zE: function () {
          return v;
        },
      }),
        n(47120);
      var i,
        r,
        l,
        o,
        E,
        a,
        u,
        s,
        _,
        d,
        c,
        T,
        S,
        I,
        C,
        N,
        A,
        f,
        L,
        R,
        g,
        D,
        M = n(860911),
        p = n(70956),
        y = n(388032);
      let U = 30 * p.Z.Millis.SECOND,
        Y = 8,
        h = 3,
        v = 26,
        F = 64,
        m = (t, e) =>
          "https://discord.com/feature/family-center/my-family/"
            .concat(t, "/")
            .concat(e),
        O = 4,
        G = 5 * p.Z.Millis.MINUTE,
        H = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        w = (0, M.Ft)(
          Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
          }),
          [":", "?", "@"],
        );
      ((T = i || (i = {}))[(T.DM_MESSAGE_SEND = 1)] = "DM_MESSAGE_SEND"),
        (T[(T.GDM_MESSAGE_SEND = 2)] = "GDM_MESSAGE_SEND"),
        (T[(T.MESSAGE_REACT = 3)] = "MESSAGE_REACT"),
        (T[(T.ADD_FRIEND = 4)] = "ADD_FRIEND"),
        (T[(T.SEND_CALL = 5)] = "SEND_CALL"),
        (T[(T.CALL_JOIN = 6)] = "CALL_JOIN"),
        (T[(T.GUILD_JOIN = 7)] = "GUILD_JOIN"),
        (T[(T.GUILD_MESSAGE_SEND = 8)] = "GUILD_MESSAGE_SEND"),
        (T[(T.GUILD_VC_JOIN = 9)] = "GUILD_VC_JOIN"),
        ((S = r || (r = {}))[(S.PARENT = 1)] = "PARENT"),
        (S[(S.CHILD = 2)] = "CHILD"),
        ((I = l || (l = {}))[(I.PENDING = 1)] = "PENDING"),
        (I[(I.ACTIVE = 2)] = "ACTIVE"),
        (I[(I.INACTIVE = 3)] = "INACTIVE"),
        (I[(I.DECLINED = 4)] = "DECLINED"),
        (I[(I.EXPIRED = 5)] = "EXPIRED"),
        ((C = o || (o = {}))[(C.USER_ADD = 1)] = "USER_ADD"),
        (C[(C.GUILD_ADD = 2)] = "GUILD_ADD"),
        (C[(C.USER_INTERACTION = 3)] = "USER_INTERACTION"),
        (C[(C.GUILD_INTERACTION = 4)] = "GUILD_INTERACTION"),
        (C[(C.USER_CALLED = 5)] = "USER_CALLED"),
        ((N = E || (E = {})).ACTIVITY = "ACTIVITY"),
        (N.REQUESTS = "REQUESTS"),
        (N.SETTINGS = "SETTINGS"),
        ((A = a || (a = {}))[(A.ACTIVITY = 0)] = "ACTIVITY"),
        (A[(A.REQUESTS = 1)] = "REQUESTS"),
        (A[(A.SETTINGS = 2)] = "SETTINGS"),
        ((f = u || (u = {})).SIDENAV = "SIDENAV"),
        (f.SETTINGS = "SETTINGS"),
        ((L = s || (s = {}))[(L.SIDENAV = 0)] = "SIDENAV"),
        (L[(L.SETTINGS = 1)] = "SETTINGS"),
        ((R = _ || (_ = {}))[(R.TabChange = 0)] = "TabChange"),
        (R[(R.ShowQRCodeModal = 1)] = "ShowQRCodeModal"),
        (R[(R.RevealQRCode = 2)] = "RevealQRCode"),
        (R[(R.ScanQRCodeButton = 3)] = "ScanQRCodeButton"),
        (R[(R.ScanQRCode = 4)] = "ScanQRCode"),
        (R[(R.LoadMore = 5)] = "LoadMore"),
        (R[(R.SelectTeen = 6)] = "SelectTeen"),
        (R[(R.HideQRCode = 7)] = "HideQRCode");
      let b = new Map([
        [
          3,
          {
            tooltipHeader: () => y.intl.string(y.t.kvTgWF),
            tooltipDescription: (t) =>
              t ? y.intl.string(y.t.cY19ub) : y.intl.string(y.t["K5r+sL"]),
            sectionHeader: (t) =>
              y.intl.formatToPlainString(y.t["4T3zWV"], { count: t }),
            sectionDescription: (t) =>
              t ? y.intl.string(y.t.cY19ub) : y.intl.string(y.t["K5r+sL"]),
            timestampFormatter: () => ({
              today: y.intl.string(y.t.fLBUx8),
              yesterday: y.intl.string(y.t.cHHgxM),
              days: y.t.qvKjp6,
            }),
          },
        ],
        [
          5,
          {
            tooltipHeader: () => y.intl.string(y.t.D7Sng4),
            tooltipDescription: (t) =>
              t ? y.intl.string(y.t["w7j/Li"]) : y.intl.string(y.t.SCIaWF),
            sectionHeader: (t) =>
              y.intl.formatToPlainString(y.t["0GE4Nj"], { count: t }),
            sectionDescription: (t) =>
              t ? y.intl.string(y.t["w7j/Li"]) : y.intl.string(y.t.SCIaWF),
            timestampFormatter: () => ({
              today: y.intl.string(y.t.IHd5cX),
              yesterday: y.intl.string(y.t.wOsfxs),
              days: y.t.oCk8c3,
            }),
          },
        ],
        [
          1,
          {
            tooltipHeader: () => y.intl.string(y.t.kIcKAg),
            tooltipDescription: (t) =>
              t ? y.intl.string(y.t.HvsFJS) : y.intl.string(y.t["1/QpPz"]),
            sectionHeader: (t) =>
              y.intl.formatToPlainString(y.t["TEvo+P"], { count: t }),
            sectionDescription: (t) =>
              t ? y.intl.string(y.t.HvsFJS) : y.intl.string(y.t["1/QpPz"]),
            timestampFormatter: () => ({
              today: y.intl.string(y.t.JUHIYW),
              yesterday: y.intl.string(y.t.GiswUV),
              days: y.t.fwQgEx,
            }),
          },
        ],
        [
          2,
          {
            tooltipHeader: () => y.intl.string(y.t["NulX9/"]),
            tooltipDescription: (t) =>
              t ? y.intl.string(y.t.Lmz9Vl) : y.intl.string(y.t.MTFxYW),
            sectionHeader: (t) =>
              y.intl.formatToPlainString(y.t["7feG7e"], { count: t }),
            sectionDescription: (t) =>
              t ? y.intl.string(y.t.Lmz9Vl) : y.intl.string(y.t.MTFxYW),
          },
        ],
        [
          4,
          {
            tooltipHeader: () => y.intl.string(y.t.CcrbCw),
            tooltipDescription: k,
            sectionHeader: (t) =>
              y.intl.formatToPlainString(y.t.rcPInZ, { count: t }),
            sectionDescription: k,
          },
        ],
      ]);
      function k(t, e) {
        return t
          ? e
            ? y.intl.string(y.t.c0NgBQ)
            : y.intl.string(y.t.dcvNX1)
          : e
            ? y.intl.string(y.t.DLVyFx)
            : y.intl.string(y.t["823ugY"]);
      }
      ((g = d || (d = {}))[(g.CHECK = 0)] = "CHECK"),
        (g[(g.X = 1)] = "X"),
        ((D = c || (c = {}))[(D.GENERIC_ERROR = 0)] = "GENERIC_ERROR"),
        (D[(D.INELIGIBLE_FOR_FAMILY_CENTER = 1)] =
          "INELIGIBLE_FOR_FAMILY_CENTER"),
        (D[(D.PENDING_REQUEST_EXISTS = 2)] = "PENDING_REQUEST_EXISTS"),
        (D[(D.MAX_CONNECTIONS_REACHED = 3)] = "MAX_CONNECTIONS_REACHED");
      let V = () => ({
          seconds: y.intl.string(y.t.CJdoeX),
          minutes: y.t.InzMn5,
          hours: y.t.ErkYCA,
          yesterday: y.intl.string(y.t.GvfssL),
          days: y.t.pWig19,
          date: y.t.MP3kho,
        }),
        P = () => ({
          seconds: y.intl.string(y.t.BqsamZ),
          minutes: y.t.kX3wJi,
          hours: y.t.J18GbG,
          yesterday: y.intl.string(y.t.Ln9zMj),
          days: y.t.WRtyS0,
          date: y.t.Y3ZYtL,
        });
    },
    735079: function (t, e, n) {
      n.d(e, {
        J: function () {
          return r;
        },
      });
      var i = n(601964);
      class r extends i.ZP {
        constructor(t) {
          var e, n, i;
          super(t),
            (e = this),
            (i = void 0),
            (n = "approximateMemberCount") in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i),
            (this.approximateMemberCount = t.approximate_member_count);
        }
      }
    },
    914788: function (t, e, n) {
      n(724458), n(47120), n(653041);
      var i = n(133080),
        r = n(412788),
        l = n(594174),
        o = n(709054),
        E = n(260722),
        a = n(735079),
        u = n(546791),
        s = n(292352);
      function _(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let d = null,
        c = null,
        T = {},
        S = D(),
        I = M(),
        C = null,
        N = (function () {
          var t, e, n, i;
          return (null === (e = window) || void 0 === e
            ? void 0
            : null === (t = e.location) || void 0 === t
              ? void 0
              : t.pathname) === s.ix.FAMILY_CENTER_MY_FAMILY
            ? s.dG.REQUESTS
            : (null === (i = window) || void 0 === i
                  ? void 0
                  : null === (n = i.location) || void 0 === n
                    ? void 0
                    : n.pathname) === s.ix.FAMILY_CENTER_SETTINGS
              ? s.dG.SETTINGS
              : s.dG.ACTIVITY;
        })(),
        A = !1,
        f = !1,
        L = null,
        R = null,
        g = {};
      function D() {
        return {
          [s.MY.USER_ADD]: {},
          [s.MY.GUILD_ADD]: {},
          [s.MY.USER_INTERACTION]: {},
          [s.MY.GUILD_INTERACTION]: {},
          [s.MY.USER_CALLED]: {},
        };
      }
      function M() {
        return {
          [s.MY.USER_ADD]: 0,
          [s.MY.GUILD_ADD]: 0,
          [s.MY.USER_INTERACTION]: 0,
          [s.MY.GUILD_INTERACTION]: 0,
          [s.MY.USER_CALLED]: 0,
        };
      }
      function p() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = arguments.length > 1 ? arguments[1] : void 0;
        return (T =
          t.length > 0
            ? t.reduce((t, e) => ({ ...t, [e.user_id]: e }), {})
            : {});
      }
      function y(t) {
        void 0 !== t && (I = t);
      }
      function U(t, e) {
        let n = e ? S : D();
        return (S = t.reduce((t, e) => {
          let i = e.display_type;
          return (
            void 0 !== n[i] &&
              void 0 === n[i][e.event_id] &&
              (t[i][e.event_id] = e),
            t
          );
        }, n));
      }
      function Y(t) {
        g = t.reduce((t, e) => ({ ...t, [e.id]: new a.J(e) }), g);
      }
      function h() {
        f = !0;
      }
      function v(t) {
        let { linkedUsers: e, familyCenterTeenActivity: n } = t,
          { actions: i, guilds: r, totals: l, teenId: E, rangeStartId: a } = n;
        (d = E),
          (c = a),
          U(i),
          y(l),
          Y(r),
          p(e),
          (f = !1),
          (L = o.default.fromTimestamp(Date.now())),
          (A = !0);
      }
      function F(t) {
        let { linkedUsers: e } = t;
        p(e);
      }
      function m(t) {
        let { linkedUsers: e } = t;
        p(e);
      }
      function O(t) {
        let { familyCenterTeenActivity: e } = t;
        if (void 0 === e) return;
        let {
          actions: n,
          totals: i,
          guilds: r,
          teenId: l,
          rangeStartId: E,
        } = e;
        (d = l),
          (c = E),
          U(n),
          y(i),
          Y(r),
          (f = !1),
          (L = o.default.fromTimestamp(Date.now()));
      }
      function G(t) {
        let { familyCenterTeenActivity: e } = t,
          { actions: n, guilds: i } = e;
        U(n, !0), Y(i);
      }
      function H(t) {
        let { linkedUsers: e } = t;
        p(e);
      }
      function w(t) {
        let { linkedUsers: e } = t;
        p(e, !0);
      }
      function b(t) {
        let { linkCode: e } = t;
        C = e;
      }
      function k(t) {
        let { tab: e } = t;
        N = e;
      }
      function V(t) {
        let { user: e } = t;
        if (void 0 === e.linked_users) return;
        let n = l.default.getUsers();
        e.linked_users.some((t) => {
          let { user_id: e } = t;
          return void 0 === n[e];
        }) && e.linked_users.length > Object.keys(T).length
          ? E.ZP.fetchLinkedUsers()
          : p(e.linked_users);
      }
      function P(t) {
        var e;
        let { countryCode: n } = t;
        if (null != n)
          R = null !== (e = (0, i.Zz)(n)) && void 0 !== e ? e : null;
      }
      function Q() {
        (d = null),
          (c = null),
          (T = {}),
          (S = D()),
          (I = M()),
          (g = {}),
          (f = !1),
          (L = null);
      }
      class Z extends r.Z {
        initialize() {
          this.waitFor(l.default);
        }
        loadCache() {
          let t = this.readSnapshot(Z.LATEST_SNAPSHOT_VERSION);
          if (null != t)
            p(t.linkedUsers),
              Y(t.guilds),
              U(t.teenActivity),
              (I = t.teenActivityTotals.reduce((t, e) => {
                let [n, i] = e.split(":"),
                  r = (0, u.jV)(n);
                return void 0 === r ? t : { ...t, [r]: parseInt(i, 10) };
              }, M()));
        }
        takeSnapshot() {
          return {
            version: Z.LATEST_SNAPSHOT_VERSION,
            data: {
              linkedUsers: Object.values(T),
              teenActivityTotals: Object.entries(I).map((t) => {
                let [e, n] = t;
                return "".concat(e, ":").concat(n);
              }),
              teenActivity: (function () {
                let t = [];
                return (
                  Object.entries(S).forEach((e) => {
                    let [n, i] = e;
                    t.push(...Object.values(i));
                  }),
                  t
                );
              })(),
              guilds: Object.values(g),
            },
          };
        }
        getSelectedTeenId() {
          return d;
        }
        getLinkedUsers() {
          return T;
        }
        getLinkTimestamp(t) {
          var e;
          let n = T[t];
          return null == n
            ? null
            : null !== (e = n.updated_at) && void 0 !== e
              ? e
              : n.created_at;
        }
        getRangeStartTimestamp() {
          return null == c ? null : o.default.extractTimestamp(c);
        }
        getActionsForDisplayType(t) {
          return Object.values(S[t]);
        }
        getTotalForDisplayType(t) {
          return I[t];
        }
        getLinkCode() {
          return C;
        }
        getGuild(t) {
          return g[t];
        }
        getSelectedTab() {
          return N;
        }
        getStartId() {
          return c;
        }
        getIsInitialized() {
          return A;
        }
        getUserCountry() {
          return R;
        }
        isLoading() {
          return f;
        }
        canRefetch() {
          return null === L || o.default.age(L) > s.Of;
        }
        constructor() {
          super({
            CURRENT_USER_UPDATE: V,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: v,
            FAMILY_CENTER_FETCH_START: h,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: F,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: O,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: G,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: m,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: H,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: w,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: b,
            FAMILY_CENTER_HANDLE_TAB_SELECT: k,
            SET_LOCATION_METADATA: P,
            LOGOUT: Q,
          });
        }
      }
      _(Z, "displayName", "FamilyCenterStore"),
        _(Z, "LATEST_SNAPSHOT_VERSION", 3),
        (e.Z = new Z());
    },
    546791: function (t, e, n) {
      n.d(e, {
        LI: function () {
          return c;
        },
        Qr: function () {
          return d;
        },
        f0: function () {
          return I;
        },
        iB: function () {
          return S;
        },
        jV: function () {
          return C;
        },
        lx: function () {
          return T;
        },
        t3: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(913527),
        r = n.n(i),
        l = n(292352),
        o = n(388032);
      let E = 3600,
        a = 86400,
        u = 172800,
        s = 604800,
        _ = () => ({
          today: o.intl.string(o.t.VjIAQU),
          yesterday: o.intl.string(o.t["2a8xHR"]),
          days: o.t.Xt6oND,
        }),
        d = (t) =>
          t
            ? {
                today: o.intl.string(o.t["2AtcIi"]),
                yesterday: o.intl.string(o.t.stOECg),
                days: o.t.n8n5BQ,
              }
            : {
                today: o.intl.string(o.t.g1ZX6u),
                yesterday: o.intl.string(o.t.s3qSVl),
                days: o.t.f1UJiI,
              },
        c = (t, e, n) => {
          let i = r()().diff(r()(t), "s"),
            l = e(),
            E = r()(t).format("LL");
          return (E =
            i < a
              ? l.today
              : i < u
                ? l.yesterday
                : o.intl.formatToPlainString(l.days, {
                    days: Math.min(Math.floor(i / a), null != n ? n : 999),
                  }));
        },
        T = (t, e) => {
          let n = r()().diff(r()(t), "s"),
            i = e(),
            l = r()(t).format("LL");
          return (l =
            n < 60
              ? i.seconds
              : n < E
                ? o.intl.formatToPlainString(i.minutes, {
                    count: Math.floor(n / 60),
                  })
                : n < a
                  ? o.intl.formatToPlainString(i.hours, {
                      count: Math.floor(n / E),
                    })
                  : n < u
                    ? i.yesterday
                    : n < s
                      ? o.intl.formatToPlainString(i.days, {
                          count: Math.floor(n / a),
                        })
                      : o.intl.formatToPlainString(i.date, { date: l }));
        },
        S = (t) =>
          t.display_type === l.MY.USER_ADD ||
          t.display_type === l.MY.USER_INTERACTION ||
          t.display_type === l.MY.USER_CALLED,
        I = (t) =>
          t.display_type === l.MY.GUILD_ADD ||
          t.display_type === l.MY.GUILD_INTERACTION,
        C = (t) => {
          for (let e of Object.values(l.MY)) if (e.toString() === t) return e;
        };
    },
    485664: function (t, e, n) {
      n.d(e, {
        o: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(399606),
        l = n(823162),
        o = n(706454),
        E = n(914788),
        a = n(880257);
      let u = new Set(["US"]),
        s = new Set(["en-US", "es-ES"]),
        _ = () => {
          let t = (0, a.Z)(),
            e = (0, r.e7)([E.Z], () => E.Z.getUserCountry()),
            n = (0, r.e7)([o.default], () => o.default.locale);
          return (
            i.useEffect(() => {
              null == e && (0, l.hi)();
            }, [e]),
            !t && null != e && u.has(e.alpha2) && s.has(n)
          );
        };
    },
    880257: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = n(442837),
        r = n(594174);
      function l() {
        return (0, i.e7)([r.default], () => {
          var t;
          return null === (t = r.default.getCurrentUser()) || void 0 === t
            ? void 0
            : t.nsfwAllowed;
        });
      }
    },
    863653: function (t, e, n) {
      n.d(e, {
        zF: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
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
      function r(t) {
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
  },
]);
//# sourceMappingURL=e89a9b699e09a8b78f21.js.map
