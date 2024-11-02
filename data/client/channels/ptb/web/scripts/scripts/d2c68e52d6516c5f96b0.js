"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37229"],
  {
    280570: function (t, n, e) {
      e.d(n, {
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
      var i = e(544891),
        r = e(570140),
        l = e(626135),
        o = e(292352),
        E = e(981631);
      async function a(t, n) {
        await i.tn
          .patch({
            url: E.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: t, link_status: n },
          })
          .then((t) => {
            let { body: n } = t;
            return (
              r.Z.dispatch({
                type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
                linkedUsers: n,
              }),
              n
            );
          });
      }
      async function u(t) {
        await i.tn
          .del({
            url: E.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: t },
          })
          .then((n) => {
            let { body: e } = n;
            return (
              r.Z.dispatch({
                type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
                linkedUsers: e,
                deletedUserId: t,
              }),
              e
            );
          });
      }
      async function s() {
        await i.tn.get({ url: E.ANM.FAMILY_CENTER_LINK_CODE }).then((t) => {
          let { body: n } = t,
            e = n.link_code;
          return (
            r.Z.dispatch({
              type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
              linkCode: e,
            }),
            e
          );
        });
      }
      n.ZP = {
        async initialPageLoad() {
          var t, n, e, l;
          r.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
          let { body: o } = await i.tn.get({
              url: E.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
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
                null !== (n = null == a ? void 0 : a.actions) && void 0 !== n
                  ? n
                  : [],
              users:
                null !== (e = null == a ? void 0 : a.users) && void 0 !== e
                  ? e
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
            }),
            n = { linkedUsers: t.linked_users, users: t.users };
          return (
            r.Z.dispatch({
              type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS",
              ...n,
            }),
            n
          );
        },
        async requestLink(t, n) {
          let { body: e } = await i.tn.post({
              url: E.ANM.FAMILY_CENTER_LINKED_USERS,
              body: { recipient_id: t, code: n },
            }),
            l = { linkedUsers: e.linked_users, users: e.users };
          return (
            r.Z.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS", ...l }),
            l
          );
        },
        async fetchTeenActivity(t) {
          r.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
          let n = E.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: e } = await i.tn.get({ url: n }),
            l = e.teen_audit_log,
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
        async fetchMoreTeenActivity(t, n, e, a) {
          let { body: u } = await i.tn.get({
              url: E.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, n, e, a),
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
              action_display_type: n,
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
    292352: function (t, n, e) {
      e.d(n, {
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
          return v;
        },
        iB: function () {
          return O;
        },
        ip: function () {
          return h;
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
          return F;
        },
      }),
        e(47120);
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
        M = e(860911),
        p = e(70956),
        y = e(388032);
      let U = 30 * p.Z.Millis.SECOND,
        Y = 8,
        v = 3,
        F = 26,
        h = 64,
        m = (t, n) =>
          "https://discord.com/feature/family-center/my-family/"
            .concat(t, "/")
            .concat(n),
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
      function k(t, n) {
        return t
          ? n
            ? y.intl.string(y.t.c0NgBQ)
            : y.intl.string(y.t.dcvNX1)
          : n
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
    735079: function (t, n, e) {
      e.d(n, {
        J: function () {
          return r;
        },
      });
      var i = e(601964);
      class r extends i.ZP {
        constructor(t) {
          var n, e, i;
          super(t),
            (n = this),
            (i = void 0),
            (e = "approximateMemberCount") in n
              ? Object.defineProperty(n, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[e] = i),
            (this.approximateMemberCount = t.approximate_member_count);
        }
      }
    },
    914788: function (t, n, e) {
      e(724458), e(47120), e(653041);
      var i = e(133080),
        r = e(412788),
        l = e(594174),
        o = e(709054),
        E = e(280570),
        a = e(735079),
        u = e(546791),
        s = e(292352);
      function _(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
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
          var t, n, e, i;
          return (null === (n = window) || void 0 === n
            ? void 0
            : null === (t = n.location) || void 0 === t
              ? void 0
              : t.pathname) === s.ix.FAMILY_CENTER_MY_FAMILY
            ? s.dG.REQUESTS
            : (null === (i = window) || void 0 === i
                  ? void 0
                  : null === (e = i.location) || void 0 === e
                    ? void 0
                    : e.pathname) === s.ix.FAMILY_CENTER_SETTINGS
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
          n = arguments.length > 1 ? arguments[1] : void 0;
        return (T =
          t.length > 0
            ? t.reduce((t, n) => ({ ...t, [n.user_id]: n }), {})
            : {});
      }
      function y(t) {
        void 0 !== t && (I = t);
      }
      function U(t, n) {
        let e = n ? S : D();
        return (S = t.reduce((t, n) => {
          let i = n.display_type;
          return (
            void 0 !== e[i] &&
              void 0 === e[i][n.event_id] &&
              (t[i][n.event_id] = n),
            t
          );
        }, e));
      }
      function Y(t) {
        g = t.reduce((t, n) => ({ ...t, [n.id]: new a.J(n) }), g);
      }
      function v() {
        f = !0;
      }
      function F(t) {
        let { linkedUsers: n, familyCenterTeenActivity: e } = t,
          { actions: i, guilds: r, totals: l, teenId: E, rangeStartId: a } = e;
        (d = E),
          (c = a),
          U(i),
          y(l),
          Y(r),
          p(n),
          (f = !1),
          (L = o.default.fromTimestamp(Date.now())),
          (A = !0);
      }
      function h(t) {
        let { linkedUsers: n } = t;
        p(n);
      }
      function m(t) {
        let { linkedUsers: n } = t;
        p(n);
      }
      function O(t) {
        let { familyCenterTeenActivity: n } = t;
        if (void 0 === n) return;
        let {
          actions: e,
          totals: i,
          guilds: r,
          teenId: l,
          rangeStartId: E,
        } = n;
        (d = l),
          (c = E),
          U(e),
          y(i),
          Y(r),
          (f = !1),
          (L = o.default.fromTimestamp(Date.now()));
      }
      function G(t) {
        let { familyCenterTeenActivity: n } = t,
          { actions: e, guilds: i } = n;
        U(e, !0), Y(i);
      }
      function H(t) {
        let { linkedUsers: n } = t;
        p(n);
      }
      function w(t) {
        let { linkedUsers: n } = t;
        p(n, !0);
      }
      function b(t) {
        let { linkCode: n } = t;
        C = n;
      }
      function k(t) {
        let { tab: n } = t;
        N = n;
      }
      function V(t) {
        let { user: n } = t;
        if (void 0 === n.linked_users) return;
        let e = l.default.getUsers();
        n.linked_users.some((t) => {
          let { user_id: n } = t;
          return void 0 === e[n];
        }) && n.linked_users.length > Object.keys(T).length
          ? E.ZP.fetchLinkedUsers()
          : p(n.linked_users);
      }
      function P(t) {
        var n;
        let { countryCode: e } = t;
        if (null != e)
          R = null !== (n = (0, i.Zz)(e)) && void 0 !== n ? n : null;
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
              (I = t.teenActivityTotals.reduce((t, n) => {
                let [e, i] = n.split(":"),
                  r = (0, u.jV)(e);
                return void 0 === r ? t : { ...t, [r]: parseInt(i, 10) };
              }, M()));
        }
        takeSnapshot() {
          return {
            version: Z.LATEST_SNAPSHOT_VERSION,
            data: {
              linkedUsers: Object.values(T),
              teenActivityTotals: Object.entries(I).map((t) => {
                let [n, e] = t;
                return "".concat(n, ":").concat(e);
              }),
              teenActivity: (function () {
                let t = [];
                return (
                  Object.entries(S).forEach((n) => {
                    let [e, i] = n;
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
          var n;
          let e = T[t];
          return null == e
            ? null
            : null !== (n = e.updated_at) && void 0 !== n
              ? n
              : e.created_at;
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
            FAMILY_CENTER_INITIAL_LOAD: F,
            FAMILY_CENTER_FETCH_START: v,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: h,
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
        (n.Z = new Z());
    },
    546791: function (t, n, e) {
      e.d(n, {
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
        e(47120);
      var i = e(913527),
        r = e.n(i),
        l = e(292352),
        o = e(388032);
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
        c = (t, n, e) => {
          let i = r()().diff(r()(t), "s"),
            l = n(),
            E = r()(t).format("LL");
          return (E =
            i < a
              ? l.today
              : i < u
                ? l.yesterday
                : o.intl.formatToPlainString(l.days, {
                    days: Math.min(Math.floor(i / a), null != e ? e : 999),
                  }));
        },
        T = (t, n) => {
          let e = r()().diff(r()(t), "s"),
            i = n(),
            l = r()(t).format("LL");
          return (l =
            e < 60
              ? i.seconds
              : e < E
                ? o.intl.formatToPlainString(i.minutes, {
                    count: Math.floor(e / 60),
                  })
                : e < a
                  ? o.intl.formatToPlainString(i.hours, {
                      count: Math.floor(e / E),
                    })
                  : e < u
                    ? i.yesterday
                    : e < s
                      ? o.intl.formatToPlainString(i.days, {
                          count: Math.floor(e / a),
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
          for (let n of Object.values(l.MY)) if (n.toString() === t) return n;
        };
    },
    485664: function (t, n, e) {
      e.d(n, {
        o: function () {
          return _;
        },
      }),
        e(47120);
      var i = e(192379),
        r = e(399606),
        l = e(823162),
        o = e(706454),
        E = e(914788),
        a = e(880257);
      let u = new Set(["US"]),
        s = new Set(["en-US", "es-ES"]),
        _ = () => {
          let t = (0, a.Z)(),
            n = (0, r.e7)([E.Z], () => E.Z.getUserCountry()),
            e = (0, r.e7)([o.default], () => o.default.locale);
          return (
            i.useEffect(() => {
              null == n && (0, l.hi)();
            }, [n]),
            !t && null != n && u.has(n.alpha2) && s.has(e)
          );
        };
    },
    880257: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = e(442837),
        r = e(594174);
      function l() {
        return (0, i.e7)([r.default], () => {
          var t;
          return null === (t = r.default.getCurrentUser()) || void 0 === t
            ? void 0
            : t.nsfwAllowed;
        });
      }
    },
    863653: function (t, n, e) {
      e.d(n, {
        zF: function () {
          return r;
        },
      });
      let i = (0, e(818083).B)({
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
//# sourceMappingURL=d2c68e52d6516c5f96b0.js.map
