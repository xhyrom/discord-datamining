(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88205"],
  {
    785902: function (e) {
      e.exports = function (e, n, t, i) {
        for (var E = -1, r = null == e ? 0 : e.length; ++E < r; ) {
          var I = e[E];
          n(i, I, t(I), e);
        }
        return i;
      };
    },
    800128: function (e, n, t) {
      var i = t(543744);
      e.exports = function (e, n, t, E) {
        return (
          i(e, function (e, i, r) {
            n(E, e, t(e), r);
          }),
          E
        );
      };
    },
    757009: function (e, n, t) {
      var i = t(785902),
        E = t(800128),
        r = t(256098),
        I = t(290677);
      e.exports = function (e, n) {
        return function (t, s) {
          var _ = I(t) ? i : E,
            a = n ? n() : {};
          return _(t, e, r(s, 2), a);
        };
      };
    },
    979079: function (e, n, t) {
      var i = t(685347),
        E = t(757009)(function (e, n, t) {
          i(e, t, n);
        });
      e.exports = E;
    },
    800530: function (e, n, t) {
      "use strict";
      t.d(n, {
        Cg: function () {
          return R;
        },
        Cs: function () {
          return A;
        },
        EY: function () {
          return M;
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
        SU: function () {
          return c;
        },
        Sv: function () {
          return m;
        },
        ZW: function () {
          return G;
        },
        bK: function () {
          return u;
        },
        n0: function () {
          return N;
        },
        oE: function () {
          return L;
        },
        qS: function () {
          return T;
        },
        s: function () {
          return l;
        },
        sQ: function () {
          return p;
        },
        wo: function () {
          return S;
        },
      });
      var i,
        E,
        r,
        I,
        s,
        _,
        a,
        o,
        c,
        S,
        N,
        l,
        u,
        A,
        T,
        L,
        C = t(990547),
        f = t(981631);
      function O(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((i = c || (c = {})).SETTINGS = "SETTINGS"),
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
        );
      class R {}
      O(R, "CLASSIFICATION_ID", "classification_id"),
        O(R, "INCIDENT_TIMESTAMP", "incident_time"),
        ((E = S || (S = {})).POLICY_VIOLATION_DETAIL =
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
        ((I = l || (l = {}))[(I.SystemDM = 0)] = "SystemDM"),
        (I[(I.StandingTab = 1)] = "StandingTab"),
        (I[(I.AppealIngestion = 2)] = "AppealIngestion"),
        Object.freeze({
          SPEED_BUMP: f.jXE.APPEAL_INGESTION_SPEED_BUMP,
          COLLECT_SIGNAL: f.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
          CONFIRM_SUBMISSION: f.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          REQUEST_SENT: f.jXE.APPEAL_INGESTION_REQUEST_SENT,
          THANKS: f.jXE.APPEAL_INGESTION_THANKS,
          SPAM: f.jXE.APPEAL_INGESTION_SPAM,
        }),
        ((s = u || (u = {}))[(s.DIDNT_VIOLATE_POLICY = 0)] =
          "DIDNT_VIOLATE_POLICY"),
        (s[(s.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
        (s[(s.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
        (s[(s.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let d = [0, 1, 2, 3],
        m = 372,
        M = 279,
        G = { impression_group: C.ImpressionGroups.APPEAL_INGESTION };
      ((_ = A || (A = {})).SPEED_BUMP = "speed-bump"),
        (_.COLLECT_SIGNAL = "collect-signal"),
        (_.CONFIRM_SUBMISSION = "confirm-submission"),
        (_.REQUEST_SENT = "request-sent"),
        (_.THANKS = "thanks");
      let P = {
        "speed-bump": { next: "collect-signal", prev: null },
        "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
        "confirm-submission": { next: "request-sent", prev: "collect-signal" },
        "request-sent": { next: null, prev: null },
      };
      ((a = T || (T = {}))[(a.USER = 1)] = "USER"),
        (a[(a.GUILD_OWNER = 2)] = "GUILD_OWNER"),
        (a[(a.GUILD_MEMBER = 3)] = "GUILD_MEMBER"),
        ((o = L || (L = {})).PENDING = "pending"),
        (o.LOADING = "loading"),
        (o.ERROR = "error"),
        (o.SUCCESS = "success"),
        (o.FAILURE = "failure"),
        (o.NONE = "none");
    },
    531441: function (e, n, t) {
      "use strict";
      var i, E, r, I, s, _, a, o, c, S, N, l, u, A, T;
      t.d(n, {
        OY: function () {
          return o;
        },
        Sn: function () {
          return _;
        },
        hQ: function () {
          return r;
        },
        lK: function () {
          return i;
        },
        tG: function () {
          return a;
        },
        wO: function () {
          return E;
        },
      }),
        ((i || (i = {})).MESSAGE = "message"),
        ((c = E || (E = {}))[(c.OWNER = 1)] = "OWNER"),
        (c[(c.MEMBER = 2)] = "MEMBER"),
        ((S = r || (r = {}))[(S.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
        (S[(S.CLASSIFICATION_UPHELD = 2)] = "CLASSIFICATION_UPHELD"),
        (S[(S.CLASSIFICATION_INVALIDATED = 3)] = "CLASSIFICATION_INVALIDATED"),
        ((N = I || (I = {}))[(N.UNSPECIFIED = 0)] = "UNSPECIFIED"),
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
        ((l = s || (s = {}))[(l.BAN = 0)] = "BAN"),
        (l[(l.TEMP_BAN = 1)] = "TEMP_BAN"),
        (l[(l.GLOBAL_QUARANTINE = 2)] = "GLOBAL_QUARANTINE"),
        (l[(l.REQUIRE_VERIFICATION = 3)] = "REQUIRE_VERIFICATION"),
        (l[(l.USER_WARNING = 4)] = "USER_WARNING"),
        (l[(l.USER_SPAMMER = 5)] = "USER_SPAMMER"),
        (l[(l.CHANNEL_SPAM = 6)] = "CHANNEL_SPAM"),
        (l[(l.MESSAGE_SPAM = 7)] = "MESSAGE_SPAM"),
        (l[(l.DISABLE_SUSPICIOUS_ACTIVITY = 8)] =
          "DISABLE_SUSPICIOUS_ACTIVITY"),
        (l[(l.LIMITED_ACCESS = 9)] = "LIMITED_ACCESS"),
        (l[(l.CHANNEL_SCHEDULE_DELETE = 10)] = "CHANNEL_SCHEDULE_DELETE"),
        (l[(l.MESSAGE_CONTENT_REMOVAL = 11)] = "MESSAGE_CONTENT_REMOVAL"),
        (l[(l.GUILD_DISABLE_INVITE = 12)] = "GUILD_DISABLE_INVITE"),
        (l[(l.USER_CONTENT_REMOVAL = 13)] = "USER_CONTENT_REMOVAL"),
        (l[(l.USER_USERNAME_MANGLE = 14)] = "USER_USERNAME_MANGLE"),
        (l[(l.GUILD_LIMITED_ACCESS = 15)] = "GUILD_LIMITED_ACCESS"),
        (l[(l.USER_MESSAGE_REMOVAL = 16)] = "USER_MESSAGE_REMOVAL"),
        (l[(l.GUILD_DELETE = 20)] = "GUILD_DELETE"),
        ((u = _ || (_ = {}))[(u.ALL_GOOD = 100)] = "ALL_GOOD"),
        (u[(u.LIMITED = 200)] = "LIMITED"),
        (u[(u.VERY_LIMITED = 300)] = "VERY_LIMITED"),
        (u[(u.AT_RISK = 400)] = "AT_RISK"),
        (u[(u.SUSPENDED = 500)] = "SUSPENDED"),
        ((A = a || (a = {}))[(A.DSA_ELIGIBLE = 1)] = "DSA_ELIGIBLE"),
        (A[(A.IN_APP_ELIGIBLE = 2)] = "IN_APP_ELIGIBLE"),
        (A[(A.AGE_VERIFY_ELIGIBLE = 3)] = "AGE_VERIFY_ELIGIBLE"),
        ((T = o || (o = {}))[(T.PENDING = 0)] = "PENDING"),
        (T[(T.SUCCESS = 1)] = "SUCCESS"),
        (T[(T.FAILED = 2)] = "FAILED");
    },
    788080: function (e, n, t) {
      "use strict";
      t.d(n, {
        FB: function () {
          return T;
        },
        Pu: function () {
          return C;
        },
        Vt: function () {
          return l;
        },
        XX: function () {
          return c;
        },
        Zs: function () {
          return L;
        },
        c7: function () {
          return A;
        },
        eS: function () {
          return S;
        },
        fr: function () {
          return N;
        },
        ox: function () {
          return u;
        },
      }),
        t(724458);
      var i = t(913527),
        E = t.n(i),
        r = t(406432),
        I = t(531441),
        s = t(800530),
        _ = t(981631),
        a = t(959517),
        o = t(388032);
      function c(e) {
        return E()().to(E()(e));
      }
      function S(e) {
        var n, t;
        return (0, r.CO)(e.filename) || (0, r.NU)(e.filename)
          ? ""
              .concat(a._j)
              .concat(null !== (n = e.filename) && void 0 !== n ? n : ".png")
          : null !== (t = e.filename) && void 0 !== t
            ? t
            : "";
      }
      function N(e) {
        var n, t, i, E;
        if (null == e.fields) return;
        let r = e.fields.reduce((e, n) => ((e[n.rawName] = n.rawValue), e), {});
        return {
          header: null !== (n = r[s.I5.HEADER]) && void 0 !== n ? n : "",
          icon: r[s.I5.ICON_TYPE],
          body: null !== (t = r[s.I5.BODY]) && void 0 !== t ? t : "",
          ctas: (null !== (i = r[s.I5.CTAS]) && void 0 !== i ? i : "")
            .split(",")
            .filter((e) => "" !== e),
          timestamp: parseFloat(
            null !== (E = r[s.I5.TIMESTAMP]) && void 0 !== E ? E : 0,
          ),
          theme: r[s.I5.THEME],
          learn_more_link: r[s.I5.LEARN_MORE_LINK],
          classification_id: r[s.I5.CLASSIFICATION_ID],
        };
      }
      function l(e) {
        if (e.type === I.lK.MESSAGE)
          return "" === e.content && 0 === e.attachments.length;
        return !0;
      }
      let u = (e) =>
          ({
            [s.bK.DIDNT_VIOLATE_POLICY]: o.intl.string(o.t.mZffAg),
            [s.bK.TOO_STRICT_UNFAIR]: o.intl.string(o.t.wgZVAg),
            [s.bK.DONT_AGREE_PENALTY]: o.intl.string(o.t.eu8G4u),
            [s.bK.SOMETHING_ELSE]: o.intl.string(o.t.XU3s6u),
          })[e],
        A = (e) =>
          null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
      function T(e) {
        return null != e && null != e.guild_metadata;
      }
      let L = (e) => {
        if (e === _.evJ.DSA_APPEAL_REQUEST_DEFLECTION)
          return o.intl.string(o.t["0qyXXF"]);
        return o.intl.string(o.t.aPmsx8);
      };
      function C(e) {
        let n = e.max_expiration_time;
        if (null == n) return null;
        try {
          return new Date(n);
        } catch {
          return null;
        }
      }
    },
    430075: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return L;
          },
        });
      var i = t(200651);
      t(192379);
      var E = t(442837),
        r = t(481060),
        I = t(703656),
        s = t(314897),
        _ = t(103879),
        a = t(236289),
        o = t(518560),
        c = t(800530),
        S = t(981631),
        N = t(388032),
        l = t(33869);
      function u() {
        return (0, i.jsxs)(r.Notice, {
          color: r.NoticeColors.DANGER,
          className: l.nagbar,
          children: [
            (0, i.jsx)(r.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: N.intl.string(N.t["MG+Bzc"]),
            }),
            (0, i.jsx)(r.NoticeButtonAnchor, {
              href: c.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
              children: (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: N.intl.string(N.t["9JceHB"]),
              }),
            }),
          ],
        });
      }
      function A(e) {
        let {} = e,
          n = (0, E.e7)([a.Z], () => a.Z.getAgeCheckStatus()),
          t = () => {
            (0, _._w)();
          };
        return n === c.oE.NONE
          ? null
          : n === c.oE.SUCCESS
            ? (0, i.jsx)(r.HelpMessage, {
                messageType: r.HelpMessageTypes.POSITIVE,
                children: N.intl.string(N.t.maZDLy),
              })
            : n === c.oE.ERROR
              ? (0, i.jsx)(r.HelpMessage, {
                  messageType: r.HelpMessageTypes.ERROR,
                  children: N.intl.string(N.t["4sILBQ"]),
                })
              : n === c.oE.FAILURE
                ? (0, i.jsx)(r.HelpMessage, {
                    messageType: r.HelpMessageTypes.ERROR,
                    children: (0, i.jsxs)("div", {
                      className: l.helpMessageContent,
                      children: [
                        N.intl.string(N.t["40R63t"]),
                        (0, i.jsx)(r.Clickable, {
                          className: l.clickableIcon,
                          onClick: t,
                          children: (0, i.jsx)(r.RefreshIcon, {}),
                        }),
                      ],
                    }),
                  })
                : n === c.oE.LOADING
                  ? (0, i.jsx)(r.HelpMessage, {
                      messageType: r.HelpMessageTypes.INFO,
                      children: N.intl.string(N.t["nhhy/f"]),
                    })
                  : (0, i.jsx)(r.HelpMessage, {
                      messageType: r.HelpMessageTypes.INFO,
                      children: (0, i.jsxs)("div", {
                        className: l.helpMessageContent,
                        children: [
                          N.intl.string(N.t["nhhy/f"]),
                          (0, i.jsx)(r.Clickable, {
                            className: l.clickableIcon,
                            onClick: t,
                            children: (0, i.jsx)(r.RefreshIcon, {}),
                          }),
                        ],
                      }),
                    });
      }
      function T() {
        return (0, i.jsxs)("div", {
          className: l.pageContainer,
          children: [(0, i.jsx)(A, {}), (0, i.jsx)(o.Z, {})],
        });
      }
      function L() {
        return (
          null ==
            (0, E.e7)([s.default], () => s.default.getSuspendedUserToken()) &&
            (0, I.uL)(S.Z5c.LOGIN),
          (0, i.jsxs)("div", {
            className: l.container,
            children: [(0, i.jsx)(u, {}), (0, i.jsx)(T, {})],
          })
        );
      }
    },
    578363: function (e, n, t) {
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
    128483: function (e, n, t) {
      "use strict";
      e.exports = {
        avatarBackground: "avatarBackground_bb882a",
        avatar: "avatar_bb882a",
      };
    },
    974710: function (e, n, t) {
      "use strict";
      e.exports = { container: "container_dccaf1", nagbar: "nagbar_dccaf1" };
    },
    849963: function (e, n, t) {
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
    33869: function (e, n, t) {
      "use strict";
      e.exports = {
        container: "container_f99746",
        pageContainer: "pageContainer_f99746",
        nagbar: "nagbar_f99746",
        helpMessageContent: "helpMessageContent_f99746",
        clickableIcon: "clickableIcon_f99746",
      };
    },
  },
]);
//# sourceMappingURL=931a973311c029fba980.js.map
