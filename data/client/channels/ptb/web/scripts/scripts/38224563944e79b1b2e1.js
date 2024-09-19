(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39665"],
  {
    785902: function (e) {
      e.exports = function (e, t, n, E) {
        for (var _ = -1, i = null == e ? 0 : e.length; ++_ < i; ) {
          var r = e[_];
          t(E, r, n(r), e);
        }
        return E;
      };
    },
    800128: function (e, t, n) {
      var E = n(543744);
      e.exports = function (e, t, n, _) {
        return (
          E(e, function (e, E, i) {
            t(_, e, n(e), i);
          }),
          _
        );
      };
    },
    757009: function (e, t, n) {
      var E = n(785902),
        _ = n(800128),
        i = n(256098),
        r = n(290677);
      e.exports = function (e, t) {
        return function (n, I) {
          var N = r(n) ? E : _,
            S = t ? t() : {};
          return N(n, e, i(I, 2), S);
        };
      };
    },
    979079: function (e, t, n) {
      var E = n(685347),
        _ = n(757009)(function (e, t, n) {
          E(e, n, t);
        });
      e.exports = _;
    },
    800530: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cg: function () {
          return f;
        },
        Cs: function () {
          return u;
        },
        EY: function () {
          return M;
        },
        I5: function () {
          return R;
        },
        JQ: function () {
          return P;
        },
        RY: function () {
          return D;
        },
        SU: function () {
          return a;
        },
        Sv: function () {
          return p;
        },
        ZW: function () {
          return G;
        },
        bK: function () {
          return c;
        },
        n0: function () {
          return A;
        },
        qS: function () {
          return T;
        },
        s: function () {
          return s;
        },
        sQ: function () {
          return l;
        },
        wo: function () {
          return o;
        },
      });
      var E,
        _,
        i,
        r,
        I,
        N,
        S,
        a,
        o,
        A,
        s,
        c,
        u,
        T,
        L = n(990547),
        O = n(981631);
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
      ((E = a || (a = {})).SETTINGS = "SETTINGS"),
        (E.ACCOUNT_STANDING = "ACCOUNT_STANDING"),
        (E.GUILD_SETTINGS = "GUILD_SETTINGS"),
        (E.ENCRYPTION = "ENCRYPTION"),
        (E.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"),
        (E.DATA_PRIVACY = "DATA_PRIVACY");
      class l {}
      C(l, "TOS_LINK", "https://discord.com/terms"),
        C(l, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"),
        C(
          l,
          "APPEALS_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731",
        ),
        C(
          l,
          "WARNING_SYSTEM_HELPCENTER_LINK",
          "https://support.discord.com/hc/articles/18210965981847",
        ),
        C(
          l,
          "AGE_VERIFICATION_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731",
        ),
        C(
          l,
          "SPAM_LINK",
          "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__",
        );
      class f {}
      C(f, "CLASSIFICATION_ID", "classification_id"),
        C(f, "INCIDENT_TIMESTAMP", "incident_time"),
        ((_ = o || (o = {})).POLICY_VIOLATION_DETAIL =
          "policy_violation_detail"),
        (_.LEARN_MORE_LINK = "learn_more_link");
      class R {}
      C(R, "ICON_TYPE", "icon_type"),
        C(R, "HEADER", "header"),
        C(R, "BODY", "body"),
        C(R, "CTAS", "ctas"),
        C(R, "TIMESTAMP", "timestamp"),
        C(R, "THEME", "theme"),
        C(R, "CLIENT_VERSION_MESSAGE", "client_version_message"),
        C(R, "LEARN_MORE_LINK", "learn_more_link"),
        C(R, "CLASSIFICATION_ID", "classification_id"),
        ((i = A || (A = {}))[(i.ViewViolationDetail = 0)] =
          "ViewViolationDetail"),
        (i[(i.ViewViolationsDropdown = 1)] = "ViewViolationsDropdown"),
        (i[(i.ClickLetUsKnow = 2)] = "ClickLetUsKnow"),
        (i[(i.ClickAgeVerificationLink = 3)] = "ClickAgeVerificationLink"),
        (i[(i.ClickSpamWebformLink = 4)] = "ClickSpamWebformLink"),
        (i[(i.ClickLearnMoreLink = 5)] = "ClickLearnMoreLink"),
        (i[(i.ClickCommunityGuidelinesLink = 6)] =
          "ClickCommunityGuidelinesLink"),
        (i[(i.ClickWarningSystemHelpcenterLink = 7)] =
          "ClickWarningSystemHelpcenterLink"),
        ((r = s || (s = {}))[(r.SystemDM = 0)] = "SystemDM"),
        (r[(r.StandingTab = 1)] = "StandingTab"),
        (r[(r.AppealIngestion = 2)] = "AppealIngestion"),
        Object.freeze({
          SPEED_BUMP: O.jXE.APPEAL_INGESTION_SPEED_BUMP,
          COLLECT_SIGNAL: O.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
          CONFIRM_SUBMISSION: O.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          REQUEST_SENT: O.jXE.APPEAL_INGESTION_REQUEST_SENT,
          THANKS: O.jXE.APPEAL_INGESTION_THANKS,
          SPAM: O.jXE.APPEAL_INGESTION_SPAM,
        }),
        ((I = c || (c = {}))[(I.DIDNT_VIOLATE_POLICY = 0)] =
          "DIDNT_VIOLATE_POLICY"),
        (I[(I.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
        (I[(I.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
        (I[(I.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE");
      let D = [0, 1, 2, 3],
        p = 372,
        M = 279,
        G = { impression_group: L.ImpressionGroups.APPEAL_INGESTION };
      ((N = u || (u = {})).SPEED_BUMP = "speed-bump"),
        (N.COLLECT_SIGNAL = "collect-signal"),
        (N.CONFIRM_SUBMISSION = "confirm-submission"),
        (N.REQUEST_SENT = "request-sent"),
        (N.THANKS = "thanks");
      let P = {
        "speed-bump": { next: "collect-signal", prev: null },
        "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
        "confirm-submission": { next: "request-sent", prev: "collect-signal" },
        "request-sent": { next: null, prev: null },
      };
      ((S = T || (T = {}))[(S.USER = 1)] = "USER"),
        (S[(S.GUILD_OWNER = 2)] = "GUILD_OWNER"),
        (S[(S.GUILD_MEMBER = 3)] = "GUILD_MEMBER");
    },
    531441: function (e, t, n) {
      "use strict";
      var E, _, i, r, I, N, S, a, o, A, s, c, u;
      n.d(t, {
        OY: function () {
          return S;
        },
        Sn: function () {
          return N;
        },
        hQ: function () {
          return i;
        },
        lK: function () {
          return E;
        },
        wO: function () {
          return _;
        },
      }),
        ((E || (E = {})).MESSAGE = "message"),
        ((a = _ || (_ = {}))[(a.OWNER = 1)] = "OWNER"),
        (a[(a.MEMBER = 2)] = "MEMBER"),
        ((o = i || (i = {}))[(o.REVIEW_PENDING = 1)] = "REVIEW_PENDING"),
        (o[(o.CLASSIFICATION_UPHELD = 2)] = "CLASSIFICATION_UPHELD"),
        (o[(o.CLASSIFICATION_INVALIDATED = 3)] = "CLASSIFICATION_INVALIDATED"),
        ((A = r || (r = {}))[(A.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (A[(A.UNKNOWN = 1)] = "UNKNOWN"),
        (A[(A.UNSOLICITED_PORNOGRAPHY = 100)] = "UNSOLICITED_PORNOGRAPHY"),
        (A[(A.NONCONSENSUAL_PORNOGRAPHY = 200)] = "NONCONSENSUAL_PORNOGRAPHY"),
        (A[(A.GLORIFYING_VIOLENCE = 210)] = "GLORIFYING_VIOLENCE"),
        (A[(A.HATE_SPEECH = 220)] = "HATE_SPEECH"),
        (A[(A.CRACKED_ACCOUNTS = 230)] = "CRACKED_ACCOUNTS"),
        (A[(A.ILLICIT_GOODS = 240)] = "ILLICIT_GOODS"),
        (A[(A.SOCIAL_ENGINEERING = 250)] = "SOCIAL_ENGINEERING"),
        (A[(A.TEST_CLASSIFICATION = 9e3)] = "TEST_CLASSIFICATION"),
        (A[(A.TEST_CLASSIFICATION_LOW = 9001)] = "TEST_CLASSIFICATION_LOW"),
        (A[(A.TEST_CLASSIFICATION_SEVERE = 9002)] =
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
        ((c = N || (N = {}))[(c.ALL_GOOD = 100)] = "ALL_GOOD"),
        (c[(c.LIMITED = 200)] = "LIMITED"),
        (c[(c.VERY_LIMITED = 300)] = "VERY_LIMITED"),
        (c[(c.AT_RISK = 400)] = "AT_RISK"),
        (c[(c.SUSPENDED = 500)] = "SUSPENDED"),
        ((u = S || (S = {}))[(u.PENDING = 0)] = "PENDING"),
        (u[(u.SUCCESS = 1)] = "SUCCESS"),
        (u[(u.FAILED = 2)] = "FAILED");
    },
    788080: function (e, t, n) {
      "use strict";
      n.d(t, {
        FB: function () {
          return L;
        },
        Pu: function () {
          return C;
        },
        Vt: function () {
          return c;
        },
        XX: function () {
          return o;
        },
        Zs: function () {
          return O;
        },
        c7: function () {
          return T;
        },
        eS: function () {
          return A;
        },
        fr: function () {
          return s;
        },
        ox: function () {
          return u;
        },
      }),
        n(724458);
      var E = n(913527),
        _ = n.n(E),
        i = n(406432),
        r = n(531441),
        I = n(800530),
        N = n(981631),
        S = n(959517),
        a = n(689938);
      function o(e) {
        return _()().to(_()(e));
      }
      function A(e) {
        var t, n;
        return (0, i.CO)(e.filename) || (0, i.NU)(e.filename)
          ? ""
              .concat(S._j)
              .concat(null !== (t = e.filename) && void 0 !== t ? t : ".png")
          : null !== (n = e.filename) && void 0 !== n
            ? n
            : "";
      }
      function s(e) {
        var t, n, E, _;
        if (null == e.fields) return;
        let i = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
        return {
          header: null !== (t = i[I.I5.HEADER]) && void 0 !== t ? t : "",
          icon: i[I.I5.ICON_TYPE],
          body: null !== (n = i[I.I5.BODY]) && void 0 !== n ? n : "",
          ctas: (null !== (E = i[I.I5.CTAS]) && void 0 !== E ? E : "")
            .split(",")
            .filter((e) => "" !== e),
          timestamp: parseFloat(
            null !== (_ = i[I.I5.TIMESTAMP]) && void 0 !== _ ? _ : 0,
          ),
          theme: i[I.I5.THEME],
          learn_more_link: i[I.I5.LEARN_MORE_LINK],
          classification_id: i[I.I5.CLASSIFICATION_ID],
        };
      }
      function c(e) {
        if (e.type === r.lK.MESSAGE)
          return "" === e.content && 0 === e.attachments.length;
        return !0;
      }
      let u = (e) =>
          ({
            [I.bK.DIDNT_VIOLATE_POLICY]:
              a.Z.Messages
                .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
            [I.bK.TOO_STRICT_UNFAIR]:
              a.Z.Messages
                .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
            [I.bK.DONT_AGREE_PENALTY]:
              a.Z.Messages
                .APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
            [I.bK.SOMETHING_ELSE]:
              a.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE,
          })[e],
        T = (e) =>
          null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
      function L(e) {
        return null != e && null != e.guild_metadata;
      }
      let O = (e) => {
        if (e === N.evJ.DSA_APPEAL_REQUEST_DEFLECTION)
          return a.Z.Messages
            .APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
        return a.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR;
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
            return u;
          },
        });
      var E = n(735250);
      n(470079);
      var _ = n(442837),
        i = n(481060),
        r = n(703656),
        I = n(314897),
        N = n(518560),
        S = n(800530),
        a = n(981631),
        o = n(689938),
        A = n(561306);
      function s() {
        return (0, E.jsxs)(i.Notice, {
          color: i.NoticeColors.DANGER,
          className: A.nagbar,
          children: [
            (0, E.jsx)(i.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: o.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR,
            }),
            (0, E.jsx)(i.NoticeButtonAnchor, {
              href: S.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
              children: (0, E.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: o.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA,
              }),
            }),
          ],
        });
      }
      function c() {
        return (0, E.jsx)("div", {
          className: A.pageContainer,
          children: (0, E.jsx)(N.Z, {}),
        });
      }
      function u() {
        return (
          null ==
            (0, _.e7)([I.default], () => I.default.getSuspendedUserToken()) &&
            (0, r.uL)(a.Z5c.LOGIN),
          (0, E.jsxs)("div", {
            className: A.container,
            children: [(0, E.jsx)(s, {}), (0, E.jsx)(c, {})],
          })
        );
      }
    },
    596175: function (e, t, n) {
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
    371497: function (e, t, n) {
      "use strict";
      e.exports = {
        avatarBackground: "avatarBackground_bb882a",
        avatar: "avatar_bb882a",
      };
    },
    262714: function (e, t, n) {
      "use strict";
      e.exports = { container: "container_dccaf1", nagbar: "nagbar_dccaf1" };
    },
    388690: function (e, t, n) {
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
    561306: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_f99746",
        pageContainer: "pageContainer_f99746",
        nagbar: "nagbar_f99746",
      };
    },
  },
]);
//# sourceMappingURL=38224563944e79b1b2e1.js.map
