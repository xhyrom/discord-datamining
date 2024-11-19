(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67411"],
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
            a = t ? t() : {};
          return o(n, e, r(I, 2), a);
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
          return O;
        },
        Cs: function () {
          return A;
        },
        EY: function () {
          return d;
        },
        I5: function () {
          return D;
        },
        JQ: function () {
          return m;
        },
        RY: function () {
          return R;
        },
        SU: function () {
          return S;
        },
        Sv: function () {
          return p;
        },
        ZW: function () {
          return G;
        },
        bK: function () {
          return s;
        },
        n0: function () {
          return c;
        },
        qS: function () {
          return L;
        },
        s: function () {
          return u;
        },
        sQ: function () {
          return f;
        },
        wo: function () {
          return N;
        },
      });
      var i,
        E,
        r,
        _,
        I,
        o,
        a,
        S,
        N,
        c,
        u,
        s,
        A,
        L,
        T = n(990547),
        l = n(981631);
      function C(e, t, n) {
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
      class f {}
      C(f, "TOS_LINK", "https://discord.com/terms"),
        C(f, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"),
        C(
          f,
          "APPEALS_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731",
        ),
        C(
          f,
          "WARNING_SYSTEM_HELPCENTER_LINK",
          "https://support.discord.com/hc/articles/18210965981847",
        ),
        C(
          f,
          "AGE_VERIFICATION_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731",
        ),
        C(
          f,
          "SPAM_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__",
        );
      class O {}
      C(O, "CLASSIFICATION_ID", "classification_id"),
        C(O, "INCIDENT_TIMESTAMP", "incident_time"),
        ((E = N || (N = {})).POLICY_VIOLATION_DETAIL =
          "policy_violation_detail"),
        (E.LEARN_MORE_LINK = "learn_more_link");
      class D {}
      C(D, "ICON_TYPE", "icon_type"),
        C(D, "HEADER", "header"),
        C(D, "BODY", "body"),
        C(D, "CTAS", "ctas"),
        C(D, "TIMESTAMP", "timestamp"),
        C(D, "THEME", "theme"),
        C(D, "CLIENT_VERSION_MESSAGE", "client_version_message"),
        C(D, "LEARN_MORE_LINK", "learn_more_link"),
        C(D, "CLASSIFICATION_ID", "classification_id"),
        ((r = c || (c = {}))[(r.ViewViolationDetail = 0)] =
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
          SPEED_BUMP: l.jXE.APPEAL_INGESTION_SPEED_BUMP,
          COLLECT_SIGNAL: l.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
          CONFIRM_SUBMISSION: l.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          REQUEST_SENT: l.jXE.APPEAL_INGESTION_REQUEST_SENT,
          THANKS: l.jXE.APPEAL_INGESTION_THANKS,
          SPAM: l.jXE.APPEAL_INGESTION_SPAM,
        }),
        ((I = s || (s = {}))[(I.DIDNT_VIOLATE_POLICY = 0)] =
          "DIDNT_VIOLATE_POLICY"),
        (I[(I.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
        (I[(I.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
        (I[(I.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let R = [0, 1, 2, 3],
        p = 372,
        d = 279,
        G = { impression_group: T.ImpressionGroups.APPEAL_INGESTION };
      ((o = A || (A = {})).SPEED_BUMP = "speed-bump"),
        (o.COLLECT_SIGNAL = "collect-signal"),
        (o.CONFIRM_SUBMISSION = "confirm-submission"),
        (o.REQUEST_SENT = "request-sent"),
        (o.THANKS = "thanks");
      let m = {
        "speed-bump": { next: "collect-signal", prev: null },
        "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
        "confirm-submission": { next: "request-sent", prev: "collect-signal" },
        "request-sent": { next: null, prev: null },
      };
      ((a = L || (L = {}))[(a.USER = 1)] = "USER"),
        (a[(a.GUILD_OWNER = 2)] = "GUILD_OWNER"),
        (a[(a.GUILD_MEMBER = 3)] = "GUILD_MEMBER");
    },
    531441: function (e, t, n) {
      "use strict";
      var i, E, r, _, I, o, a, S, N, c, u, s, A, L, T;
      n.d(t, {
        OY: function () {
          return S;
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
        wO: function () {
          return E;
        },
      }),
        ((i || (i = {})).MESSAGE = "message"),
        ((N = E || (E = {}))[(N.OWNER = 1)] = "OWNER"),
        (N[(N.MEMBER = 2)] = "MEMBER"),
        ((c = r || (r = {}))[(c.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
        (c[(c.CLASSIFICATION_UPHELD = 2)] = "CLASSIFICATION_UPHELD"),
        (c[(c.CLASSIFICATION_INVALIDATED = 3)] = "CLASSIFICATION_INVALIDATED"),
        ((u = _ || (_ = {}))[(u.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (u[(u.UNKNOWN = 1)] = "UNKNOWN"),
        (u[(u.UNSOLICITED_PORNOGRAPHY = 100)] = "UNSOLICITED_PORNOGRAPHY"),
        (u[(u.NONCONSENSUAL_PORNOGRAPHY = 200)] = "NONCONSENSUAL_PORNOGRAPHY"),
        (u[(u.GLORIFYING_VIOLENCE = 210)] = "GLORIFYING_VIOLENCE"),
        (u[(u.HATE_SPEECH = 220)] = "HATE_SPEECH"),
        (u[(u.CRACKED_ACCOUNTS = 230)] = "CRACKED_ACCOUNTS"),
        (u[(u.ILLICIT_GOODS = 240)] = "ILLICIT_GOODS"),
        (u[(u.SOCIAL_ENGINEERING = 250)] = "SOCIAL_ENGINEERING"),
        (u[(u.TEST_CLASSIFICATION = 9e3)] = "TEST_CLASSIFICATION"),
        (u[(u.TEST_CLASSIFICATION_LOW = 9001)] = "TEST_CLASSIFICATION_LOW"),
        (u[(u.TEST_CLASSIFICATION_SEVERE = 9002)] =
          "TEST_CLASSIFICATION_SEVERE"),
        ((s = I || (I = {}))[(s.BAN = 0)] = "BAN"),
        (s[(s.TEMP_BAN = 1)] = "TEMP_BAN"),
        (s[(s.GLOBAL_QUARANTINE = 2)] = "GLOBAL_QUARANTINE"),
        (s[(s.REQUIRE_VERIFICATION = 3)] = "REQUIRE_VERIFICATION"),
        (s[(s.USER_WARNING = 4)] = "USER_WARNING"),
        (s[(s.USER_SPAMMER = 5)] = "USER_SPAMMER"),
        (s[(s.CHANNEL_SPAM = 6)] = "CHANNEL_SPAM"),
        (s[(s.MESSAGE_SPAM = 7)] = "MESSAGE_SPAM"),
        (s[(s.DISABLE_SUSPICIOUS_ACTIVITY = 8)] =
          "DISABLE_SUSPICIOUS_ACTIVITY"),
        (s[(s.LIMITED_ACCESS = 9)] = "LIMITED_ACCESS"),
        (s[(s.CHANNEL_SCHEDULE_DELETE = 10)] = "CHANNEL_SCHEDULE_DELETE"),
        (s[(s.MESSAGE_CONTENT_REMOVAL = 11)] = "MESSAGE_CONTENT_REMOVAL"),
        (s[(s.GUILD_DISABLE_INVITE = 12)] = "GUILD_DISABLE_INVITE"),
        (s[(s.USER_CONTENT_REMOVAL = 13)] = "USER_CONTENT_REMOVAL"),
        (s[(s.USER_USERNAME_MANGLE = 14)] = "USER_USERNAME_MANGLE"),
        (s[(s.GUILD_LIMITED_ACCESS = 15)] = "GUILD_LIMITED_ACCESS"),
        (s[(s.USER_MESSAGE_REMOVAL = 16)] = "USER_MESSAGE_REMOVAL"),
        (s[(s.GUILD_DELETE = 20)] = "GUILD_DELETE"),
        ((A = o || (o = {}))[(A.ALL_GOOD = 100)] = "ALL_GOOD"),
        (A[(A.LIMITED = 200)] = "LIMITED"),
        (A[(A.VERY_LIMITED = 300)] = "VERY_LIMITED"),
        (A[(A.AT_RISK = 400)] = "AT_RISK"),
        (A[(A.SUSPENDED = 500)] = "SUSPENDED"),
        ((L = a || (a = {}))[(L.DSA_ELIGIBLE = 1)] = "DSA_ELIGIBLE"),
        (L[(L.IN_APP_ELIGIBLE = 2)] = "IN_APP_ELIGIBLE"),
        (L[(L.AGE_VERIFY_ELIGIBLE = 3)] = "AGE_VERIFY_ELIGIBLE"),
        ((T = S || (S = {}))[(T.PENDING = 0)] = "PENDING"),
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
          return s;
        },
        XX: function () {
          return N;
        },
        Zs: function () {
          return l;
        },
        c7: function () {
          return L;
        },
        eS: function () {
          return c;
        },
        fr: function () {
          return u;
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
        a = n(959517),
        S = n(388032);
      function N(e) {
        return E()().to(E()(e));
      }
      function c(e) {
        var t, n;
        return (0, r.CO)(e.filename) || (0, r.NU)(e.filename)
          ? ""
              .concat(a._j)
              .concat(null !== (t = e.filename) && void 0 !== t ? t : ".png")
          : null !== (n = e.filename) && void 0 !== n
            ? n
            : "";
      }
      function u(e) {
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
      function s(e) {
        if (e.type === _.lK.MESSAGE)
          return "" === e.content && 0 === e.attachments.length;
        return !0;
      }
      let A = (e) =>
          ({
            [I.bK.DIDNT_VIOLATE_POLICY]: S.intl.string(S.t.mZffAg),
            [I.bK.TOO_STRICT_UNFAIR]: S.intl.string(S.t.wgZVAg),
            [I.bK.DONT_AGREE_PENALTY]: S.intl.string(S.t.eu8G4u),
            [I.bK.SOMETHING_ELSE]: S.intl.string(S.t.XU3s6u),
          })[e],
        L = (e) =>
          null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
      function T(e) {
        return null != e && null != e.guild_metadata;
      }
      let l = (e) => {
        if (e === o.evJ.DSA_APPEAL_REQUEST_DEFLECTION)
          return S.intl.string(S.t["0qyXXF"]);
        return S.intl.string(S.t.aPmsx8);
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
            return A;
          },
        });
      var i = n(200651);
      n(192379);
      var E = n(442837),
        r = n(481060),
        _ = n(703656),
        I = n(314897),
        o = n(518560),
        a = n(800530),
        S = n(981631),
        N = n(388032),
        c = n(506486);
      function u() {
        return (0, i.jsxs)(r.Notice, {
          color: r.NoticeColors.DANGER,
          className: c.nagbar,
          children: [
            (0, i.jsx)(r.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: N.intl.string(N.t["MG+Bzc"]),
            }),
            (0, i.jsx)(r.NoticeButtonAnchor, {
              href: a.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
              children: (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: N.intl.string(N.t["9JceHB"]),
              }),
            }),
          ],
        });
      }
      function s() {
        return (0, i.jsx)("div", {
          className: c.pageContainer,
          children: (0, i.jsx)(o.Z, {}),
        });
      }
      function A() {
        return (
          null ==
            (0, E.e7)([I.default], () => I.default.getSuspendedUserToken()) &&
            (0, _.uL)(S.Z5c.LOGIN),
          (0, i.jsxs)("div", {
            className: c.container,
            children: [(0, i.jsx)(u, {}), (0, i.jsx)(s, {})],
          })
        );
      }
    },
    370422: function (e, t, n) {
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
    38477: function (e, t, n) {
      "use strict";
      e.exports = {
        avatarBackground: "avatarBackground_bb882a",
        avatar: "avatar_bb882a",
      };
    },
    394686: function (e, t, n) {
      "use strict";
      e.exports = { container: "container_dccaf1", nagbar: "nagbar_dccaf1" };
    },
    15999: function (e, t, n) {
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
    506486: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_f99746",
        pageContainer: "pageContainer_f99746",
        nagbar: "nagbar_f99746",
      };
    },
  },
]);
//# sourceMappingURL=410f02087d1405939628.js.map
