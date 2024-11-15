(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67411"],
  {
    785902: function (e) {
      e.exports = function (e, t, n, i) {
        for (var r = -1, E = null == e ? 0 : e.length; ++r < E; ) {
          var _ = e[r];
          t(i, _, n(_), e);
        }
        return i;
      };
    },
    800128: function (e, t, n) {
      var i = n(543744);
      e.exports = function (e, t, n, r) {
        return (
          i(e, function (e, i, E) {
            t(r, e, n(e), E);
          }),
          r
        );
      };
    },
    757009: function (e, t, n) {
      var i = n(785902),
        r = n(800128),
        E = n(256098),
        _ = n(290677);
      e.exports = function (e, t) {
        return function (n, I) {
          var o = _(n) ? i : r,
            a = t ? t() : {};
          return o(n, e, E(I, 2), a);
        };
      };
    },
    979079: function (e, t, n) {
      var i = n(685347),
        r = n(757009)(function (e, t, n) {
          i(e, n, t);
        });
      e.exports = r;
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
          return p;
        },
        JQ: function () {
          return G;
        },
        RY: function () {
          return D;
        },
        SU: function () {
          return S;
        },
        Sv: function () {
          return R;
        },
        ZW: function () {
          return m;
        },
        bK: function () {
          return s;
        },
        n0: function () {
          return N;
        },
        qS: function () {
          return T;
        },
        s: function () {
          return u;
        },
        sQ: function () {
          return f;
        },
        wo: function () {
          return c;
        },
      });
      var i,
        r,
        E,
        _,
        I,
        o,
        a,
        S,
        c,
        N,
        u,
        s,
        A,
        T,
        l = n(990547),
        L = n(981631);
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
        ((r = c || (c = {})).POLICY_VIOLATION_DETAIL =
          "policy_violation_detail"),
        (r.LEARN_MORE_LINK = "learn_more_link");
      class p {}
      C(p, "ICON_TYPE", "icon_type"),
        C(p, "HEADER", "header"),
        C(p, "BODY", "body"),
        C(p, "CTAS", "ctas"),
        C(p, "TIMESTAMP", "timestamp"),
        C(p, "THEME", "theme"),
        C(p, "CLIENT_VERSION_MESSAGE", "client_version_message"),
        C(p, "LEARN_MORE_LINK", "learn_more_link"),
        C(p, "CLASSIFICATION_ID", "classification_id"),
        ((E = N || (N = {}))[(E.ViewViolationDetail = 0)] =
          "ViewViolationDetail"),
        (E[(E.ViewViolationsDropdown = 1)] = "ViewViolationsDropdown"),
        (E[(E.ClickLetUsKnow = 2)] = "ClickLetUsKnow"),
        (E[(E.ClickAgeVerificationLink = 3)] = "ClickAgeVerificationLink"),
        (E[(E.ClickSpamWebformLink = 4)] = "ClickSpamWebformLink"),
        (E[(E.ClickLearnMoreLink = 5)] = "ClickLearnMoreLink"),
        (E[(E.ClickCommunityGuidelinesLink = 6)] =
          "ClickCommunityGuidelinesLink"),
        (E[(E.ClickWarningSystemHelpcenterLink = 7)] =
          "ClickWarningSystemHelpcenterLink"),
        ((_ = u || (u = {}))[(_.SystemDM = 0)] = "SystemDM"),
        (_[(_.StandingTab = 1)] = "StandingTab"),
        (_[(_.AppealIngestion = 2)] = "AppealIngestion"),
        Object.freeze({
          SPEED_BUMP: L.jXE.APPEAL_INGESTION_SPEED_BUMP,
          COLLECT_SIGNAL: L.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
          CONFIRM_SUBMISSION: L.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          REQUEST_SENT: L.jXE.APPEAL_INGESTION_REQUEST_SENT,
          THANKS: L.jXE.APPEAL_INGESTION_THANKS,
          SPAM: L.jXE.APPEAL_INGESTION_SPAM,
        }),
        ((I = s || (s = {}))[(I.DIDNT_VIOLATE_POLICY = 0)] =
          "DIDNT_VIOLATE_POLICY"),
        (I[(I.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
        (I[(I.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
        (I[(I.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let D = [0, 1, 2, 3],
        R = 372,
        d = 279,
        m = { impression_group: l.ImpressionGroups.APPEAL_INGESTION };
      ((o = A || (A = {})).SPEED_BUMP = "speed-bump"),
        (o.COLLECT_SIGNAL = "collect-signal"),
        (o.CONFIRM_SUBMISSION = "confirm-submission"),
        (o.REQUEST_SENT = "request-sent"),
        (o.THANKS = "thanks");
      let G = {
        "speed-bump": { next: "collect-signal", prev: null },
        "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
        "confirm-submission": { next: "request-sent", prev: "collect-signal" },
        "request-sent": { next: null, prev: null },
      };
      ((a = T || (T = {}))[(a.USER = 1)] = "USER"),
        (a[(a.GUILD_OWNER = 2)] = "GUILD_OWNER"),
        (a[(a.GUILD_MEMBER = 3)] = "GUILD_MEMBER");
    },
    531441: function (e, t, n) {
      "use strict";
      var i, r, E, _, I, o, a, S, c, N, u, s, A;
      n.d(t, {
        OY: function () {
          return a;
        },
        Sn: function () {
          return o;
        },
        hQ: function () {
          return E;
        },
        lK: function () {
          return i;
        },
        wO: function () {
          return r;
        },
      }),
        ((i || (i = {})).MESSAGE = "message"),
        ((S = r || (r = {}))[(S.OWNER = 1)] = "OWNER"),
        (S[(S.MEMBER = 2)] = "MEMBER"),
        ((c = E || (E = {}))[(c.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
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
        ((s = o || (o = {}))[(s.ALL_GOOD = 100)] = "ALL_GOOD"),
        (s[(s.LIMITED = 200)] = "LIMITED"),
        (s[(s.VERY_LIMITED = 300)] = "VERY_LIMITED"),
        (s[(s.AT_RISK = 400)] = "AT_RISK"),
        (s[(s.SUSPENDED = 500)] = "SUSPENDED"),
        ((A = a || (a = {}))[(A.PENDING = 0)] = "PENDING"),
        (A[(A.SUCCESS = 1)] = "SUCCESS"),
        (A[(A.FAILED = 2)] = "FAILED");
    },
    788080: function (e, t, n) {
      "use strict";
      n.d(t, {
        FB: function () {
          return l;
        },
        Pu: function () {
          return C;
        },
        Vt: function () {
          return s;
        },
        XX: function () {
          return c;
        },
        Zs: function () {
          return L;
        },
        c7: function () {
          return T;
        },
        eS: function () {
          return N;
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
        r = n.n(i),
        E = n(406432),
        _ = n(531441),
        I = n(800530),
        o = n(981631),
        a = n(959517),
        S = n(388032);
      function c(e) {
        return r()().to(r()(e));
      }
      function N(e) {
        var t, n;
        return (0, E.CO)(e.filename) || (0, E.NU)(e.filename)
          ? ""
              .concat(a._j)
              .concat(null !== (t = e.filename) && void 0 !== t ? t : ".png")
          : null !== (n = e.filename) && void 0 !== n
            ? n
            : "";
      }
      function u(e) {
        var t, n, i, r;
        if (null == e.fields) return;
        let E = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
        return {
          header: null !== (t = E[I.I5.HEADER]) && void 0 !== t ? t : "",
          icon: E[I.I5.ICON_TYPE],
          body: null !== (n = E[I.I5.BODY]) && void 0 !== n ? n : "",
          ctas: (null !== (i = E[I.I5.CTAS]) && void 0 !== i ? i : "")
            .split(",")
            .filter((e) => "" !== e),
          timestamp: parseFloat(
            null !== (r = E[I.I5.TIMESTAMP]) && void 0 !== r ? r : 0,
          ),
          theme: E[I.I5.THEME],
          learn_more_link: E[I.I5.LEARN_MORE_LINK],
          classification_id: E[I.I5.CLASSIFICATION_ID],
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
        T = (e) =>
          null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
      function l(e) {
        return null != e && null != e.guild_metadata;
      }
      let L = (e) => {
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
      var r = n(442837),
        E = n(481060),
        _ = n(703656),
        I = n(314897),
        o = n(518560),
        a = n(800530),
        S = n(981631),
        c = n(388032),
        N = n(506486);
      function u() {
        return (0, i.jsxs)(E.Notice, {
          color: E.NoticeColors.DANGER,
          className: N.nagbar,
          children: [
            (0, i.jsx)(E.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: c.intl.string(c.t["MG+Bzc"]),
            }),
            (0, i.jsx)(E.NoticeButtonAnchor, {
              href: a.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
              children: (0, i.jsx)(E.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: c.intl.string(c.t["9JceHB"]),
              }),
            }),
          ],
        });
      }
      function s() {
        return (0, i.jsx)("div", {
          className: N.pageContainer,
          children: (0, i.jsx)(o.Z, {}),
        });
      }
      function A() {
        return (
          null ==
            (0, r.e7)([I.default], () => I.default.getSuspendedUserToken()) &&
            (0, _.uL)(S.Z5c.LOGIN),
          (0, i.jsxs)("div", {
            className: N.container,
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
//# sourceMappingURL=8af8ba997155165cbccd.js.map
