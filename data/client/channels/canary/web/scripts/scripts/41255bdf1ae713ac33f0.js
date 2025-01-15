"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68784"],
  {
    542383: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(192379),
        l = n(358085);
      function r(e) {
        let t = a.useRef(e);
        return (
          a.useEffect(() => {
            t.current = e;
          }, [e]),
          a.useCallback((e) => {
            let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
              a = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
              { disabled: r = !1, onSubmit: i } = t.current;
            if ("enter" === e.key.toLowerCase())
              ("macos" === (0, l.getOS)() ? a : n) &&
                !r &&
                (e.preventDefault(), i());
          }, [])
        );
      }
    },
    524100: function (e, t, n) {
      var a, l;
      n.d(t, {
        _: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).PREPARING = "PREPARING"),
        (l.READY_TO_UPLOAD = "READY_TO_UPLOAD"),
        (l.ERROR = "ERROR");
    },
    728076: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var a = n(192379),
        l = n(263568),
        r = n(935369),
        i = n(398805),
        o = n(524100),
        s = n(316758),
        c = n(203143),
        u = n(79390),
        d = n(489887),
        m = n(388032);
      function f(e, t, n) {
        let f = e.id,
          [x, g] = a.useState(() => [(0, u.Uu)(), (0, u.Uu)()]),
          [p, C] = a.useState(""),
          [v, j] = a.useState(l.C.DEFAULT),
          [I, w] = a.useState(!1),
          [_, b] = a.useState(d.lc.ONE_DAY),
          [A, k] = a.useState({}),
          [N, E] = a.useState(!1),
          R = x.filter((e) => (0, u.cS)(e, v)),
          P = x.filter((e) => (0, u.uY)(e, v)),
          S = p.length > 0 && R.length >= d.gY && 0 === P.length,
          [T, { error: y, loading: D }] = (0, r.Z)(c.Z.createPoll),
          O = x.length < d.fw,
          L = x.length > d.gY,
          B = a.useCallback((e) => {
            k((e) => {
              let t = { ...e };
              return delete t.question, t;
            }),
              C(e);
          }, []),
          M = a.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: a } = e;
            k((e) => {
              let t = { ...e };
              return delete t["answer-".concat(a)], t;
            }),
              g((e) => {
                let a = [...e];
                return (a[n] = { ...a[n], text: t }), a;
              });
          }, []),
          Z = a.useCallback((e, t) => {
            g((n) => {
              let a = [...n];
              return (a[t] = { ...a[t], image: e }), a;
            });
          }, []),
          U = a.useCallback(
            (e, t, n) => {
              var a;
              let l = x[t],
                r =
                  null === (a = l.image) || void 0 === a
                    ? void 0
                    : a.mediaAttachmentState;
              null != r &&
                r.mediaURL !== n &&
                s.P(
                  e,
                  l.localCreationAnswerId,
                  (0, i.Yk)(l.localCreationAnswerId, r.mediaURL),
                );
            },
            [x],
          ),
          H = a.useCallback(
            async (e, t, n) => {
              let a = x[t].localCreationAnswerId;
              if (
                (U(e, t),
                Z(h(n, o._.PREPARING), t),
                null == (await s.IV(e, a, n)))
              ) {
                Z(h(n, o._.ERROR), t);
                return;
              }
              Z(h(n, o._.READY_TO_UPLOAD), t);
            },
            [x, Z, U],
          ),
          F = a.useCallback(
            (e, t, n) => {
              let a = x[t].localCreationAnswerId,
                l = URL.createObjectURL(n);
              U(e, t),
                Z(h(l, o._.PREPARING), t),
                s.fH(e, a, n),
                Z(h(l, o._.READY_TO_UPLOAD), t);
            },
            [x, Z, U],
          ),
          z = a.useCallback(
            (e, t) => {
              U(f, t),
                Z(
                  { emoji: e, stickerId: void 0, mediaAttachmentState: void 0 },
                  t,
                );
            },
            [f, Z, U],
          ),
          W = a.useCallback((e) => {
            g((t) => {
              let n = [...t];
              return (n[e] = { ...n[e], image: void 0 }), n;
            });
          }, []),
          K = a.useCallback(() => {
            if (!!O) g((e) => [...e, (0, u.Uu)()]);
          }, [O]),
          Y = a.useCallback(
            (e) => {
              if (!L) return;
              let t = x.length;
              U(f, e),
                g((t) => {
                  let n = [...t];
                  return n.splice(e, 1), n;
                }),
                null == n || n({ indexToRemove: e, numberOfAnswers: t });
            },
            [x.length, L, f, n, U],
          );
        a.useEffect(
          () => () => {
            s.xt(f);
          },
          [f],
        );
        let G = a.useCallback(() => {
            let e = !0,
              t = {};
            return (
              0 === p.trim().length &&
                ((e = !1), (t.question = m.intl.string(m.t.gPX3oK))),
              x.filter((e) => (0, u.cS)(e, v)).length < d.gY &&
                ((e = !1),
                (t["answer-".concat(x[0].localCreationAnswerId)] =
                  m.intl.string(m.t.fYvzER))),
              x.forEach((n) => {
                (0, u.uY)(n, v) &&
                  ((e = !1),
                  (t["answer-".concat(n.localCreationAnswerId)] = m.intl.string(
                    m.t["8Qqkc3"],
                  )));
              }),
              k(t),
              E(!e),
              e
            );
          }, [x, p, v]),
          q = a.useCallback(async () => {
            await T({
              channel: e,
              question: p,
              answers: R,
              allowMultiSelect: I,
              duration: _,
              layout: v,
              onClose: t,
            });
          }, [p, R, I, _, T, e, v, t]),
          V = a.useCallback(() => {
            !D && G() && q();
          }, [q, D, G]);
        return {
          answers: x,
          question: p,
          setQuestion: C,
          selectedLayoutType: v,
          setSelectedLayoutType: j,
          allowMultiSelect: I,
          setAllowMultiSelect: w,
          duration: _,
          setDuration: b,
          canPost: S,
          canAddMoreAnswers: O,
          canRemoveMoreAnswers: L,
          handleQuestionChange: B,
          handleAnswerTextChange: M,
          handleGifSelect: H,
          handleEmojiSelect: z,
          handleCustomUpload: F,
          handleAddAnswer: K,
          handleRemoveAnswer: Y,
          handleRemoveAnswerImage: W,
          fieldErrors: A,
          createPoll: q,
          handleSubmitPoll: V,
          submitting: D,
          createPollError: y,
          shouldFocusOnInvalidField: N,
          setShouldFocusOnInvalidField: E,
        };
      }
      function h(e, t) {
        return {
          mediaAttachmentState: { status: t, mediaURL: e },
          emoji: void 0,
          stickerId: void 0,
        };
      }
    },
    2466: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(489887),
        l = n(388032);
      function r() {
        return Object.freeze({
          [a.lc.ONE_HOUR]: l.intl.formatToPlainString(l.t["b/mgt7"], {
            num: 1,
          }),
          [a.lc.FOUR_HOURS]: l.intl.formatToPlainString(l.t["b/mgt7"], {
            num: 4,
          }),
          [a.lc.EIGHT_HOURS]: l.intl.formatToPlainString(l.t["b/mgt7"], {
            num: 8,
          }),
          [a.lc.ONE_DAY]: l.intl.formatToPlainString(l.t["b/mgt7"], {
            num: 24,
          }),
          [a.lc.THREE_DAYS]: l.intl.string(l.t.Xn5rX1),
          [a.lc.SEVEN_DAYS]: l.intl.string(l.t["Lmq+rq"]),
          [a.lc.FOURTEEN_DAYS]: l.intl.string(l.t["mb8A/P"]),
        });
      }
    },
    485168: function (e, t, n) {
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var a = n(192379),
        l = n(367907),
        r = n(981631);
      function i(e, t, n) {
        return {
          trackPollCreationCancelled: a.useCallback(() => {
            let a = 0,
              i = 0,
              o = 0;
            e.forEach((e) => {
              let t = e.image;
              null != t &&
                (null != t.emoji
                  ? (i += 1)
                  : null != t.stickerId
                    ? (o += 1)
                    : null != t.mediaAttachmentState && (a += 1));
            }),
              l.ZP.trackWithMetadata(r.rMx.POLL_CREATION_CANCELLED, {
                answers_count: e.length,
                attachments_count: a,
                emojis_count: i,
                stickers_count: o,
                allow_multiselect: t,
                layout_type: n,
              });
          }, [e, t, n]),
        };
      }
    },
    309081: function (e, t, n) {
      n.d(t, {
        I: function () {
          return R;
        },
      }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(263568),
        s = n(442837),
        c = n(481060),
        u = n(166459),
        d = n(596454),
        m = n(273031),
        f = n(313201),
        h = n(907040),
        x = n(906411),
        g = n(592125),
        p = n(703558),
        C = n(117530),
        v = n(358085),
        j = n(79390),
        I = n(885001),
        w = n(35463),
        _ = n(489887),
        b = n(185923),
        A = n(957825),
        k = n(388032),
        N = n(500882);
      let E = { offset: { top: -4, bottom: -4, left: 0, right: -8 } };
      function R(e) {
        let {
          hasUpload: t,
          mediaUrl: n,
          mediaFilename: l,
          imageClassName: r,
          emoji: i,
          emojiClassName: o,
          fallback: s,
        } = e;
        return t
          ? (0, a.jsx)("img", { src: n, alt: l, className: r })
          : null != i
            ? (0, a.jsx)(d.Z, {
                className: o,
                emojiId: i.id,
                emojiName:
                  i.type === x.B.UNICODE ? i.optionallyDiverseSequence : i.name,
                animated: i.animated,
              })
            : (0, a.jsx)(a.Fragment, { children: s });
      }
      function P(e) {
        let {
          onSelect: t,
          onEditMedia: n,
          onDeleteMedia: l,
          closePopout: r,
        } = e;
        return (0, a.jsx)("div", {
          className: N.menuContainer,
          children: (0, a.jsx)(c.Menu, {
            navId: "poll-media-edit-menu",
            onClose: r,
            "aria-label": k.intl.string(k.t["cV+h7O"]),
            onSelect: t,
            children: (0, a.jsxs)(c.MenuGroup, {
              children: [
                (0, a.jsx)(c.MenuItem, {
                  id: "poll-media-replace",
                  label: k.intl.string(k.t.CZeRhY),
                  action: n,
                }),
                (0, a.jsx)(c.MenuItem, {
                  id: "poll-media-delete",
                  label: k.intl.string(k.t.IhMxgo),
                  action: l,
                  color: "danger",
                }),
              ],
            }),
          }),
        });
      }
      function S(e) {
        let {
            channelId: t,
            localCreationAnswerId: n,
            buttonImage: r,
            layout: u,
            onEmojiSelect: d,
            onEmojiRemove: m,
            answerIndex: f,
            shouldShowEmojiPicker: x,
            toggleEmojiPicker: p,
          } = e,
          C = (0, s.e7)([g.Z], () => g.Z.getChannel(t)),
          {
            emoji: v,
            isLoadingMedia: I,
            hasUpload: _,
            mediaUrl: E,
            mediaFilename: S,
          } = (0, w.Z)({ channelId: t, localCreationAnswerId: n, image: r }),
          T = u === o.C.DEFAULT,
          y = _ || null != v,
          D = l.useCallback(() => {
            m(f);
          }, [m, f]),
          O = l.useMemo(
            () =>
              _
                ? k.intl.formatToPlainString(k.t.vcC7Qk, {
                    imageName: (0, j.fw)(S),
                    answerNumber: f + 1,
                  })
                : null != v
                  ? k.intl.formatToPlainString(k.t.ncOAhY, {
                      emojiName: v.name,
                      answerNumber: f + 1,
                    })
                  : k.intl.formatToPlainString(k.t.emdpNj, {
                      answerNumber: f + 1,
                    }),
            [_, v, f, S],
          ),
          L = l.useCallback(
            (e) => {
              let { closePopout: t } = e;
              return (0, a.jsx)("div", {
                className: N.emojiPicker,
                children: (0, a.jsx)(h.Z, {
                  channel: C,
                  pickerIntention: b.Hz.POLLS,
                  closePopout: t,
                  onNavigateAway: t,
                  onSelectEmoji: (e, n) => {
                    null != e && d(e, f), n && t();
                  },
                }),
              });
            },
            [C, d, f],
          ),
          B = l.useCallback(
            (e) => {
              let { closePopout: t } = e;
              return (0, a.jsx)(P, {
                onSelect: t,
                onEditMedia: p,
                onDeleteMedia: D,
                closePopout: t,
              });
            },
            [D, p],
          ),
          M = I
            ? (0, a.jsx)(c.Spinner, {
                className: T
                  ? N.spinnerWrapperDefault
                  : N.spinnerWrapperImageOnly,
              })
            : (0, a.jsx)(R, {
                hasUpload: _,
                mediaUrl: E,
                mediaFilename: S,
                imageClassName: i()(N.media, T ? N.gifDefault : N.gifJumbo),
                emoji: v,
                emojiClassName: i()(N.media, T ? N.emojiDefault : N.emojiJumbo),
                fallback: (0, a.jsx)(c.ReactionIcon, {
                  size: "md",
                  color: "currentColor",
                  className: T
                    ? N.expressionPickerIconDefault
                    : N.expressionPickerIconImageOnly,
                }),
              }),
          Z = i()(
            A.CT,
            u === o.C.IMAGE_ONLY_ANSWERS
              ? N.expressionPickerButtonImageOnly
              : N.expressionPickerButtonDefault,
            { [N.canEditMedia]: y },
          );
        return (0, a.jsx)(c.Popout, {
          renderPopout: L,
          shouldShow: x,
          onRequestClose: p,
          animation: c.Popout.Animation.NONE,
          position: "bottom",
          spacing: 2,
          children: (e) => {
            let { "aria-controls": t, "aria-expanded": n, ...l } = e;
            return (0, a.jsx)(c.Popout, {
              animation: c.Popout.Animation.NONE,
              position: "bottom",
              renderPopout: B,
              children: (e) => {
                let {
                  onClick: l,
                  "aria-controls": r,
                  "aria-expanded": i,
                  ...o
                } = e;
                return (0, a.jsxs)(c.Clickable, {
                  ...o,
                  className: Z,
                  onClick: y && !x ? l : p,
                  "aria-label": O,
                  "aria-controls": null != t ? t : r,
                  "aria-expanded": n || i,
                  children: [
                    M,
                    y &&
                      (0, a.jsx)(c.PencilIcon, {
                        size: "md",
                        color: "currentColor",
                        className: N.editIcon,
                        "aria-hidden": !0,
                      }),
                  ],
                });
              },
            });
          },
        });
      }
      function T(e) {
        var t;
        let { value: n, id: l } = e,
          r = (() => {
            var e;
            let t =
              null !== (e = null == n ? void 0 : n.length) && void 0 !== e
                ? e
                : 0;
            return _.WA - t;
          })();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: i()(N.characterCount),
              "aria-hidden": "true",
              children: [
                null !== (t = null == n ? void 0 : n.length) && void 0 !== t
                  ? t
                  : 0,
                " / ",
                _.WA,
              ],
            }),
            (0, a.jsxs)(c.HiddenVisually, {
              id: l,
              children: [
                k.intl.format(k.t.fR1coa, { remainingCharacters: r }),
                " ",
                k.intl.format(k.t["+DFxLS"], { maxLength: _.WA }),
              ],
            }),
          ],
        });
      }
      t.Z = l.forwardRef(function (e, t) {
        let {
            channelId: r,
            answer: d,
            index: h,
            layout: x,
            isLastAnswer: g,
            onAnswerTextChange: w,
            onEmojiSelect: b,
            onEmojiRemove: A,
            canRemoveAnswer: R,
            onRemoveAnswer: P,
            addAnswer: y,
            submitPoll: D,
            answerTextInputRefs: O,
            error: L,
            inputRef: B,
            deleteButtonRef: M,
          } = e,
          Z = (0, f.Dt)(),
          U = (0, f.Dt)(),
          H = null != L && L.length > 0,
          F = (0, s.e7)([C.Z], () =>
            C.Z.getUpload(r, d.localCreationAnswerId, p.d.Poll),
          ),
          [z, W] = l.useState(!1),
          K = () => {
            function e(e) {
              u.Z.update(r, d.localCreationAnswerId, p.d.Poll, {
                description: e,
              });
            }
            (0, c.openModalLazy)(async () => {
              let { default: t } = await n.e("2538").then(n.bind(n, 92254));
              return (n) =>
                (0, a.jsx)(t, { channelId: r, answer: d, onSave: e, ...n });
            });
          },
          Y = l.useCallback(() => {
            W((e) => !e);
          }, []),
          G = l.useCallback(
            (e) => {
              let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
              switch (e.key.toLowerCase()) {
                case "enter":
                  var a;
                  g &&
                    (e.preventDefault(),
                    ((0, j.cS)(d, x) || "macos" !== (0, v.getOS)() ? t : n)
                      ? (e.stopPropagation(), D())
                      : y()),
                    null === (a = O.current[h + 1]) ||
                      void 0 === a ||
                      a.focus();
                  break;
                case "e":
                  ("macos" === (0, v.getOS)() ? n : t) &&
                    (e.preventDefault(), e.stopPropagation(), Y());
              }
            },
            [y, d, O, h, g, x, D, Y],
          ),
          q = (0, a.jsx)(S, {
            channelId: r,
            buttonImage: d.image,
            layout: x,
            onEmojiSelect: b,
            onEmojiRemove: A,
            localCreationAnswerId: d.localCreationAnswerId,
            answerIndex: h,
            shouldShowEmojiPicker: z,
            toggleEmojiPicker: Y,
          }),
          V = null != F && null != F.description && F.description.length > 0;
        return (0, a.jsx)(a.Fragment, {
          children:
            x === o.C.DEFAULT
              ? (0, a.jsxs)("div", {
                  className: i()(N.answerRow, { [N.hasDeleteButton]: R }),
                  children: [
                    (0, a.jsxs)("div", {
                      className: i()(N.defaultTextInputWrapper, {
                        [N.hasError]: H,
                      }),
                      ref: t,
                      children: [
                        q,
                        (0, a.jsx)(c.TextInput, {
                          "aria-label": k.intl.formatToPlainString(
                            k.t["3+V8Gx"],
                            { answerNumber: h + 1 },
                          ),
                          placeholder: k.intl.string(k.t.NNHVlp),
                          value: d.text,
                          className: N.defaultTextInput,
                          inputClassName: N.defaultTextInput,
                          onChange: (e) =>
                            w({
                              text: e,
                              index: h,
                              localCreationAnswerId: d.localCreationAnswerId,
                            }),
                          onKeyDown: G,
                          maxLength: _.WA,
                          "aria-invalid": H,
                          "aria-describedby": H ? Z : U,
                          focusProps: E,
                          inputRef: B,
                        }),
                        (0, a.jsx)(T, { value: d.text, id: U }),
                      ],
                    }),
                    R &&
                      (0, a.jsx)(c.Clickable, {
                        onClick: () => P(h),
                        className: N.removeAnswerButtonDefault,
                        "aria-label": k.intl.formatToPlainString(
                          k.t["22fjER"],
                          { answerNumber: h + 1 },
                        ),
                        ref: M,
                        children: (0, a.jsx)(c.TrashIcon, {
                          size: "md",
                          color: "currentColor",
                          className: N.trashIcon,
                          "aria-hidden": !0,
                        }),
                      }),
                    H &&
                      (0, a.jsx)(c.Text, {
                        id: Z,
                        variant: "text-xs/medium",
                        color: "text-danger",
                        className: N.__invalid_errorText,
                        children: L,
                      }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className: N.imageOnlyContainer,
                  ref: t,
                  children: [
                    (0, a.jsxs)("div", {
                      className: N.imagePreviewContainer,
                      children: [
                        q,
                        V &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(c.Text, {
                                variant: "text-xs/semibold",
                                className: N.altBadge,
                                "aria-hidden": !0,
                                children: k.intl.string(k.t.QEW819),
                              }),
                              (0, a.jsxs)("div", {
                                onClick: K,
                                children: [
                                  (0, a.jsx)(c.HiddenVisually, {
                                    children: k.intl.string(k.t.piH89v),
                                  }),
                                  (0, a.jsx)(c.Text, {
                                    variant: "text-xxs/medium",
                                    className: N.altTextPreview,
                                    children: F.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: N.imageOnlyAnswerActionBar,
                      children: [
                        null != F
                          ? (0, a.jsx)(m.Z, {
                              tooltip: k.intl.string(k.t.QbhHBQ),
                              "aria-label": V
                                ? k.intl.formatToPlainString(k.t.d04UhI, {
                                    answerNumber: h + 1,
                                  })
                                : k.intl.formatToPlainString(k.t.mULZgY, {
                                    answerNumber: h + 1,
                                  }),
                              onClick: K,
                              children: (0, a.jsx)(I.N, { "aria-hidden": !0 }),
                            })
                          : null,
                        (0, a.jsx)(m.Z, {
                          tooltip: k.intl.string(k.t.x7DOr6),
                          "aria-label": k.intl.formatToPlainString(
                            k.t["22fjER"],
                            { answerNumber: h + 1 },
                          ),
                          onClick: () => P(h),
                          dangerous: !0,
                          children: (0, a.jsx)(c.TrashIcon, {
                            size: "md",
                            color: "currentColor",
                            "aria-hidden": !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
        });
      });
    },
    611611: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(525769),
        s = n(263568),
        c = n(481060),
        u = n(213609),
        d = n(313201),
        m = n(542383),
        f = n(79390),
        h = n(728076),
        x = n(2466),
        g = n(485168),
        p = n(309081),
        C = n(185306),
        v = n(240521),
        j = n(489887),
        I = n(20281),
        w = n(388032),
        _ = n(841916);
      let b = (0, d.hQ)(),
        A = (0, d.hQ)();
      function k(e) {
        let { question: t, onChange: n, error: r, inputRef: o } = e,
          [s, u] = l.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c.FormTitle, {
              tag: c.FormTitleTags.LABEL,
              htmlFor: A,
              children: w.intl.string(w.t.WBiKnJ),
            }),
            (0, a.jsx)(c.TextArea, {
              inputRef: o,
              id: A,
              placeholder: w.intl.string(w.t["/uQqJS"]),
              value: t,
              className: i()(_.questionInput, { [_.hasError]: null != r }),
              onChange: n,
              maxLength: j.Az,
              error: r,
              onFocus: () => u(!0),
              onBlur: () => u(!1),
              showCharacterCount: s,
              showCharacterCountFullPadding: !0,
              showRemainingCharacterCount: s,
              rows: 1,
              autosize: !0,
              autoFocus: !0,
            }),
          ],
        });
      }
      function N(e) {
        let { selectedDuration: t, onSelect: n } = e,
          l = (0, x.Z)(),
          r = l[t];
        return (0, a.jsxs)("div", {
          className: _.duration,
          children: [
            (0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "header-secondary",
              tag: "label",
              "aria-hidden": !0,
              children: w.intl.string(w.t.bGHzxc),
            }),
            (0, a.jsx)(c.Select, {
              "aria-label": w.intl.formatToPlainString(w.t.nXNHND, {
                duration: r,
              }),
              className: _.durationSelect,
              options: Object.entries(l).map((e) => {
                let [t, n] = e;
                return { label: n, value: parseInt(t) };
              }),
              isSelected: (e) => e === t,
              select: n,
              serialize: (e) => "".concat(e),
              renderOptionLabel: (e) =>
                (0, a.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  children: e.label,
                }),
              popoutPosition: "top",
            }),
          ],
        });
      }
      function E(e) {
        let { channel: t, transitionState: n, onClose: r } = e,
          d = (0, f._N)();
        (0, u.Z)({ type: I.n.MODAL, name: o.z.POLL_EDITOR_VIEWED });
        let x = l.useRef(null),
          A = l.useRef([]),
          R = l.useRef([]),
          P = l.useRef(null),
          S = l.useRef([]),
          T = l.useCallback((e) => {
            var t, n, a, l;
            let { indexToRemove: r, numberOfAnswers: i } = e;
            i === j.gY + 1
              ? null === (n = P.current) ||
                void 0 === n ||
                null === (t = n.ref) ||
                void 0 === t ||
                t.focus()
              : null === (l = S.current[r === i - 1 ? r - 1 : r + 1]) ||
                void 0 === l ||
                null === (a = l.ref) ||
                void 0 === a ||
                a.focus();
          }, []),
          {
            answers: y,
            question: D,
            selectedLayoutType: O,
            setSelectedLayoutType: L,
            allowMultiSelect: B,
            setAllowMultiSelect: M,
            duration: Z,
            setDuration: U,
            handleQuestionChange: H,
            handleAnswerTextChange: F,
            handleEmojiSelect: z,
            canAddMoreAnswers: W,
            handleRemoveAnswerImage: K,
            canRemoveMoreAnswers: Y,
            handleAddAnswer: G,
            handleRemoveAnswer: q,
            createPollError: V,
            handleSubmitPoll: J,
            fieldErrors: Q,
            submitting: X,
            shouldFocusOnInvalidField: $,
            setShouldFocusOnInvalidField: ee,
          } = (0, h.Z)(t, r, T),
          { trackPollCreationCancelled: et } = (0, g.l)(y, B, O),
          en = l.useRef(y.length),
          ea = O === s.C.DEFAULT,
          el = l.useCallback(() => {
            et(), r();
          }, [r, et]),
          er = l.useCallback(() => {
            if ((0, f.D$)(D, y, O)) el();
            else {
              (0, v.Z)({
                title: w.intl.string(w.t.HMrgcn),
                body: w.intl.string(w.t["Wxa/j4"]),
                cta: w.intl.string(w.t.TzJA4u),
                closeLabel: w.intl.string(w.t["2BR5R0"]),
                onConfirm: () => {
                  el();
                },
              });
              return;
            }
          }, [el, y, D, O]);
        l.useEffect(() => {
          (0, c.updateModal)(
            j.$z,
            (e) => (0, a.jsx)(E, { ...e, channel: t }),
            er,
          );
        }, [er, t]),
          l.useEffect(() => {
            if (y.length > en.current) {
              var e;
              null === (e = R.current[y.length - 1]) ||
                void 0 === e ||
                e.focus();
            }
            en.current = y.length;
          }, [y.length]),
          l.useEffect(() => {
            if ($) {
              var e, t;
              if ((null == Q ? void 0 : Q.question) != null)
                null === (e = x.current) || void 0 === e || e.focus();
              else {
                let e = y.findIndex(
                  (e) => Q["answer-".concat(e.localCreationAnswerId)],
                );
                -1 !== e &&
                  (null === (t = R.current[e]) || void 0 === t || t.focus());
              }
              ee(!1);
            }
          }, [Q, y, $, ee, R, A]);
        let ei = () => {
            n === c.ModalTransitionState.ENTERED && J();
          },
          eo = (0, m.Z)({ disabled: X, onSubmit: ei });
        return (0, a.jsxs)(c.ModalRoot, {
          size: c.ModalSize.MEDIUM,
          className: _.container,
          transitionState: n,
          "aria-labelledby": b,
          children: [
            (0, a.jsxs)(c.ModalHeader, {
              className: _.header,
              separator: !1,
              children: [
                (0, a.jsx)(c.Heading, {
                  color: "interactive-normal",
                  variant: "text-lg/semibold",
                  className: _.headerText,
                  id: b,
                  children: w.intl.string(w.t["GD/8X1"]),
                }),
                (0, a.jsx)(c.ModalCloseButton, { onClick: er }),
              ],
            }),
            (0, a.jsxs)(c.ModalContent, {
              className: _.content,
              onKeyDown: eo,
              children: [
                null != V &&
                  (0, a.jsx)(c.FormErrorBlock, {
                    className: _.apiErrorBlock,
                    children: V.getAnyErrorMessage(),
                  }),
                (0, a.jsx)(k, {
                  question: D,
                  onChange: H,
                  error: null == Q ? void 0 : Q.question,
                  inputRef: x,
                }),
                d &&
                  (0, a.jsx)(C.Z, {
                    selectedLayoutType: O,
                    onSelectedLayoutType: L,
                  }),
                (0, a.jsx)(c.Spacer, { size: 26 }),
                (0, a.jsxs)("fieldset", {
                  className: i()(
                    _.answerInputsContainer,
                    ea ? _.defaultContainer : _.imageOnlyContainer,
                  ),
                  children: [
                    (0, a.jsx)(c.FormTitle, {
                      tag: c.FormTitleTags.LEGEND,
                      children: w.intl.string(w.t.oMBfeX),
                    }),
                    y.map((e, n) =>
                      (0, a.jsx)(
                        p.Z,
                        {
                          answer: e,
                          channelId: t.id,
                          index: n,
                          isLastAnswer: n === y.length - 1,
                          onEmojiSelect: z,
                          onEmojiRemove: K,
                          layout: O,
                          onAnswerTextChange: F,
                          onRemoveAnswer: q,
                          addAnswer: G,
                          submitPoll: ei,
                          answerTextInputRefs: R,
                          error:
                            null == Q
                              ? void 0
                              : Q["answer-".concat(e.localCreationAnswerId)],
                          canRemoveAnswer: Y,
                          ref: (e) => (A.current[n] = e),
                          inputRef: (e) => (R.current[n] = e),
                          deleteButtonRef: (e) => (S.current[n] = e),
                        },
                        e.localCreationAnswerId,
                      ),
                    ),
                    W &&
                      (0, a.jsxs)(c.Clickable, {
                        className: i()(
                          ea
                            ? _.addAnswerButtonDefault
                            : _.addAnswerButtonImageOnly,
                          { [_.canRemoveMoreAnswers]: Y },
                        ),
                        onClick: W ? G : void 0,
                        "aria-label": w.intl.string(w.t.B2UvmZ),
                        ref: P,
                        children: [
                          (0, a.jsx)(c.PlusSmallIcon, {
                            size: "md",
                            color: "currentColor",
                            className: ea
                              ? _.addAnswerIconDefault
                              : _.addAnswerIconImageOnly,
                          }),
                          ea &&
                            (0, a.jsx)(c.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              className: _.addAnswerButtonLabel,
                              children: w.intl.string(w.t.B2UvmZ),
                            }),
                        ],
                      }),
                  ],
                }),
                (0, a.jsx)(c.Spacer, { size: 18 }),
                (0, a.jsx)(N, { selectedDuration: Z, onSelect: U }),
              ],
            }),
            (0, a.jsxs)(c.ModalFooter, {
              className: _.footer,
              children: [
                (0, a.jsx)(c.Checkbox, {
                  className: _.checkbox,
                  type: c.Checkbox.Types.INVERTED,
                  size: 24,
                  value: B,
                  checkboxColor: (0, c.useToken)(
                    c.tokens.colors.INTERACTIVE_NORMAL,
                  ).hex(),
                  onChange: (e, t) => M(t),
                  children: (0, a.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "interactive-active",
                    children: w.intl.string(w.t["Ux+iQU"]),
                  }),
                }),
                (0, a.jsx)(c.Button, {
                  look: c.ButtonLooks.FILLED,
                  size: c.Button.Sizes.MEDIUM,
                  className: _.postButton,
                  onClick: ei,
                  submitting: X,
                  children: (0, a.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    className: _.postButtonText,
                    children: w.intl.string(w.t.JOj8Zm),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    185306: function (e, t, n) {
      var a = n(200651),
        l = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(263568),
        s = n(481060),
        c = n(388032),
        u = n(116903);
      function d(e) {
        let { label: t, isSelected: n, onClick: l, children: r } = e,
          o = (0, s.useRadioItem)({ isSelected: n, label: t });
        return (0, a.jsx)(s.Clickable, {
          ...o,
          onClick: l,
          className: i()(u.option, n && u.optionSelected),
          children: r,
        });
      }
      t.Z = function (e) {
        let { selectedLayoutType: t, onSelectedLayoutType: n } = e,
          r = (0, s.useRadioGroup)({ orientation: "horizontal" }),
          i = l.useMemo(
            () => [
              {
                name: o.C.DEFAULT,
                label: c.intl.string(c.t.GhK6X1),
                icon: s.ListBulletsIcon,
              },
              {
                name: o.C.IMAGE_ONLY_ANSWERS,
                label: c.intl.string(c.t.an4GKS),
                icon: s.ImageIcon,
              },
            ],
            [],
          ),
          m = (e) => {
            n(e);
          };
        return (0, a.jsx)("div", {
          className: u.container,
          "aria-label": c.intl.string(c.t.e9hWx8),
          ...r,
          children: i.map((e) => {
            let n = e.icon;
            return (0, a.jsx)(
              d,
              {
                label: e.label,
                isSelected: e.name === t,
                onClick: () => m(e.name),
                children: (0, a.jsx)(n, { className: u.icon }),
              },
              e.name,
            );
          }),
        });
      };
    },
    885001: function (e, t, n) {
      n.d(t, {
        N: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var l = n(692547),
        r = n(331595);
      let i = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.Z.colors.INTERACTIVE_NORMAL,
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, r.Z)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          fill: "string" == typeof i ? i : i.css,
          children: [
            (0, a.jsxs)("g", {
              "clip-path": "url(#clip0_1_16)",
              children: [
                (0, a.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H12.2763C12.4842 22 12.6704 21.8714 12.744 21.6769L13.5005 19.6769C13.6242 19.3498 13.3825 19 13.0328 19H5.81047C5.18159 19 4.83196 18.2726 5.22482 17.7815L7.0787 15.4641C7.67918 14.7135 8.82082 14.7135 9.4213 15.4641L9.92742 16.0968L12.15 13.1333C12.95 12.0667 14.55 12.0667 15.35 13.1333L15.7659 13.6879L15.9155 13.2924C16.2097 12.5146 16.9545 12 17.7861 12H20.1143C20.6827 12 21.2003 12.2434 21.57 12.6395C21.6838 12.7614 22 12.6785 22 12.5118V5C22 3.34315 20.6569 2 19 2H5ZM8.64943 5.07947C9.32431 4.42611 10.4329 5.06617 10.2045 5.97731C10.082 6.46608 10.3694 6.96388 10.854 7.10216C11.7572 7.35994 11.7572 8.64005 10.854 8.89784C10.3694 9.03612 10.082 9.53392 10.2045 10.0227C10.4329 10.9338 9.32431 11.5739 8.64943 10.9205C8.28741 10.57 7.71259 10.57 7.35057 10.9205C6.67569 11.5739 5.56708 10.9338 5.79547 10.0227C5.91798 9.53392 5.63058 9.03612 5.14603 8.89784C4.24276 8.64006 4.24276 7.35994 5.14603 7.10216C5.63058 6.96388 5.91798 6.46608 5.79547 5.97731C5.56708 5.06617 6.67569 4.42611 7.35057 5.07947C7.71259 5.42996 8.28741 5.42996 8.64943 5.07947Z",
                }),
                (0, a.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M21.613 24.04H23.912L20.1143 14H17.7861L13.9884 24.04H16.2874L16.9422 22.1193H20.9582L21.613 24.04ZM17.6115 20.1986L18.9502 16.2845L20.2889 20.1986H17.6115Z",
                }),
              ],
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_1_16",
                children: (0, a.jsx)("rect", { width: "24", height: "24" }),
              }),
            }),
          ],
        });
      };
    },
    240521: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(200651);
      n(192379);
      var l = n(952265);
      function r(e) {
        (0, l.ZD)(async () => {
          let { default: t } = await n.e("38795").then(n.bind(n, 118922));
          return (n) => (0, a.jsx)(t, { ...e, ...n });
        });
      }
    },
    35463: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var a = n(192379),
        l = n(442837),
        r = n(703558),
        i = n(117530),
        o = n(524100);
      function s(e) {
        var t, n;
        let { channelId: s, localCreationAnswerId: c, image: u } = e,
          d = null == u ? void 0 : u.emoji,
          m =
            (null == u
              ? void 0
              : null === (t = u.mediaAttachmentState) || void 0 === t
                ? void 0
                : t.status) === o._.PREPARING,
          f = (0, l.e7)([i.Z], () => i.Z.getUpload(s, c, r.d.Poll)),
          [h, x] = a.useState(),
          [g, p] = a.useState("");
        return (
          a.useEffect(() => {
            var e;
            if (
              (null == f
                ? void 0
                : null === (e = f.item) || void 0 === e
                  ? void 0
                  : e.file) == null
            )
              return;
            let t = URL.createObjectURL(f.item.file);
            return (
              x(t),
              p(f.item.file.name),
              () => {
                URL.revokeObjectURL(t);
              }
            );
          }, [
            null == f
              ? void 0
              : null === (n = f.item) || void 0 === n
                ? void 0
                : n.file,
          ]),
          {
            emoji: d,
            isLoadingMedia: m,
            hasUpload: null != f,
            upload: f,
            mediaUrl: h,
            mediaFilename: g,
          }
        );
      }
    },
    500882: function (e, t, n) {
      e.exports = {
        answerRow: "answerRow_d274ca",
        hasDeleteButton: "hasDeleteButton_d274ca",
        defaultTextInputWrapper: "defaultTextInputWrapper_d274ca",
        characterCount: "characterCount_d274ca",
        hasError: "hasError_d274ca",
        defaultTextInput: "defaultTextInput_d274ca",
        imageOnlyContainer: "imageOnlyContainer_d274ca",
        imageOnlyAnswerActionBar: "imageOnlyAnswerActionBar_d274ca",
        imagePreviewContainer: "imagePreviewContainer_d274ca",
        altBadge: "altBadge_d274ca",
        altTextPreview: "altTextPreview_d274ca",
        media: "media_d274ca",
        editIcon: "editIcon_d274ca",
        canEditMedia: "canEditMedia_d274ca",
        expressionPickerButtonDefault:
          "expressionPickerButtonDefault_d274ca expressionPickerButton_d274ca",
        expressionPickerButtonImageOnly:
          "expressionPickerButtonImageOnly_d274ca expressionPickerButton_d274ca",
        expressionPickerIconDefault: "expressionPickerIconDefault_d274ca",
        expressionPickerIconImageOnly: "expressionPickerIconImageOnly_d274ca",
        emojiPicker: "emojiPicker_d274ca",
        emojiDefault: "emojiDefault_d274ca",
        emojiJumbo: "emojiJumbo_d274ca",
        gifJumbo: "gifJumbo_d274ca",
        gifDefault: "gifDefault_d274ca",
        spinnerWrapperDefault:
          "spinnerWrapperDefault_d274ca spinnerWrapper_d274ca",
        spinnerWrapperImageOnly:
          "spinnerWrapperImageOnly_d274ca spinnerWrapper_d274ca",
        menuContainer: "menuContainer_d274ca",
        removeAnswerButtonDefault: "removeAnswerButtonDefault_d274ca",
        trashIcon: "trashIcon_d274ca",
      };
    },
    841916: function (e, t, n) {
      e.exports = {
        container: "container_f24a96",
        header: "header_f24a96",
        headerText: "headerText_f24a96",
        content: "content_f24a96",
        questionInput: "questionInput_f24a96",
        hasError: "hasError_f24a96",
        answerInputsContainer: "answerInputsContainer_f24a96",
        defaultContainer: "defaultContainer_f24a96",
        imageOnlyContainer: "imageOnlyContainer_f24a96",
        addAnswerButtonDefault:
          "addAnswerButtonDefault_f24a96 addAnswerButton_f24a96",
        canRemoveMoreAnswers: "canRemoveMoreAnswers_f24a96",
        addAnswerButtonImageOnly:
          "addAnswerButtonImageOnly_f24a96 addAnswerButton_f24a96",
        addAnswerIconDefault: "addAnswerIconDefault_f24a96",
        addAnswerButtonLabel: "addAnswerButtonLabel_f24a96",
        addAnswerIconImageOnly: "addAnswerIconImageOnly_f24a96",
        duration: "duration_f24a96",
        durationSelect: "durationSelect_f24a96",
        footer: "footer_f24a96",
        checkbox: "checkbox_f24a96",
        postButton: "postButton_f24a96",
        postButtonText: "postButtonText_f24a96",
        apiErrorBlock: "apiErrorBlock_f24a96",
      };
    },
    116903: function (e, t, n) {
      e.exports = {
        container: "container_a56665",
        option: "option_a56665",
        optionSelected: "optionSelected_a56665",
        icon: "icon_a56665",
      };
    },
  },
]);
//# sourceMappingURL=41255bdf1ae713ac33f0.js.map
