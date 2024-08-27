"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93776"],
  {
    819866: function (e, t, n) {
      e.exports = n.p + "aa1e751bd15c567aafe9.mov";
    },
    563288: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var i = n(735250),
        s = n(470079),
        a = n(442837),
        o = n(704215),
        r = n(481060),
        l = n(607070),
        c = n(313201),
        d = n(70097),
        m = n(434404),
        u = n(430824),
        h = n(626135),
        _ = n(150340),
        N = n(721012),
        x = n(819866),
        I = n(981631),
        C = n(921944),
        f = n(689938),
        g = n(58775);
      function L(e) {
        let { guildId: t, transitionState: n, onClose: L } = e,
          D = (0, c.Dt)(),
          v = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
          j = (0, a.e7)([u.Z], () => u.Z.getGuild(t));
        return (s.useEffect(() => {
          h.default.track(I.rMx.DISMISSIBLE_CONTENT_SHOWN, {
            type: o.z[o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
            guild_id: t,
          });
        }, [t]),
        null == j)
          ? null
          : (0, i.jsxs)(r.ModalRoot, {
              transitionState: n,
              "aria-labelledby": D,
              size: r.ModalSize.LARGE,
              className: g.modal,
              children: [
                (0, i.jsxs)("div", {
                  className: g.content,
                  children: [
                    (0, i.jsx)(r.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: g.header,
                      children:
                        f.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_TITLE,
                    }),
                    (0, i.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        f.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_DESCRIPTION.format(
                          { guildName: j.name },
                        ),
                    }),
                    (0, i.jsxs)("div", {
                      className: g.testimonials,
                      children: [
                        (0, i.jsx)("div", {
                          className: g.__invalid_designBuddiesContainer,
                          children: (0, i.jsx)(N.Z, {
                            message:
                              f.Z.Messages
                                .GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                            adminTitle:
                              f.Z.Messages
                                .GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
                            profilePic:
                              "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
                            emphasisColor: "text-positive",
                            arrowPosition: "right",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: g.__invalid_valorantContainer,
                          children: (0, i.jsx)(N.Z, {
                            message:
                              f.Z.Messages
                                .GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                            adminTitle:
                              f.Z.Messages
                                .GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
                            profilePic:
                              "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
                            emphasisColor: "text-warning",
                            arrowPosition: "left",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: g.buttonContainer,
                      children: [
                        (0, i.jsx)(r.Button, {
                          onClick: () => L(),
                          look: r.Button.Looks.OUTLINED,
                          color: r.Button.Colors.PRIMARY,
                          children: f.Z.Messages.CLOSE,
                        }),
                        (0, i.jsx)(r.Button, {
                          onClick: () => {
                            h.default.track(I.rMx.UPSELL_CLICKED, {
                              type: o.z[o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                              action: "primary",
                            }),
                              m.Z.open(t, I.pNK.ONBOARDING),
                              L(C.L.PRIMARY),
                              (0, _.G)(
                                j.id,
                                o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2,
                              );
                          },
                          children: f.Z.Messages.CHECK_IT_OUT,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: g.videoContainer,
                  children: (0, i.jsx)(d.Z, {
                    className: g.video,
                    loop: !v,
                    autoPlay: !v,
                    playsInline: !0,
                    "data-testid": "onboarding-demo",
                    children: (0, i.jsx)(
                      "source",
                      { src: x, type: "video/mp4" },
                      "hevc",
                    ),
                  }),
                }),
              ],
            });
      }
    },
    721012: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
        i: function () {
          return N;
        },
      }),
        n(47120);
      var i = n(735250),
        s = n(470079),
        a = n(120356),
        o = n.n(a),
        r = n(567526),
        l = n(481060),
        c = n(671533),
        d = n(689938),
        m = n(444086);
      function u(e) {
        let {
          message: t,
          adminTitle: n,
          profilePic: s,
          emphasisColor: a = "interactive-normal",
          arrowPosition: r,
          className: c,
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(m.testimonialContainer, c),
          children: [
            (0, i.jsx)(h, {
              testimonial: {
                message: t,
                adminTitle: n,
                profilePic: s,
                emphasisColor: a,
              },
            }),
            (0, i.jsx)(l.Text, {
              variant: "text-lg/bold",
              className: m.quotes,
              children: "“",
            }),
            (0, i.jsx)("div", {
              className: o()(m.arrow, {
                [m.arrowRight]: "right" === r,
                [m.arrowLeft]: "left" === r,
              }),
              children: (0, i.jsx)(_, {}),
            }),
          ],
        });
      }
      function h(e) {
        let { testimonial: t, className: n } = e,
          {
            message: s,
            profilePic: a,
            adminTitle: o,
            emphasisColor: r = "interactive-normal",
          } = t;
        return (0, i.jsxs)("div", {
          className: n,
          children: [
            (0, i.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: s.format({
                testimonialHook: (e, t) =>
                  (0, i.jsx)(
                    l.Text,
                    {
                      tag: "span",
                      variant: "text-sm/bold",
                      color: r,
                      children: e,
                    },
                    t,
                  ),
              }),
            }),
            (0, i.jsxs)("div", {
              className: m.userContainer,
              children: [
                (0, i.jsx)(l.Avatar, {
                  src: a,
                  size: l.AvatarSizes.SIZE_16,
                  "aria-hidden": !0,
                }),
                (0, i.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: o,
                }),
              ],
            }),
          ],
        });
      }
      function _() {
        return (0, i.jsx)("svg", {
          width: "12",
          height: "20",
          viewBox: "0 0 12 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            d: "M11.5 0.662598H0L11.5 19.1626V0.662598Z",
            fill: "#2B2D31",
          }),
        });
      }
      function N(e) {
        let { testimonials: t } = e,
          [[n, a], o] = s.useState([0, "right"]),
          r = s.useCallback(() => {
            o((e) => {
              let [n] = e;
              return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"];
            });
          }, [o, t.length]),
          u = s.useCallback(() => {
            o((e) => {
              let [n] = e;
              return [(n + 1) % t.length, "right"];
            });
          }, [o, t.length]),
          h = t[n],
          _ = s.useCallback(
            (e, t, n, s) =>
              (0, i.jsx)(x, { item: t, state: n, cleanup: s, direction: a }, e),
            [a],
          );
        return (0, i.jsxs)("div", {
          className: m.testimonialHeroContainer,
          children: [
            (0, i.jsx)("div", {
              className: m.animatedContainer,
              children: (0, i.jsx)(l.TransitionGroup, {
                items: [h],
                renderItem: _,
                getItemKey: (e) => e.adminTitle,
              }),
            }),
            (0, i.jsx)(l.Text, {
              variant: "text-lg/bold",
              className: m.heroQuotes,
              children: "“",
            }),
            (0, i.jsxs)("div", {
              className: m.testimonialsControls,
              children: [
                (0, i.jsxs)(l.Button, {
                  className: m.testimonialControl,
                  innerClassName: m.testimonialControlInner,
                  onClick: r,
                  size: l.Button.Sizes.MIN,
                  color: l.Button.Colors.PRIMARY,
                  children: [
                    (0, i.jsx)(c.Z, {
                      className: m.testimonialControlIcon,
                      direction: c.Z.Directions.LEFT,
                    }),
                    (0, i.jsx)(l.HiddenVisually, {
                      children: d.Z.Messages.BACK,
                    }),
                  ],
                }),
                (0, i.jsxs)(l.Button, {
                  className: m.testimonialControl,
                  innerClassName: m.testimonialControlInner,
                  onClick: u,
                  size: l.Button.Sizes.MIN,
                  color: l.Button.Colors.PRIMARY,
                  children: [
                    (0, i.jsx)(c.Z, {
                      className: m.testimonialControlIcon,
                      direction: c.Z.Directions.RIGHT,
                    }),
                    (0, i.jsx)(l.HiddenVisually, {
                      children: d.Z.Messages.NEXT,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function x(e) {
        let { item: t, state: n, cleanup: s, direction: a } = e,
          [o] = (0, l.useSpring)(
            () => {
              switch (n) {
                case l.TransitionStates.ENTERED:
                  return {
                    from: {
                      transform:
                        "right" === a ? "translateX(150%)" : "translate(-150%)",
                    },
                    to: { transform: "translateX(0%)" },
                  };
                case l.TransitionStates.YEETED:
                  return {
                    from: { transform: "translateX(0%)" },
                    to: {
                      transform:
                        "right" === a ? "translateX(-150%)" : "translate(150%)",
                    },
                    onRest: s,
                  };
                default:
                  return {};
              }
            },
            "respect-motion-settings",
            [n],
          );
        return (0, i.jsx)(r.animated.div, {
          style: o,
          children: (0, i.jsx)(h, { className: m.testimonial, testimonial: t }),
        });
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        s,
        a = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        l = n(325767),
        c = n(24701);
      ((s = i || (i = {})).LEFT = "LEFT"),
        (s.RIGHT = "RIGHT"),
        (s.UP = "UP"),
        (s.DOWN = "DOWN"),
        (s.UP_LEFT = "UP_LEFT"),
        (s.DOWN_RIGHT = "DOWN_RIGHT");
      let d = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: s,
          foreground: o,
          className: d,
          title: m,
          ...u
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.Z)(u),
          width: t,
          height: n,
          className: r()(
            d,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return c.left;
                case "RIGHT":
                  return c.right;
                case "UP":
                  return null;
                case "DOWN":
                  return c.down;
                case "UP_LEFT":
                  return c.upLeft;
                case "DOWN_RIGHT":
                  return c.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(s),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != m ? (0, a.jsx)("title", { children: m }) : null,
            (0, a.jsx)("polygon", {
              className: o,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (d.Directions = i), (t.Z = d);
    },
    58775: function (e, t, n) {
      e.exports = {
        modal: "modal_a934ca",
        content: "content_a934ca",
        videoContainer: "videoContainer_a934ca",
        video: "video_a934ca",
        header: "header_a934ca",
        buttonContainer: "buttonContainer_a934ca",
        testimonials: "testimonials_a934ca",
      };
    },
    444086: function (e, t, n) {
      e.exports = {
        testimonialContainer: "testimonialContainer_d3081b",
        userContainer: "userContainer_d3081b",
        quotes: "quotes_d3081b",
        heroQuotes: "heroQuotes_d3081b quotes_d3081b",
        arrow: "arrow_d3081b",
        arrowRight: "arrowRight_d3081b",
        arrowLeft: "arrowLeft_d3081b",
        testimonialHeroContainer: "testimonialHeroContainer_d3081b",
        animatedContainer: "animatedContainer_d3081b",
        testimonial: "testimonial_d3081b",
        testimonialsControls: "testimonialsControls_d3081b",
        testimonialControl: "testimonialControl_d3081b",
        testimonialControlInner: "testimonialControlInner_d3081b",
        testimonialControlIcon: "testimonialControlIcon_d3081b",
      };
    },
    24701: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=86fd5e45201cb81ae939.js.map
