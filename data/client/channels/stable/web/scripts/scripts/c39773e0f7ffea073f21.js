"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68784"],
  {
    542383: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var t = n(470079),
        r = n(358085);
      function l(e) {
        let a = t.useRef(e);
        return (
          t.useEffect(() => {
            a.current = e;
          }, [e]),
          t.useCallback((e) => {
            let n = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
              t = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
              { disabled: l = !1, onSubmit: s } = a.current;
            if ("enter" === e.key.toLowerCase())
              ("macos" === (0, r.getOS)() ? t : n) &&
                !l &&
                (e.preventDefault(), s());
          }, [])
        );
      }
    },
    524100: function (e, a, n) {
      var t, r;
      n.d(a, {
        _: function () {
          return t;
        },
      }),
        ((r = t || (t = {})).PREPARING = "PREPARING"),
        (r.READY_TO_UPLOAD = "READY_TO_UPLOAD"),
        (r.ERROR = "ERROR");
    },
    728076: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return m;
        },
      }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var t = n(470079),
        r = n(263568),
        l = n(935369),
        s = n(398805),
        o = n(524100),
        i = n(316758),
        c = n(203143),
        u = n(79390),
        d = n(489887),
        _ = n(689938);
      function m(e, a, n) {
        let m = e.id,
          A = t.useRef();
        null == A.current && (A.current = [(0, u.Uu)(), (0, u.Uu)()]);
        let [f, C] = t.useState(A.current),
          [L, h] = t.useState(""),
          [R, I] = t.useState(r.C.DEFAULT),
          [x, p] = t.useState(!1),
          [O, g] = t.useState(d.lc.ONE_DAY),
          [T, N] = t.useState({}),
          [P, v] = t.useState(!1),
          j = f.filter((e) => (0, u.cS)(e, R)),
          D = f.filter((e) => (0, u.uY)(e, R)),
          M = L.length > 0 && j.length >= d.gY && 0 === D.length,
          [w, { error: S, loading: b }] = (0, l.Z)(c.Z.createPoll),
          k = f.length < d.fw,
          Z = f.length > d.gY,
          y = t.useCallback((e) => {
            N((e) => {
              let a = { ...e };
              return delete a.question, a;
            }),
              h(e);
          }, []),
          B = t.useCallback((e) => {
            let { text: a, index: n, localCreationAnswerId: t } = e;
            N((e) => {
              let a = { ...e };
              return delete a["answer-".concat(t)], a;
            }),
              C((e) => {
                let t = [...e];
                return (t[n] = { ...t[n], text: a }), t;
              });
          }, []),
          U = t.useCallback((e, a) => {
            C((n) => {
              let t = [...n];
              return (t[a] = { ...t[a], image: e }), t;
            });
          }, []),
          W = t.useCallback(
            (e, a, n) => {
              var t;
              let r = f[a],
                l =
                  null === (t = r.image) || void 0 === t
                    ? void 0
                    : t.mediaAttachmentState;
              null != l &&
                l.mediaURL !== n &&
                i.P(
                  e,
                  r.localCreationAnswerId,
                  (0, s.Yk)(r.localCreationAnswerId, l.mediaURL),
                );
            },
            [f],
          ),
          H = t.useCallback(
            async (e, a, n) => {
              let t = f[a].localCreationAnswerId;
              if (
                (W(e, a),
                U(E(n, o._.PREPARING), a),
                null == (await i.IV(e, t, n)))
              ) {
                U(E(n, o._.ERROR), a);
                return;
              }
              U(E(n, o._.READY_TO_UPLOAD), a);
            },
            [f, U, W],
          ),
          Y = t.useCallback(
            (e, a, n) => {
              let t = f[a].localCreationAnswerId,
                r = URL.createObjectURL(n);
              W(e, a),
                U(E(r, o._.PREPARING), a),
                i.fH(e, t, n),
                U(E(r, o._.READY_TO_UPLOAD), a);
            },
            [f, U, W],
          ),
          F = t.useCallback(
            (e, a) => {
              W(m, a),
                U(
                  { emoji: e, stickerId: void 0, mediaAttachmentState: void 0 },
                  a,
                );
            },
            [m, U, W],
          ),
          G = t.useCallback((e) => {
            C((a) => {
              let n = [...a];
              return (n[e] = { ...n[e], image: void 0 }), n;
            });
          }, []),
          z = t.useCallback(() => {
            if (!!k) C((e) => [...e, (0, u.Uu)()]);
          }, [k]),
          K = t.useCallback(
            (e) => {
              if (!Z) return;
              let a = f.length;
              W(m, e),
                C((a) => {
                  let n = [...a];
                  return n.splice(e, 1), n;
                }),
                null == n || n({ indexToRemove: e, numberOfAnswers: a });
            },
            [f.length, Z, m, n, W],
          );
        t.useEffect(
          () => () => {
            i.xt(m);
          },
          [m],
        );
        let V = t.useCallback(() => {
            let e = !0,
              a = {};
            return (
              0 === L.trim().length &&
                ((e = !1),
                (a.question = _.Z.Messages.CREATE_POLL_QUESTION_REQUIRED)),
              f.filter((e) => (0, u.cS)(e, R)).length < d.gY &&
                ((e = !1),
                (a["answer-".concat(f[0].localCreationAnswerId)] =
                  _.Z.Messages.CREATE_POLL_MINIMUM_ANSWERS_REQUIRED)),
              f.forEach((n) => {
                (0, u.uY)(n, R) &&
                  ((e = !1),
                  (a["answer-".concat(n.localCreationAnswerId)] =
                    _.Z.Messages.CREATE_POLL_ANSWER_MUST_CONTAIN_TEXT));
              }),
              N(a),
              v(!e),
              e
            );
          }, [f, L, R]),
          J = t.useCallback(async () => {
            await w({
              channel: e,
              question: L,
              answers: j,
              allowMultiSelect: x,
              duration: O,
              layout: R,
              onClose: a,
            });
          }, [L, j, x, O, w, e, R, a]),
          q = t.useCallback(() => {
            V() && J();
          }, [J, V]);
        return {
          answers: f,
          question: L,
          setQuestion: h,
          selectedLayoutType: R,
          setSelectedLayoutType: I,
          allowMultiSelect: x,
          setAllowMultiSelect: p,
          duration: O,
          setDuration: g,
          canPost: M,
          canAddMoreAnswers: k,
          canRemoveMoreAnswers: Z,
          handleQuestionChange: y,
          handleAnswerTextChange: B,
          handleGifSelect: H,
          handleEmojiSelect: F,
          handleCustomUpload: Y,
          handleAddAnswer: z,
          handleRemoveAnswer: K,
          handleRemoveAnswerImage: G,
          fieldErrors: T,
          createPoll: J,
          handleSubmitPoll: q,
          submitting: b,
          createPollError: S,
          shouldFocusOnInvalidField: P,
          setShouldFocusOnInvalidField: v,
        };
      }
      function E(e, a) {
        return {
          mediaAttachmentState: { status: a, mediaURL: e },
          emoji: void 0,
          stickerId: void 0,
        };
      }
    },
    2466: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var t = n(489887),
        r = n(689938);
      function l() {
        return Object.freeze({
          [t.lc.ONE_HOUR]:
            r.Z.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format({
              num: 1,
            }),
          [t.lc.FOUR_HOURS]:
            r.Z.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format({
              num: 4,
            }),
          [t.lc.EIGHT_HOURS]:
            r.Z.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format({
              num: 8,
            }),
          [t.lc.ONE_DAY]:
            r.Z.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format({
              num: 24,
            }),
          [t.lc.THREE_DAYS]:
            r.Z.Messages.CREATE_POLL_DURATION_OPTION_LABEL_3_DAYS,
          [t.lc.SEVEN_DAYS]:
            r.Z.Messages.CREATE_POLL_DURATION_OPTION_LABEL_7_DAYS,
          [t.lc.FOURTEEN_DAYS]:
            r.Z.Messages.CREATE_POLL_DURATION_OPTION_LABEL_14_DAYS,
        });
      }
    },
    485168: function (e, a, n) {
      n.d(a, {
        l: function () {
          return s;
        },
      });
      var t = n(470079),
        r = n(367907),
        l = n(981631);
      function s(e, a, n) {
        return {
          trackPollCreationCancelled: t.useCallback(() => {
            let t = 0,
              s = 0,
              o = 0;
            e.forEach((e) => {
              let a = e.image;
              null != a &&
                (null != a.emoji
                  ? (s += 1)
                  : null != a.stickerId
                    ? (o += 1)
                    : null != a.mediaAttachmentState && (t += 1));
            }),
              r.ZP.trackWithMetadata(l.rMx.POLL_CREATION_CANCELLED, {
                answers_count: e.length,
                attachments_count: t,
                emojis_count: s,
                stickers_count: o,
                allow_multiselect: a,
                layout_type: n,
              });
          }, [e, a, n]),
        };
      }
    },
    309081: function (e, a, n) {
      n.d(a, {
        I: function () {
          return v;
        },
      }),
        n(47120);
      var t = n(735250),
        r = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(263568),
        i = n(442837),
        c = n(481060),
        u = n(166459),
        d = n(596454),
        _ = n(273031),
        m = n(313201),
        E = n(907040),
        A = n(906411),
        f = n(592125),
        C = n(703558),
        L = n(117530),
        h = n(358085),
        R = n(79390),
        I = n(885001),
        x = n(35463),
        p = n(489887),
        O = n(185923),
        g = n(957825),
        T = n(689938),
        N = n(530319);
      let P = { offset: { top: -4, bottom: -4, left: 0, right: -8 } };
      function v(e) {
        let {
          hasUpload: a,
          mediaUrl: n,
          mediaFilename: r,
          imageClassName: l,
          emoji: s,
          emojiClassName: o,
          fallback: i,
        } = e;
        return a
          ? (0, t.jsx)("img", { src: n, alt: r, className: l })
          : null != s
            ? (0, t.jsx)(d.Z, {
                className: o,
                emojiId: s.id,
                emojiName:
                  s.type === A.B.UNICODE ? s.optionallyDiverseSequence : s.name,
                animated: s.animated,
              })
            : (0, t.jsx)(t.Fragment, { children: i });
      }
      function j(e) {
        let {
          onSelect: a,
          onEditMedia: n,
          onDeleteMedia: r,
          closePopout: l,
        } = e;
        return (0, t.jsx)("div", {
          className: N.menuContainer,
          children: (0, t.jsx)(c.Menu, {
            navId: "poll-media-edit-menu",
            onClose: l,
            "aria-label": T.Z.Messages.CREATE_POLL_UPDATE_EMOJI_MENU_ARIA,
            onSelect: a,
            children: (0, t.jsxs)(c.MenuGroup, {
              children: [
                (0, t.jsx)(c.MenuItem, {
                  id: "poll-media-replace",
                  label: T.Z.Messages.CREATE_POLL_REPLACE_EMOJI,
                  action: n,
                }),
                (0, t.jsx)(c.MenuItem, {
                  id: "poll-media-delete",
                  label: T.Z.Messages.CREATE_POLL_REMOVE_EMOJI,
                  action: r,
                  color: "danger",
                }),
              ],
            }),
          }),
        });
      }
      function D(e) {
        let {
            channelId: a,
            localCreationAnswerId: n,
            buttonImage: l,
            layout: u,
            onEmojiSelect: d,
            onEmojiRemove: _,
            answerIndex: m,
            shouldShowEmojiPicker: A,
            toggleEmojiPicker: C,
          } = e,
          L = (0, i.e7)([f.Z], () => f.Z.getChannel(a)),
          {
            emoji: h,
            isLoadingMedia: I,
            hasUpload: p,
            mediaUrl: P,
            mediaFilename: D,
          } = (0, x.Z)({ channelId: a, localCreationAnswerId: n, image: l }),
          M = u === o.C.DEFAULT,
          w = p || null != h,
          S = r.useCallback(() => {
            _(m);
          }, [_, m]),
          b = r.useMemo(
            () =>
              p
                ? T.Z.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, R.fw)(D),
                    answerNumber: m + 1,
                  })
                : null != h
                  ? T.Z.Messages.CREATE_POLL_EDIT_EMOJI_ARIA.format({
                      emojiName: h.name,
                      answerNumber: m + 1,
                    })
                  : T.Z.Messages.CREATE_POLL_ADD_EMOJI_ARIA.format({
                      answerNumber: m + 1,
                    }),
            [p, h, m, D],
          ),
          k = r.useCallback(
            (e) => {
              let { closePopout: a } = e;
              return (0, t.jsx)("div", {
                className: N.emojiPicker,
                children: (0, t.jsx)(E.Z, {
                  channel: L,
                  pickerIntention: O.Hz.POLLS,
                  closePopout: a,
                  onNavigateAway: a,
                  onSelectEmoji: (e, n) => {
                    null != e && d(e, m), n && a();
                  },
                }),
              });
            },
            [L, d, m],
          ),
          Z = r.useCallback(
            (e) => {
              let { closePopout: a } = e;
              return (0, t.jsx)(j, {
                onSelect: a,
                onEditMedia: C,
                onDeleteMedia: S,
                closePopout: a,
              });
            },
            [S, C],
          ),
          y = I
            ? (0, t.jsx)(c.Spinner, {
                className: M
                  ? N.spinnerWrapperDefault
                  : N.spinnerWrapperImageOnly,
              })
            : (0, t.jsx)(v, {
                hasUpload: p,
                mediaUrl: P,
                mediaFilename: D,
                imageClassName: s()(N.media, M ? N.gifDefault : N.gifJumbo),
                emoji: h,
                emojiClassName: s()(N.media, M ? N.emojiDefault : N.emojiJumbo),
                fallback: (0, t.jsx)(c.ReactionIcon, {
                  size: "md",
                  color: "currentColor",
                  className: M
                    ? N.expressionPickerIconDefault
                    : N.expressionPickerIconImageOnly,
                }),
              }),
          B = s()(
            g.CT,
            u === o.C.IMAGE_ONLY_ANSWERS
              ? N.expressionPickerButtonImageOnly
              : N.expressionPickerButtonDefault,
            { [N.canEditMedia]: w },
          );
        return (0, t.jsx)(c.Popout, {
          renderPopout: k,
          shouldShow: A,
          onRequestClose: C,
          animation: c.Popout.Animation.NONE,
          position: "bottom",
          spacing: 2,
          children: (e) => {
            let { "aria-controls": a, "aria-expanded": n, ...r } = e;
            return (0, t.jsx)(c.Popout, {
              animation: c.Popout.Animation.NONE,
              position: "bottom",
              renderPopout: Z,
              children: (e) => {
                let {
                  onClick: r,
                  "aria-controls": l,
                  "aria-expanded": s,
                  ...o
                } = e;
                return (0, t.jsxs)(c.Clickable, {
                  ...o,
                  className: B,
                  onClick: w && !A ? r : C,
                  "aria-label": b,
                  "aria-controls": null != a ? a : l,
                  "aria-expanded": n || s,
                  children: [
                    y,
                    w &&
                      (0, t.jsx)(c.PencilIcon, {
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
      function M(e) {
        var a;
        let { value: n, id: r } = e,
          l = (() => {
            var e;
            let a =
              null !== (e = null == n ? void 0 : n.length) && void 0 !== e
                ? e
                : 0;
            return p.WA - a;
          })();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: s()(N.characterCount),
              "aria-hidden": "true",
              children: [
                null !== (a = null == n ? void 0 : n.length) && void 0 !== a
                  ? a
                  : 0,
                " / ",
                p.WA,
              ],
            }),
            (0, t.jsxs)(c.HiddenVisually, {
              id: r,
              children: [
                T.Z.Messages.CHARACTER_COUNT_A11Y_LABEL.format({
                  remainingCharacters: l,
                }),
                " ",
                T.Z.Messages.MAXIMUM_LENGTH.format({ maxLength: p.WA }),
              ],
            }),
          ],
        });
      }
      a.Z = r.forwardRef(function (e, a) {
        let {
            channelId: l,
            answer: d,
            index: E,
            layout: A,
            isLastAnswer: f,
            onAnswerTextChange: x,
            onEmojiSelect: O,
            onEmojiRemove: g,
            canRemoveAnswer: v,
            onRemoveAnswer: j,
            addAnswer: w,
            submitPoll: S,
            answerTextInputRefs: b,
            error: k,
            inputRef: Z,
            deleteButtonRef: y,
          } = e,
          B = (0, m.Dt)(),
          U = (0, m.Dt)(),
          W = null != k && k.length > 0,
          H = (0, i.e7)([L.Z], () =>
            L.Z.getUpload(l, d.localCreationAnswerId, C.d.Poll),
          ),
          [Y, F] = r.useState(!1),
          G = () => {
            function e(e) {
              u.Z.update(l, d.localCreationAnswerId, C.d.Poll, {
                description: e,
              });
            }
            (0, c.openModalLazy)(async () => {
              let { default: a } = await n.e("2538").then(n.bind(n, 92254));
              return (n) =>
                (0, t.jsx)(a, { channelId: l, answer: d, onSave: e, ...n });
            });
          },
          z = r.useCallback(() => {
            F((e) => !e);
          }, []),
          K = r.useCallback(
            (e) => {
              let a = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
              switch (e.key.toLowerCase()) {
                case "enter":
                  var t;
                  f &&
                    (e.preventDefault(),
                    ((0, R.cS)(d, A) || "macos" !== (0, h.getOS)() ? a : n)
                      ? (e.stopPropagation(), S())
                      : w()),
                    null === (t = b.current[E + 1]) ||
                      void 0 === t ||
                      t.focus();
                  break;
                case "e":
                  ("macos" === (0, h.getOS)() ? n : a) &&
                    (e.preventDefault(), e.stopPropagation(), z());
              }
            },
            [w, d, b, E, f, A, S, z],
          ),
          V = (0, t.jsx)(D, {
            channelId: l,
            buttonImage: d.image,
            layout: A,
            onEmojiSelect: O,
            onEmojiRemove: g,
            localCreationAnswerId: d.localCreationAnswerId,
            answerIndex: E,
            shouldShowEmojiPicker: Y,
            toggleEmojiPicker: z,
          }),
          J = null != H && null != H.description && H.description.length > 0;
        return (0, t.jsx)(t.Fragment, {
          children:
            A === o.C.DEFAULT
              ? (0, t.jsxs)("div", {
                  className: s()(N.answerRow, { [N.hasDeleteButton]: v }),
                  children: [
                    (0, t.jsxs)("div", {
                      className: s()(N.defaultTextInputWrapper, {
                        [N.hasError]: W,
                      }),
                      ref: a,
                      children: [
                        V,
                        (0, t.jsx)(c.TextInput, {
                          "aria-label":
                            T.Z.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                              answerNumber: E + 1,
                            }),
                          placeholder:
                            T.Z.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                          value: d.text,
                          className: N.defaultTextInput,
                          inputClassName: N.defaultTextInput,
                          onChange: (e) =>
                            x({
                              text: e,
                              index: E,
                              localCreationAnswerId: d.localCreationAnswerId,
                            }),
                          onKeyDown: K,
                          maxLength: p.WA,
                          "aria-invalid": W,
                          "aria-describedby": W ? B : U,
                          focusProps: P,
                          inputRef: Z,
                        }),
                        (0, t.jsx)(M, { value: d.text, id: U }),
                      ],
                    }),
                    v &&
                      (0, t.jsx)(c.Clickable, {
                        onClick: () => j(E),
                        className: N.removeAnswerButtonDefault,
                        "aria-label":
                          T.Z.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                            answerNumber: E + 1,
                          }),
                        ref: y,
                        children: (0, t.jsx)(c.TrashIcon, {
                          size: "md",
                          color: "currentColor",
                          className: N.trashIcon,
                          "aria-hidden": !0,
                        }),
                      }),
                    W &&
                      (0, t.jsx)(c.Text, {
                        id: B,
                        variant: "text-xs/medium",
                        color: "text-danger",
                        className: N.__invalid_errorText,
                        children: k,
                      }),
                  ],
                })
              : (0, t.jsxs)("div", {
                  className: N.imageOnlyContainer,
                  ref: a,
                  children: [
                    (0, t.jsxs)("div", {
                      className: N.imagePreviewContainer,
                      children: [
                        V,
                        J &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(c.Text, {
                                variant: "text-xs/semibold",
                                className: N.altBadge,
                                "aria-hidden": !0,
                                children: T.Z.Messages.IMAGE_ALT,
                              }),
                              (0, t.jsxs)("div", {
                                onClick: G,
                                children: [
                                  (0, t.jsx)(c.HiddenVisually, {
                                    children:
                                      T.Z.Messages
                                        .CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT,
                                  }),
                                  (0, t.jsx)(c.Text, {
                                    variant: "text-xxs/medium",
                                    className: N.altTextPreview,
                                    children: H.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: N.imageOnlyAnswerActionBar,
                      children: [
                        null != H
                          ? (0, t.jsx)(_.Z, {
                              tooltip:
                                T.Z.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                              "aria-label": J
                                ? T.Z.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format(
                                    { answerNumber: E + 1 },
                                  )
                                : T.Z.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format(
                                    { answerNumber: E + 1 },
                                  ),
                              onClick: G,
                              children: (0, t.jsx)(I.N, { "aria-hidden": !0 }),
                            })
                          : null,
                        (0, t.jsx)(_.Z, {
                          tooltip: T.Z.Messages.CREATE_POLL_REMOVE_ANSWER,
                          "aria-label":
                            T.Z.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                              answerNumber: E + 1,
                            }),
                          onClick: () => j(E),
                          dangerous: !0,
                          children: (0, t.jsx)(c.TrashIcon, {
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
    611611: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return P;
          },
        }),
        n(47120);
      var t = n(735250),
        r = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(525769),
        i = n(263568),
        c = n(481060),
        u = n(213609),
        d = n(313201),
        _ = n(542383),
        m = n(79390),
        E = n(728076),
        A = n(2466),
        f = n(485168),
        C = n(309081),
        L = n(185306),
        h = n(240521),
        R = n(489887),
        I = n(20281),
        x = n(689938),
        p = n(354202);
      let O = (0, d.hQ)(),
        g = (0, d.hQ)();
      function T(e) {
        let { question: a, onChange: n, error: l, inputRef: o } = e,
          [i, u] = r.useState(!1);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(c.FormTitle, {
              tag: c.FormTitleTags.LABEL,
              htmlFor: g,
              children: x.Z.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
            }),
            (0, t.jsx)(c.TextArea, {
              inputRef: o,
              id: g,
              placeholder: x.Z.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
              value: a,
              className: s()(p.questionInput, { [p.hasError]: null != l }),
              onChange: n,
              maxLength: R.Az,
              error: l,
              onFocus: () => u(!0),
              onBlur: () => u(!1),
              showCharacterCount: i,
              showCharacterCountFullPadding: !0,
              showRemainingCharacterCount: i,
              rows: 1,
              autosize: !0,
              autoFocus: !0,
            }),
          ],
        });
      }
      function N(e) {
        let { selectedDuration: a, onSelect: n } = e,
          r = (0, A.Z)(),
          l = r[a];
        return (0, t.jsxs)("div", {
          className: p.duration,
          children: [
            (0, t.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "header-secondary",
              tag: "label",
              "aria-hidden": !0,
              children: x.Z.Messages.CREATE_POLL_DURATION_LABEL,
            }),
            (0, t.jsx)(c.Select, {
              "aria-label":
                x.Z.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
                  duration: l,
                }),
              className: p.durationSelect,
              options: Object.entries(r).map((e) => {
                let [a, n] = e;
                return { label: n, value: parseInt(a) };
              }),
              isSelected: (e) => e === a,
              select: n,
              serialize: (e) => "".concat(e),
              renderOptionLabel: (e) =>
                (0, t.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  children: e.label,
                }),
              popoutPosition: "top",
            }),
          ],
        });
      }
      function P(e) {
        let { channel: a, transitionState: n, onClose: l } = e,
          d = (0, m._N)();
        (0, u.Z)({ type: I.n.MODAL, name: o.z.POLL_EDITOR_VIEWED });
        let A = r.useRef(null),
          g = r.useRef([]),
          v = r.useRef([]),
          j = r.useRef(null),
          D = r.useRef([]),
          M = r.useCallback((e) => {
            var a, n, t, r;
            let { indexToRemove: l, numberOfAnswers: s } = e;
            s === R.gY + 1
              ? null === (n = j.current) ||
                void 0 === n ||
                null === (a = n.ref) ||
                void 0 === a ||
                a.focus()
              : null === (r = D.current[l === s - 1 ? l - 1 : l + 1]) ||
                void 0 === r ||
                null === (t = r.ref) ||
                void 0 === t ||
                t.focus();
          }, []),
          {
            answers: w,
            question: S,
            selectedLayoutType: b,
            setSelectedLayoutType: k,
            allowMultiSelect: Z,
            setAllowMultiSelect: y,
            duration: B,
            setDuration: U,
            handleQuestionChange: W,
            handleAnswerTextChange: H,
            handleEmojiSelect: Y,
            canAddMoreAnswers: F,
            handleRemoveAnswerImage: G,
            canRemoveMoreAnswers: z,
            handleAddAnswer: K,
            handleRemoveAnswer: V,
            createPollError: J,
            handleSubmitPoll: q,
            fieldErrors: Q,
            submitting: X,
            shouldFocusOnInvalidField: $,
            setShouldFocusOnInvalidField: ee,
          } = (0, E.Z)(a, l, M),
          { trackPollCreationCancelled: ea } = (0, f.l)(w, Z, b),
          en = r.useRef(w.length),
          et = b === i.C.DEFAULT,
          er = r.useCallback(() => {
            ea(), l();
          }, [l, ea]),
          el = r.useCallback(() => {
            if ((0, m.D$)(S, w, b)) er();
            else {
              (0, h.Z)({
                title: x.Z.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                body: x.Z.Messages
                  .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                cta: x.Z.Messages
                  .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                closeLabel:
                  x.Z.Messages
                    .CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                onConfirm: () => {
                  er();
                },
              });
              return;
            }
          }, [er, w, S, b]);
        r.useEffect(() => {
          (0, c.updateModal)(
            R.$z,
            (e) => (0, t.jsx)(P, { ...e, channel: a }),
            el,
          );
        }, [el, a]),
          r.useEffect(() => {
            if (w.length > en.current) {
              var e;
              null === (e = v.current[w.length - 1]) ||
                void 0 === e ||
                e.focus();
            }
            en.current = w.length;
          }, [w.length]),
          r.useEffect(() => {
            if ($) {
              var e, a;
              if ((null == Q ? void 0 : Q.question) != null)
                null === (e = A.current) || void 0 === e || e.focus();
              else {
                let e = w.findIndex(
                  (e) => Q["answer-".concat(e.localCreationAnswerId)],
                );
                -1 !== e &&
                  (null === (a = v.current[e]) || void 0 === a || a.focus());
              }
              ee(!1);
            }
          }, [Q, w, $, ee, v, g]);
        let es = (0, _.Z)({ disabled: X, onSubmit: q });
        return (0, t.jsxs)(c.ModalRoot, {
          size: c.ModalSize.MEDIUM,
          className: p.container,
          transitionState: n,
          "aria-labelledby": O,
          children: [
            (0, t.jsxs)(c.ModalHeader, {
              className: p.header,
              separator: !1,
              children: [
                (0, t.jsx)(c.Heading, {
                  color: "interactive-normal",
                  variant: "text-lg/semibold",
                  className: p.headerText,
                  id: O,
                  children: x.Z.Messages.CREATE_POLL_HEADING,
                }),
                (0, t.jsx)(c.ModalCloseButton, { onClick: el }),
              ],
            }),
            (0, t.jsxs)(c.ModalContent, {
              className: p.content,
              onKeyDown: es,
              children: [
                null != J &&
                  (0, t.jsx)(c.FormErrorBlock, {
                    className: p.apiErrorBlock,
                    children: J.getAnyErrorMessage(),
                  }),
                (0, t.jsx)(T, {
                  question: S,
                  onChange: W,
                  error: null == Q ? void 0 : Q.question,
                  inputRef: A,
                }),
                d &&
                  (0, t.jsx)(L.Z, {
                    selectedLayoutType: b,
                    onSelectedLayoutType: k,
                  }),
                (0, t.jsx)(c.Spacer, { size: 26 }),
                (0, t.jsxs)("fieldset", {
                  className: s()(
                    p.answerInputsContainer,
                    et ? p.defaultContainer : p.imageOnlyContainer,
                  ),
                  children: [
                    (0, t.jsx)(c.FormTitle, {
                      tag: c.FormTitleTags.LEGEND,
                      children: x.Z.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL,
                    }),
                    w.map((e, n) =>
                      (0, t.jsx)(
                        C.Z,
                        {
                          answer: e,
                          channelId: a.id,
                          index: n,
                          isLastAnswer: n === w.length - 1,
                          onEmojiSelect: Y,
                          onEmojiRemove: G,
                          layout: b,
                          onAnswerTextChange: H,
                          onRemoveAnswer: V,
                          addAnswer: K,
                          submitPoll: q,
                          answerTextInputRefs: v,
                          error:
                            null == Q
                              ? void 0
                              : Q["answer-".concat(e.localCreationAnswerId)],
                          canRemoveAnswer: z,
                          ref: (e) => (g.current[n] = e),
                          inputRef: (e) => (v.current[n] = e),
                          deleteButtonRef: (e) => (D.current[n] = e),
                        },
                        e.localCreationAnswerId,
                      ),
                    ),
                    F &&
                      (0, t.jsxs)(c.Clickable, {
                        className: s()(
                          et
                            ? p.addAnswerButtonDefault
                            : p.addAnswerButtonImageOnly,
                          { [p.canRemoveMoreAnswers]: z },
                        ),
                        onClick: F ? K : void 0,
                        "aria-label":
                          x.Z.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                        ref: j,
                        children: [
                          (0, t.jsx)(c.PlusSmallIcon, {
                            size: "md",
                            color: "currentColor",
                            className: et
                              ? p.addAnswerIconDefault
                              : p.addAnswerIconImageOnly,
                          }),
                          et &&
                            (0, t.jsx)(c.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              className: p.addAnswerButtonLabel,
                              children:
                                x.Z.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                            }),
                        ],
                      }),
                  ],
                }),
                (0, t.jsx)(c.Spacer, { size: 18 }),
                (0, t.jsx)(N, { selectedDuration: B, onSelect: U }),
              ],
            }),
            (0, t.jsxs)(c.ModalFooter, {
              className: p.footer,
              children: [
                (0, t.jsx)(c.Checkbox, {
                  className: p.checkbox,
                  type: c.Checkbox.Types.INVERTED,
                  size: 24,
                  value: Z,
                  checkboxColor: (0, c.useToken)(
                    c.tokens.colors.INTERACTIVE_NORMAL,
                  ).hex(),
                  onChange: (e, a) => y(a),
                  children: (0, t.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "interactive-active",
                    children: x.Z.Messages.CREATE_POLL_MULTIPLE_ANSWERS,
                  }),
                }),
                (0, t.jsx)(c.Button, {
                  look: c.ButtonLooks.FILLED,
                  size: c.Button.Sizes.MEDIUM,
                  className: p.postButton,
                  onClick: q,
                  submitting: X,
                  children: (0, t.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    className: p.postButtonText,
                    children: x.Z.Messages.CREATE_POLL_POST,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    185306: function (e, a, n) {
      var t = n(735250),
        r = n(470079),
        l = n(120356),
        s = n.n(l),
        o = n(263568),
        i = n(481060),
        c = n(689938),
        u = n(104295);
      function d(e) {
        let { label: a, isSelected: n, onClick: r, children: l } = e,
          o = (0, i.useRadioItem)({ isSelected: n, label: a });
        return (0, t.jsx)(i.Clickable, {
          ...o,
          onClick: r,
          className: s()(u.option, n && u.optionSelected),
          children: l,
        });
      }
      a.Z = function (e) {
        let { selectedLayoutType: a, onSelectedLayoutType: n } = e,
          l = (0, i.useRadioGroup)({ orientation: "horizontal" }),
          s = r.useMemo(
            () => [
              {
                name: o.C.DEFAULT,
                label: c.Z.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                icon: i.ListBulletsIcon,
              },
              {
                name: o.C.IMAGE_ONLY_ANSWERS,
                label: c.Z.Messages.CREATE_POLL_LAYOUT_IMAGE,
                icon: i.ImageIcon,
              },
            ],
            [],
          ),
          _ = (e) => {
            n(e);
          };
        return (0, t.jsx)("div", {
          className: u.container,
          "aria-label": c.Z.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
          ...l,
          children: s.map((e) => {
            let n = e.icon;
            return (0, t.jsx)(
              d,
              {
                label: e.label,
                isSelected: e.name === a,
                onClick: () => _(e.name),
                children: (0, t.jsx)(n, { className: u.icon }),
              },
              e.name,
            );
          }),
        });
      };
    },
    885001: function (e, a, n) {
      n.d(a, {
        N: function () {
          return s;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(692547),
        l = n(325767);
      let s = (e) => {
        let {
          width: a = 24,
          height: n = 24,
          color: s = r.Z.colors.INTERACTIVE_NORMAL,
          ...o
        } = e;
        return (0, t.jsxs)("svg", {
          ...(0, l.Z)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: a,
          height: n,
          viewBox: "0 0 24 24",
          fill: "string" == typeof s ? s : s.css,
          children: [
            (0, t.jsxs)("g", {
              "clip-path": "url(#clip0_1_16)",
              children: [
                (0, t.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H12.2763C12.4842 22 12.6704 21.8714 12.744 21.6769L13.5005 19.6769C13.6242 19.3498 13.3825 19 13.0328 19H5.81047C5.18159 19 4.83196 18.2726 5.22482 17.7815L7.0787 15.4641C7.67918 14.7135 8.82082 14.7135 9.4213 15.4641L9.92742 16.0968L12.15 13.1333C12.95 12.0667 14.55 12.0667 15.35 13.1333L15.7659 13.6879L15.9155 13.2924C16.2097 12.5146 16.9545 12 17.7861 12H20.1143C20.6827 12 21.2003 12.2434 21.57 12.6395C21.6838 12.7614 22 12.6785 22 12.5118V5C22 3.34315 20.6569 2 19 2H5ZM8.64943 5.07947C9.32431 4.42611 10.4329 5.06617 10.2045 5.97731C10.082 6.46608 10.3694 6.96388 10.854 7.10216C11.7572 7.35994 11.7572 8.64005 10.854 8.89784C10.3694 9.03612 10.082 9.53392 10.2045 10.0227C10.4329 10.9338 9.32431 11.5739 8.64943 10.9205C8.28741 10.57 7.71259 10.57 7.35057 10.9205C6.67569 11.5739 5.56708 10.9338 5.79547 10.0227C5.91798 9.53392 5.63058 9.03612 5.14603 8.89784C4.24276 8.64006 4.24276 7.35994 5.14603 7.10216C5.63058 6.96388 5.91798 6.46608 5.79547 5.97731C5.56708 5.06617 6.67569 4.42611 7.35057 5.07947C7.71259 5.42996 8.28741 5.42996 8.64943 5.07947Z",
                }),
                (0, t.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M21.613 24.04H23.912L20.1143 14H17.7861L13.9884 24.04H16.2874L16.9422 22.1193H20.9582L21.613 24.04ZM17.6115 20.1986L18.9502 16.2845L20.2889 20.1986H17.6115Z",
                }),
              ],
            }),
            (0, t.jsx)("defs", {
              children: (0, t.jsx)("clipPath", {
                id: "clip0_1_16",
                children: (0, t.jsx)("rect", { width: "24", height: "24" }),
              }),
            }),
          ],
        });
      };
    },
    240521: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(952265);
      function l(e) {
        (0, r.ZD)(async () => {
          let { default: a } = await n.e("38795").then(n.bind(n, 118922));
          return (n) => (0, t.jsx)(a, { ...e, ...n });
        });
      }
    },
    35463: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return i;
        },
      }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var t = n(470079),
        r = n(442837),
        l = n(703558),
        s = n(117530),
        o = n(524100);
      function i(e) {
        var a, n;
        let { channelId: i, localCreationAnswerId: c, image: u } = e,
          d = null == u ? void 0 : u.emoji,
          _ =
            (null == u
              ? void 0
              : null === (a = u.mediaAttachmentState) || void 0 === a
                ? void 0
                : a.status) === o._.PREPARING,
          m = (0, r.e7)([s.Z], () => s.Z.getUpload(i, c, l.d.Poll)),
          [E, A] = t.useState(),
          [f, C] = t.useState("");
        return (
          t.useEffect(() => {
            var e;
            if (
              (null == m
                ? void 0
                : null === (e = m.item) || void 0 === e
                  ? void 0
                  : e.file) == null
            )
              return;
            let a = URL.createObjectURL(m.item.file);
            return (
              A(a),
              C(m.item.file.name),
              () => {
                URL.revokeObjectURL(a);
              }
            );
          }, [
            null == m
              ? void 0
              : null === (n = m.item) || void 0 === n
                ? void 0
                : n.file,
          ]),
          {
            emoji: d,
            isLoadingMedia: _,
            hasUpload: null != m,
            upload: m,
            mediaUrl: E,
            mediaFilename: f,
          }
        );
      }
    },
    530319: function (e, a, n) {
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
    354202: function (e, a, n) {
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
    104295: function (e, a, n) {
      e.exports = {
        container: "container_a56665",
        option: "option_a56665",
        optionSelected: "optionSelected_a56665",
        icon: "icon_a56665",
      };
    },
  },
]);
//# sourceMappingURL=c39773e0f7ffea073f21.js.map
