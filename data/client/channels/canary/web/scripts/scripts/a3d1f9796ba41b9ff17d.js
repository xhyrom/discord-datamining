"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44808"],
  {
    678420: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        o = n(481060),
        a = n(661111),
        i = n(766411),
        s = n(626135),
        c = n(388080),
        d = n(981631),
        h = n(596401),
        u = n(388032),
        g = n(598092);
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
      class x extends r.PureComponent {
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
              (0, o.closeModal)(h.Xd);
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
                { date: o, revision: a } = r,
                i = { change_log_id: "".concat(o, ":").concat(a), ...n };
              !l &&
                (i = {
                  seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
                  max_scrolled_percentage:
                    100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                  ...i,
                }),
                s.default.track(e, i);
            });
        }
      }
      function p(e) {
        let { changelog: t, loaded: n, clientTooOld: s } = (0, i.E)();
        if (
          (r.useEffect(() => {
            if (n && null != t)
              return () => a.Z.markChangelogAsSeen(t.id, t.date);
          }, [n, t]),
          s)
        )
          return (0, l.jsx)(o.ModalRoot, {
            transitionState: e.transitionState,
            children: (0, l.jsx)("div", {
              className: g.empty,
              children: (0, l.jsx)(o.Heading, {
                variant: "heading-lg/medium",
                children: u.intl.string(u.t.V9ospq),
              }),
            }),
          });
        if (null == t)
          return n
            ? (0, l.jsx)(o.ModalRoot, {
                transitionState: e.transitionState,
                children: (0, l.jsx)("div", {
                  className: g.empty,
                  children: (0, l.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: u.intl.string(u.t.O1iRT0),
                  }),
                }),
              })
            : (0, l.jsx)(o.ModalRoot, {
                transitionState: e.transitionState,
                children: (0, l.jsx)("div", {
                  className: g.empty,
                  children: (0, l.jsx)(o.Spinner, {
                    type: o.Spinner.Type.WANDERING_CUBES,
                  }),
                }),
              });
        return (0, l.jsx)(o.ModalRoot, {
          transitionState: e.transitionState,
          children: (0, l.jsx)(x, { changeLog: t }),
        });
      }
    },
    388080: function (e, t, n) {
      n(47120);
      var l = n(200651),
        r = n(192379),
        o = n(120356),
        a = n.n(o),
        i = n(913527),
        s = n.n(i),
        c = n(481060),
        d = n(446411),
        h = n(468846),
        u = n(600164),
        g = n(70097),
        m = n(299379),
        x = n(454585),
        p = n(524444),
        f = n(55406),
        C = n(981631),
        j = n(388032),
        k = n(617768),
        E = n(811628);
      function S(e, t, n) {
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
      let N = x.Z.reactParserFor(f.Z.getDefaultRules(k)),
        _ = {};
      class b extends r.PureComponent {
        track(e, t, n) {
          this.props.track(e, t, n);
        }
        renderFooter() {
          return (0, l.jsxs)("div", {
            className: k.footer,
            children: [
              (0, l.jsx)(c.Anchor, {
                "aria-label": j.intl.string(j.t["/84uiI"]),
                className: k.socialLink,
                href: (0, m.Z)(C.RK.TWITTER),
                target: "blank",
                children: (0, l.jsx)(c.XNeutralIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              }),
              (0, l.jsx)(c.Anchor, {
                "aria-label": j.intl.string(j.t["h0or/v"]),
                className: k.socialLink,
                href: C.fK7.FACEBOOK_URL,
                target: "blank",
                children: (0, l.jsx)(c.FacebookNeutralIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              }),
              (0, l.jsx)(c.Anchor, {
                "aria-label": j.intl.string(j.t["5uVPyc"]),
                className: k.socialLink,
                href: C.fK7.INSTAGRAM_URL,
                target: "blank",
                children: (0, l.jsx)(c.InstagramNeutralIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
              }),
              (0, l.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: j.intl.string(j.t.EjVVIy),
              }),
            ],
          });
        }
        renderVideo() {
          let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            r = e.video,
            o = e.image;
          if (null != t && "" !== t)
            return (0, l.jsx)(d.BC, {
              className: a()(k.video),
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
              renderVideoComponent: p.lV,
              renderImageComponent: p.Yi,
              renderLinkComponent: p.iT,
              onPlay: () => {
                this.track(C.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
              },
            });
          if (null != r && "" !== r) {
            let e = r.startsWith("https://") ? r : n(595173)("./".concat(r));
            return (0, l.jsx)(g.Z, {
              src: e,
              poster: o,
              width: 451,
              height: 254,
              loop: !0,
              muted: !0,
              autoPlay: !0,
              className: k.video,
              onPlay: () => {
                this.track(C.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, !0);
              },
            });
          }
          if (null == o || "" === o) return null;
          else {
            let e = o.startsWith("https://") ? o : n(595173)("./".concat(o));
            return (0, l.jsx)("img", {
              className: k.image,
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
            className: E.modal,
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
                className: a()(E.content, k.container, {}),
                scrollerRef: this.scrollerRef,
                onScroll: this.handleScroll,
                children: (0, l.jsxs)("div", {
                  tabIndex: 0,
                  role: "region",
                  "aria-label": j.intl.string(j.t.HzBchI),
                  children: [
                    this.renderVideo(),
                    N(e.body, !1, {
                      changeLog: this,
                      interpolations: _,
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
            S(this, "scrollerRef", r.createRef()),
            S(this, "handleScroll", () => {
              let { current: e } = this.scrollerRef;
              if (null != e) {
                var t, n;
                null === (t = (n = this.props).onScroll) ||
                  void 0 === t ||
                  t.call(n, e);
              }
            }),
            S(this, "trackLinkClick", (e) => {
              this.props.track(
                C.rMx.CHANGE_LOG_CTA_CLICKED,
                { cta_type: "inline_link", target: e },
                !1,
              );
            }),
            S(this, "renderHeader", () => {
              let { changeLog: e } = this.props;
              return (0, l.jsxs)(u.Z.Child, {
                grow: 1,
                shrink: 1,
                children: [
                  (0, l.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: j.intl.string(j.t.LRmNAg),
                  }),
                  (0, l.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    className: k.date,
                    children: j.intl.format(j.t.Fb8xx8, {
                      date:
                        null != e.date && "" !== e.date
                          ? s()(e.date).toDate()
                          : new Date(),
                    }),
                  }),
                ],
              });
            });
        }
      }
      t.Z = b;
    },
    766411: function (e, t, n) {
      n.d(t, {
        E: function () {
          return d;
        },
      });
      var l = n(192379),
        r = n(399606),
        o = n(661111),
        a = n(706454),
        i = n(802098),
        s = n(596401);
      function c(e, t) {
        let {
          changelog: n,
          loadState: a,
          defaultChangelog: c,
          defaultLoadState: d,
        } = (0, r.cj)(
          [i.Z],
          () => {
            let n = null != e ? i.Z.getChangelog(e, t) : null,
              l = null != e ? i.Z.getChangelog(e, "en-US") : null,
              r = null != e && i.Z.getChangelogLoadStatus(e, "en-US");
            return {
              changelog: n,
              loadState: null != e && i.Z.getChangelogLoadStatus(e, t),
              defaultChangelog: l,
              defaultLoadState: r,
            };
          },
          [e, t],
        );
        return (l.useEffect(() => {
          null != e &&
            null == n &&
            a === s.LU.NOT_LOADED &&
            o.Z.fetchChangelog(e, t);
        }, [e, n, a, t]),
        null == e)
          ? { id: e, changelog: null, loaded: !1 }
          : null == n && a === s.LU.LOADED_FAILURE
            ? { id: e, changelog: c, loaded: d !== s.LU.NOT_LOADED }
            : { id: e, changelog: n, loaded: a !== s.LU.NOT_LOADED };
      }
      function d() {
        let e = (0, r.e7)([a.default], () => a.default.locale),
          t = (0, r.e7)([i.Z], () => i.Z.latestChangelogId()),
          n = (0, r.e7)([i.Z], () => i.Z.getConfig()),
          l = null != n && 0 === Object.keys(n).length,
          o = null != n && Object.keys(n).length > 0 && null == t,
          s = (0, r.e7)([i.Z], () => i.Z.overrideId()),
          { changelog: d, loaded: h } = c(t, e),
          { changelog: u, loaded: g } = c(s, e);
        return null == s || (null == u && g)
          ? { id: t, changelog: d, loaded: !!l || h, clientTooOld: o }
          : { id: s, changelog: u, loaded: g, clientTooOld: !1 };
      }
    },
    598092: function (e, t, n) {
      e.exports = { empty: "empty_c7d602" };
    },
    811628: function (e, t, n) {
      e.exports = { modal: "modal_ed23b8", content: "content_ed23b8" };
    },
  },
]);
//# sourceMappingURL=a3d1f9796ba41b9ff17d.js.map
