"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44808"],
  {
    678420: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(47120);
      var l = n(735250),
        r = n(470079),
        a = n(481060),
        o = n(661111),
        s = n(766411),
        i = n(626135),
        c = n(388080),
        d = n(981631),
        h = n(596401),
        u = n(689938),
        g = n(583459);
      function m(e, t, n) {
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
      class p extends r.PureComponent {
        componentDidMount() {
          (this.mountedAt = Date.now()),
            (this.maxScrolledPercentage = 0),
            this.track(d.rMx.CHANGE_LOG_OPENED, {}, !0);
        }
        componentWillUnmount() {
          this.track(d.rMx.CHANGE_LOG_CLOSED);
        }
        render() {
          return (0, l.jsx)(c.Z, {
            ...this.props,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track,
          });
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            m(this, "maxScrolledPercentage", 0),
            m(this, "mountedAt", 0),
            m(this, "close", () => {
              (0, a.closeModal)(h.Xd);
            }),
            m(this, "handleScroll", (e) => {
              let {
                offsetHeight: t,
                scrollHeight: n,
                scrollTop: l,
              } = e.getScrollerState();
              this.maxScrolledPercentage = Math.min(
                Math.max(this.maxScrolledPercentage, l / (n - t)),
                1,
              );
            }),
            m(this, "track", function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                l =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                { changeLog: r } = t.props,
                { date: a, revision: o } = r,
                s = { change_log_id: "".concat(a, ":").concat(o), ...n };
              !l &&
                (s = {
                  seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
                  max_scrolled_percentage:
                    100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                  ...s,
                }),
                i.default.track(e, s);
            });
        }
      }
      function x(e) {
        let { changelog: t, loaded: n, clientTooOld: i } = (0, s.E)();
        if (
          (r.useEffect(() => {
            if (n && null != t)
              return () => o.Z.markChangelogAsSeen(t.id, t.date);
          }, [n, t]),
          i)
        )
          return (0, l.jsx)(a.ModalRoot, {
            transitionState: e.transitionState,
            children: (0, l.jsx)("div", {
              className: g.empty,
              children: (0, l.jsx)(a.Heading, {
                variant: "heading-lg/medium",
                children: u.Z.Messages.CHANGE_LOG_CLIENT_OLD,
              }),
            }),
          });
        if (null == t)
          return n
            ? (0, l.jsx)(a.ModalRoot, {
                transitionState: e.transitionState,
                children: (0, l.jsx)("div", {
                  className: g.empty,
                  children: (0, l.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: u.Z.Messages.CHANGE_LOG_FAILED_TO_LOAD,
                  }),
                }),
              })
            : (0, l.jsx)(a.ModalRoot, {
                transitionState: e.transitionState,
                children: (0, l.jsx)("div", {
                  className: g.empty,
                  children: (0, l.jsx)(a.Spinner, {
                    type: a.Spinner.Type.WANDERING_CUBES,
                  }),
                }),
              });
        return (0, l.jsx)(a.ModalRoot, {
          transitionState: e.transitionState,
          children: (0, l.jsx)(p, { changeLog: t }),
        });
      }
    },
    388080: function (e, t, n) {
      n(47120);
      var l = n(735250),
        r = n(470079),
        a = n(120356),
        o = n.n(a),
        s = n(913527),
        i = n.n(s),
        c = n(481060),
        d = n(446411),
        h = n(468846),
        u = n(600164),
        g = n(70097),
        m = n(299379),
        p = n(454585),
        x = n(524444),
        f = n(55406),
        _ = n(981631),
        E = n(689938),
        C = n(170714),
        N = n(210080);
      function L(e, t, n) {
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
      let S = p.Z.reactParserFor(f.Z.getDefaultRules(C)),
        j = {};
      class O extends r.PureComponent {
        track(e, t, n) {
          this.props.track(e, t, n);
        }
        renderFooter() {
          return (0, l.jsxs)("div", {
            className: C.footer,
            children: [
              (0, l.jsx)(c.Anchor, {
                "aria-label": E.Z.Messages.TWITTER,
                className: C.socialLink,
                href: (0, m.Z)(_.RK.TWITTER),
                target: "blank",
                children: (0, l.jsx)(c.XNeutralIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              }),
              (0, l.jsx)(c.Anchor, {
                "aria-label": E.Z.Messages.FACEBOOK,
                className: C.socialLink,
                href: _.fK7.FACEBOOK_URL,
                target: "blank",
                children: (0, l.jsx)(c.FacebookNeutralIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              }),
              (0, l.jsx)(c.Anchor, {
                "aria-label": E.Z.Messages.INSTAGRAM,
                className: C.socialLink,
                href: _.fK7.INSTAGRAM_URL,
                target: "blank",
                children: (0, l.jsx)(c.InstagramNeutralIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              }),
              (0, l.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: E.Z.Messages.FOLLOW_US_FOR_MORE_UPDATES,
              }),
            ],
          });
        }
        renderVideo() {
          let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            r = e.video,
            a = e.image;
          if (null != t && "" !== t)
            return (0, l.jsx)(d.BC, {
              className: o()(C.video),
              allowFullScreen: !1,
              href: "https://youtu.be/".concat(t),
              thumbnail: {
                url: "https://i.ytimg.com/vi/".concat(t, "/hqdefault.jpg"),
                width: 451,
                height: 254,
              },
              video: {
                url: "https://www.youtube.com/embed/".concat(
                  t,
                  "?vq=large&rel=0&controls=0&showinfo=0",
                ),
                width: 451,
                height: 254,
              },
              provider: h.pn.YOUTUBE,
              maxWidth: 451,
              maxHeight: 254,
              renderVideoComponent: x.lV,
              renderImageComponent: x.Yi,
              renderLinkComponent: x.iT,
              onPlay: () => {
                this.track(_.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
              },
            });
          if (null != r && "" !== r) {
            let e = r.startsWith("https://") ? r : n(595173)("./".concat(r));
            return (0, l.jsx)(g.Z, {
              src: e,
              poster: a,
              width: 451,
              height: 254,
              loop: !0,
              muted: !0,
              autoPlay: !0,
              className: C.video,
              onPlay: () => {
                this.track(_.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
              },
            });
          }
          if (null == a || "" === a) return null;
          else {
            let e = a.startsWith("https://") ? a : n(595173)("./".concat(a));
            return (0, l.jsx)("img", {
              className: C.image,
              alt: "",
              src: e,
              width: 451,
              height: 254,
            });
          }
        }
        render() {
          let { changeLog: e } = this.props;
          return (0, l.jsxs)(c.ModalRoot, {
            transitionState: c.ModalTransitionState.ENTERED,
            className: N.modal,
            children: [
              (0, l.jsxs)(c.ModalHeader, {
                align: u.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                  this.renderHeader(),
                  (0, l.jsx)(u.Z.Child, {
                    grow: 0,
                    children: (0, l.jsx)(c.ModalCloseButton, {
                      onClick: this.props.onClose,
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(c.ModalContent, {
                className: o()(N.content, C.container, {}),
                scrollerRef: this.scrollerRef,
                onScroll: this.handleScroll,
                children: (0, l.jsxs)("div", {
                  tabIndex: 0,
                  role: "region",
                  "aria-label": E.Z.Messages.CHANGELOG_CONTENT_LABEL,
                  children: [
                    this.renderVideo(),
                    S(e.body, !1, {
                      changeLog: this,
                      interpolations: j,
                      onLinkClick: this.trackLinkClick,
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(c.ModalFooter, {
                direction: u.Z.Direction.HORIZONTAL,
                children: this.renderFooter(),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            L(this, "scrollerRef", r.createRef()),
            L(this, "handleScroll", () => {
              let { current: e } = this.scrollerRef;
              if (null != e) {
                var t, n;
                null === (t = (n = this.props).onScroll) ||
                  void 0 === t ||
                  t.call(n, e);
              }
            }),
            L(this, "trackLinkClick", (e) => {
              this.props.track(
                _.rMx.CHANGE_LOG_CTA_CLICKED,
                { cta_type: "inline_link", target: e },
                !1,
              );
            }),
            L(this, "renderHeader", () => {
              let { changeLog: e } = this.props;
              return (0, l.jsxs)(u.Z.Child, {
                grow: 1,
                shrink: 1,
                children: [
                  (0, l.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: E.Z.Messages.WHATS_NEW,
                  }),
                  (0, l.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    className: C.date,
                    children: E.Z.Messages.WHATS_NEW_DATE.format({
                      date:
                        null != e.date && "" !== e.date
                          ? i()(e.date).toDate()
                          : new Date(),
                    }),
                  }),
                ],
              });
            });
        }
      }
      t.Z = O;
    },
    766411: function (e, t, n) {
      n.d(t, {
        E: function () {
          return d;
        },
      });
      var l = n(470079),
        r = n(399606),
        a = n(661111),
        o = n(706454),
        s = n(802098),
        i = n(596401);
      function c(e, t) {
        let {
          changelog: n,
          loadState: o,
          defaultChangelog: c,
          defaultLoadState: d,
        } = (0, r.cj)(
          [s.Z],
          () => {
            let n = null != e ? s.Z.getChangelog(e, t) : null,
              l = null != e ? s.Z.getChangelog(e, "en-US") : null,
              r = null != e && s.Z.getChangelogLoadStatus(e, "en-US");
            return {
              changelog: n,
              loadState: null != e && s.Z.getChangelogLoadStatus(e, t),
              defaultChangelog: l,
              defaultLoadState: r,
            };
          },
          [e, t],
        );
        return (l.useEffect(() => {
          null != e &&
            null == n &&
            o === i.LU.NOT_LOADED &&
            a.Z.fetchChangelog(e, t);
        }, [e, n, o, t]),
        null == e)
          ? { id: e, changelog: null, loaded: !1 }
          : null == n && o === i.LU.LOADED_FAILURE
            ? { id: e, changelog: c, loaded: d !== i.LU.NOT_LOADED }
            : { id: e, changelog: n, loaded: o !== i.LU.NOT_LOADED };
      }
      function d() {
        let e = (0, r.e7)([o.default], () => o.default.locale),
          t = (0, r.e7)([s.Z], () => s.Z.latestChangelogId()),
          n = (0, r.e7)([s.Z], () => s.Z.getConfig()),
          l = null != n && 0 === Object.keys(n).length,
          a = null != n && Object.keys(n).length > 0 && null == t,
          i = (0, r.e7)([s.Z], () => s.Z.overrideId()),
          { changelog: d, loaded: h } = c(t, e),
          { changelog: u, loaded: g } = c(i, e);
        return null == i || (null == u && g)
          ? { id: t, changelog: d, loaded: !!l || h, clientTooOld: a }
          : { id: i, changelog: u, loaded: g, clientTooOld: !1 };
      }
    },
    583459: function (e, t, n) {
      e.exports = { empty: "empty_c7d602" };
    },
    210080: function (e, t, n) {
      e.exports = { modal: "modal_ed23b8", content: "content_ed23b8" };
    },
  },
]);
//# sourceMappingURL=e317c931032a87b1d47c.js.map
