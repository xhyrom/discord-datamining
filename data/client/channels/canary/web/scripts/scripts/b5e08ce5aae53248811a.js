(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33405"],
  {
    785902: function (e) {
      e.exports = function (e, t, n, i) {
        for (var E = -1, r = null == e ? 0 : e.length; ++E < r; ) {
          var _ = e[E];
          t(i, _, n(_), e);
        }
        return i;
      };
    },
    800128: function (e, t, n) {
      var i = n(543744);
      e.exports = function (e, t, n, E) {
        return (
          i(e, function (e, i, r) {
            t(E, e, n(e), r);
          }),
          E
        );
      };
    },
    757009: function (e, t, n) {
      var i = n(785902),
        E = n(800128),
        r = n(256098),
        _ = n(290677);
      e.exports = function (e, t) {
        return function (n, I) {
          var o = _(n) ? i : E,
            s = t ? t() : {};
          return o(n, e, r(I, 2), s);
        };
      };
    },
    979079: function (e, t, n) {
      var i = n(685347),
        E = n(757009)(function (e, t, n) {
          i(e, n, t);
        });
      e.exports = E;
    },
    800530: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cg: function () {
          return R;
        },
        Cp: function () {
          return g;
        },
        Cs: function () {
          return l;
        },
        EY: function () {
          return G;
        },
        I5: function () {
          return D;
        },
        JQ: function () {
          return P;
        },
        RY: function () {
          return d;
        },
        Sv: function () {
          return m;
        },
        TX: function () {
          return U;
        },
        ZW: function () {
          return M;
        },
        bK: function () {
          return A;
        },
        n0: function () {
          return N;
        },
        o6: function () {
          return h;
        },
        oE: function () {
          return L;
        },
        qS: function () {
          return T;
        },
        s: function () {
          return u;
        },
        sQ: function () {
          return p;
        },
        wo: function () {
          return c;
        },
      });
      var i,
        E,
        r,
        _,
        I,
        o,
        s,
        a,
        S,
        c,
        N,
        u,
        A,
        l,
        T,
        L,
        C = n(990547),
        f = n(981631);
      function O(e, t, n) {
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
      ((i = S || (S = {})).SETTINGS = "SETTINGS"),
        (i.ACCOUNT_STANDING = "ACCOUNT_STANDING"),
        (i.GUILD_SETTINGS = "GUILD_SETTINGS"),
        (i.ENCRYPTION = "ENCRYPTION"),
        (i.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"),
        (i.DATA_PRIVACY = "DATA_PRIVACY");
      class p {}
      O(p, "TOS_LINK", "https://discord.com/terms"),
        O(p, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"),
        O(
          p,
          "APPEALS_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731",
        ),
        O(
          p,
          "WARNING_SYSTEM_HELPCENTER_LINK",
          "https://support.discord.com/hc/articles/18210965981847",
        ),
        O(
          p,
          "AGE_VERIFICATION_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731",
        ),
        O(
          p,
          "SPAM_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__",
        ),
        O(
          p,
          "LEARN_MORE_UU_APPEAL_LINK",
          "https://support.discord.com/hc/articles/360041820932",
        );
      class R {}
      O(R, "CLASSIFICATION_ID", "classification_id"),
        O(R, "INCIDENT_TIMESTAMP", "incident_time"),
        ((E = c || (c = {})).POLICY_VIOLATION_DETAIL =
          "policy_violation_detail"),
        (E.LEARN_MORE_LINK = "learn_more_link");
      class D {}
      O(D, "ICON_TYPE", "icon_type"),
        O(D, "HEADER", "header"),
        O(D, "BODY", "body"),
        O(D, "CTAS", "ctas"),
        O(D, "TIMESTAMP", "timestamp"),
        O(D, "THEME", "theme"),
        O(D, "CLIENT_VERSION_MESSAGE", "client_version_message"),
        O(D, "LEARN_MORE_LINK", "learn_more_link"),
        O(D, "CLASSIFICATION_ID", "classification_id"),
        ((r = N || (N = {}))[(r.ViewViolationDetail = 0)] =
          "ViewViolationDetail"),
        (r[(r.ViewViolationsDropdown = 1)] = "ViewViolationsDropdown"),
        (r[(r.ClickLetUsKnow = 2)] = "ClickLetUsKnow"),
        (r[(r.ClickAgeVerificationLink = 3)] = "ClickAgeVerificationLink"),
        (r[(r.ClickSpamWebformLink = 4)] = "ClickSpamWebformLink"),
        (r[(r.ClickLearnMoreLink = 5)] = "ClickLearnMoreLink"),
        (r[(r.ClickCommunityGuidelinesLink = 6)] =
          "ClickCommunityGuidelinesLink"),
        (r[(r.ClickWarningSystemHelpcenterLink = 7)] =
          "ClickWarningSystemHelpcenterLink"),
        ((_ = u || (u = {}))[(_.SystemDM = 0)] = "SystemDM"),
        (_[(_.StandingTab = 1)] = "StandingTab"),
        (_[(_.AppealIngestion = 2)] = "AppealIngestion"),
        Object.freeze({
          SPEED_BUMP: f.jXE.APPEAL_INGESTION_SPEED_BUMP,
          COLLECT_SIGNAL: f.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
          CONFIRM_SUBMISSION: f.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          REQUEST_SENT: f.jXE.APPEAL_INGESTION_REQUEST_SENT,
          THANKS: f.jXE.APPEAL_INGESTION_THANKS,
          SPAM: f.jXE.APPEAL_INGESTION_SPAM,
        }),
        ((I = A || (A = {}))[(I.DIDNT_VIOLATE_POLICY = 0)] =
          "DIDNT_VIOLATE_POLICY"),
        (I[(I.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
        (I[(I.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
        (I[(I.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let d = [0, 1, 2, 3],
        m = 372,
        G = 279,
        M = { impression_group: C.ImpressionGroups.APPEAL_INGESTION };
      ((o = l || (l = {})).SPEED_BUMP = "speed-bump"),
        (o.COLLECT_SIGNAL = "collect-signal"),
        (o.CONFIRM_SUBMISSION = "confirm-submission"),
        (o.REQUEST_SENT = "request-sent"),
        (o.THANKS = "thanks");
      let P = {
        "speed-bump": { next: "collect-signal", prev: null },
        "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
        "confirm-submission": { next: "request-sent", prev: "collect-signal" },
        "request-sent": { next: null, prev: null },
      };
      ((s = T || (T = {}))[(s.USER = 1)] = "USER"),
        (s[(s.GUILD_OWNER = 2)] = "GUILD_OWNER"),
        (s[(s.GUILD_MEMBER = 3)] = "GUILD_MEMBER"),
        ((a = L || (L = {})).LOADING = "loading"),
        (a.ERROR = "error"),
        (a.SUCCESS = "success"),
        (a.FAILURE = "failure"),
        (a.NONE = "none");
      let U = 2e3,
        g = 15e3,
        h = 5;
    },
    531441: function (e, t, n) {
      "use strict";
      var i, E, r, _, I, o, s, a, S, c, N, u, A, l, T;
      n.d(t, {
        OY: function () {
          return a;
        },
        Sn: function () {
          return o;
        },
        hQ: function () {
          return r;
        },
        lK: function () {
          return i;
        },
        tG: function () {
          return s;
        },
        wO: function () {
          return E;
        },
      }),
        ((i || (i = {})).MESSAGE = "message"),
        ((S = E || (E = {}))[(S.OWNER = 1)] = "OWNER"),
        (S[(S.MEMBER = 2)] = "MEMBER"),
        ((c = r || (r = {}))[(c.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
        (c[(c.CLASSIFICATION_UPHELD = 2)] = "CLASSIFICATION_UPHELD"),
        (c[(c.CLASSIFICATION_INVALIDATED = 3)] = "CLASSIFICATION_INVALIDATED"),
        ((N = _ || (_ = {}))[(N.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (N[(N.UNKNOWN = 1)] = "UNKNOWN"),
        (N[(N.UNSOLICITED_PORNOGRAPHY = 100)] = "UNSOLICITED_PORNOGRAPHY"),
        (N[(N.NONCONSENSUAL_PORNOGRAPHY = 200)] = "NONCONSENSUAL_PORNOGRAPHY"),
        (N[(N.GLORIFYING_VIOLENCE = 210)] = "GLORIFYING_VIOLENCE"),
        (N[(N.HATE_SPEECH = 220)] = "HATE_SPEECH"),
        (N[(N.CRACKED_ACCOUNTS = 230)] = "CRACKED_ACCOUNTS"),
        (N[(N.ILLICIT_GOODS = 240)] = "ILLICIT_GOODS"),
        (N[(N.SOCIAL_ENGINEERING = 250)] = "SOCIAL_ENGINEERING"),
        (N[(N.TEST_CLASSIFICATION = 9e3)] = "TEST_CLASSIFICATION"),
        (N[(N.TEST_CLASSIFICATION_LOW = 9001)] = "TEST_CLASSIFICATION_LOW"),
        (N[(N.TEST_CLASSIFICATION_SEVERE = 9002)] =
          "TEST_CLASSIFICATION_SEVERE"),
        ((u = I || (I = {}))[(u.BAN = 0)] = "BAN"),
        (u[(u.TEMP_BAN = 1)] = "TEMP_BAN"),
        (u[(u.GLOBAL_QUARANTINE = 2)] = "GLOBAL_QUARANTINE"),
        (u[(u.REQUIRE_VERIFICATION = 3)] = "REQUIRE_VERIFICATION"),
        (u[(u.USER_WARNING = 4)] = "USER_WARNING"),
        (u[(u.USER_SPAMMER = 5)] = "USER_SPAMMER"),
        (u[(u.CHANNEL_SPAM = 6)] = "CHANNEL_SPAM"),
        (u[(u.MESSAGE_SPAM = 7)] = "MESSAGE_SPAM"),
        (u[(u.DISABLE_SUSPICIOUS_ACTIVITY = 8)] =
          "DISABLE_SUSPICIOUS_ACTIVITY"),
        (u[(u.LIMITED_ACCESS = 9)] = "LIMITED_ACCESS"),
        (u[(u.CHANNEL_SCHEDULE_DELETE = 10)] = "CHANNEL_SCHEDULE_DELETE"),
        (u[(u.MESSAGE_CONTENT_REMOVAL = 11)] = "MESSAGE_CONTENT_REMOVAL"),
        (u[(u.GUILD_DISABLE_INVITE = 12)] = "GUILD_DISABLE_INVITE"),
        (u[(u.USER_CONTENT_REMOVAL = 13)] = "USER_CONTENT_REMOVAL"),
        (u[(u.USER_USERNAME_MANGLE = 14)] = "USER_USERNAME_MANGLE"),
        (u[(u.GUILD_LIMITED_ACCESS = 15)] = "GUILD_LIMITED_ACCESS"),
        (u[(u.USER_MESSAGE_REMOVAL = 16)] = "USER_MESSAGE_REMOVAL"),
        (u[(u.GUILD_DELETE = 20)] = "GUILD_DELETE"),
        ((A = o || (o = {}))[(A.ALL_GOOD = 100)] = "ALL_GOOD"),
        (A[(A.LIMITED = 200)] = "LIMITED"),
        (A[(A.VERY_LIMITED = 300)] = "VERY_LIMITED"),
        (A[(A.AT_RISK = 400)] = "AT_RISK"),
        (A[(A.SUSPENDED = 500)] = "SUSPENDED"),
        ((l = s || (s = {}))[(l.DSA_ELIGIBLE = 1)] = "DSA_ELIGIBLE"),
        (l[(l.IN_APP_ELIGIBLE = 2)] = "IN_APP_ELIGIBLE"),
        (l[(l.AGE_VERIFY_ELIGIBLE = 3)] = "AGE_VERIFY_ELIGIBLE"),
        ((T = a || (a = {}))[(T.PENDING = 0)] = "PENDING"),
        (T[(T.SUCCESS = 1)] = "SUCCESS"),
        (T[(T.FAILED = 2)] = "FAILED");
    },
    788080: function (e, t, n) {
      "use strict";
      n.d(t, {
        FB: function () {
          return T;
        },
        Pu: function () {
          return C;
        },
        Vt: function () {
          return u;
        },
        XX: function () {
          return S;
        },
        Zs: function () {
          return L;
        },
        c7: function () {
          return l;
        },
        eS: function () {
          return c;
        },
        fr: function () {
          return N;
        },
        ox: function () {
          return A;
        },
      }),
        n(724458);
      var i = n(913527),
        E = n.n(i),
        r = n(406432),
        _ = n(531441),
        I = n(800530),
        o = n(981631),
        s = n(959517),
        a = n(388032);
      function S(e) {
        return E()().to(E()(e));
      }
      function c(e) {
        var t, n;
        return (0, r.CO)(e.filename) || (0, r.NU)(e.filename)
          ? ""
              .concat(s._j)
              .concat(null !== (t = e.filename) && void 0 !== t ? t : ".png")
          : null !== (n = e.filename) && void 0 !== n
            ? n
            : "";
      }
      function N(e) {
        var t, n, i, E;
        if (null == e.fields) return;
        let r = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
        return {
          header: null !== (t = r[I.I5.HEADER]) && void 0 !== t ? t : "",
          icon: r[I.I5.ICON_TYPE],
          body: null !== (n = r[I.I5.BODY]) && void 0 !== n ? n : "",
          ctas: (null !== (i = r[I.I5.CTAS]) && void 0 !== i ? i : "")
            .split(",")
            .filter((e) => "" !== e),
          timestamp: parseFloat(
            null !== (E = r[I.I5.TIMESTAMP]) && void 0 !== E ? E : 0,
          ),
          theme: r[I.I5.THEME],
          learn_more_link: r[I.I5.LEARN_MORE_LINK],
          classification_id: r[I.I5.CLASSIFICATION_ID],
        };
      }
      function u(e) {
        if (e.type === _.lK.MESSAGE)
          return "" === e.content && 0 === e.attachments.length;
        return !0;
      }
      let A = (e) =>
          ({
            [I.bK.DIDNT_VIOLATE_POLICY]: a.intl.string(a.t.mZffAg),
            [I.bK.TOO_STRICT_UNFAIR]: a.intl.string(a.t.wgZVAg),
            [I.bK.DONT_AGREE_PENALTY]: a.intl.string(a.t.eu8G4u),
            [I.bK.SOMETHING_ELSE]: a.intl.string(a.t.XU3s6u),
          })[e],
        l = (e) =>
          null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
      function T(e) {
        return null != e && null != e.guild_metadata;
      }
      let L = (e) => {
        if (e === o.evJ.DSA_APPEAL_REQUEST_DEFLECTION)
          return a.intl.string(a.t["0qyXXF"]);
        return a.intl.string(a.t.aPmsx8);
      };
      function C(e) {
        let t = e.max_expiration_time;
        if (null == t) return null;
        try {
          return new Date(t);
        } catch {
          return null;
        }
      }
    },
    430075: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var i = n(200651);
      n(192379);
      var E = n(442837),
        r = n(481060),
        _ = n(703656),
        I = n(314897),
        o = n(236289),
        s = n(518560),
        a = n(800530),
        S = n(981631),
        c = n(388032),
        N = n(542517);
      function u() {
        return (0, i.jsxs)(r.Notice, {
          color: r.NoticeColors.DANGER,
          className: N.nagbar,
          children: [
            (0, i.jsx)(r.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: c.intl.string(c.t["MG+Bzc"]),
            }),
            (0, i.jsx)(r.NoticeButtonAnchor, {
              href: a.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
              children: (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: c.intl.string(c.t["9JceHB"]),
              }),
            }),
          ],
        });
      }
      function A(e) {
        let {} = e,
          t = (0, E.e7)([o.Z], () => o.Z.getAgeCheckStatus());
        return t === a.oE.NONE
          ? null
          : t === a.oE.SUCCESS
            ? (0, i.jsx)(r.HelpMessage, {
                messageType: r.HelpMessageTypes.POSITIVE,
                children: c.intl.format(c.t.maZDLy, { login: "/login" }),
              })
            : t === a.oE.ERROR
              ? (0, i.jsx)(r.HelpMessage, {
                  messageType: r.HelpMessageTypes.ERROR,
                  children: c.intl.string(c.t["4sILBQ"]),
                })
              : t === a.oE.FAILURE
                ? (0, i.jsx)(r.HelpMessage, {
                    messageType: r.HelpMessageTypes.ERROR,
                    children: c.intl.string(c.t["40R63t"]),
                  })
                : (0, i.jsx)(r.HelpMessage, {
                    messageType: r.HelpMessageTypes.INFO,
                    children: c.intl.string(c.t["nhhy/f"]),
                  });
      }
      function l() {
        return (0, i.jsxs)("div", {
          className: N.pageContainer,
          children: [(0, i.jsx)(A, {}), (0, i.jsx)(s.Z, {})],
        });
      }
      function T() {
        return (
          null ==
            (0, E.e7)([I.default], () => I.default.getSuspendedUserToken()) &&
            (0, _.uL)(S.Z5c.LOGIN),
          (0, i.jsxs)("div", {
            className: N.container,
            children: [(0, i.jsx)(u, {}), (0, i.jsx)(l, {})],
          })
        );
      }
    },
    300377: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_f7ea1b",
        profile: "profile_f7ea1b",
        status: "status_f7ea1b",
        title: "title_f7ea1b",
        health: "health_f7ea1b",
        line: "line_f7ea1b",
        statusOption: "statusOption_f7ea1b",
        statusLabel: "statusLabel_f7ea1b",
        marker: "marker_f7ea1b",
        empty: "empty_f7ea1b",
      };
    },
    78083: function (e, t, n) {
      "use strict";
      e.exports = {
        avatarBackground: "avatarBackground_bb882a",
        avatar: "avatar_bb882a",
      };
    },
    205503: function (e, t, n) {
      "use strict";
      e.exports = { container: "container_dccaf1", nagbar: "nagbar_dccaf1" };
    },
    364699: function (e, t, n) {
      "use strict";
      e.exports = {
        dropdown: "dropdown_f52ee7",
        header: "header_f52ee7",
        headerIconWrapper: "headerIconWrapper_f52ee7",
        caret: "caret_f52ee7",
        title: "title_f52ee7",
        items: "items_f52ee7",
        itemDetail: "itemDetail_f52ee7",
        itemDetailNew: "itemDetailNew_f52ee7",
        descriptionContainer: "descriptionContainer_f52ee7",
        timestamp: "timestamp_f52ee7 incidentTimeBase_f52ee7",
        newBadge: "newBadge_f52ee7 incidentTimeBase_f52ee7",
        paginationButton: "paginationButton_f52ee7",
        emptyState: "emptyState_f52ee7",
        emptyStateText: "emptyStateText_f52ee7",
        emptyStateSubtext: "emptyStateSubtext_f52ee7",
        iconContainer: "iconContainer_f52ee7",
        iconBackground: "iconBackground_f52ee7",
        icon: "icon_f52ee7",
        stars: "stars_f52ee7",
      };
    },
    542517: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_f99746",
        pageContainer: "pageContainer_f99746",
        nagbar: "nagbar_f99746",
      };
    },
  },
]);
//# sourceMappingURL=b5e08ce5aae53248811a.js.map
