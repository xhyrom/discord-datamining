(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86737"],
  {
    785902: function (e) {
      e.exports = function (e, t, a, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) {
          var o = e[r];
          t(n, o, a(o), e);
        }
        return n;
      };
    },
    800128: function (e, t, a) {
      var n = a(543744);
      e.exports = function (e, t, a, r) {
        return (
          n(e, function (e, n, i) {
            t(r, e, a(e), i);
          }),
          r
        );
      };
    },
    757009: function (e, t, a) {
      var n = a(785902),
        r = a(800128),
        i = a(256098),
        o = a(290677);
      e.exports = function (e, t) {
        return function (a, s) {
          var c = o(a) ? n : r,
            f = t ? t() : {};
          return c(a, e, i(s, 2), f);
        };
      };
    },
    979079: function (e, t, a) {
      var n = a(685347),
        r = a(757009)(function (e, t, a) {
          n(e, a, t);
        });
      e.exports = r;
    },
    430075: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var n = a(735250);
      a(470079);
      var r = a(442837),
        i = a(481060),
        o = a(703656),
        s = a(314897),
        c = a(518560),
        f = a(800530),
        u = a(981631),
        _ = a(689938),
        p = a(561306);
      function l() {
        return (0, n.jsxs)(i.Notice, {
          color: i.NoticeColors.DANGER,
          className: p.nagbar,
          children: [
            (0, n.jsx)(i.Text, {
              tag: "span",
              color: "always-white",
              variant: "text-md/normal",
              children: _.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR,
            }),
            (0, n.jsx)(i.NoticeButtonAnchor, {
              href: f.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
              children: (0, n.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: _.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA,
              }),
            }),
          ],
        });
      }
      function d() {
        return (0, n.jsx)("div", {
          className: p.pageContainer,
          children: (0, n.jsx)(c.Z, {}),
        });
      }
      function m() {
        return (
          null ==
            (0, r.e7)([s.default], () => s.default.getSuspendedUserToken()) &&
            (0, o.uL)(u.Z5c.LOGIN),
          (0, n.jsxs)("div", {
            className: p.container,
            children: [(0, n.jsx)(l, {}), (0, n.jsx)(d, {})],
          })
        );
      }
    },
    596175: function (e, t, a) {
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
    371497: function (e, t, a) {
      "use strict";
      e.exports = {
        avatarBackground: "avatarBackground_bb882a",
        avatar: "avatar_bb882a",
      };
    },
    262714: function (e, t, a) {
      "use strict";
      e.exports = { container: "container_dccaf1", nagbar: "nagbar_dccaf1" };
    },
    388690: function (e, t, a) {
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
    561306: function (e, t, a) {
      "use strict";
      e.exports = {
        container: "container_f99746",
        pageContainer: "pageContainer_f99746",
        nagbar: "nagbar_f99746",
      };
    },
  },
]);
//# sourceMappingURL=5a8584040a8171829eb1.js.map
