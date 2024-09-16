(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31045"],
  {
    954289: function (t, e, r) {
      "use strict";
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              }),
            )),
            n.forEach(function (e) {
              (function (t, e, r) {
                e in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r);
              })(t, e, r[e]);
            });
        }
        return t;
      }
      var i = r(73009),
        o = r(837512),
        a = r(213912),
        u = r(546870),
        s = r(310176),
        c = r(379846),
        l = r(680643),
        f = r(316103),
        p = r(65183),
        h = r(499373),
        d = f("draft_tree_data_support"),
        g = d ? u : a,
        y = p.List,
        v = p.Repeat;
      t.exports = {
        insertAtomicBlock: function (t, e, r) {
          var a = t.getCurrentContent(),
            u = t.getSelection(),
            f = s.removeRange(a, u, "backward"),
            p = f.getSelectionAfter(),
            h = s.splitBlock(f, p),
            m = h.getSelectionAfter(),
            _ = s.setBlockType(h, m, "atomic"),
            b = o.create({ entity: e }),
            S = {
              key: l(),
              type: "atomic",
              text: r,
              characterList: y(v(b, r.length)),
            },
            w = { key: l(), type: "unstyled" };
          d &&
            ((S = n({}, S, { nextSibling: w.key })),
            (w = n({}, w, { prevSibling: S.key })));
          var k = [new g(S), new g(w)],
            x = i.createFromArray(k),
            C = s.replaceWithFragment(_, m, x),
            E = C.merge({
              selectionBefore: u,
              selectionAfter: C.getSelectionAfter().set("hasFocus", !0),
            });
          return c.push(t, E, "insert-fragment");
        },
        moveAtomicBlock: function (t, e, r, n) {
          var i,
            o = t.getCurrentContent(),
            a = t.getSelection();
          if ("before" === n || "after" === n) {
            var u = o.getBlockForKey(
              "before" === n ? r.getStartKey() : r.getEndKey(),
            );
            i = h(o, e, u, n);
          } else {
            var l = s.removeRange(o, r, "backward"),
              f = l.getSelectionAfter(),
              p = l.getBlockForKey(f.getFocusKey());
            if (0 === f.getStartOffset()) i = h(l, e, p, "before");
            else if (f.getEndOffset() === p.getLength())
              i = h(l, e, p, "after");
            else {
              var d = s.splitBlock(l, f),
                g = d.getSelectionAfter(),
                y = d.getBlockForKey(g.getFocusKey());
              i = h(d, e, y, "before");
            }
          }
          var v = i.merge({
            selectionBefore: a,
            selectionAfter: i.getSelectionAfter().set("hasFocus", !0),
          });
          return c.push(t, v, "move-block");
        },
      };
    },
    73009: function (t, e, r) {
      "use strict";
      var n = r(65183).OrderedMap;
      t.exports = {
        createFromArray: function (t) {
          return n(
            t.map(function (t) {
              return [t.getKey(), t];
            }),
          );
        },
      };
    },
    736302: function (t, e, r) {
      "use strict";
      var n = r(531463),
        i = r(65183),
        o = i.List,
        a = i.Repeat,
        u = i.Record,
        s = function () {
          return !0;
        },
        c = u({ start: null, end: null }),
        l = u({ start: null, end: null, decoratorKey: null, leaves: null });
      function f(t, e) {
        return t === e;
      }
      t.exports = {
        generate: function (t, e, r) {
          var i = e.getLength();
          if (!i)
            return o.of(
              new l({
                start: 0,
                end: 0,
                decoratorKey: null,
                leaves: o.of(new c({ start: 0, end: 0 })),
              }),
            );
          var u = [],
            p = r ? r.getDecorations(e, t) : o(a(null, i)),
            h = e.getCharacterList();
          return (
            n(p, f, s, function (t, e) {
              u.push(
                new l({
                  start: t,
                  end: e,
                  decoratorKey: p.get(t),
                  leaves: (function (t, e) {
                    var r = [];
                    return (
                      n(
                        t
                          .map(function (t) {
                            return t.getStyle();
                          })
                          .toList(),
                        f,
                        s,
                        function (t, n) {
                          r.push(new c({ start: t + e, end: n + e }));
                        },
                      ),
                      o(r)
                    );
                  })(h.slice(t, e).toList(), t),
                }),
              );
            }),
            o(u)
          );
        },
      };
    },
    837512: function (t, e, r) {
      "use strict";
      var n = r(65183),
        i = n.Map,
        o = n.OrderedSet,
        a = n.Record,
        u = o(),
        s = { style: u, entity: null },
        c = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          (r = e),
            (n = t),
            (r.prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n);
          var r,
            n,
            o = e.prototype;
          return (
            (o.getStyle = function () {
              return this.get("style");
            }),
            (o.getEntity = function () {
              return this.get("entity");
            }),
            (o.hasStyle = function (t) {
              return this.getStyle().includes(t);
            }),
            (e.applyStyle = function (t, r) {
              var n = t.set("style", t.getStyle().add(r));
              return e.create(n);
            }),
            (e.removeStyle = function (t, r) {
              var n = t.set("style", t.getStyle().remove(r));
              return e.create(n);
            }),
            (e.applyEntity = function (t, r) {
              var n = t.getEntity() === r ? t : t.set("entity", r);
              return e.create(n);
            }),
            (e.create = function (t) {
              if (!t) return l;
              var r = i({ style: u, entity: null }).merge(t),
                n = f.get(r);
              if (n) return n;
              var o = new e(r);
              return (f = f.set(r, o)), o;
            }),
            e
          );
        })(a(s)),
        l = new c(),
        f = i([[i(s), l]]);
      (c.EMPTY = l), (t.exports = c);
    },
    61343: function (t, e, r) {
      "use strict";
      var n = r(65183).List,
        i = (function () {
          function t(t) {
            var e, r, n;
            (e = this),
              (n = void 0),
              (r = "_decorators") in e
                ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[r] = n),
              (this._decorators = t.slice());
          }
          var e = t.prototype;
          return (
            (e.getDecorations = function (t, e) {
              var r = Array(t.getText().length).fill(null);
              return (
                this._decorators.forEach(function (n, i) {
                  var o = 0,
                    a = n.strategy;
                  a(
                    t,
                    function (t, e) {
                      (function (t, e, r) {
                        for (var n = e; n < r; n++) if (null != t[n]) return !1;
                        return !0;
                      })(r, t, e) &&
                        ((function (t, e, r, n) {
                          for (var i = e; i < r; i++) t[i] = n;
                        })(r, t, e, i + "." + o),
                        o++);
                    },
                    e,
                  );
                }),
                n(r)
              );
            }),
            (e.getComponentForKey = function (t) {
              var e = parseInt(t.split(".")[0], 10);
              return this._decorators[e].component;
            }),
            (e.getPropsForKey = function (t) {
              var e = parseInt(t.split(".")[0], 10);
              return this._decorators[e].props;
            }),
            t
          );
        })();
      t.exports = i;
    },
    213912: function (t, e, r) {
      "use strict";
      var n = r(837512),
        i = r(531463),
        o = r(65183),
        a = o.List,
        u = o.Map,
        s = o.OrderedSet,
        c = o.Record,
        l = o.Repeat,
        f = s(),
        p = c({
          key: "",
          type: "unstyled",
          text: "",
          characterList: a(),
          depth: 0,
          data: u(),
        }),
        h = function (t) {
          if (!t) return t;
          var e = t.characterList,
            r = t.text;
          return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t;
        },
        d = (function (t) {
          function e(e) {
            return t.call(this, h(e)) || this;
          }
          (r = e),
            (n = t),
            (r.prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n);
          var r,
            n,
            o = e.prototype;
          return (
            (o.getKey = function () {
              return this.get("key");
            }),
            (o.getType = function () {
              return this.get("type");
            }),
            (o.getText = function () {
              return this.get("text");
            }),
            (o.getCharacterList = function () {
              return this.get("characterList");
            }),
            (o.getLength = function () {
              return this.getText().length;
            }),
            (o.getDepth = function () {
              return this.get("depth");
            }),
            (o.getData = function () {
              return this.get("data");
            }),
            (o.getInlineStyleAt = function (t) {
              var e = this.getCharacterList().get(t);
              return e ? e.getStyle() : f;
            }),
            (o.getEntityAt = function (t) {
              var e = this.getCharacterList().get(t);
              return e ? e.getEntity() : null;
            }),
            (o.findStyleRanges = function (t, e) {
              i(this.getCharacterList(), g, t, e);
            }),
            (o.findEntityRanges = function (t, e) {
              i(this.getCharacterList(), y, t, e);
            }),
            e
          );
        })(p);
      function g(t, e) {
        return t.getStyle() === e.getStyle();
      }
      function y(t, e) {
        return t.getEntity() === e.getEntity();
      }
      t.exports = d;
    },
    546870: function (t, e, r) {
      "use strict";
      var n = r(837512),
        i = r(531463),
        o = r(65183),
        a = o.List,
        u = o.Map,
        s = o.OrderedSet,
        c = o.Record,
        l = o.Repeat,
        f = s(),
        p = {
          parent: null,
          characterList: a(),
          data: u(),
          depth: 0,
          key: "",
          text: "",
          type: "unstyled",
          children: a(),
          prevSibling: null,
          nextSibling: null,
        },
        h = function (t, e) {
          return t.getStyle() === e.getStyle();
        },
        d = function (t, e) {
          return t.getEntity() === e.getEntity();
        },
        g = function (t) {
          if (!t) return t;
          var e = t.characterList,
            r = t.text;
          return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t;
        },
        y = (function (t) {
          function e() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : p;
            return t.call(this, g(e)) || this;
          }
          (r = e),
            (n = t),
            (r.prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n);
          var r,
            n,
            o = e.prototype;
          return (
            (o.getKey = function () {
              return this.get("key");
            }),
            (o.getType = function () {
              return this.get("type");
            }),
            (o.getText = function () {
              return this.get("text");
            }),
            (o.getCharacterList = function () {
              return this.get("characterList");
            }),
            (o.getLength = function () {
              return this.getText().length;
            }),
            (o.getDepth = function () {
              return this.get("depth");
            }),
            (o.getData = function () {
              return this.get("data");
            }),
            (o.getInlineStyleAt = function (t) {
              var e = this.getCharacterList().get(t);
              return e ? e.getStyle() : f;
            }),
            (o.getEntityAt = function (t) {
              var e = this.getCharacterList().get(t);
              return e ? e.getEntity() : null;
            }),
            (o.getChildKeys = function () {
              return this.get("children");
            }),
            (o.getParentKey = function () {
              return this.get("parent");
            }),
            (o.getPrevSiblingKey = function () {
              return this.get("prevSibling");
            }),
            (o.getNextSiblingKey = function () {
              return this.get("nextSibling");
            }),
            (o.findStyleRanges = function (t, e) {
              i(this.getCharacterList(), h, t, e);
            }),
            (o.findEntityRanges = function (t, e) {
              i(this.getCharacterList(), d, t, e);
            }),
            e
          );
        })(c(p));
      t.exports = y;
    },
    770209: function (t, e, r) {
      "use strict";
      var n = r(73009),
        i = r(837512),
        o = r(213912),
        a = r(546870),
        u = r(49287),
        s = r(114080),
        c = r(680643),
        l = r(316103),
        f = r(65183),
        p = r(856520),
        h = f.List,
        d = f.Record,
        g = f.Repeat,
        y = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          (r = e),
            (f = t),
            (r.prototype = Object.create(f.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = f);
          var r,
            f,
            d = e.prototype;
          return (
            (d.getEntityMap = function () {
              return u;
            }),
            (d.getBlockMap = function () {
              return this.get("blockMap");
            }),
            (d.getSelectionBefore = function () {
              return this.get("selectionBefore");
            }),
            (d.getSelectionAfter = function () {
              return this.get("selectionAfter");
            }),
            (d.getBlockForKey = function (t) {
              return this.getBlockMap().get(t);
            }),
            (d.getKeyBefore = function (t) {
              return this.getBlockMap()
                .reverse()
                .keySeq()
                .skipUntil(function (e) {
                  return e === t;
                })
                .skip(1)
                .first();
            }),
            (d.getKeyAfter = function (t) {
              return this.getBlockMap()
                .keySeq()
                .skipUntil(function (e) {
                  return e === t;
                })
                .skip(1)
                .first();
            }),
            (d.getBlockAfter = function (t) {
              return this.getBlockMap()
                .skipUntil(function (e, r) {
                  return r === t;
                })
                .skip(1)
                .first();
            }),
            (d.getBlockBefore = function (t) {
              return this.getBlockMap()
                .reverse()
                .skipUntil(function (e, r) {
                  return r === t;
                })
                .skip(1)
                .first();
            }),
            (d.getBlocksAsArray = function () {
              return this.getBlockMap().toArray();
            }),
            (d.getFirstBlock = function () {
              return this.getBlockMap().first();
            }),
            (d.getLastBlock = function () {
              return this.getBlockMap().last();
            }),
            (d.getPlainText = function (t) {
              return this.getBlockMap()
                .map(function (t) {
                  return t ? t.getText() : "";
                })
                .join(t || "\n");
            }),
            (d.getLastCreatedEntityKey = function () {
              return u.__getLastCreatedEntityKey();
            }),
            (d.hasText = function () {
              var t = this.getBlockMap();
              return (
                t.size > 1 ||
                escape(t.first().getText()).replace(/%u200B/g, "").length > 0
              );
            }),
            (d.createEntity = function (t, e, r) {
              return u.__create(t, e, r), this;
            }),
            (d.mergeEntityData = function (t, e) {
              return u.__mergeData(t, e), this;
            }),
            (d.replaceEntityData = function (t, e) {
              return u.__replaceData(t, e), this;
            }),
            (d.addEntity = function (t) {
              return u.__add(t), this;
            }),
            (d.getEntity = function (t) {
              return u.__get(t);
            }),
            (e.createFromBlockArray = function (t, r) {
              var i = Array.isArray(t) ? t : t.contentBlocks,
                o = n.createFromArray(i),
                a = o.isEmpty() ? new s() : s.createEmpty(o.first().getKey());
              return new e({
                blockMap: o,
                entityMap: r || u,
                selectionBefore: a,
                selectionAfter: a,
              });
            }),
            (e.createFromText = function (t) {
              var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : /\r\n?|\n/g,
                n = t.split(r).map(function (t) {
                  return (
                    (t = p(t)),
                    new (l("draft_tree_data_support") ? a : o)({
                      key: c(),
                      text: t,
                      type: "unstyled",
                      characterList: h(g(i.EMPTY, t.length)),
                    })
                  );
                });
              return e.createFromBlockArray(n);
            }),
            e
          );
        })(
          d({
            entityMap: null,
            blockMap: null,
            selectionBefore: null,
            selectionAfter: null,
          }),
        );
      t.exports = y;
    },
    963107: function (t, e, r) {
      "use strict";
      var n = r(837512),
        i = r(65183).Map;
      function o(t, e, r, o) {
        var a = t.getBlockMap(),
          u = e.getStartKey(),
          s = e.getStartOffset(),
          c = e.getEndKey(),
          l = e.getEndOffset(),
          f = a
            .skipUntil(function (t, e) {
              return e === u;
            })
            .takeUntil(function (t, e) {
              return e === c;
            })
            .concat(i([[c, a.get(c)]]))
            .map(function (t, e) {
              u === c
                ? ((i = s), (a = l))
                : ((i = e === u ? s : 0), (a = e === c ? l : t.getLength()));
              for (var i, a, f, p = t.getCharacterList(); i < a; )
                (f = p.get(i)),
                  (p = p.set(i, o ? n.applyStyle(f, r) : n.removeStyle(f, r))),
                  i++;
              return t.set("characterList", p);
            });
        return t.merge({
          blockMap: a.merge(f),
          selectionBefore: e,
          selectionAfter: e,
        });
      }
      t.exports = {
        add: function (t, e, r) {
          return o(t, e, r, !0);
        },
        remove: function (t, e, r) {
          return o(t, e, r, !1);
        },
      };
    },
    851952: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r(118658),
        o = r(100066),
        a = r(519827),
        u = r(65183),
        s = r(581079),
        c = r(467159),
        l = u.Map,
        f = {
          subtree: !0,
          characterData: !0,
          childList: !0,
          characterDataOldValue: !1,
          attributes: !1,
        },
        p = i.isBrowser("IE <= 11"),
        h = (function () {
          function t(t) {
            var e = this;
            n(this, "observer", void 0),
              n(this, "container", void 0),
              n(this, "mutations", void 0),
              n(this, "onCharData", void 0),
              (this.container = t),
              (this.mutations = l());
            var r = a(t);
            r.MutationObserver && !p
              ? (this.observer = new r.MutationObserver(function (t) {
                  return e.registerMutations(t);
                }))
              : (this.onCharData = function (t) {
                  t.target instanceof Node || s(!1),
                    e.registerMutation({
                      type: "characterData",
                      target: t.target,
                    });
                });
          }
          var e = t.prototype;
          return (
            (e.start = function () {
              this.observer
                ? this.observer.observe(this.container, f)
                : this.container.addEventListener(
                    "DOMCharacterDataModified",
                    this.onCharData,
                  );
            }),
            (e.stopAndFlushMutations = function () {
              var t = this.observer;
              t
                ? (this.registerMutations(t.takeRecords()), t.disconnect())
                : this.container.removeEventListener(
                    "DOMCharacterDataModified",
                    this.onCharData,
                  );
              var e = this.mutations;
              return (this.mutations = l()), e;
            }),
            (e.registerMutations = function (t) {
              for (var e = 0; e < t.length; e++) this.registerMutation(t[e]);
            }),
            (e.getMutationTextContent = function (t) {
              var e = t.type,
                r = t.target,
                n = t.removedNodes;
              if ("characterData" === e) {
                if ("" !== r.textContent)
                  return p ? r.textContent.replace("\n", "") : r.textContent;
              } else if ("childList" === e) {
                if (n && n.length) return "";
                if ("" !== r.textContent) return r.textContent;
              }
              return null;
            }),
            (e.registerMutation = function (t) {
              var e = this.getMutationTextContent(t);
              if (null != e) {
                var r = c(o(t.target));
                this.mutations = this.mutations.set(r, e);
              }
            }),
            t
          );
        })();
      t.exports = h;
    },
    660793: function (t, e, r) {
      "use strict";
      var n = r(470079),
        i = r(606166),
        o = (0, r(65183).Map)({
          "header-one": { element: "h1" },
          "header-two": { element: "h2" },
          "header-three": { element: "h3" },
          "header-four": { element: "h4" },
          "header-five": { element: "h5" },
          "header-six": { element: "h6" },
          section: { element: "section" },
          article: { element: "article" },
          "unordered-list-item": {
            element: "li",
            wrapper: n.createElement("ul", {
              className: i("public/DraftStyleDefault/ul"),
            }),
          },
          "ordered-list-item": {
            element: "li",
            wrapper: n.createElement("ol", {
              className: i("public/DraftStyleDefault/ol"),
            }),
          },
          blockquote: { element: "blockquote" },
          atomic: { element: "figure" },
          "code-block": {
            element: "pre",
            wrapper: n.createElement("pre", {
              className: i("public/DraftStyleDefault/pre"),
            }),
          },
          unstyled: { element: "div", aliasedElements: ["p"] },
        });
      t.exports = o;
    },
    673004: function (t) {
      "use strict";
      t.exports = {
        BOLD: { fontWeight: "bold" },
        CODE: { fontFamily: "monospace", wordWrap: "break-word" },
        ITALIC: { fontStyle: "italic" },
        STRIKETHROUGH: { textDecoration: "line-through" },
        UNDERLINE: { textDecoration: "underline" },
      };
    },
    371917: function (t, e, r) {
      "use strict";
      var n = r(954289),
        i = r(73009),
        o = r(837512),
        a = r(61343),
        u = r(213912),
        s = r(770209),
        c = r(660793),
        l = r(673004),
        f = r(253060),
        p = r(80182),
        h = r(49287),
        d = r(310176),
        g = r(119596),
        y = r(379846),
        v = r(680444),
        m = r(253301),
        _ = r(639256),
        b = r(114080),
        S = r(751678),
        w = r(227797),
        k = r(680643),
        x = r(421520),
        C = r(180936),
        E = r(425042);
      t.exports = {
        Editor: f,
        EditorBlock: p,
        EditorState: y,
        CompositeDecorator: a,
        Entity: h,
        EntityInstance: g,
        BlockMapBuilder: i,
        CharacterMetadata: o,
        ContentBlock: u,
        ContentState: s,
        RawDraftContentState: m,
        SelectionState: b,
        AtomicBlockUtils: n,
        KeyBindingUtil: v,
        Modifier: d,
        RichUtils: _,
        DefaultDraftBlockRenderMap: c,
        DefaultDraftInlineStyle: l,
        convertFromHTML: E,
        convertFromRaw: w,
        convertToRaw: S,
        genKey: k,
        getDefaultKeyBinding: x,
        getVisibleSelectionRect: C,
      };
    },
    253060: function (t, e, r) {
      "use strict";
      var n = r(381538);
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              }),
            )),
            n.forEach(function (e) {
              u(t, e, r[e]);
            });
        }
        return t;
      }
      function a(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function u(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function s(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var c = r(660793),
        l = r(673004),
        f = r(759959),
        p = r(182209),
        h = r(679358),
        d = r(189841),
        g = r(203304),
        y = r(209975),
        v = r(8400),
        m = r(379846),
        _ = r(470079),
        b = r(1231),
        S = r(292489),
        w = r(118658),
        k = r(606166),
        x = r(680643),
        C = r(421520),
        E = r(685536),
        D = r(316103),
        O = r(581079),
        K = r(822274),
        T = r(467159),
        M = w.isBrowser("IE"),
        A = !M,
        I = { edit: d, composite: f, drag: h, cut: null, render: null },
        B = !1,
        R = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          s(e, t);
          var r = e.prototype;
          return (
            (r.render = function () {
              return null;
            }),
            (r.componentDidMount = function () {
              this._update();
            }),
            (r.componentDidUpdate = function () {
              this._update();
            }),
            (r._update = function () {
              var t = this.props.editor;
              (t._latestEditorState = this.props.editorState),
                (t._blockSelectEvents = !0);
            }),
            e
          );
        })(_.Component),
        L = (function (t) {
          function e(e) {
            var r;
            return (
              u(a((r = t.call(this, e) || this)), "_blockSelectEvents", void 0),
              u(a(r), "_clipboard", void 0),
              u(a(r), "_handler", void 0),
              u(a(r), "_dragCount", void 0),
              u(a(r), "_internalDrag", void 0),
              u(a(r), "_editorKey", void 0),
              u(a(r), "_placeholderAccessibilityID", void 0),
              u(a(r), "_latestEditorState", void 0),
              u(a(r), "_latestCommittedEditorState", void 0),
              u(a(r), "_pendingStateFromBeforeInput", void 0),
              u(a(r), "_onBeforeInput", void 0),
              u(a(r), "_onBlur", void 0),
              u(a(r), "_onCharacterData", void 0),
              u(a(r), "_onCompositionEnd", void 0),
              u(a(r), "_onCompositionStart", void 0),
              u(a(r), "_onCopy", void 0),
              u(a(r), "_onCut", void 0),
              u(a(r), "_onDragEnd", void 0),
              u(a(r), "_onDragOver", void 0),
              u(a(r), "_onDragStart", void 0),
              u(a(r), "_onDrop", void 0),
              u(a(r), "_onInput", void 0),
              u(a(r), "_onFocus", void 0),
              u(a(r), "_onKeyDown", void 0),
              u(a(r), "_onKeyPress", void 0),
              u(a(r), "_onKeyUp", void 0),
              u(a(r), "_onMouseDown", void 0),
              u(a(r), "_onMouseUp", void 0),
              u(a(r), "_onPaste", void 0),
              u(a(r), "_onSelect", void 0),
              u(a(r), "editor", void 0),
              u(a(r), "editorContainer", void 0),
              u(a(r), "focus", void 0),
              u(a(r), "blur", void 0),
              u(a(r), "setMode", void 0),
              u(a(r), "exitCurrentMode", void 0),
              u(a(r), "restoreEditorDOM", void 0),
              u(a(r), "setClipboard", void 0),
              u(a(r), "getClipboard", void 0),
              u(a(r), "getEditorKey", void 0),
              u(a(r), "update", void 0),
              u(a(r), "onDragEnter", void 0),
              u(a(r), "onDragLeave", void 0),
              u(a(r), "_handleEditorContainerRef", function (t) {
                (r.editorContainer = t),
                  (r.editor = null !== t ? t.firstChild : null);
              }),
              u(a(r), "focus", function (t) {
                var e = r.props.editorState,
                  n = e.getSelection().getHasFocus(),
                  i = r.editor;
                if (!!i) {
                  var o = S.getScrollParent(i),
                    a = t || E(o),
                    u = a.x,
                    s = a.y;
                  K(i) || O(!1),
                    i.focus(),
                    o === window ? window.scrollTo(u, s) : b.setTop(o, s),
                    !n && r.update(m.forceSelection(e, e.getSelection()));
                }
              }),
              u(a(r), "blur", function () {
                var t = r.editor;
                if (!!t) K(t) || O(!1), t.blur();
              }),
              u(a(r), "setMode", function (t) {
                var e = r.props,
                  n = e.onPaste,
                  i = e.onCut,
                  a = e.onCopy,
                  u = o({}, I.edit);
                n && (u.onPaste = n), i && (u.onCut = i), a && (u.onCopy = a);
                var s = o({}, I, { edit: u });
                r._handler = s[t];
              }),
              u(a(r), "exitCurrentMode", function () {
                r.setMode("edit");
              }),
              u(a(r), "restoreEditorDOM", function (t) {
                r.setState(
                  { contentsKey: r.state.contentsKey + 1 },
                  function () {
                    r.focus(t);
                  },
                );
              }),
              u(a(r), "setClipboard", function (t) {
                r._clipboard = t;
              }),
              u(a(r), "getClipboard", function () {
                return r._clipboard;
              }),
              u(a(r), "update", function (t) {
                (r._latestEditorState = t), r.props.onChange(t);
              }),
              u(a(r), "onDragEnter", function () {
                r._dragCount++;
              }),
              u(a(r), "onDragLeave", function () {
                r._dragCount--, 0 === r._dragCount && r.exitCurrentMode();
              }),
              (r._blockSelectEvents = !1),
              (r._clipboard = null),
              (r._handler = null),
              (r._dragCount = 0),
              (r._editorKey = e.editorKey || x()),
              (r._placeholderAccessibilityID = "placeholder-" + r._editorKey),
              (r._latestEditorState = e.editorState),
              (r._latestCommittedEditorState = e.editorState),
              (r._onBeforeInput = r._buildHandler("onBeforeInput")),
              (r._onBlur = r._buildHandler("onBlur")),
              (r._onCharacterData = r._buildHandler("onCharacterData")),
              (r._onCompositionEnd = r._buildHandler("onCompositionEnd")),
              (r._onCompositionStart = r._buildHandler("onCompositionStart")),
              (r._onCopy = r._buildHandler("onCopy")),
              (r._onCut = r._buildHandler("onCut")),
              (r._onDragEnd = r._buildHandler("onDragEnd")),
              (r._onDragOver = r._buildHandler("onDragOver")),
              (r._onDragStart = r._buildHandler("onDragStart")),
              (r._onDrop = r._buildHandler("onDrop")),
              (r._onInput = r._buildHandler("onInput")),
              (r._onFocus = r._buildHandler("onFocus")),
              (r._onKeyDown = r._buildHandler("onKeyDown")),
              (r._onKeyPress = r._buildHandler("onKeyPress")),
              (r._onKeyUp = r._buildHandler("onKeyUp")),
              (r._onMouseDown = r._buildHandler("onMouseDown")),
              (r._onMouseUp = r._buildHandler("onMouseUp")),
              (r._onPaste = r._buildHandler("onPaste")),
              (r._onSelect = r._buildHandler("onSelect")),
              (r.getEditorKey = function () {
                return r._editorKey;
              }),
              (r.state = { contentsKey: 0 }),
              r
            );
          }
          s(e, t);
          var n = e.prototype;
          return (
            (n._buildHandler = function (t) {
              var e = this;
              return function (r) {
                if (!e.props.readOnly) {
                  var n = e._handler && e._handler[t];
                  n &&
                    (g
                      ? g(function () {
                          return n(e, r);
                        })
                      : n(e, r));
                }
              };
            }),
            (n._showPlaceholder = function () {
              return (
                !!this.props.placeholder &&
                !this.props.editorState.isInCompositionMode() &&
                !this.props.editorState.getCurrentContent().hasText()
              );
            }),
            (n._renderPlaceholder = function () {
              if (this._showPlaceholder()) {
                var t = {
                  text: T(this.props.placeholder),
                  editorState: this.props.editorState,
                  textAlignment: this.props.textAlignment,
                  accessibilityID: this._placeholderAccessibilityID,
                };
                return _.createElement(y, t);
              }
              return null;
            }),
            (n.render = function () {
              var t = this.props,
                e = t.blockRenderMap,
                r = t.blockRendererFn,
                n = t.blockStyleFn,
                a = t.customStyleFn,
                u = t.customStyleMap,
                s = t.editorState,
                c = t.preventScroll,
                f = t.readOnly,
                h = t.textAlignment,
                d = t.textDirectionality,
                g = k({
                  "DraftEditor/root": !0,
                  "DraftEditor/alignLeft": "left" === h,
                  "DraftEditor/alignRight": "right" === h,
                  "DraftEditor/alignCenter": "center" === h,
                }),
                y = this.props.role || "textbox",
                v = "combobox" === y ? !!this.props.ariaExpanded : null,
                m = {
                  blockRenderMap: e,
                  blockRendererFn: r,
                  blockStyleFn: n,
                  customStyleMap: o({}, l, u),
                  customStyleFn: a,
                  editorKey: this._editorKey,
                  editorState: s,
                  preventScroll: c,
                  textDirectionality: d,
                };
              return _.createElement(
                "div",
                { className: g },
                this._renderPlaceholder(),
                _.createElement(
                  "div",
                  {
                    className: k("DraftEditor/editorContainer"),
                    ref: this._handleEditorContainerRef,
                  },
                  _.createElement(
                    "div",
                    {
                      "aria-activedescendant": f
                        ? null
                        : this.props.ariaActiveDescendantID,
                      "aria-autocomplete": f
                        ? null
                        : this.props.ariaAutoComplete,
                      "aria-controls": f ? null : this.props.ariaControls,
                      "aria-describedby":
                        this.props.ariaDescribedBy ||
                        this._placeholderAccessibilityID,
                      "aria-expanded": f ? null : v,
                      "aria-label": this.props.ariaLabel,
                      "aria-labelledby": this.props.ariaLabelledBy,
                      "aria-multiline": this.props.ariaMultiline,
                      "aria-owns": f ? null : this.props.ariaOwneeID,
                      autoCapitalize: this.props.autoCapitalize,
                      autoComplete: this.props.autoComplete,
                      autoCorrect: this.props.autoCorrect,
                      className: k({
                        notranslate: !f,
                        "public/DraftEditor/content": !0,
                      }),
                      contentEditable: !f,
                      "data-testid": this.props.webDriverTestID,
                      onBeforeInput: this._onBeforeInput,
                      onBlur: this._onBlur,
                      onCompositionEnd: this._onCompositionEnd,
                      onCompositionStart: this._onCompositionStart,
                      onCopy: this._onCopy,
                      onCut: this._onCut,
                      onDragEnd: this._onDragEnd,
                      onDragEnter: this.onDragEnter,
                      onDragLeave: this.onDragLeave,
                      onDragOver: this._onDragOver,
                      onDragStart: this._onDragStart,
                      onDrop: this._onDrop,
                      onFocus: this._onFocus,
                      onInput: this._onInput,
                      onKeyDown: this._onKeyDown,
                      onKeyPress: this._onKeyPress,
                      onKeyUp: this._onKeyUp,
                      onMouseUp: this._onMouseUp,
                      onPaste: this._onPaste,
                      onSelect: this._onSelect,
                      ref: this.props.editorRef,
                      role: f ? null : y,
                      spellCheck: A && this.props.spellCheck,
                      style: {
                        outline: "none",
                        userSelect: "text",
                        WebkitUserSelect: "text",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                      },
                      suppressContentEditableWarning: !0,
                      tabIndex: this.props.tabIndex,
                    },
                    _.createElement(R, { editor: this, editorState: s }),
                    _.createElement(
                      p,
                      i({}, m, { key: "contents" + this.state.contentsKey }),
                    ),
                  ),
                ),
              );
            }),
            (n.componentDidMount = function () {
              (this._blockSelectEvents = !1),
                !B && D("draft_ods_enabled") && ((B = !0), v.initODS()),
                this.setMode("edit"),
                M &&
                  (this.editor
                    ? this.editor.ownerDocument.execCommand(
                        "AutoUrlDetect",
                        !1,
                        !1,
                      )
                    : r.g.execCommand("AutoUrlDetect", !1, !1));
            }),
            (n.componentDidUpdate = function () {
              (this._blockSelectEvents = !1),
                (this._latestEditorState = this.props.editorState),
                (this._latestCommittedEditorState = this.props.editorState);
            }),
            e
          );
        })(_.Component);
      u(L, "defaultProps", {
        blockRenderMap: c,
        blockRendererFn: function () {
          return null;
        },
        blockStyleFn: function () {
          return "";
        },
        keyBindingFn: C,
        readOnly: !1,
        spellCheck: !1,
        stripPastedStyles: !1,
      }),
        (t.exports = L);
    },
    80182: function (t, e, r) {
      "use strict";
      var n = r(381538);
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var o = r(642512),
        a = r(297326),
        u = r(470079),
        s = r(1231),
        c = r(292489),
        l = r(746117),
        f = r(856084),
        p = r(606166),
        h = r(675411),
        d = r(685536),
        g = r(126502),
        y = r(581079),
        v = r(822274),
        m = r(467159),
        _ = function (t, e) {
          return t.getAnchorKey() === e || t.getFocusKey() === e;
        },
        b = (function (t) {
          function e() {
            for (
              var e, r, n, i, o = arguments.length, a = Array(o), u = 0;
              u < o;
              u++
            )
              a[u] = arguments[u];
            return (
              (r = (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })((e = t.call.apply(t, [this].concat(a)) || this))),
              (i = void 0),
              (n = "_node") in r
                ? Object.defineProperty(r, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (r[n] = i),
              e
            );
          }
          (r = e),
            (n = t),
            (r.prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n);
          var r,
            n,
            b = e.prototype;
          return (
            (b.shouldComponentUpdate = function (t) {
              return (
                this.props.block !== t.block ||
                this.props.tree !== t.tree ||
                this.props.direction !== t.direction ||
                (_(t.selection, t.block.getKey()) && t.forceSelection)
              );
            }),
            (b.componentDidMount = function () {
              if (this.props.preventScroll) return;
              var t,
                e = this.props.selection,
                r = e.getEndKey();
              if (!e.getHasFocus() || r !== this.props.block.getKey()) return;
              var n = this._node;
              if (null != n) {
                var i = c.getScrollParent(n),
                  o = d(i);
                if (i === window) {
                  var a = h(n),
                    u = a.y + a.height;
                  (t = u - g().height) > 0 &&
                    window.scrollTo(o.x, o.y + t + 10);
                } else {
                  v(n) || y(!1);
                  var l = n.offsetHeight + n.offsetTop;
                  (t = l - (i.offsetTop + i.offsetHeight + o.y)) > 0 &&
                    s.setTop(i, s.getTop(i) + t + 10);
                }
              }
            }),
            (b._renderChildren = function () {
              var t = this,
                e = this.props.block,
                r = e.getKey(),
                n = e.getText(),
                s = this.props.tree.size - 1,
                c = _(this.props.selection, r);
              return this.props.tree
                .map(function (p, h) {
                  var d = p.get("leaves");
                  if (0 === d.size) return null;
                  var g = d.size - 1,
                    y = d
                      .map(function (i, l) {
                        var f = a.encode(r, h, l),
                          p = i.get("start"),
                          d = i.get("end");
                        return u.createElement(o, {
                          key: f,
                          offsetKey: f,
                          block: e,
                          start: p,
                          selection: c ? t.props.selection : null,
                          forceSelection: t.props.forceSelection,
                          text: n.slice(p, d),
                          styleSet: e.getInlineStyleAt(p),
                          customStyleMap: t.props.customStyleMap,
                          customStyleFn: t.props.customStyleFn,
                          isLast: h === s && l === g,
                        });
                      })
                      .toArray(),
                    v = p.get("decoratorKey");
                  if (null == v || !t.props.decorator) return y;
                  var _ = m(t.props.decorator),
                    b = _.getComponentForKey(v);
                  if (!b) return y;
                  var S = _.getPropsForKey(v),
                    w = a.encode(r, h, 0),
                    k = d.first().get("start"),
                    x = d.last().get("end"),
                    C = n.slice(k, x),
                    E = e.getEntityAt(p.get("start")),
                    D = f.getHTMLDirIfDifferent(
                      l.getDirection(C),
                      t.props.direction,
                    ),
                    O = {
                      contentState: t.props.contentState,
                      decoratedText: C,
                      dir: D,
                      start: k,
                      end: x,
                      blockKey: r,
                      entityKey: E,
                      offsetKey: w,
                    };
                  return u.createElement(b, i({}, S, O, { key: w }), y);
                })
                .toArray();
            }),
            (b.render = function () {
              var t = this,
                e = this.props,
                r = e.direction,
                n = e.offsetKey,
                i = p({
                  "public/DraftStyleDefault/block": !0,
                  "public/DraftStyleDefault/ltr": "LTR" === r,
                  "public/DraftStyleDefault/rtl": "RTL" === r,
                });
              return u.createElement(
                "div",
                {
                  "data-offset-key": n,
                  className: i,
                  ref: function (e) {
                    return (t._node = e);
                  },
                },
                this._renderChildren(),
              );
            }),
            e
          );
        })(u.Component);
      t.exports = b;
    },
    534282: function (t, e, r) {
      "use strict";
      var n = r(381538);
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              }),
            )),
            n.forEach(function (e) {
              a(t, e, r[e]);
            });
        }
        return t;
      }
      function a(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var u = r(428374),
        s = r(297326),
        c = r(470079),
        l = r(1231),
        f = r(292489),
        p = r(675411),
        h = r(685536),
        d = r(126502),
        g = r(65183),
        y = r(581079),
        v = r(822274);
      g.List;
      var m = function (t, e) {
          return t.getAnchorKey() === e || t.getFocusKey() === e;
        },
        _ = function (t, e) {
          var r = t.getNextSiblingKey();
          return !!r && e.getBlockForKey(r).getType() === t.getType();
        },
        b = function (t, e, r) {
          var n = [],
            i = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var u, l = r.reverse()[Symbol.iterator]();
              !(i = (u = l.next()).done);
              i = !0
            ) {
              var f = u.value;
              if (f.type !== e) break;
              n.push(f);
            }
          } catch (t) {
            (o = !0), (a = t);
          } finally {
            try {
              !i && null != l.return && l.return();
            } finally {
              if (o) throw a;
            }
          }
          r.splice(r.indexOf(n[0]), n.length + 1);
          var p = n.reverse(),
            h = p[0].key;
          return (
            r.push(
              c.cloneElement(
                t,
                {
                  key: "".concat(h, "-wrap"),
                  "data-offset-key": s.encode(h, 0, 0),
                },
                p,
              ),
            ),
            r
          );
        },
        S = function (t, e) {
          var r = e.get(t.getType()) || e.get("unstyled"),
            n = r.wrapper;
          return {
            Element: r.element || e.get("unstyled").element,
            wrapperTemplate: n,
          };
        },
        w = function (t, e) {
          var r = e(t);
          return r
            ? {
                CustomComponent: r.component,
                customProps: r.props,
                customEditable: r.editable,
              }
            : {};
        },
        k = function (t, e, r, n, i, a) {
          var u = {
              "data-block": !0,
              "data-editor": e,
              "data-offset-key": r,
              key: t.getKey(),
              ref: a,
            },
            s = n(t);
          return (
            s && (u.className = s),
            void 0 !== i.customEditable &&
              (u = o({}, u, {
                contentEditable: i.customEditable,
                suppressContentEditableWarning: !0,
              })),
            u
          );
        },
        x = (function (t) {
          function e() {
            for (var e, r = arguments.length, n = Array(r), i = 0; i < r; i++)
              n[i] = arguments[i];
            return (
              a(
                (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })((e = t.call.apply(t, [this].concat(n)) || this)),
                "wrapperRef",
                c.createRef(),
              ),
              e
            );
          }
          (r = e),
            (n = t),
            (r.prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n);
          var r,
            n,
            g = e.prototype;
          return (
            (g.shouldComponentUpdate = function (t) {
              var e = this.props,
                r = e.block,
                n = e.direction,
                i = e.tree,
                o = !r.getChildKeys().isEmpty(),
                a =
                  r !== t.block ||
                  i !== t.tree ||
                  n !== t.direction ||
                  (m(t.selection, t.block.getKey()) && t.forceSelection);
              return o || a;
            }),
            (g.componentDidMount = function () {
              var t,
                e = this.props.selection,
                r = e.getEndKey();
              if (!e.getHasFocus() || r !== this.props.block.getKey()) return;
              var n = this.wrapperRef.current;
              if (!!n) {
                var i = f.getScrollParent(n),
                  o = h(i);
                if (i === window) {
                  var a = p(n),
                    u = a.y + a.height;
                  (t = u - d().height) > 0 &&
                    window.scrollTo(o.x, o.y + t + 10);
                } else {
                  v(n) || y(!1);
                  var s = n.offsetHeight + n.offsetTop;
                  (t = s - (i.offsetHeight + o.y)) > 0 &&
                    l.setTop(i, l.getTop(i) + t + 10);
                }
              }
            }),
            (g.render = function () {
              var t = this,
                r = this.props,
                n = r.block,
                a = r.blockRenderMap,
                l = r.blockRendererFn,
                f = r.blockStyleFn,
                p = r.contentState,
                h = r.decorator,
                d = r.editorKey,
                g = r.editorState,
                y = r.customStyleFn,
                v = r.customStyleMap,
                x = r.direction,
                C = r.forceSelection,
                E = r.selection,
                D = r.tree,
                O = null;
              n.children.size &&
                (O = n.children.reduce(function (r, n) {
                  var i = s.encode(n, 0, 0),
                    u = p.getBlockForKey(n),
                    h = w(u, l),
                    y = h.CustomComponent || e,
                    v = S(u, a),
                    m = v.Element,
                    x = v.wrapperTemplate,
                    C = k(u, d, i, f, h, null),
                    E = o({}, t.props, {
                      tree: g.getBlockTree(n),
                      blockProps: h.customProps,
                      offsetKey: i,
                      block: u,
                    });
                  return (r.push(c.createElement(m, C, c.createElement(y, E))),
                  !x || _(u, p))
                    ? r
                    : (b(x, m, r), r);
                }, []));
              var K = n.getKey(),
                T = s.encode(K, 0, 0),
                M = w(n, l),
                A = M.CustomComponent,
                I =
                  null != A
                    ? c.createElement(
                        A,
                        i({}, this.props, {
                          tree: g.getBlockTree(K),
                          blockProps: M.customProps,
                          offsetKey: T,
                          block: n,
                        }),
                      )
                    : c.createElement(u, {
                        block: n,
                        children: O,
                        contentState: p,
                        customStyleFn: y,
                        customStyleMap: v,
                        decorator: h,
                        direction: x,
                        forceSelection: C,
                        hasSelection: m(E, K),
                        selection: E,
                        tree: D,
                      });
              if (n.getParentKey()) return I;
              var B = S(n, a).Element,
                R = k(n, d, T, f, M, this.wrapperRef);
              return c.createElement(B, R, I);
            }),
            e
          );
        })(c.Component);
      t.exports = x;
    },
    759959: function (t, e, r) {
      "use strict";
      var n = r(851952),
        i = r(310176),
        o = r(297326),
        a = r(379846),
        u = r(574369),
        s = r(531272),
        c = r(172213),
        l = r(482789),
        f = r(563751),
        p = r(467159),
        h = !1,
        d = !1,
        g = null,
        y = {
          onCompositionStart: function (t) {
            var e;
            (d = !0), (e = t), g || (g = new n(c(e))).start();
          },
          onCompositionEnd: function (t) {
            (h = !1),
              (d = !1),
              setTimeout(function () {
                !h && y.resolveComposition(t);
              }, 20);
          },
          onSelect: s,
          onKeyDown: function (t, e) {
            if (!d) {
              y.resolveComposition(t), t._onKeyDown(e);
              return;
            }
            (e.which === u.RIGHT || e.which === u.LEFT) && e.preventDefault();
          },
          onKeyPress: function (t, e) {
            e.which === u.RETURN && e.preventDefault();
          },
          resolveComposition: function (t) {
            if (!d) {
              var e = p(g).stopAndFlushMutations();
              (g = null), (h = !0);
              var r = a.set(t._latestEditorState, { inCompositionMode: !1 });
              if ((t.exitCurrentMode(), !e.size)) {
                t.update(r);
                return;
              }
              var n = r.getCurrentContent();
              e.forEach(function (t, e) {
                var u = o.decode(e),
                  s = u.blockKey,
                  c = u.decoratorKey,
                  l = u.leafKey,
                  p = r.getBlockTree(s).getIn([c, "leaves", l]),
                  h = p.start,
                  d = p.end,
                  g = r
                    .getSelection()
                    .merge({
                      anchorKey: s,
                      focusKey: s,
                      anchorOffset: h,
                      focusOffset: d,
                      isBackward: !1,
                    }),
                  y = f(n, g),
                  v = n.getBlockForKey(s).getInlineStyleAt(h);
                (n = i.replaceText(n, g, t, v, y)),
                  (r = a.set(r, { currentContent: n }));
              });
              var u = l(r, c(t)).selectionState;
              t.restoreEditorDOM();
              var s = a.acceptSelection(r, u);
              t.update(a.push(s, n, "insert-characters"));
            }
          },
        };
      t.exports = y;
    },
    462515: function (t, e, r) {
      "use strict";
      var n = r(381538);
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var o = r(80182),
        a = r(297326),
        u = r(470079),
        s = r(606166),
        c = r(679785),
        l = r(467159),
        f = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          (r = e),
            (n = t),
            (r.prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n);
          var r,
            n,
            f = e.prototype;
          return (
            (f.shouldComponentUpdate = function (t) {
              var e = this.props.editorState,
                r = t.editorState;
              if (
                e.getDirectionMap() !== r.getDirectionMap() ||
                e.getSelection().getHasFocus() !==
                  r.getSelection().getHasFocus()
              )
                return !0;
              var n = r.getNativelyRenderedContent(),
                i = e.isInCompositionMode(),
                o = r.isInCompositionMode();
              if (
                e === r ||
                (null !== n && r.getCurrentContent() === n) ||
                (i && o)
              )
                return !1;
              var a = e.getCurrentContent(),
                u = r.getCurrentContent(),
                s = e.getDecorator(),
                c = r.getDecorator();
              return i !== o || a !== u || s !== c || r.mustForceSelection();
            }),
            (f.render = function () {
              for (
                var t = this.props,
                  e = t.blockRenderMap,
                  r = t.blockRendererFn,
                  n = t.blockStyleFn,
                  f = t.customStyleMap,
                  p = t.customStyleFn,
                  h = t.editorState,
                  d = t.editorKey,
                  g = t.preventScroll,
                  y = t.textDirectionality,
                  v = h.getCurrentContent(),
                  m = h.getSelection(),
                  _ = h.mustForceSelection(),
                  b = h.getDecorator(),
                  S = l(h.getDirectionMap()),
                  w = v.getBlocksAsArray(),
                  k = [],
                  x = null,
                  C = null,
                  E = 0;
                E < w.length;
                E++
              ) {
                var D = w[E],
                  O = D.getKey(),
                  K = D.getType(),
                  T = r(D),
                  M = void 0,
                  A = void 0,
                  I = void 0;
                T && ((M = T.component), (A = T.props), (I = T.editable));
                var B = y || S.get(O),
                  R = a.encode(O, 0, 0),
                  L = {
                    contentState: v,
                    block: D,
                    blockProps: A,
                    blockStyleFn: n,
                    customStyleMap: f,
                    customStyleFn: p,
                    decorator: b,
                    direction: B,
                    forceSelection: _,
                    offsetKey: R,
                    preventScroll: g,
                    selection: m,
                    tree: h.getBlockTree(O),
                  },
                  N = e.get(K) || e.get("unstyled"),
                  F = N.wrapper,
                  z = N.element || e.get("unstyled").element,
                  P = D.getDepth(),
                  j = "";
                if ((n && (j = n(D)), "li" === z)) {
                  var U,
                    q,
                    H,
                    W = C !== F || null === x || P > x;
                  j = c(
                    j,
                    s({
                      "public/DraftStyleDefault/unorderedListItem":
                        "unordered-list-item" === (U = K),
                      "public/DraftStyleDefault/orderedListItem":
                        "ordered-list-item" === U,
                      "public/DraftStyleDefault/reset": W,
                      "public/DraftStyleDefault/depth0": 0 === (q = P),
                      "public/DraftStyleDefault/depth1": 1 === q,
                      "public/DraftStyleDefault/depth2": 2 === q,
                      "public/DraftStyleDefault/depth3": 3 === q,
                      "public/DraftStyleDefault/depth4": q >= 4,
                      "public/DraftStyleDefault/listLTR": "LTR" === (H = B),
                      "public/DraftStyleDefault/listRTL": "RTL" === H,
                    }),
                  );
                }
                var V = M || o,
                  G = {
                    className: j,
                    "data-block": !0,
                    "data-editor": d,
                    "data-offset-key": R,
                    key: O,
                  };
                void 0 !== I &&
                  (G = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t)
                              .enumerable;
                          }),
                        )),
                        n.forEach(function (e) {
                          (function (t, e, r) {
                            e in t
                              ? Object.defineProperty(t, e, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (t[e] = r);
                          })(t, e, r[e]);
                        });
                    }
                    return t;
                  })({}, G, {
                    contentEditable: I,
                    suppressContentEditableWarning: !0,
                  }));
                var J = u.createElement(
                  z,
                  G,
                  u.createElement(V, i({}, L, { key: O })),
                );
                k.push({ block: J, wrapperTemplate: F, key: O, offsetKey: R }),
                  (x = F ? D.getDepth() : null),
                  (C = F);
              }
              for (var $ = [], X = 0; X < k.length; ) {
                var Y = k[X];
                if (Y.wrapperTemplate) {
                  var Z = [];
                  do Z.push(k[X].block), X++;
                  while (
                    X < k.length &&
                    k[X].wrapperTemplate === Y.wrapperTemplate
                  );
                  var Q = u.cloneElement(
                    Y.wrapperTemplate,
                    { key: Y.key + "-wrap", "data-offset-key": Y.offsetKey },
                    Z,
                  );
                  $.push(Q);
                } else $.push(Y.block), X++;
              }
              return u.createElement("div", { "data-contents": "true" }, $);
            }),
            e
          );
        })(u.Component);
      t.exports = f;
    },
    182209: function (t, e, r) {
      "use strict";
      var n = r(316103)("draft_tree_data_support");
      t.exports = r(n ? 225942 : 462515);
    },
    225942: function (t, e, r) {
      "use strict";
      var n = r(381538);
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var o = r(534282),
        a = r(297326),
        u = r(470079),
        s = r(467159),
        c = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          (r = e),
            (n = t),
            (r.prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n);
          var r,
            n,
            c = e.prototype;
          return (
            (c.shouldComponentUpdate = function (t) {
              var e = this.props.editorState,
                r = t.editorState;
              if (
                e.getDirectionMap() !== r.getDirectionMap() ||
                e.getSelection().getHasFocus() !==
                  r.getSelection().getHasFocus()
              )
                return !0;
              var n = r.getNativelyRenderedContent(),
                i = e.isInCompositionMode(),
                o = r.isInCompositionMode();
              if (
                e === r ||
                (null !== n && r.getCurrentContent() === n) ||
                (i && o)
              )
                return !1;
              var a = e.getCurrentContent(),
                u = r.getCurrentContent(),
                s = e.getDecorator(),
                c = r.getDecorator();
              return i !== o || a !== u || s !== c || r.mustForceSelection();
            }),
            (c.render = function () {
              for (
                var t = this.props,
                  e = t.blockRenderMap,
                  r = t.blockRendererFn,
                  n = t.blockStyleFn,
                  c = t.customStyleMap,
                  l = t.customStyleFn,
                  f = t.editorState,
                  p = t.editorKey,
                  h = t.textDirectionality,
                  d = f.getCurrentContent(),
                  g = f.getSelection(),
                  y = f.mustForceSelection(),
                  v = f.getDecorator(),
                  m = s(f.getDirectionMap()),
                  _ = d.getBlocksAsArray()[0],
                  b = [],
                  S = _;
                S;

              ) {
                var w = S.getKey(),
                  k = {
                    blockRenderMap: e,
                    blockRendererFn: r,
                    blockStyleFn: n,
                    contentState: d,
                    customStyleFn: l,
                    customStyleMap: c,
                    decorator: v,
                    editorKey: p,
                    editorState: f,
                    forceSelection: y,
                    selection: g,
                    block: S,
                    direction: h || m.get(w),
                    tree: f.getBlockTree(w),
                  },
                  x = (e.get(S.getType()) || e.get("unstyled")).wrapper;
                b.push({
                  block: u.createElement(o, i({ key: w }, k)),
                  wrapperTemplate: x,
                  key: w,
                  offsetKey: a.encode(w, 0, 0),
                });
                var C = S.getNextSiblingKey();
                S = C ? d.getBlockForKey(C) : null;
              }
              for (var E = [], D = 0; D < b.length; ) {
                var O = b[D];
                if (O.wrapperTemplate) {
                  var K = [];
                  do K.push(b[D].block), D++;
                  while (
                    D < b.length &&
                    b[D].wrapperTemplate === O.wrapperTemplate
                  );
                  var T = u.cloneElement(
                    O.wrapperTemplate,
                    { key: O.key + "-wrap", "data-offset-key": O.offsetKey },
                    K,
                  );
                  E.push(T);
                } else E.push(O.block), D++;
              }
              return u.createElement("div", { "data-contents": "true" }, E);
            }),
            e
          );
        })(u.Component);
      t.exports = c;
    },
    608345: function (t, e, r) {
      "use strict";
      var n = r(381538);
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var o = r(297326),
        a = r(470079),
        u = r(746117),
        s = r(856084),
        c = (function (t) {
          var e, r;
          function n() {
            return t.apply(this, arguments) || this;
          }
          return (
            (e = n),
            (r = t),
            (e.prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r),
            (n.prototype.render = function () {
              var t = this.props,
                e = t.block,
                r = t.children,
                n = t.contentState,
                c = t.decorator,
                l = t.decoratorKey,
                f = t.direction,
                p = t.leafSet,
                h = t.text,
                d = e.getKey(),
                g = p.get("leaves"),
                y = c.getComponentForKey(l),
                v = c.getPropsForKey(l),
                m = o.encode(d, parseInt(l, 10), 0),
                _ = h.slice(g.first().get("start"), g.last().get("end")),
                b = s.getHTMLDirIfDifferent(u.getDirection(_), f);
              return a.createElement(
                y,
                i({}, v, {
                  contentState: n,
                  decoratedText: _,
                  dir: b,
                  key: m,
                  entityKey: e.getEntityAt(p.get("start")),
                  offsetKey: m,
                }),
                r,
              );
            }),
            n
          );
        })(a.Component);
      t.exports = c;
    },
    679358: function (t, e, r) {
      "use strict";
      var n = r(198392),
        i = r(310176),
        o = r(379846),
        a = r(100066),
        u = r(488959),
        s = r(952616),
        c = r(880353),
        l = r(519827),
        f = r(121868),
        p = r(467159);
      function h(t) {
        t._internalDrag = !1;
        var e = t.editorContainer;
        if (e) {
          var r = new MouseEvent("mouseup", {
            view: l(e),
            bubbles: !0,
            cancelable: !0,
          });
          e.dispatchEvent(r);
        }
      }
      function d(t, e, r) {
        var n = i.insertText(
          t.getCurrentContent(),
          e,
          r,
          t.getCurrentInlineStyle(),
        );
        return o.push(t, n, "insert-fragment");
      }
      t.exports = {
        onDragEnd: function (t) {
          t.exitCurrentMode(), h(t);
        },
        onDrop: function (t, e) {
          var r = new n(e.nativeEvent.dataTransfer),
            l = t._latestEditorState,
            g = (function (t, e) {
              var r = null,
                n = null,
                i = u(t.currentTarget);
              if ("function" == typeof i.caretRangeFromPoint) {
                var o = i.caretRangeFromPoint(t.x, t.y);
                (r = o.startContainer), (n = o.startOffset);
              } else {
                if (!t.rangeParent) return null;
                (r = t.rangeParent), (n = t.rangeOffset);
              }
              (r = p(r)), (n = p(n));
              var s = p(a(r));
              return c(e, s, n, s, n);
            })(e.nativeEvent, l);
          if (
            (e.preventDefault(),
            (t._dragCount = 0),
            t.exitCurrentMode(),
            null != g)
          ) {
            var y = r.getFiles();
            if (y.length > 0) {
              if (
                t.props.handleDroppedFiles &&
                f(t.props.handleDroppedFiles(g, y))
              )
                return;
              s(y, function (e) {
                e && t.update(d(l, g, e));
              });
              return;
            }
            var v = t._internalDrag ? "internal" : "external";
            (t.props.handleDrop && f(t.props.handleDrop(g, r, v))) ||
              (t._internalDrag
                ? t.update(
                    (function (t, e) {
                      var r = i.moveText(
                        t.getCurrentContent(),
                        t.getSelection(),
                        e,
                      );
                      return o.push(t, r, "insert-fragment");
                    })(l, g),
                  )
                : t.update(d(l, g, r.getText()))),
              h(t);
          }
        },
      };
    },
    189841: function (t, e, r) {
      "use strict";
      var n = r(118658),
        i = r(464247),
        o = r(926047),
        a = r(519755),
        u = r(825903),
        s = r(178375),
        c = r(368526),
        l = r(773996),
        f = r(176356),
        p = r(843824),
        h = r(416703),
        d = r(792317),
        g = r(531272),
        y = n.isBrowser("Chrome") ? g : function (t) {};
      t.exports = {
        onBeforeInput: i,
        onBlur: o,
        onCompositionStart: a,
        onCopy: u,
        onCut: s,
        onDragOver: c,
        onDragStart: l,
        onFocus: f,
        onInput: p,
        onKeyDown: h,
        onPaste: d,
        onSelect: g,
        onMouseUp: y,
        onKeyUp: y,
      };
    },
    203304: function (t, e, r) {
      "use strict";
      var n = r(699581).unstable_flushControlled;
      t.exports = n;
    },
    642512: function (t, e, r) {
      "use strict";
      var n = r(381538),
        i = r(185330),
        o = r(470079),
        a = r(581079),
        u = r(45623),
        s = r(907949).setDraftEditorSelection,
        c = (function (t) {
          function e() {
            for (
              var e, r, n, i, o = arguments.length, a = Array(o), u = 0;
              u < o;
              u++
            )
              a[u] = arguments[u];
            return (
              (r = (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })((e = t.call.apply(t, [this].concat(a)) || this))),
              (i = void 0),
              (n = "leaf") in r
                ? Object.defineProperty(r, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (r[n] = i),
              e
            );
          }
          (r = e),
            (c = t),
            (r.prototype = Object.create(c.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = c);
          var r,
            c,
            l = e.prototype;
          return (
            (l._setSelection = function () {
              var t,
                e = this.props.selection;
              if (null == e || !e.getHasFocus()) return;
              var r = this.props,
                n = r.block,
                i = r.start,
                o = r.text,
                c = n.getKey(),
                l = i + o.length;
              if (!!e.hasEdgeWithin(c, i, l)) {
                var f = this.leaf;
                f || a(!1);
                var p = f.firstChild;
                p || a(!1),
                  p.nodeType === Node.TEXT_NODE
                    ? (t = p)
                    : u(p)
                      ? (t = f)
                      : (t = p.firstChild) || a(!1),
                  s(e, t, c, i, l);
              }
            }),
            (l.shouldComponentUpdate = function (t) {
              var e = this.leaf;
              return (
                e || a(!1),
                e.textContent !== t.text ||
                  t.styleSet !== this.props.styleSet ||
                  t.forceSelection
              );
            }),
            (l.componentDidUpdate = function () {
              this._setSelection();
            }),
            (l.componentDidMount = function () {
              this._setSelection();
            }),
            (l.render = function () {
              var t = this,
                e = this.props.block,
                r = this.props.text;
              r.endsWith("\n") && this.props.isLast && (r += "\n");
              var a = this.props,
                u = a.customStyleMap,
                s = a.customStyleFn,
                c = a.offsetKey,
                l = a.styleSet,
                f = l.reduce(function (t, e) {
                  var r = {},
                    i = u[e];
                  return (
                    void 0 !== i &&
                      t.textDecoration !== i.textDecoration &&
                      (r.textDecoration = [t.textDecoration, i.textDecoration]
                        .join(" ")
                        .trim()),
                    n(t, i, r)
                  );
                }, {});
              return (
                s && (f = n(f, s(l, e))),
                o.createElement(
                  "span",
                  {
                    "data-offset-key": c,
                    ref: function (e) {
                      return (t.leaf = e);
                    },
                    style: f,
                  },
                  o.createElement(i, null, r),
                )
              );
            }),
            e
          );
        })(o.Component);
      t.exports = c;
    },
    428374: function (t, e, r) {
      "use strict";
      var n = r(608345),
        i = r(642512),
        o = r(297326),
        a = r(65183),
        u = r(470079),
        s = r(606166);
      a.List;
      var c = (function (t) {
        var e, r;
        function a() {
          return t.apply(this, arguments) || this;
        }
        return (
          (e = a),
          (r = t),
          (e.prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r),
          (a.prototype.render = function () {
            var t = this.props,
              e = t.block,
              r = t.contentState,
              a = t.customStyleFn,
              c = t.customStyleMap,
              l = t.decorator,
              f = t.direction,
              p = t.forceSelection,
              h = t.hasSelection,
              d = t.selection,
              g = t.tree,
              y = e.getKey(),
              v = e.getText(),
              m = g.size - 1,
              _ =
                this.props.children ||
                g
                  .map(function (t, s) {
                    var g = t.get("decoratorKey"),
                      _ = t.get("leaves"),
                      b = _.size - 1,
                      S = _.map(function (t, r) {
                        var n = o.encode(y, s, r),
                          l = t.get("start"),
                          f = t.get("end");
                        return u.createElement(i, {
                          key: n,
                          offsetKey: n,
                          block: e,
                          start: l,
                          selection: h ? d : null,
                          forceSelection: p,
                          text: v.slice(l, f),
                          styleSet: e.getInlineStyleAt(l),
                          customStyleMap: c,
                          customStyleFn: a,
                          isLast: g === m && r === b,
                        });
                      }).toArray();
                    return g && l
                      ? u.createElement(n, {
                          block: e,
                          children: S,
                          contentState: r,
                          decorator: l,
                          decoratorKey: g,
                          direction: f,
                          leafSet: t,
                          text: v,
                          key: s,
                        })
                      : S;
                  })
                  .toArray();
            return u.createElement(
              "div",
              {
                "data-offset-key": o.encode(y, 0, 0),
                className: s({
                  "public/DraftStyleDefault/block": !0,
                  "public/DraftStyleDefault/ltr": "LTR" === f,
                  "public/DraftStyleDefault/rtl": "RTL" === f,
                }),
              },
              _,
            );
          }),
          a
        );
      })(u.Component);
      t.exports = c;
    },
    209975: function (t, e, r) {
      "use strict";
      var n = r(470079),
        i = r(606166),
        o = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          (r = e),
            (o = t),
            (r.prototype = Object.create(o.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = o);
          var r,
            o,
            a = e.prototype;
          return (
            (a.shouldComponentUpdate = function (t) {
              return (
                this.props.text !== t.text ||
                this.props.editorState.getSelection().getHasFocus() !==
                  t.editorState.getSelection().getHasFocus()
              );
            }),
            (a.render = function () {
              var t = i({
                "public/DraftEditorPlaceholder/root": !0,
                "public/DraftEditorPlaceholder/hasFocus": this.props.editorState
                  .getSelection()
                  .getHasFocus(),
              });
              return n.createElement(
                "div",
                { className: t },
                n.createElement(
                  "div",
                  {
                    className: i("public/DraftEditorPlaceholder/inner"),
                    id: this.props.accessibilityID,
                    style: { whiteSpace: "pre-wrap" },
                  },
                  this.props.text,
                ),
              );
            }),
            e
          );
        })(n.Component);
      t.exports = o;
    },
    185330: function (t, e, r) {
      "use strict";
      function n(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var o = r(470079),
        a = r(118658),
        u = r(581079),
        s = r(660610),
        c = a.isBrowser("IE <= 11"),
        l = (function (t) {
          function e(e) {
            var r;
            return (
              i(n((r = t.call(this, e) || this)), "_forceFlag", void 0),
              i(n(r), "_node", void 0),
              (r._forceFlag = !1),
              r
            );
          }
          (r = e),
            (a = t),
            (r.prototype = Object.create(a.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = a);
          var r,
            a,
            l = e.prototype;
          return (
            (l.shouldComponentUpdate = function (t) {
              var e,
                r = this._node,
                n = "" === t.children;
              s(r) || u(!1);
              if (n) {
                return (e = r), c ? "\n" !== e.textContent : "BR" !== e.tagName;
              }
              return r.textContent !== t.children;
            }),
            (l.componentDidMount = function () {
              this._forceFlag = !this._forceFlag;
            }),
            (l.componentDidUpdate = function () {
              this._forceFlag = !this._forceFlag;
            }),
            (l.render = function () {
              var t,
                e,
                r = this;
              if ("" === this.props.children) {
                return this._forceFlag
                  ? ((t = function (t) {
                      return (r._node = t);
                    }),
                    c
                      ? o.createElement(
                          "span",
                          { key: "A", "data-text": "true", ref: t },
                          "\n",
                        )
                      : o.createElement("br", {
                          key: "A",
                          "data-text": "true",
                          ref: t,
                        }))
                  : ((e = function (t) {
                      return (r._node = t);
                    }),
                    c
                      ? o.createElement(
                          "span",
                          { key: "B", "data-text": "true", ref: e },
                          "\n",
                        )
                      : o.createElement("br", {
                          key: "B",
                          "data-text": "true",
                          ref: e,
                        }));
              }
              return o.createElement(
                "span",
                {
                  key: this._forceFlag ? "A" : "B",
                  "data-text": "true",
                  ref: function (t) {
                    return (r._node = t);
                  },
                },
                this.props.children,
              );
            }),
            e
          );
        })(o.Component);
      t.exports = l;
    },
    8400: function (t) {
      "use strict";
      t.exports = {
        initODS: function () {},
        handleExtensionCausedError: function () {},
      };
    },
    49287: function (t, e, r) {
      "use strict";
      var n = r(119596),
        i = r(65183),
        o = r(581079),
        a = (0, i.Map)(),
        u = 0;
      function s(t, e) {
        console.warn(
          "WARNING: " +
            t +
            ' will be deprecated soon!\nPlease use "' +
            e +
            '" instead.',
        );
      }
      var c = {
        getLastCreatedEntityKey: function () {
          return (
            s(
              "DraftEntity.getLastCreatedEntityKey",
              "contentState.getLastCreatedEntityKey",
            ),
            c.__getLastCreatedEntityKey()
          );
        },
        create: function (t, e, r) {
          return (
            s("DraftEntity.create", "contentState.createEntity"),
            c.__create(t, e, r)
          );
        },
        add: function (t) {
          return s("DraftEntity.add", "contentState.addEntity"), c.__add(t);
        },
        get: function (t) {
          return s("DraftEntity.get", "contentState.getEntity"), c.__get(t);
        },
        mergeData: function (t, e) {
          return (
            s("DraftEntity.mergeData", "contentState.mergeEntityData"),
            c.__mergeData(t, e)
          );
        },
        replaceData: function (t, e) {
          return (
            s("DraftEntity.replaceData", "contentState.replaceEntityData"),
            c.__replaceData(t, e)
          );
        },
        __getLastCreatedEntityKey: function () {
          return "" + u;
        },
        __create: function (t, e, r) {
          return c.__add(new n({ type: t, mutability: e, data: r || {} }));
        },
        __add: function (t) {
          var e = "" + ++u;
          return (a = a.set(e, t)), e;
        },
        __get: function (t) {
          var e = a.get(t);
          return e || o(!1), e;
        },
        __mergeData: function (t, e) {
          var r = c.__get(t),
            n = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(r).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(r, t).enumerable;
                    }),
                  )),
                  n.forEach(function (e) {
                    (function (t, e, r) {
                      e in t
                        ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[e] = r);
                    })(t, e, r[e]);
                  });
              }
              return t;
            })({}, r.getData(), e),
            i = r.set("data", n);
          return (a = a.set(t, i)), i;
        },
        __replaceData: function (t, e) {
          var r = c.__get(t).set("data", e);
          return (a = a.set(t, r)), r;
        },
      };
      t.exports = c;
    },
    119596: function (t, e, r) {
      "use strict";
      var n = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        (r = e),
          (n = t),
          (r.prototype = Object.create(n.prototype)),
          (r.prototype.constructor = r),
          (r.__proto__ = n);
        var r,
          n,
          i = e.prototype;
        return (
          (i.getType = function () {
            return this.get("type");
          }),
          (i.getMutability = function () {
            return this.get("mutability");
          }),
          (i.getData = function () {
            return this.get("data");
          }),
          e
        );
      })(
        (0, r(65183).Record)({
          type: "TOKEN",
          mutability: "IMMUTABLE",
          data: Object,
        }),
      );
      t.exports = n;
    },
    556019: function (t) {
      "use strict";
      t.exports = {
        getRemovalRange: function (t, e, r, n, i) {
          var o,
            a = r.split(" ");
          a = a.map(function (t, e) {
            if ("forward" === i) {
              if (e > 0) return " " + t;
            } else if (e < a.length - 1) return t + " ";
            return t;
          });
          for (var u = n, s = null, c = null, l = 0; l < a.length; l++) {
            if (t < (o = u + a[l].length) && u < e)
              null !== s || (s = u), (c = o);
            else if (null !== s) break;
            u = o;
          }
          var f = n + r.length,
            p = s === n,
            h = c === f;
          return (
            ((!p && h) || (p && !h)) &&
              ("forward" === i ? c !== f && c++ : s !== n && s--),
            { start: s, end: c }
          );
        },
      };
    },
    887109: function (t) {
      "use strict";
      t.exports = {
        logBlockedSelectionEvent: function () {
          return null;
        },
        logSelectionStateFailure: function () {
          return null;
        },
      };
    },
    310176: function (t, e, r) {
      "use strict";
      var n = r(837512),
        i = r(963107),
        o = r(221366),
        a = r(149808),
        u = r(624001),
        s = r(65183),
        c = r(360870),
        l = r(867864),
        f = r(581079),
        p = r(896775),
        h = r(351612),
        d = r(958594),
        g = r(81368),
        y = s.OrderedSet,
        v = {
          replaceText: function (t, e, r, i, o) {
            var a = d(h(t, e), e),
              u = n.create({ style: i || y(), entity: o || null });
            return l(a, a.getSelectionAfter(), r, u);
          },
          insertText: function (t, e, r, n, i) {
            return e.isCollapsed() || f(!1), v.replaceText(t, e, r, n, i);
          },
          moveText: function (t, e, r) {
            var n = u(t, e),
              i = v.removeRange(t, e, "backward");
            return v.replaceWithFragment(i, r, n);
          },
          replaceWithFragment: function (t, e, r) {
            var n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "REPLACE_WITH_NEW_DATA",
              i = d(h(t, e), e);
            return c(i, i.getSelectionAfter(), r, n);
          },
          removeRange: function (t, e, r) {
            e.getIsBackward() &&
              (e = e.merge({
                anchorKey: e.getFocusKey(),
                anchorOffset: e.getFocusOffset(),
                focusKey: e.getAnchorKey(),
                focusOffset: e.getAnchorOffset(),
                isBackward: !1,
              })),
              (n = e.getAnchorKey()),
              (i = e.getFocusKey()),
              (o = t.getBlockForKey(n)),
              (u = t.getBlockForKey(i));
            var n,
              i,
              o,
              u,
              s = e.getStartOffset(),
              c = e.getEndOffset(),
              l = o.getEntityAt(s),
              f = u.getEntityAt(c - 1);
            if (n === i && l && l === f) {
              var p = a(t.getEntityMap(), o, u, e, r);
              return d(t, p);
            }
            return d(h(t, e), e);
          },
          splitBlock: function (t, e) {
            var r = d(h(t, e), e);
            return g(r, r.getSelectionAfter());
          },
          applyInlineStyle: function (t, e, r) {
            return i.add(t, e, r);
          },
          removeInlineStyle: function (t, e, r) {
            return i.remove(t, e, r);
          },
          setBlockType: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ type: r, depth: 0 });
            });
          },
          setBlockData: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ data: r });
            });
          },
          mergeBlockData: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ data: t.getData().merge(r) });
            });
          },
          applyEntity: function (t, e, r) {
            return o(h(t, e), e, r);
          },
        };
      t.exports = v;
    },
    297326: function (t) {
      "use strict";
      t.exports = {
        encode: function (t, e, r) {
          return t + "-" + e + "-" + r;
        },
        decode: function (t) {
          var e = t.split("-").reverse(),
            r = e[0],
            n = e[1];
          return {
            blockKey: e.slice(2).reverse().join("-"),
            decoratorKey: parseInt(n, 10),
            leafKey: parseInt(r, 10),
          };
        },
      };
    },
    768784: function (t, e, r) {
      "use strict";
      var n = r(213912),
        i = r(546870),
        o = r(425042),
        a = r(680643),
        u = r(490540),
        s = r(316103),
        c = r(65183),
        l = r(856520),
        f = c.List,
        p = c.Repeat,
        h = s("draft_tree_data_support"),
        d = h ? i : n;
      t.exports = {
        processHTML: function (t, e) {
          return o(t, u, e);
        },
        processText: function (t, e, r) {
          return t.reduce(function (t, n, i) {
            n = l(n);
            var o = a(),
              u = {
                key: o,
                type: r,
                text: n,
                characterList: f(p(e, n.length)),
              };
            if (h && 0 !== i) {
              var s = i - 1;
              u = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable;
                      }),
                    )),
                    n.forEach(function (e) {
                      (function (t, e, r) {
                        e in t
                          ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (t[e] = r);
                      })(t, e, r[e]);
                    });
                }
                return t;
              })({}, u, {
                prevSibling: (t[s] = t[s].merge({ nextSibling: o })).getKey(),
              });
            }
            return t.push(new d(u)), t;
          }, []);
        },
      };
    },
    33012: function (t, e, r) {
      "use strict";
      var n = r(207549).getPunctuation(),
        i = "['‘’]",
        o = "\\s|(?![_])" + n,
        a = RegExp(
          "^(?:" + o + ")*(?:" + i + "|(?!" + o + ").)*(?:(?!" + o + ").)",
        ),
        u = RegExp(
          "(?:(?!" + o + ").)(?:" + i + "|(?!" + o + ").)*(?:" + o + ")*$",
        );
      function s(t, e) {
        var r = e ? u.exec(t) : a.exec(t);
        return r ? r[0] : t;
      }
      t.exports = {
        getBackward: function (t) {
          return s(t, !0);
        },
        getForward: function (t) {
          return s(t, !1);
        },
      };
    },
    846362: function (t) {
      "use strict";
      t.exports = {
        stringify: function (t) {
          return "_" + String(t);
        },
        unstringify: function (t) {
          return t.slice(1);
        },
      };
    },
    88071: function (t, e, r) {
      "use strict";
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              }),
            )),
            n.forEach(function (e) {
              (function (t, e, r) {
                e in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r);
              })(t, e, r[e]);
            });
        }
        return t;
      }
      var i = r(680643),
        o = r(581079),
        a = function (t, e) {
          for (var r = [].concat(t).reverse(); r.length; ) {
            var n = r.pop();
            e(n);
            var i = n.children;
            Array.isArray(i) || o(!1), (r = r.concat([].concat(i.reverse())));
          }
        },
        u = function (t) {
          if (!(t && t.type)) return !1;
          var e = t.type;
          return "unordered-list-item" === e || "ordered-list-item" === e;
        },
        s = function (t) {
          Array.isArray(t.children) &&
            (t.children = t.children.map(function (e) {
              return e.type === t.type
                ? n({}, e, { depth: (t.depth || 0) + 1 })
                : e;
            }));
        };
      t.exports = {
        fromRawTreeStateToRawState: function (t) {
          var e = t.blocks,
            r = [];
          return (Array.isArray(e) || o(!1), Array.isArray(e) && e.length)
            ? (a(e, function (t) {
                var e = n({}, t);
                if (
                  !u(t) ||
                  ((e.depth = e.depth || 0),
                  s(t),
                  null == t.children || !(t.children.length > 0))
                )
                  delete e.children, r.push(e);
              }),
              (t.blocks = r),
              n({}, t, { blocks: r }))
            : t;
        },
        fromRawStateToRawTreeState: function (t) {
          var e = [],
            r = [];
          return (
            t.blocks.forEach(function (t) {
              var o = u(t),
                a = t.depth || 0,
                s = n({}, t, { children: [] });
              if (!o) {
                e.push(s);
                return;
              }
              var c = r[0];
              if (null == c && 0 === a) e.push(s);
              else if (null == c || c.depth < a - 1) {
                var l = {
                  key: i(),
                  text: "",
                  depth: a - 1,
                  type: t.type,
                  children: [],
                  entityRanges: [],
                  inlineStyleRanges: [],
                };
                r.unshift(l),
                  1 === a ? e.push(l) : null != c && c.children.push(l),
                  l.children.push(s);
              } else if (c.depth === a - 1) c.children.push(s);
              else {
                for (; null != c && c.depth >= a; ) r.shift(), (c = r[0]);
                a > 0 ? c.children.push(s) : e.push(s);
              }
            }),
            n({}, t, { blocks: e })
          );
        },
      };
    },
    901182: function (t, e, r) {
      "use strict";
      r(42547);
      t.exports = {
        isValidBlock: function (t, e) {
          var r = t.getKey(),
            n = t.getParentKey();
          if (
            (null != n && !e.get(n).getChildKeys().includes(r)) ||
            !t
              .getChildKeys()
              .map(function (t) {
                return e.get(t);
              })
              .every(function (t) {
                return t.getParentKey() === r;
              })
          )
            return !1;
          var i = t.getPrevSiblingKey();
          if (null != i && e.get(i).getNextSiblingKey() !== r) return !1;
          var o = t.getNextSiblingKey();
          return (
            (null == o || e.get(o).getPrevSiblingKey() === r) &&
            (null === o || null === i || i !== o) &&
            ("" == t.text || !(t.getChildKeys().size > 0)) &&
            !0
          );
        },
        isConnectedTree: function (t) {
          var e = t.toArray().filter(function (t) {
            return null == t.getParentKey() && null == t.getPrevSiblingKey();
          });
          if (1 !== e.length) return !1;
          for (var r = e.shift(), n = 0, i = r.getKey(), o = []; null != i; ) {
            var a = t.get(i),
              u = a.getChildKeys(),
              s = a.getNextSiblingKey();
            if (u.size > 0) {
              null != s && o.unshift(s);
              var c = u
                .map(function (e) {
                  return t.get(e);
                })
                .find(function (t) {
                  return null == t.getPrevSiblingKey();
                });
              if (null == c) return !1;
              i = c.getKey();
            } else
              i =
                null != a.getNextSiblingKey()
                  ? a.getNextSiblingKey()
                  : o.shift();
            n++;
          }
          return n === t.size && !0;
        },
        isValidTree: function (t) {
          var e = this;
          return (
            !!t.toArray().every(function (r) {
              return e.isValidBlock(r, t);
            }) && this.isConnectedTree(t)
          );
        },
      };
    },
    362242: function (t, e, r) {
      "use strict";
      var n,
        i = r(166898),
        o = r(65183),
        a = r(467159),
        u = o.OrderedMap;
      t.exports = {
        getDirectionMap: function (t, e) {
          n ? n.reset() : (n = new i());
          var r = t.getBlockMap(),
            s = r.valueSeq().map(function (t) {
              return a(n).getDirection(t.getText());
            }),
            c = u(r.keySeq().zip(s));
          return null != e && o.is(e, c) ? e : c;
        },
      };
    },
    379846: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r(736302),
        o = r(770209),
        a = r(362242),
        u = r(114080),
        s = r(65183),
        c = s.OrderedSet,
        l = s.Record,
        f = s.Stack,
        p = l({
          allowUndo: !0,
          currentContent: null,
          decorator: null,
          directionMap: null,
          forceSelection: !1,
          inCompositionMode: !1,
          inlineStyleOverride: null,
          lastChangeType: null,
          nativelyRenderedContent: null,
          redoStack: f(),
          selection: null,
          treeMap: null,
          undoStack: f(),
        }),
        h = (function () {
          (e.createEmpty = function (t) {
            return e.createWithContent(o.createFromText(""), t);
          }),
            (e.createWithContent = function (t, r) {
              if (0 === t.getBlockMap().count()) return e.createEmpty(r);
              var n = t.getBlockMap().first().getKey();
              return e.create({
                currentContent: t,
                undoStack: f(),
                redoStack: f(),
                decorator: r || null,
                selection: u.createEmpty(n),
              });
            }),
            (e.create = function (t) {
              var r = t.currentContent,
                i = t.decorator;
              return new e(
                new p(
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                          Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t)
                              .enumerable;
                          }),
                        )),
                        i.forEach(function (e) {
                          n(t, e, r[e]);
                        });
                    }
                    return t;
                  })({}, t, {
                    treeMap: g(r, i),
                    directionMap: a.getDirectionMap(r),
                  }),
                ),
              );
            }),
            (e.set = function (t, r) {
              return new e(
                t.getImmutable().withMutations(function (e) {
                  var n = e.get("decorator"),
                    o = n;
                  null === r.decorator
                    ? (o = null)
                    : r.decorator && (o = r.decorator);
                  var a = r.currentContent || t.getCurrentContent();
                  if (o !== n) {
                    var u,
                      s = e.get("treeMap");
                    (u =
                      o && n
                        ? (function (t, e, r, n, o) {
                            return r.merge(
                              e
                                .toSeq()
                                .filter(function (e) {
                                  return (
                                    n.getDecorations(e, t) !==
                                    o.getDecorations(e, t)
                                  );
                                })
                                .map(function (e) {
                                  return i.generate(t, e, n);
                                }),
                            );
                          })(a, a.getBlockMap(), s, o, n)
                        : g(a, o)),
                      e.merge({
                        decorator: o,
                        treeMap: u,
                        nativelyRenderedContent: null,
                      });
                    return;
                  }
                  a !== t.getCurrentContent() &&
                    e.set(
                      "treeMap",
                      (function (t, e, r, n) {
                        var o = t.getCurrentContent().set("entityMap", r),
                          a = o.getBlockMap();
                        return t
                          .getImmutable()
                          .get("treeMap")
                          .merge(
                            e
                              .toSeq()
                              .filter(function (t, e) {
                                return t !== a.get(e);
                              })
                              .map(function (t) {
                                return i.generate(o, t, n);
                              }),
                          );
                      })(t, a.getBlockMap(), a.getEntityMap(), o),
                    ),
                    e.merge(r);
                }),
              );
            });
          var t = e.prototype;
          function e(t) {
            n(this, "_immutable", void 0), (this._immutable = t);
          }
          return (
            (t.toJS = function () {
              return this.getImmutable().toJS();
            }),
            (t.getAllowUndo = function () {
              return this.getImmutable().get("allowUndo");
            }),
            (t.getCurrentContent = function () {
              return this.getImmutable().get("currentContent");
            }),
            (t.getUndoStack = function () {
              return this.getImmutable().get("undoStack");
            }),
            (t.getRedoStack = function () {
              return this.getImmutable().get("redoStack");
            }),
            (t.getSelection = function () {
              return this.getImmutable().get("selection");
            }),
            (t.getDecorator = function () {
              return this.getImmutable().get("decorator");
            }),
            (t.isInCompositionMode = function () {
              return this.getImmutable().get("inCompositionMode");
            }),
            (t.mustForceSelection = function () {
              return this.getImmutable().get("forceSelection");
            }),
            (t.getNativelyRenderedContent = function () {
              return this.getImmutable().get("nativelyRenderedContent");
            }),
            (t.getLastChangeType = function () {
              return this.getImmutable().get("lastChangeType");
            }),
            (t.getInlineStyleOverride = function () {
              return this.getImmutable().get("inlineStyleOverride");
            }),
            (e.setInlineStyleOverride = function (t, r) {
              return e.set(t, { inlineStyleOverride: r });
            }),
            (t.getCurrentInlineStyle = function () {
              var t = this.getInlineStyleOverride();
              if (null != t) return t;
              var e = this.getCurrentContent(),
                r = this.getSelection();
              return r.isCollapsed()
                ? (function (t, e) {
                    var r = e.getStartKey(),
                      n = e.getStartOffset(),
                      i = t.getBlockForKey(r);
                    return n > 0
                      ? i.getInlineStyleAt(n - 1)
                      : i.getLength()
                        ? i.getInlineStyleAt(0)
                        : y(t, r);
                  })(e, r)
                : (function (t, e) {
                    var r = e.getStartKey(),
                      n = e.getStartOffset(),
                      i = t.getBlockForKey(r);
                    return n < i.getLength()
                      ? i.getInlineStyleAt(n)
                      : n > 0
                        ? i.getInlineStyleAt(n - 1)
                        : y(t, r);
                  })(e, r);
            }),
            (t.getBlockTree = function (t) {
              return this.getImmutable().getIn(["treeMap", t]);
            }),
            (t.isSelectionAtStartOfContent = function () {
              var t = this.getCurrentContent().getBlockMap().first().getKey();
              return this.getSelection().hasEdgeWithin(t, 0, 0);
            }),
            (t.isSelectionAtEndOfContent = function () {
              var t = this.getCurrentContent().getBlockMap().last(),
                e = t.getLength();
              return this.getSelection().hasEdgeWithin(t.getKey(), e, e);
            }),
            (t.getDirectionMap = function () {
              return this.getImmutable().get("directionMap");
            }),
            (e.acceptSelection = function (t, e) {
              return d(t, e, !1);
            }),
            (e.forceSelection = function (t, e) {
              return (
                !e.getHasFocus() && (e = e.set("hasFocus", !0)), d(t, e, !0)
              );
            }),
            (e.moveSelectionToEnd = function (t) {
              var r = t.getCurrentContent().getLastBlock(),
                n = r.getKey(),
                i = r.getLength();
              return e.acceptSelection(
                t,
                new u({
                  anchorKey: n,
                  anchorOffset: i,
                  focusKey: n,
                  focusOffset: i,
                  isBackward: !1,
                }),
              );
            }),
            (e.moveFocusToEnd = function (t) {
              var r = e.moveSelectionToEnd(t);
              return e.forceSelection(r, r.getSelection());
            }),
            (e.push = function (t, r, n) {
              var i =
                !(arguments.length > 3) ||
                void 0 === arguments[3] ||
                arguments[3];
              if (t.getCurrentContent() === r) return t;
              var o = a.getDirectionMap(r, t.getDirectionMap());
              if (!t.getAllowUndo())
                return e.set(t, {
                  currentContent: r,
                  directionMap: o,
                  lastChangeType: n,
                  selection: r.getSelectionAfter(),
                  forceSelection: i,
                  inlineStyleOverride: null,
                });
              var u = t.getSelection(),
                s = t.getCurrentContent(),
                c = t.getUndoStack(),
                l = r;
              u !== s.getSelectionAfter() ||
              (function (t, e) {
                return (
                  e !== t.getLastChangeType() ||
                  ("insert-characters" !== e &&
                    "backspace-character" !== e &&
                    "delete-character" !== e)
                );
              })(t, n)
                ? ((c = c.push(s)), (l = l.set("selectionBefore", u)))
                : ("insert-characters" === n ||
                    "backspace-character" === n ||
                    "delete-character" === n) &&
                  (l = l.set("selectionBefore", s.getSelectionBefore()));
              var p = t.getInlineStyleOverride();
              -1 ===
                ["adjust-depth", "change-block-type", "split-block"].indexOf(
                  n,
                ) && (p = null);
              var h = {
                currentContent: l,
                directionMap: o,
                undoStack: c,
                redoStack: f(),
                lastChangeType: n,
                selection: r.getSelectionAfter(),
                forceSelection: i,
                inlineStyleOverride: p,
              };
              return e.set(t, h);
            }),
            (e.undo = function (t) {
              if (!t.getAllowUndo()) return t;
              var r = t.getUndoStack(),
                n = r.peek();
              if (!n) return t;
              var i = t.getCurrentContent(),
                o = a.getDirectionMap(n, t.getDirectionMap());
              return e.set(t, {
                currentContent: n,
                directionMap: o,
                undoStack: r.shift(),
                redoStack: t.getRedoStack().push(i),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: "undo",
                nativelyRenderedContent: null,
                selection: i.getSelectionBefore(),
              });
            }),
            (e.redo = function (t) {
              if (!t.getAllowUndo()) return t;
              var r = t.getRedoStack(),
                n = r.peek();
              if (!n) return t;
              var i = t.getCurrentContent(),
                o = a.getDirectionMap(n, t.getDirectionMap());
              return e.set(t, {
                currentContent: n,
                directionMap: o,
                undoStack: t.getUndoStack().push(i),
                redoStack: r.shift(),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: "redo",
                nativelyRenderedContent: null,
                selection: n.getSelectionAfter(),
              });
            }),
            (t.getImmutable = function () {
              return this._immutable;
            }),
            e
          );
        })();
      function d(t, e, r) {
        return h.set(t, {
          selection: e,
          forceSelection: r,
          nativelyRenderedContent: null,
          inlineStyleOverride: null,
        });
      }
      function g(t, e) {
        return t
          .getBlockMap()
          .map(function (r) {
            return i.generate(t, r, e);
          })
          .toOrderedMap();
      }
      function y(t, e) {
        var r = t
          .getBlockMap()
          .reverse()
          .skipUntil(function (t, r) {
            return r === e;
          })
          .skip(1)
          .skipUntil(function (t, e) {
            return t.getLength();
          })
          .first();
        return r ? r.getInlineStyleAt(r.getLength() - 1) : c();
      }
      t.exports = h;
    },
    680444: function (t, e, r) {
      "use strict";
      var n = r(118658),
        i = r(668342),
        o = n.isPlatform("Mac OS X"),
        a = {
          isCtrlKeyCommand: function (t) {
            return !!t.ctrlKey && !t.altKey;
          },
          isOptionKeyCommand: function (t) {
            return o && t.altKey;
          },
          usesMacOSHeuristics: function () {
            return o;
          },
          hasCommandModifier: function (t) {
            return o ? !!t.metaKey && !t.altKey : a.isCtrlKeyCommand(t);
          },
          isSoftNewlineEvent: i,
        };
      t.exports = a;
    },
    253301: function () {},
    639256: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(379846),
        o = r(222295),
        a = r(467159),
        u = {
          currentBlockContainsLink: function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = r.getEntityMap();
            return r
              .getBlockForKey(e.getAnchorKey())
              .getCharacterList()
              .slice(e.getStartOffset(), e.getEndOffset())
              .some(function (t) {
                var e = t.getEntity();
                return !!e && "LINK" === n.__get(e).getType();
              });
          },
          getCurrentBlockType: function (t) {
            var e = t.getSelection();
            return t
              .getCurrentContent()
              .getBlockForKey(e.getStartKey())
              .getType();
          },
          getDataObjectForLinkURL: function (t) {
            return { url: t.toString() };
          },
          handleKeyCommand: function (t, e, r) {
            switch (e) {
              case "bold":
                return u.toggleInlineStyle(t, "BOLD");
              case "italic":
                return u.toggleInlineStyle(t, "ITALIC");
              case "underline":
                return u.toggleInlineStyle(t, "UNDERLINE");
              case "code":
                return u.toggleCode(t);
              case "backspace":
              case "backspace-word":
              case "backspace-to-start-of-line":
                return u.onBackspace(t);
              case "delete":
              case "delete-word":
              case "delete-to-end-of-block":
                return u.onDelete(t);
              default:
                return null;
            }
          },
          insertSoftNewline: function (t) {
            var e = n.insertText(
                t.getCurrentContent(),
                t.getSelection(),
                "\n",
                t.getCurrentInlineStyle(),
                null,
              ),
              r = i.push(t, e, "insert-characters");
            return i.forceSelection(r, e.getSelectionAfter());
          },
          onBackspace: function (t) {
            var e = t.getSelection();
            if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset())
              return null;
            var r = t.getCurrentContent(),
              n = e.getStartKey(),
              o = r.getBlockBefore(n);
            if (o && "atomic" === o.getType()) {
              var a = r.getBlockMap().delete(o.getKey()),
                s = r.merge({ blockMap: a, selectionAfter: e });
              if (s !== r) return i.push(t, s, "remove-range");
            }
            var c = u.tryToRemoveBlockStyle(t);
            return c ? i.push(t, c, "change-block-type") : null;
          },
          onDelete: function (t) {
            var e = t.getSelection();
            if (!e.isCollapsed()) return null;
            var r = t.getCurrentContent(),
              o = e.getStartKey(),
              a = r.getBlockForKey(o).getLength();
            if (e.getStartOffset() < a) return null;
            var u = r.getBlockAfter(o);
            if (!u || "atomic" !== u.getType()) return null;
            var s = e.merge({
                focusKey: u.getKey(),
                focusOffset: u.getLength(),
              }),
              c = n.removeRange(r, s, "forward");
            return c !== r ? i.push(t, c, "remove-range") : null;
          },
          onTab: function (t, e, r) {
            var n = e.getSelection(),
              a = n.getAnchorKey();
            if (a !== n.getFocusKey()) return e;
            var u = e.getCurrentContent(),
              s = u.getBlockForKey(a),
              c = s.getType();
            if ("unordered-list-item" !== c && "ordered-list-item" !== c)
              return e;
            t.preventDefault();
            var l = s.getDepth();
            if (!t.shiftKey && l === r) return e;
            var f = o(u, n, t.shiftKey ? -1 : 1, r);
            return i.push(e, f, "adjust-depth");
          },
          toggleBlockType: function (t, e) {
            var r = t.getSelection(),
              o = r.getStartKey(),
              u = r.getEndKey(),
              s = t.getCurrentContent(),
              c = r;
            if (o !== u && 0 === r.getEndOffset()) {
              var l = a(s.getBlockBefore(u));
              (u = l.getKey()),
                (c = c.merge({
                  anchorKey: o,
                  anchorOffset: r.getStartOffset(),
                  focusKey: u,
                  focusOffset: l.getLength(),
                  isBackward: !1,
                }));
            }
            if (
              s
                .getBlockMap()
                .skipWhile(function (t, e) {
                  return e !== o;
                })
                .reverse()
                .skipWhile(function (t, e) {
                  return e !== u;
                })
                .some(function (t) {
                  return "atomic" === t.getType();
                })
            )
              return t;
            var f = s.getBlockForKey(o).getType() === e ? "unstyled" : e;
            return i.push(t, n.setBlockType(s, c, f), "change-block-type");
          },
          toggleCode: function (t) {
            var e = t.getSelection(),
              r = e.getAnchorKey(),
              n = e.getFocusKey();
            return e.isCollapsed() || r !== n
              ? u.toggleBlockType(t, "code-block")
              : u.toggleInlineStyle(t, "CODE");
          },
          toggleInlineStyle: function (t, e) {
            var r,
              o = t.getSelection(),
              a = t.getCurrentInlineStyle();
            if (o.isCollapsed())
              return i.setInlineStyleOverride(
                t,
                a.has(e) ? a.remove(e) : a.add(e),
              );
            var u = t.getCurrentContent();
            return (
              (r = a.has(e)
                ? n.removeInlineStyle(u, o, e)
                : n.applyInlineStyle(u, o, e)),
              i.push(t, r, "change-inline-style")
            );
          },
          toggleLink: function (t, e, r) {
            var o = n.applyEntity(t.getCurrentContent(), e, r);
            return i.push(t, o, "apply-entity");
          },
          tryToRemoveBlockStyle: function (t) {
            var e = t.getSelection(),
              r = e.getAnchorOffset();
            if (e.isCollapsed() && 0 === r) {
              var i = e.getAnchorKey(),
                o = t.getCurrentContent(),
                a = o.getBlockForKey(i).getType(),
                u = o.getBlockBefore(i);
              if (
                "code-block" === a &&
                u &&
                "code-block" === u.getType() &&
                0 !== u.getLength()
              )
                return null;
              if ("unstyled" !== a) return n.setBlockType(o, e, "unstyled");
            }
            return null;
          },
        };
      t.exports = u;
    },
    999368: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(379846),
        o = r(624001),
        a = r(467159),
        u = null;
      t.exports = {
        cut: function (t) {
          var e = t.getCurrentContent(),
            r = t.getSelection(),
            s = null;
          if (r.isCollapsed()) {
            var c = r.getAnchorKey(),
              l = e.getBlockForKey(c).getLength();
            if (l === r.getAnchorOffset()) {
              var f = e.getKeyAfter(c);
              if (null == f) return t;
              s = r.set("focusKey", f).set("focusOffset", 0);
            } else s = r.set("focusOffset", l);
          } else s = r;
          u = o(e, (s = a(s)));
          var p = n.removeRange(e, s, "forward");
          return p === e ? t : i.push(t, p, "remove-range");
        },
        paste: function (t) {
          if (!u) return t;
          var e = n.replaceWithFragment(
            t.getCurrentContent(),
            t.getSelection(),
            u,
          );
          return i.push(t, e, "insert-fragment");
        },
      };
    },
    114080: function (t, e, r) {
      "use strict";
      var n = r(65183).Record,
        i = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          (r = e),
            (n = t),
            (r.prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n);
          var r,
            n,
            i = e.prototype;
          return (
            (i.serialize = function () {
              return (
                "Anchor: " +
                this.getAnchorKey() +
                ":" +
                this.getAnchorOffset() +
                ", Focus: " +
                this.getFocusKey() +
                ":" +
                this.getFocusOffset() +
                ", Is Backward: " +
                String(this.getIsBackward()) +
                ", Has Focus: " +
                String(this.getHasFocus())
              );
            }),
            (i.getAnchorKey = function () {
              return this.get("anchorKey");
            }),
            (i.getAnchorOffset = function () {
              return this.get("anchorOffset");
            }),
            (i.getFocusKey = function () {
              return this.get("focusKey");
            }),
            (i.getFocusOffset = function () {
              return this.get("focusOffset");
            }),
            (i.getIsBackward = function () {
              return this.get("isBackward");
            }),
            (i.getHasFocus = function () {
              return this.get("hasFocus");
            }),
            (i.hasEdgeWithin = function (t, e, r) {
              var n = this.getAnchorKey(),
                i = this.getFocusKey();
              if (n === i && n === t) {
                var o = this.getStartOffset(),
                  a = this.getEndOffset();
                return (e <= o && o <= r) || (e <= a && a <= r);
              }
              if (t !== n && t !== i) return !1;
              var u = t === n ? this.getAnchorOffset() : this.getFocusOffset();
              return e <= u && r >= u;
            }),
            (i.isCollapsed = function () {
              return (
                this.getAnchorKey() === this.getFocusKey() &&
                this.getAnchorOffset() === this.getFocusOffset()
              );
            }),
            (i.getStartKey = function () {
              return this.getIsBackward()
                ? this.getFocusKey()
                : this.getAnchorKey();
            }),
            (i.getStartOffset = function () {
              return this.getIsBackward()
                ? this.getFocusOffset()
                : this.getAnchorOffset();
            }),
            (i.getEndKey = function () {
              return this.getIsBackward()
                ? this.getAnchorKey()
                : this.getFocusKey();
            }),
            (i.getEndOffset = function () {
              return this.getIsBackward()
                ? this.getAnchorOffset()
                : this.getFocusOffset();
            }),
            (e.createEmpty = function (t) {
              return new e({
                anchorKey: t,
                anchorOffset: 0,
                focusKey: t,
                focusOffset: 0,
                isBackward: !1,
                hasFocus: !1,
              });
            }),
            e
          );
        })(
          n({
            anchorKey: "",
            anchorOffset: 0,
            focusKey: "",
            focusOffset: 0,
            isBackward: !1,
            hasFocus: !1,
          }),
        );
      t.exports = i;
    },
    222295: function (t) {
      "use strict";
      t.exports = function (t, e, r, n) {
        var i = e.getStartKey(),
          o = e.getEndKey(),
          a = t.getBlockMap(),
          u = a
            .toSeq()
            .skipUntil(function (t, e) {
              return e === i;
            })
            .takeUntil(function (t, e) {
              return e === o;
            })
            .concat([[o, a.get(o)]])
            .map(function (t) {
              var e = t.getDepth() + r;
              return (e = Math.max(0, Math.min(e, n))), t.set("depth", e);
            });
        return (
          (a = a.merge(u)),
          t.merge({ blockMap: a, selectionBefore: e, selectionAfter: e })
        );
      };
    },
    561401: function (t, e, r) {
      "use strict";
      var n = r(837512);
      t.exports = function (t, e, r, i) {
        for (var o = e, a = t.getCharacterList(); o < r; )
          (a = a.set(o, n.applyEntity(a.get(o), i))), o++;
        return t.set("characterList", a);
      };
    },
    221366: function (t, e, r) {
      "use strict";
      var n = r(561401),
        i = r(65183);
      t.exports = function (t, e, r) {
        var o = t.getBlockMap(),
          a = e.getStartKey(),
          u = e.getStartOffset(),
          s = e.getEndKey(),
          c = e.getEndOffset(),
          l = o
            .skipUntil(function (t, e) {
              return e === a;
            })
            .takeUntil(function (t, e) {
              return e === s;
            })
            .toOrderedMap()
            .merge(i.OrderedMap([[s, o.get(s)]]))
            .map(function (t, e) {
              var i = e === a ? u : 0,
                o = e === s ? c : t.getLength();
              return n(t, i, o, r);
            });
        return t.merge({
          blockMap: o.merge(l),
          selectionBefore: e,
          selectionAfter: e,
        });
      };
    },
    751678: function (t, e, r) {
      "use strict";
      var n = r(213912),
        i = r(546870),
        o = r(846362),
        a = r(56720),
        u = r(979037),
        s = r(581079),
        c = function (t, e) {
          return {
            key: t.getKey(),
            text: t.getText(),
            type: t.getType(),
            depth: t.getDepth(),
            inlineStyleRanges: u(t),
            entityRanges: a(t, e),
            data: t.getData().toObject(),
          };
        },
        l = function (t, e, r, o) {
          if (t instanceof n) {
            r.push(c(t, e));
            return;
          }
          t instanceof i || s(!1);
          var a = t.getParentKey(),
            u = (o[t.getKey()] = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(r).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(r, t).enumerable;
                    }),
                  )),
                  n.forEach(function (e) {
                    (function (t, e, r) {
                      e in t
                        ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[e] = r);
                    })(t, e, r[e]);
                  });
              }
              return t;
            })({}, c(t, e), { children: [] }));
          if (a) {
            o[a].children.push(u);
            return;
          }
          r.push(u);
        },
        f = function (t, e) {
          var r = e.entityMap,
            n = [],
            i = {},
            a = {},
            u = 0;
          return (
            t.getBlockMap().forEach(function (t) {
              t.findEntityRanges(
                function (t) {
                  return null !== t.getEntity();
                },
                function (e) {
                  var n = t.getEntityAt(e),
                    i = o.stringify(n);
                  if (!a[i]) (a[i] = n), (r[i] = "".concat(u)), u++;
                },
              ),
                l(t, r, n, i);
            }),
            { blocks: n, entityMap: r }
          );
        },
        p = function (t, e) {
          var r = e.blocks,
            n = e.entityMap,
            i = {};
          return (
            Object.keys(n).forEach(function (e, r) {
              var n = t.getEntity(o.unstringify(e));
              i[r] = {
                type: n.getType(),
                mutability: n.getMutability(),
                data: n.getData(),
              };
            }),
            { blocks: r, entityMap: i }
          );
        };
      t.exports = function (t) {
        var e = { entityMap: {}, blocks: [] };
        return (e = f(t, e)), (e = p(t, e));
      };
    },
    425042: function (t, e, r) {
      "use strict";
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              }),
            )),
            n.forEach(function (e) {
              i(t, e, r[e]);
            });
        }
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var o,
        a = r(837512),
        u = r(213912),
        s = r(546870),
        c = r(660793),
        l = r(49287),
        f = r(946572),
        p = r(606166),
        h = r(680643),
        d = r(490540),
        g = r(316103),
        y = r(65183),
        v = y.List,
        m = y.Map,
        _ = y.OrderedSet,
        b = r(407734),
        S = r(45623),
        w = r(822274),
        k = r(710621),
        x = g("draft_tree_data_support"),
        C = RegExp("\r", "g"),
        E = RegExp("\n", "g"),
        D = RegExp("^\n", "g"),
        O = RegExp("&nbsp;", "g"),
        K = RegExp("&#13;?", "g"),
        T = RegExp("&#8203;?", "g"),
        M = ["bold", "bolder", "500", "600", "700", "800", "900"],
        A = ["light", "lighter", "normal", "100", "200", "300", "400"],
        I = ["className", "href", "rel", "target", "title"],
        B = ["alt", "className", "height", "src", "width"],
        R =
          (i((o = {}), p("public/DraftStyleDefault/depth0"), 0),
          i(o, p("public/DraftStyleDefault/depth1"), 1),
          i(o, p("public/DraftStyleDefault/depth2"), 2),
          i(o, p("public/DraftStyleDefault/depth3"), 3),
          i(o, p("public/DraftStyleDefault/depth4"), 4),
          o),
        L = m({
          b: "BOLD",
          code: "CODE",
          del: "STRIKETHROUGH",
          em: "ITALIC",
          i: "ITALIC",
          s: "STRIKETHROUGH",
          strike: "STRIKETHROUGH",
          strong: "BOLD",
          u: "UNDERLINE",
          mark: "HIGHLIGHT",
        }),
        N = function (t) {
          var e = {};
          return (
            t.mapKeys(function (t, r) {
              var n = [r.element];
              void 0 !== r.aliasedElements &&
                n.push.apply(n, r.aliasedElements),
                n.forEach(function (r) {
                  void 0 === e[r]
                    ? (e[r] = t)
                    : "string" == typeof e[r]
                      ? (e[r] = [e[r], t])
                      : e[r].push(t);
                });
            }),
            m(e)
          );
        },
        F = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (
            Object.keys(R).some(function (r) {
              t.classList.contains(r) && (e = R[r]);
            }),
            e
          );
        },
        z = function (t, e) {
          if (!w(t)) return e;
          var r = t.style.fontWeight,
            n = t.style.fontStyle,
            i = t.style.textDecoration;
          return e.withMutations(function (t) {
            M.indexOf(r) >= 0
              ? t.add("BOLD")
              : A.indexOf(r) >= 0 && t.remove("BOLD"),
              "italic" === n
                ? t.add("ITALIC")
                : "normal" === n && t.remove("ITALIC"),
              "underline" === i && t.add("UNDERLINE"),
              "line-through" === i && t.add("STRIKETHROUGH"),
              "none" === i &&
                (t.remove("UNDERLINE"), t.remove("STRIKETHROUGH"));
          });
        },
        P = function (t) {
          return "ul" === t || "ol" === t;
        },
        j = (function () {
          function t(t, e) {
            i(this, "characterList", v()),
              i(this, "currentBlockType", "unstyled"),
              i(this, "currentDepth", 0),
              i(this, "currentEntity", null),
              i(this, "currentText", ""),
              i(this, "wrapper", null),
              i(this, "blockConfigs", []),
              i(this, "contentBlocks", []),
              i(this, "entityMap", l),
              i(this, "blockTypeMap", void 0),
              i(this, "disambiguate", void 0),
              this.clear(),
              (this.blockTypeMap = t),
              (this.disambiguate = e);
          }
          var e = t.prototype;
          return (
            (e.clear = function () {
              (this.characterList = v()),
                (this.blockConfigs = []),
                (this.currentBlockType = "unstyled"),
                (this.currentDepth = 0),
                (this.currentEntity = null),
                (this.currentText = ""),
                (this.entityMap = l),
                (this.wrapper = null),
                (this.contentBlocks = []);
            }),
            (e.addDOMNode = function (t) {
              var e;
              return (
                (this.contentBlocks = []),
                (this.currentDepth = 0),
                (e = this.blockConfigs).push.apply(
                  e,
                  this._toBlockConfigs([t], _()),
                ),
                this._trimCurrentText(),
                "" !== this.currentText &&
                  this.blockConfigs.push(this._makeBlockConfig()),
                this
              );
            }),
            (e.getContentBlocks = function () {
              return (
                0 === this.contentBlocks.length &&
                  (x
                    ? this._toContentBlocks(this.blockConfigs)
                    : this._toFlatContentBlocks(this.blockConfigs)),
                { contentBlocks: this.contentBlocks, entityMap: this.entityMap }
              );
            }),
            (e._makeBlockConfig = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = n(
                  {
                    key: t.key || h(),
                    type: this.currentBlockType,
                    text: this.currentText,
                    characterList: this.characterList,
                    depth: this.currentDepth,
                    parent: null,
                    children: v(),
                    prevSibling: null,
                    nextSibling: null,
                    childConfigs: [],
                  },
                  t,
                );
              return (
                (this.characterList = v()),
                (this.currentBlockType = "unstyled"),
                (this.currentText = ""),
                e
              );
            }),
            (e._toBlockConfigs = function (t, e) {
              for (var r = [], n = 0; n < t.length; n++) {
                var i,
                  o,
                  a = t[n],
                  u = a.nodeName.toLowerCase();
                if ("body" === u || P(u)) {
                  this._trimCurrentText(),
                    "" !== this.currentText && r.push(this._makeBlockConfig());
                  var s = this.currentDepth,
                    c = this.wrapper;
                  P(u) && ((this.wrapper = u), P(c) && this.currentDepth++),
                    r.push.apply(
                      r,
                      this._toBlockConfigs(Array.from(a.childNodes), e),
                    ),
                    (this.currentDepth = s),
                    (this.wrapper = c);
                  continue;
                }
                var l = this.blockTypeMap.get(u);
                if (void 0 !== l) {
                  this._trimCurrentText(),
                    "" !== this.currentText && r.push(this._makeBlockConfig());
                  var f = this.currentDepth,
                    p = this.wrapper;
                  (this.wrapper = "pre" === u ? "pre" : this.wrapper),
                    "string" != typeof l &&
                      (l =
                        this.disambiguate(u, this.wrapper) ||
                        l[0] ||
                        "unstyled"),
                    !x &&
                      w(a) &&
                      ("unordered-list-item" === l ||
                        "ordered-list-item" === l) &&
                      (this.currentDepth = F(a, this.currentDepth));
                  var d = h(),
                    g = this._toBlockConfigs(Array.from(a.childNodes), e);
                  this._trimCurrentText(),
                    r.push(
                      this._makeBlockConfig({
                        key: d,
                        childConfigs: g,
                        type: l,
                      }),
                    ),
                    (this.currentDepth = f),
                    (this.wrapper = p);
                  continue;
                }
                if ("#text" === u) {
                  this._addTextNode(a, e);
                  continue;
                }
                if ("br" === u) {
                  this._addBreakNode(a, e);
                  continue;
                }
                if (
                  k((i = a)) &&
                  i.attributes.getNamedItem("src") &&
                  i.attributes.getNamedItem("src").value
                ) {
                  this._addImgNode(a, e);
                  continue;
                }
                if (
                  b((o = a)) &&
                  o.href &&
                  ("http:" === o.protocol ||
                    "https:" === o.protocol ||
                    "mailto:" === o.protocol)
                ) {
                  this._addAnchorNode(a, r, e);
                  continue;
                }
                var y = e;
                L.has(u) && (y = y.add(L.get(u))),
                  (y = z(a, y)),
                  r.push.apply(
                    r,
                    this._toBlockConfigs(Array.from(a.childNodes), y),
                  );
              }
              return r;
            }),
            (e._appendText = function (t, e) {
              this.currentText += t;
              var r,
                n = a.create({ style: e, entity: this.currentEntity });
              this.characterList = (r = this.characterList).push.apply(
                r,
                Array(t.length).fill(n),
              );
            }),
            (e._trimCurrentText = function () {
              var t = this.currentText.length,
                e = t - this.currentText.trimLeft().length,
                r = this.currentText.trimRight().length,
                n = this.characterList.findEntry(function (t) {
                  return null !== t.getEntity();
                });
              (e = void 0 !== n ? Math.min(e, n[0]) : e),
                e >
                (r =
                  void 0 !==
                  (n = this.characterList.reverse().findEntry(function (t) {
                    return null !== t.getEntity();
                  }))
                    ? Math.max(r, t - n[0])
                    : r)
                  ? ((this.currentText = ""), (this.characterList = v()))
                  : ((this.currentText = this.currentText.slice(e, r)),
                    (this.characterList = this.characterList.slice(e, r)));
            }),
            (e._addTextNode = function (t, e) {
              var r = t.textContent;
              "" === r.trim() && "pre" !== this.wrapper && (r = " "),
                "pre" !== this.wrapper &&
                  (r = (r = r.replace(D, "")).replace(E, " ")),
                this._appendText(r, e);
            }),
            (e._addBreakNode = function (t, e) {
              if (!!S(t)) this._appendText("\n", e);
            }),
            (e._addImgNode = function (t, e) {
              if (!!k(t)) {
                var r = {};
                B.forEach(function (e) {
                  var n = t.getAttribute(e);
                  n && (r[e] = n);
                }),
                  (this.currentEntity = this.entityMap.__create(
                    "IMAGE",
                    "IMMUTABLE",
                    r,
                  )),
                  g("draftjs_fix_paste_for_img")
                    ? "presentation" !== t.getAttribute("role") &&
                      this._appendText("\uD83D\uDCF7", e)
                    : this._appendText("\uD83D\uDCF7", e),
                  (this.currentEntity = null);
              }
            }),
            (e._addAnchorNode = function (t, e, r) {
              if (!!b(t)) {
                var n = {};
                I.forEach(function (e) {
                  var r = t.getAttribute(e);
                  r && (n[e] = r);
                }),
                  (n.url = new f(t.href).toString()),
                  (this.currentEntity = this.entityMap.__create(
                    "LINK",
                    "MUTABLE",
                    n || {},
                  )),
                  e.push.apply(
                    e,
                    this._toBlockConfigs(Array.from(t.childNodes), r),
                  ),
                  (this.currentEntity = null);
              }
            }),
            (e._toContentBlocks = function (t) {
              for (
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  r = t.length - 1,
                  i = 0;
                i <= r;
                i++
              ) {
                var o = t[i];
                (o.parent = e),
                  (o.prevSibling = i > 0 ? t[i - 1].key : null),
                  (o.nextSibling = i < r ? t[i + 1].key : null),
                  (o.children = v(
                    o.childConfigs.map(function (t) {
                      return t.key;
                    }),
                  )),
                  this.contentBlocks.push(new s(n({}, o))),
                  this._toContentBlocks(o.childConfigs, o.key);
              }
            }),
            (e._hoistContainersInBlockConfigs = function (t) {
              var e = this;
              return v(t).flatMap(function (t) {
                return "unstyled" !== t.type || "" !== t.text
                  ? [t]
                  : e._hoistContainersInBlockConfigs(t.childConfigs);
              });
            }),
            (e._toFlatContentBlocks = function (t) {
              var e = this;
              this._hoistContainersInBlockConfigs(t).forEach(function (t) {
                var r = e._extractTextFromBlockConfigs(t.childConfigs),
                  i = r.text,
                  o = r.characterList;
                e.contentBlocks.push(
                  new u(
                    n({}, t, {
                      text: t.text + i,
                      characterList: t.characterList.concat(o),
                    }),
                  ),
                );
              });
            }),
            (e._extractTextFromBlockConfigs = function (t) {
              for (var e = t.length - 1, r = "", n = v(), i = 0; i <= e; i++) {
                var o = t[i];
                (r += o.text),
                  (n = n.concat(o.characterList)),
                  "" !== r &&
                    "unstyled" !== o.type &&
                    ((r += "\n"), (n = n.push(n.last())));
                var a = this._extractTextFromBlockConfigs(o.childConfigs);
                (r += a.text), (n = n.concat(a.characterList));
              }
              return { text: r, characterList: n };
            }),
            t
          );
        })();
      t.exports = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
          n = e(
            (t = t
              .trim()
              .replace(C, "")
              .replace(O, " ")
              .replace(K, "")
              .replace(T, "")),
          );
        if (!n) return null;
        var i = N(r);
        return new j(i, function (t, e) {
          return "li" === t
            ? "ol" === e
              ? "ordered-list-item"
              : "unordered-list-item"
            : null;
        })
          .addDOMNode(n)
          .getContentBlocks();
      };
    },
    227797: function (t, e, r) {
      "use strict";
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              }),
            )),
            n.forEach(function (e) {
              (function (t, e, r) {
                e in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r);
              })(t, e, r[e]);
            });
        }
        return t;
      }
      var i = r(213912),
        o = r(546870),
        a = r(770209),
        u = r(49287),
        s = r(88071);
      r(901182);
      var c = r(114080),
        l = r(9893),
        f = r(457936),
        p = r(416420),
        h = r(680643),
        d = r(316103),
        g = r(65183),
        y = r(581079),
        v = d("draft_tree_data_support"),
        m = g.List,
        _ = g.Map,
        b = g.OrderedMap,
        S = function (t, e) {
          var r = t.key,
            n = t.type,
            i = t.data;
          return {
            text: t.text,
            depth: t.depth || 0,
            type: n || "unstyled",
            key: r || h(),
            data: _(i),
            characterList: w(t, e),
          };
        },
        w = function (t, e) {
          var r = t.text,
            i = t.entityRanges,
            o = t.inlineStyleRanges;
          return l(
            p(r, o || []),
            f(
              r,
              (i || [])
                .filter(function (t) {
                  return e.hasOwnProperty(t.key);
                })
                .map(function (t) {
                  return n({}, t, { key: e[t.key] });
                }),
            ),
          );
        },
        k = function (t) {
          return n({}, t, { key: t.key || h() });
        },
        x = function (t, e, r) {
          var i = e.map(function (t) {
            return n({}, t, { parentRef: r });
          });
          return t.concat(i.reverse());
        },
        C = function (t, e) {
          var r,
            a,
            u,
            c,
            l = t.blocks.find(function (t) {
              return Array.isArray(t.children) && t.children.length > 0;
            }),
            f = v && !l ? s.fromRawStateToRawTreeState(t).blocks : t.blocks;
          if (!v) {
            return (
              (r = l ? s.fromRawTreeStateToRawState(t).blocks : f),
              (a = e),
              b(
                r.map(function (t) {
                  var e = new i(S(t, a));
                  return [e.getKey(), e];
                }),
              )
            );
          }
          var p =
            ((u = f),
            (c = e),
            u.map(k).reduce(function (t, e, r) {
              Array.isArray(e.children) || y(!1);
              var i = e.children.map(k),
                a = new o(
                  n({}, S(e, c), {
                    prevSibling: 0 === r ? null : u[r - 1].key,
                    nextSibling: r === u.length - 1 ? null : u[r + 1].key,
                    children: m(
                      i.map(function (t) {
                        return t.key;
                      }),
                    ),
                  }),
                );
              t = t.set(a.getKey(), a);
              for (var s = x([], i, a); s.length > 0; ) {
                var l = s.pop(),
                  f = l.parentRef,
                  p = f.getChildKeys(),
                  h = p.indexOf(l.key),
                  d = Array.isArray(l.children);
                if (!d) {
                  d || y(!1);
                  break;
                }
                var g = l.children.map(k),
                  v = new o(
                    n({}, S(l, c), {
                      parent: f.getKey(),
                      children: m(
                        g.map(function (t) {
                          return t.key;
                        }),
                      ),
                      prevSibling: 0 === h ? null : p.get(h - 1),
                      nextSibling: h === p.size - 1 ? null : p.get(h + 1),
                    }),
                  );
                (t = t.set(v.getKey(), v)), (s = x(s, g, v));
              }
              return t;
            }, b()));
          return p;
        },
        E = function (t) {
          var e = t.entityMap,
            r = {};
          return (
            Object.keys(e).forEach(function (t) {
              var n = e[t],
                i = n.type,
                o = n.mutability,
                a = n.data;
              r[t] = u.__create(i, o, a || {});
            }),
            r
          );
        };
      t.exports = function (t) {
        Array.isArray(t.blocks) || y(!1);
        var e = E(t),
          r = C(t, e),
          n = r.isEmpty() ? new c() : c.createEmpty(r.first().getKey());
        return new a({
          blockMap: r,
          entityMap: e,
          selectionBefore: n,
          selectionAfter: n,
        });
      };
    },
    9893: function (t, e, r) {
      "use strict";
      var n = r(837512),
        i = r(65183).List;
      t.exports = function (t, e) {
        return i(
          t.map(function (t, r) {
            var i = e[r];
            return n.create({ style: t, entity: i });
          }),
        );
      };
    },
    457936: function (t, e, r) {
      "use strict";
      var n = r(733359).substr;
      t.exports = function (t, e) {
        var r = Array(t.length).fill(null);
        return (
          e &&
            e.forEach(function (e) {
              for (
                var i = n(t, 0, e.offset).length,
                  o = i + n(t, e.offset, e.length).length,
                  a = i;
                a < o;
                a++
              )
                r[a] = e.key;
            }),
          r
        );
      };
    },
    416420: function (t, e, r) {
      "use strict";
      var n = r(733359),
        i = r(65183).OrderedSet,
        o = n.substr,
        a = i();
      t.exports = function (t, e) {
        var r = Array(t.length).fill(a);
        return (
          e &&
            e.forEach(function (e) {
              for (
                var n = o(t, 0, e.offset).length,
                  i = n + o(t, e.offset, e.length).length;
                n < i;

              )
                (r[n] = r[n].add(e.style)), n++;
            }),
          r
        );
      };
    },
    786834: function (t) {
      "use strict";
      t.exports = {
        notEmptyKey: function (t) {
          return null != t && "" != t;
        },
      };
    },
    464247: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(379846),
        o = r(118658),
        a = r(563751),
        u = r(121868),
        s = r(653635),
        c = r(467159),
        l = r(843260),
        f = o.isBrowser("Firefox");
      function p(t, e, r, o, a) {
        var u = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
        return i.push(t, u, "insert-characters", a);
      }
      t.exports = function (t, e) {
        void 0 !== t._pendingStateFromBeforeInput &&
          (t.update(t._pendingStateFromBeforeInput),
          (t._pendingStateFromBeforeInput = void 0));
        var r,
          n = t._latestEditorState,
          o = e.data;
        if (!!o) {
          if (
            t.props.handleBeforeInput &&
            u(t.props.handleBeforeInput(o, n, e.timeStamp))
          ) {
            e.preventDefault();
            return;
          }
          var h = n.getSelection(),
            d = h.getStartOffset(),
            g = h.getAnchorKey();
          if (!h.isCollapsed()) {
            e.preventDefault(),
              t.update(
                p(
                  n,
                  o,
                  n.getCurrentInlineStyle(),
                  a(n.getCurrentContent(), n.getSelection()),
                  !0,
                ),
              );
            return;
          }
          var y = p(
              n,
              o,
              n.getCurrentInlineStyle(),
              a(n.getCurrentContent(), n.getSelection()),
              !1,
            ),
            v = !1;
          if (((v = s(t._latestCommittedEditorState)), !v)) {
            var m = n.getBlockTree(g),
              _ = y.getBlockTree(g);
            v =
              m.size !== _.size ||
              m.zip(_).some(function (t) {
                var e = t[0],
                  r = t[1],
                  n = e.get("start"),
                  i = n + (n >= d ? o.length : 0),
                  a = e.get("end"),
                  u = a + (a >= d ? o.length : 0),
                  s = r.get("start"),
                  c = r.get("end"),
                  l = r.get("decoratorKey");
                return (
                  e.get("decoratorKey") !== l ||
                  e.get("leaves").size !== r.get("leaves").size ||
                  i !== s ||
                  u !== c ||
                  (null != l && c - s != a - n)
                );
              });
          }
          if (!v) {
            (r = o), (v = f && ("'" == r || "/" == r));
          }
          if (
            (!v &&
              (v =
                c(y.getDirectionMap()).get(g) !==
                c(n.getDirectionMap()).get(g)),
            v)
          ) {
            e.preventDefault(),
              (y = i.set(y, { forceSelection: !0 })),
              t.update(y);
            return;
          }
          (y = i.set(y, { nativelyRenderedContent: y.getCurrentContent() })),
            (t._pendingStateFromBeforeInput = y),
            l(function () {
              void 0 !== t._pendingStateFromBeforeInput &&
                (t.update(t._pendingStateFromBeforeInput),
                (t._pendingStateFromBeforeInput = void 0));
            });
        }
      };
    },
    926047: function (t, e, r) {
      "use strict";
      var n = r(379846),
        i = r(808570),
        o = r(924125);
      t.exports = function (t, e) {
        var r = e.currentTarget.ownerDocument;
        if (!t.props.preserveSelectionOnBlur && o(r) === r.body) {
          var a = r.defaultView.getSelection(),
            u = t.editor;
          1 === a.rangeCount &&
            i(u, a.anchorNode) &&
            i(u, a.focusNode) &&
            a.removeAllRanges();
        }
        var s = t._latestEditorState,
          c = s.getSelection();
        if (!!c.getHasFocus()) {
          var l = c.set("hasFocus", !1);
          t.props.onBlur && t.props.onBlur(e),
            t.update(n.acceptSelection(s, l));
        }
      };
    },
    519755: function (t, e, r) {
      "use strict";
      var n = r(379846);
      t.exports = function (t, e) {
        t.setMode("composite"),
          t.update(n.set(t._latestEditorState, { inCompositionMode: !0 })),
          t._onCompositionStart(e);
      };
    },
    825903: function (t, e, r) {
      "use strict";
      var n = r(586968);
      t.exports = function (t, e) {
        if (t._latestEditorState.getSelection().isCollapsed()) {
          e.preventDefault();
          return;
        }
        t.setClipboard(n(t._latestEditorState));
      };
    },
    178375: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(379846),
        o = r(292489),
        a = r(586968),
        u = r(685536),
        s = r(840513);
      t.exports = function (t, e) {
        var r,
          c = t._latestEditorState,
          l = c.getSelection(),
          f = e.target;
        if (l.isCollapsed()) {
          e.preventDefault();
          return;
        }
        s(f) && (r = u(o.getScrollParent(f)));
        var p = a(c);
        t.setClipboard(p),
          t.setMode("cut"),
          setTimeout(function () {
            t.restoreEditorDOM(r),
              t.exitCurrentMode(),
              t.update(
                (function (t) {
                  var e = n.removeRange(
                    t.getCurrentContent(),
                    t.getSelection(),
                    "forward",
                  );
                  return i.push(t, e, "remove-range");
                })(c),
              );
          }, 0);
      };
    },
    368526: function (t) {
      "use strict";
      t.exports = function (t, e) {
        t.setMode("drag"), e.preventDefault();
      };
    },
    773996: function (t) {
      "use strict";
      t.exports = function (t) {
        (t._internalDrag = !0), t.setMode("drag");
      };
    },
    176356: function (t, e, r) {
      "use strict";
      var n = r(379846),
        i = r(118658);
      t.exports = function (t, e) {
        var r = t._latestEditorState,
          o = r.getSelection();
        if (!o.getHasFocus()) {
          var a = o.set("hasFocus", !0);
          t.props.onFocus && t.props.onFocus(e),
            i.isBrowser("Chrome < 60.0.3081.0")
              ? t.update(n.forceSelection(r, a))
              : t.update(n.acceptSelection(r, a));
        }
      };
    },
    843824: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(297326),
        o = r(379846),
        a = r(118658),
        u = r(786834).notEmptyKey,
        s = r(100066),
        c = r(110599),
        l = r(467159),
        f = a.isEngine("Gecko");
      t.exports = function (t, e) {
        void 0 !== t._pendingStateFromBeforeInput &&
          (t.update(t._pendingStateFromBeforeInput),
          (t._pendingStateFromBeforeInput = void 0));
        var r,
          a,
          p,
          h,
          d = t.editor.ownerDocument.defaultView.getSelection(),
          g = d.anchorNode,
          y = d.isCollapsed;
        if (
          (null == g ? void 0 : g.nodeType) === Node.TEXT_NODE ||
          (null == g ? void 0 : g.nodeType) === Node.ELEMENT_NODE
        ) {
          if (
            g.nodeType === Node.TEXT_NODE &&
            (null !== g.previousSibling || null !== g.nextSibling)
          ) {
            var v = g.parentNode;
            g.nodeValue = v.textContent;
            for (var m = v.firstChild; null !== m; m = m.nextSibling)
              m !== g && v.removeChild(m);
          }
          var _ = g.textContent,
            b = t._latestEditorState,
            S = l(s(g)),
            w = i.decode(S),
            k = w.blockKey,
            x = w.decoratorKey,
            C = w.leafKey,
            E = b.getBlockTree(k).getIn([x, "leaves", C]),
            D = E.start,
            O = E.end,
            K = b.getCurrentContent(),
            T = K.getBlockForKey(k),
            M = T.getText().slice(D, O);
          if ((_.endsWith("\n\n") && (_ = _.slice(0, -1)), _ === M)) {
            var A = e.nativeEvent.inputType;
            if (A) {
              var I = (function (t, e) {
                if ("deleteContentBackward" === t) return c(e);
                return e;
              })(A, b);
              I !== b && (t.restoreEditorDOM(), t.update(I));
            }
            return;
          }
          var B = b.getSelection(),
            R = B.merge({ anchorOffset: D, focusOffset: O, isBackward: !1 }),
            L = T.getEntityAt(D),
            N = u(L) ? K.getEntity(L) : null,
            F = "MUTABLE" === (null != N ? N.getMutability() : null),
            z = n.replaceText(
              K,
              R,
              _,
              T.getInlineStyleAt(D),
              F ? T.getEntityAt(D) : null,
            );
          if (f)
            (r = d.anchorOffset),
              (h =
                (p = D + Math.min(r, (a = d.focusOffset))) + Math.abs(r - a)),
              (r = p),
              (a = h);
          else {
            var P = _.length - M.length;
            (p = B.getStartOffset()),
              (h = B.getEndOffset()),
              (r = y ? h + P : p),
              (a = h + P);
          }
          var j = z.merge({
            selectionBefore: K.getSelectionAfter(),
            selectionAfter: B.merge({ anchorOffset: r, focusOffset: a }),
          });
          t.update(o.push(b, j, F ? "spellcheck-change" : "apply-entity"));
        }
      };
    },
    416703: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(379846),
        o = r(680444),
        a = r(574369),
        u = r(999368),
        s = r(118658),
        c = r(121868),
        l = r(608382),
        f = r(722661),
        p = r(225389),
        h = r(174076),
        d = r(71716),
        g = r(869045),
        y = r(110599),
        v = r(801539),
        m = r(887868),
        _ = r(869201),
        b = o.isOptionKeyCommand,
        S = s.isBrowser("Chrome");
      t.exports = function (t, e) {
        var r = e.which,
          o = t._latestEditorState;
        function s(r) {
          var n = t.props[r];
          return !!n && (n(e), !0);
        }
        switch (r) {
          case a.RETURN:
            if (
              (e.preventDefault(),
              t.props.handleReturn && c(t.props.handleReturn(e, o)))
            )
              return;
            break;
          case a.ESC:
            if ((e.preventDefault(), s("onEscape"))) return;
            break;
          case a.TAB:
            if (s("onTab")) return;
            break;
          case a.UP:
            if (s("onUpArrow")) return;
            break;
          case a.RIGHT:
            if (s("onRightArrow")) return;
            break;
          case a.DOWN:
            if (s("onDownArrow")) return;
            break;
          case a.LEFT:
            if (s("onLeftArrow")) return;
            break;
          case a.SPACE:
            S && b(e) && e.preventDefault();
        }
        var w = t.props.keyBindingFn(e);
        if (null == w || "" === w) {
          if (r === a.SPACE && S && b(e)) {
            var k = n.replaceText(
              o.getCurrentContent(),
              o.getSelection(),
              "\xa0",
            );
            t.update(i.push(o, k, "insert-characters"));
          }
          return;
        }
        if ("undo" === w) {
          _(e, o, t.update);
          return;
        }
        if (
          (e.preventDefault(),
          !(
            t.props.handleKeyCommand &&
            c(t.props.handleKeyCommand(w, o, e.timeStamp))
          ))
        ) {
          var x = (function (t, e, r) {
            switch (t) {
              case "redo":
                return i.redo(e);
              case "delete":
                return v(e);
              case "delete-word":
                return p(e);
              case "backspace":
                return y(e);
              case "backspace-word":
                return f(e);
              case "backspace-to-start-of-line":
                return l(e, r);
              case "split-block":
                return h(e);
              case "transpose-characters":
                return m(e);
              case "move-selection-to-start-of-block":
                return g(e);
              case "move-selection-to-end-of-block":
                return d(e);
              case "secondary-cut":
                return u.cut(e);
              case "secondary-paste":
                return u.paste(e);
              default:
                return e;
            }
          })(w, o, e);
          x !== o && t.update(x);
        }
      };
    },
    792317: function (t, e, r) {
      "use strict";
      var n = r(73009),
        i = r(837512),
        o = r(198392),
        a = r(310176),
        u = r(768784),
        s = r(379846),
        c = r(639256),
        l = r(563751),
        f = r(952616),
        p = r(121868),
        h = r(158971);
      function d(t, e, r) {
        var n = a.replaceWithFragment(
          t.getCurrentContent(),
          t.getSelection(),
          e,
        );
        return s.push(t, n.set("entityMap", r), "insert-fragment");
      }
      t.exports = function (t, e) {
        e.preventDefault();
        var r = new o(e.clipboardData);
        if (!r.isRichText()) {
          var g = r.getFiles(),
            y = r.getText();
          if (g.length > 0) {
            if (t.props.handlePastedFiles && p(t.props.handlePastedFiles(g)))
              return;
            f(g, function (e) {
              if (!!(e = e || y)) {
                var r = t._latestEditorState,
                  o = h(e),
                  f = i.create({
                    style: r.getCurrentInlineStyle(),
                    entity: l(r.getCurrentContent(), r.getSelection()),
                  }),
                  p = c.getCurrentBlockType(r),
                  d = u.processText(o, f, p),
                  g = n.createFromArray(d),
                  v = a.replaceWithFragment(
                    r.getCurrentContent(),
                    r.getSelection(),
                    g,
                  );
                t.update(s.push(r, v, "insert-fragment"));
              }
            });
            return;
          }
        }
        var v = [],
          m = r.getText(),
          _ = r.getHTML(),
          b = t._latestEditorState;
        if (
          !(t.props.handlePastedText && p(t.props.handlePastedText(m, _, b)))
        ) {
          if ((m && (v = h(m)), !t.props.stripPastedStyles)) {
            var S = t.getClipboard();
            if (r.isRichText() && S) {
              if (
                -1 !== _.indexOf(t.getEditorKey()) ||
                (1 === v.length && 1 === S.size && S.first().getText() === m)
              ) {
                t.update(d(t._latestEditorState, S));
                return;
              }
            } else if (
              S &&
              r.types.includes("com.apple.webarchive") &&
              !r.types.includes("text/html") &&
              (function (t, e) {
                return (
                  t.length === e.size &&
                  e.valueSeq().every(function (e, r) {
                    return e.getText() === t[r];
                  })
                );
              })(v, S)
            ) {
              t.update(d(t._latestEditorState, S));
              return;
            }
            if (_) {
              var w = u.processHTML(_, t.props.blockRenderMap);
              if (w) {
                var k = w.contentBlocks,
                  x = w.entityMap;
                if (k) {
                  var C = n.createFromArray(k);
                  t.update(d(t._latestEditorState, C, x));
                  return;
                }
              }
            }
            t.setClipboard(null);
          }
          if (v.length) {
            var E = i.create({
                style: b.getCurrentInlineStyle(),
                entity: l(b.getCurrentContent(), b.getSelection()),
              }),
              D = c.getCurrentBlockType(b),
              O = u.processText(v, E, D),
              K = n.createFromArray(O);
            t.update(d(t._latestEditorState, K));
          }
        }
      };
    },
    531272: function (t, e, r) {
      "use strict";
      var n = r(887109),
        i = r(379846),
        o = r(172213),
        a = r(482789);
      t.exports = function (t) {
        if (
          t._blockSelectEvents ||
          t._latestEditorState !== t.props.editorState
        ) {
          if (t._blockSelectEvents) {
            var e = t.props.editorState.getSelection();
            n.logBlockedSelectionEvent({
              anonymizedDom: "N/A",
              extraParams: JSON.stringify({ stacktrace: Error().stack }),
              selectionState: JSON.stringify(e.toJS()),
            });
          }
          return;
        }
        var r = t.props.editorState,
          u = a(r, o(t)),
          s = u.selectionState;
        s !== r.getSelection() &&
          ((r = u.needsRecovery
            ? i.forceSelection(r, s)
            : i.acceptSelection(r, s)),
          t.update(r));
      };
    },
    56720: function (t, e, r) {
      "use strict";
      var n = r(846362),
        i = r(733359).strlen;
      t.exports = function (t, e) {
        var r = [];
        return (
          t.findEntityRanges(
            function (t) {
              return !!t.getEntity();
            },
            function (o, a) {
              var u = t.getText(),
                s = t.getEntityAt(o);
              r.push({
                offset: i(u.slice(0, o)),
                length: i(u.slice(o, a)),
                key: Number(e[n.stringify(s)]),
              });
            },
          ),
          r
        );
      };
    },
    979037: function (t, e, r) {
      "use strict";
      var n = r(733359),
        i = r(531463),
        o = function (t, e) {
          return t === e;
        },
        a = function (t) {
          return !!t;
        },
        u = [];
      t.exports = function (t) {
        var e = t
            .getCharacterList()
            .map(function (t) {
              return t.getStyle();
            })
            .toList(),
          r = e
            .flatten()
            .toSet()
            .map(function (r) {
              var u, s, c, l;
              return (
                (u = t),
                (s = e),
                (c = r),
                (l = []),
                i(
                  s
                    .map(function (t) {
                      return t.has(c);
                    })
                    .toList(),
                  o,
                  a,
                  function (t, e) {
                    var r = u.getText();
                    l.push({
                      offset: n.strlen(r.slice(0, t)),
                      length: n.strlen(r.slice(t, e)),
                      style: c,
                    });
                  },
                ),
                l
              );
            });
        return Array.prototype.concat.apply(u, r.toJS());
      };
    },
    278203: function (t, e, r) {
      "use strict";
      var n = r(733359),
        i = r(488959),
        o = r(75032),
        a = r(581079);
      function u(t, e) {
        for (
          var r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, a = 0;
          a < t.length;
          a++
        ) {
          var u = t[a];
          if (0 !== u.width && 1 !== u.width)
            (r = Math.min(r, u.top)),
              (n = Math.min(n, u.bottom)),
              (i = Math.max(i, u.top)),
              (o = Math.max(o, u.bottom));
        }
        return i <= n && i - r < e && o - n < e;
      }
      t.exports = function (t) {
        t.collapsed || a(!1);
        var e,
          r,
          s,
          c,
          l,
          f,
          p = (t = t.cloneRange()).startContainer;
        1 !== p.nodeType && (p = p.parentNode);
        var h =
            ((r = getComputedStyle((e = p))),
            ((c = (s = i(e)).createElement("div")).style.fontFamily =
              r.fontFamily),
            (c.style.fontSize = r.fontSize),
            (c.style.fontStyle = r.fontStyle),
            (c.style.fontWeight = r.fontWeight),
            (c.style.lineHeight = r.lineHeight),
            (c.style.position = "absolute"),
            (c.textContent = "M"),
            (l = s.body) || a(!1),
            l.appendChild(c),
            (f = c.getBoundingClientRect()),
            l.removeChild(c),
            f.height),
          d = t.endContainer,
          g = t.endOffset;
        for (
          t.setStart(t.startContainer, 0);
          u(o(t), h) &&
          ((d = t.startContainer),
          (g = t.startOffset),
          d.parentNode || a(!1),
          t.setStartBefore(d),
          1 !== d.nodeType || "inline" === getComputedStyle(d).display);

        );
        for (var y = d, v = g - 1; ; ) {
          for (var m = y.nodeValue, _ = v; _ >= 0; _--) {
            if (!(null != m && _ > 0 && n.isSurrogatePair(m, _ - 1)))
              if ((t.setStart(y, _), u(o(t), h))) (d = y), (g = _);
              else break;
          }
          if (-1 === _ || 0 === y.childNodes.length) break;
          v = (function (t) {
            switch (t.nodeType) {
              case Node.DOCUMENT_TYPE_NODE:
                return 0;
              case Node.TEXT_NODE:
              case Node.PROCESSING_INSTRUCTION_NODE:
              case Node.COMMENT_NODE:
                return t.length;
              default:
                return t.childNodes.length;
            }
          })((y = y.childNodes[_]));
        }
        return t.setStart(d, g), t;
      };
    },
    100066: function (t, e, r) {
      "use strict";
      var n = r(488959),
        i = r(578727);
      t.exports = function (t) {
        for (var e = t; e && e !== n(t).documentElement; ) {
          var r = i(e);
          if (null != r) return r;
          e = e.parentNode;
        }
        return null;
      };
    },
    531463: function (t) {
      "use strict";
      t.exports = function (t, e, r, n) {
        if (!!t.size) {
          var i = 0;
          t.reduce(function (t, o, a) {
            return !e(t, o) && (r(t) && n(i, a), (i = a)), o;
          }),
            r(t.last()) && n(i, t.count());
        }
      };
    },
    680643: function (t) {
      "use strict";
      var e = {};
      t.exports = function () {
        for (var t; void 0 === t || e.hasOwnProperty(t) || !isNaN(+t); )
          t = Math.floor(16777216 * Math.random()).toString(32);
        return (e[t] = !0), t;
      };
    },
    149808: function (t, e, r) {
      "use strict";
      var n = r(556019),
        i = r(464762),
        o = r(581079);
      function a(t, e, r, a, u, s, c) {
        var l = r.getStartOffset(),
          f = r.getEndOffset(),
          p = t.__get(u).getMutability(),
          h = c ? l : f;
        if ("MUTABLE" === p) return r;
        var d = i(e, u).filter(function (t) {
          return h <= t.end && h >= t.start;
        });
        1 != d.length && o(!1);
        var g = d[0];
        if ("IMMUTABLE" === p)
          return r.merge({
            anchorOffset: g.start,
            focusOffset: g.end,
            isBackward: !1,
          });
        !s && (c ? (f = g.end) : (l = g.start));
        var y = n.getRemovalRange(
          l,
          f,
          e.getText().slice(g.start, g.end),
          g.start,
          a,
        );
        return r.merge({
          anchorOffset: y.start,
          focusOffset: y.end,
          isBackward: !1,
        });
      }
      t.exports = function (t, e, r, n, i) {
        var o = n.getStartOffset(),
          u = n.getEndOffset(),
          s = e.getEntityAt(o),
          c = r.getEntityAt(u - 1);
        if (!s && !c) return n;
        var l = n;
        if (s && s === c) l = a(t, e, l, i, s, !0, !0);
        else if (s && c) {
          var f = a(t, e, l, i, s, !1, !0),
            p = a(t, r, l, i, c, !1, !1);
          l = l.merge({
            anchorOffset: f.getAnchorOffset(),
            focusOffset: p.getFocusOffset(),
            isBackward: !1,
          });
        } else if (s) {
          var h = a(t, e, l, i, s, !1, !0);
          l = l.merge({ anchorOffset: h.getStartOffset(), isBackward: !1 });
        } else if (c) {
          var d = a(t, r, l, i, c, !1, !1);
          l = l.merge({ focusOffset: d.getEndOffset(), isBackward: !1 });
        }
        return l;
      };
    },
    172213: function (t, e, r) {
      "use strict";
      var n = r(581079),
        i = r(822274);
      t.exports = function (t) {
        var e = t.editorContainer;
        return e || n(!1), i(e.firstChild) || n(!1), e.firstChild;
      };
    },
    624001: function (t, e, r) {
      "use strict";
      var n = r(381165),
        i = r(351612);
      t.exports = function (t, e) {
        var r = e.getStartKey(),
          o = e.getStartOffset(),
          a = e.getEndKey(),
          u = e.getEndOffset(),
          s = i(t, e).getBlockMap(),
          c = s.keySeq(),
          l = c.indexOf(r),
          f = c.indexOf(a) + 1;
        return n(
          s.slice(l, f).map(function (t, e) {
            var n = t.getText(),
              i = t.getCharacterList();
            return r === a
              ? t.merge({ text: n.slice(o, u), characterList: i.slice(o, u) })
              : e === r
                ? t.merge({ text: n.slice(o), characterList: i.slice(o) })
                : e === a
                  ? t.merge({
                      text: n.slice(0, u),
                      characterList: i.slice(0, u),
                    })
                  : t;
          }),
        );
      };
    },
    488959: function (t) {
      "use strict";
      t.exports = function (t) {
        return t && t.ownerDocument ? t.ownerDocument : document;
      };
    },
    421520: function (t, e, r) {
      "use strict";
      var n = r(680444),
        i = r(574369),
        o = r(118658),
        a = o.isPlatform("Mac OS X"),
        u = a && o.isBrowser("Firefox < 29"),
        s = n.hasCommandModifier,
        c = n.isCtrlKeyCommand;
      function l(t) {
        return (a && t.altKey) || c(t);
      }
      t.exports = function (t) {
        var e, r, n;
        switch (t.keyCode) {
          case 66:
            return s(t) ? "bold" : null;
          case 68:
            return c(t) ? "delete" : null;
          case 72:
            return c(t) ? "backspace" : null;
          case 73:
            return s(t) ? "italic" : null;
          case 74:
            return s(t) ? "code" : null;
          case 75:
            return a && c(t) ? "secondary-cut" : null;
          case 77:
          case 79:
            return c(t) ? "split-block" : null;
          case 84:
            return a && c(t) ? "transpose-characters" : null;
          case 85:
            return s(t) ? "underline" : null;
          case 87:
            return a && c(t) ? "backspace-word" : null;
          case 89:
            if (c(t)) return a ? "secondary-paste" : "redo";
            return null;
          case 90:
            return (s((e = t)) ? (e.shiftKey ? "redo" : "undo") : null) || null;
          case i.RETURN:
            return "split-block";
          case i.DELETE:
            return (
              (r = t), !a && r.shiftKey ? null : l(r) ? "delete-word" : "delete"
            );
          case i.BACKSPACE:
            return s((n = t)) && a
              ? "backspace-to-start-of-line"
              : l(n)
                ? "backspace-word"
                : "backspace";
          case i.LEFT:
            return u && s(t) ? "move-selection-to-start-of-block" : null;
          case i.RIGHT:
            return u && s(t) ? "move-selection-to-end-of-block" : null;
          default:
            return null;
        }
      };
    },
    482789: function (t, e, r) {
      "use strict";
      var n = r(158225);
      t.exports = function (t, e) {
        var r = e.ownerDocument.defaultView.getSelection();
        return 0 === r.rangeCount
          ? {
              selectionState: t.getSelection().set("hasFocus", !1),
              needsRecovery: !1,
            }
          : n(t, e, r.anchorNode, r.anchorOffset, r.focusNode, r.focusOffset);
      };
    },
    158225: function (t, e, r) {
      "use strict";
      var n = r(100066),
        i = r(578727),
        o = r(880353),
        a = r(581079),
        u = r(660610),
        s = r(467159);
      function c(t, e, r) {
        var o = e,
          c = n(o);
        if (
          (null != c || (t && (t === o || t.firstChild === o)) || a(!1),
          t === o &&
            (u((o = o.firstChild)) || a(!1),
            "true" !== o.getAttribute("data-contents") && a(!1),
            r > 0 && (r = o.childNodes.length)),
          0 === r)
        ) {
          var f = null;
          if (null != c) f = c;
          else {
            var p = (function (t) {
              for (
                ;
                t.firstChild &&
                ((u(t.firstChild) &&
                  "true" === t.firstChild.getAttribute("data-blocks")) ||
                  i(t.firstChild));

              )
                t = t.firstChild;
              return t;
            })(o);
            f = s(i(p));
          }
          return { key: f, offset: 0 };
        }
        var h = o.childNodes[r - 1],
          d = null,
          g = null;
        if (i(h)) {
          var y = (function (t) {
            for (
              ;
              t.lastChild &&
              ((u(t.lastChild) &&
                "true" === t.lastChild.getAttribute("data-blocks")) ||
                i(t.lastChild));

            )
              t = t.lastChild;
            return t;
          })(h);
          (d = s(i(y))), (g = l(y));
        } else (d = s(c)), (g = l(h));
        return { key: d, offset: g };
      }
      function l(t) {
        var e = t.textContent;
        return "\n" === e ? 0 : e.length;
      }
      t.exports = function (t, e, r, i, a, u) {
        var l = r.nodeType === Node.TEXT_NODE,
          f = a.nodeType === Node.TEXT_NODE;
        if (l && f)
          return {
            selectionState: o(t, s(n(r)), i, s(n(a)), u),
            needsRecovery: !1,
          };
        var p = null,
          h = null,
          d = !0;
        return (
          l
            ? ((p = { key: s(n(r)), offset: i }), (h = c(e, a, u)))
            : f
              ? ((h = { key: s(n(a)), offset: u }), (p = c(e, r, i)))
              : ((p = c(e, r, i)),
                (h = c(e, a, u)),
                r === a &&
                  i === u &&
                  (d = !!r.firstChild && "BR" !== r.firstChild.nodeName)),
          {
            selectionState: o(t, p.key, p.offset, h.key, h.offset),
            needsRecovery: d,
          }
        );
      };
    },
    563751: function (t, e, r) {
      "use strict";
      var n = r(786834).notEmptyKey;
      function i(t, e) {
        return n(e)
          ? "MUTABLE" === t.__get(e).getMutability()
            ? e
            : null
          : null;
      }
      t.exports = function (t, e) {
        if (e.isCollapsed()) {
          var r,
            n = e.getAnchorKey(),
            o = e.getAnchorOffset();
          if (o > 0)
            return (r = t.getBlockForKey(n).getEntityAt(o - 1)) !==
              t.getBlockForKey(n).getEntityAt(o)
              ? null
              : i(t.getEntityMap(), r);
          return null;
        }
        var a = e.getStartKey(),
          u = e.getStartOffset(),
          s = t.getBlockForKey(a);
        return (
          (r = u === s.getLength() ? null : s.getEntityAt(u)),
          i(t.getEntityMap(), r)
        );
      };
    },
    586968: function (t, e, r) {
      "use strict";
      var n = r(624001);
      t.exports = function (t) {
        var e = t.getSelection();
        return e.isCollapsed() ? null : n(t.getCurrentContent(), e);
      };
    },
    195961: function (t, e, r) {
      "use strict";
      var n = r(546870);
      t.exports = function (t, e) {
        if (!(t instanceof n)) return null;
        var r = t.getNextSiblingKey();
        if (r) return r;
        var i = t.getParentKey();
        if (!i) return null;
        for (var o = e.get(i); o && !o.getNextSiblingKey(); ) {
          var a = o.getParentKey();
          o = a ? e.get(a) : null;
        }
        return o ? o.getNextSiblingKey() : null;
      };
    },
    489727: function (t, e, r) {
      "use strict";
      var n = r(75032);
      t.exports = function (t) {
        var e = n(t),
          r = 0,
          i = 0,
          o = 0,
          a = 0;
        if (e.length) {
          if (e.length > 1 && 0 === e[0].width) {
            var u = e[1];
            (r = u.top), (i = u.right), (o = u.bottom), (a = u.left);
          } else {
            var s = e[0];
            (r = s.top), (i = s.right), (o = s.bottom), (a = s.left);
          }
          for (var c = 1; c < e.length; c++) {
            var l = e[c];
            0 !== l.height &&
              0 !== l.width &&
              ((r = Math.min(r, l.top)),
              (i = Math.max(i, l.right)),
              (o = Math.max(o, l.bottom)),
              (a = Math.min(a, l.left)));
          }
        }
        return {
          top: r,
          right: i,
          bottom: o,
          left: a,
          width: i - a,
          height: o - r,
        };
      };
    },
    75032: function (t, e, r) {
      "use strict";
      var n = r(118658),
        i = r(581079),
        o = n.isBrowser("Chrome"),
        a = o
          ? function (t) {
              for (
                var e = t.cloneRange(), r = [], n = t.endContainer;
                null != n;
                n = n.parentNode
              ) {
                var o,
                  a = n === t.commonAncestorContainer;
                a
                  ? e.setStart(t.startContainer, t.startOffset)
                  : e.setStart(e.endContainer, 0);
                var u = Array.from(e.getClientRects());
                if ((r.push(u), a))
                  return r.reverse(), (o = []).concat.apply(o, r);
                e.setEndBefore(n);
              }
              i(!1);
            }
          : function (t) {
              return Array.from(t.getClientRects());
            };
      t.exports = a;
    },
    464762: function (t, e, r) {
      "use strict";
      var n = r(581079);
      t.exports = function (t, e) {
        var r = [];
        return (
          t.findEntityRanges(
            function (t) {
              return t.getEntity() === e;
            },
            function (t, e) {
              r.push({ start: t, end: e });
            },
          ),
          r.length || n(!1),
          r
        );
      };
    },
    490540: function (t, e, r) {
      "use strict";
      var n = r(118658),
        i = r(581079),
        o = n.isBrowser("IE <= 9");
      t.exports = function (t) {
        var e,
          r = null;
        return (
          !o &&
            document.implementation &&
            document.implementation.createHTMLDocument &&
            ((e = document.implementation.createHTMLDocument("foo"))
              .documentElement || i(!1),
            (e.documentElement.innerHTML = t),
            (r = e.getElementsByTagName("body")[0])),
          r
        );
      };
    },
    578727: function (t, e, r) {
      "use strict";
      var n = r(660610);
      t.exports = function t(e) {
        if (n(e)) {
          var r = e.getAttribute("data-offset-key");
          if (r) return r;
          for (var i = 0; i < e.childNodes.length; i++) {
            var o = t(e.childNodes[i]);
            if (o) return o;
          }
        }
        return null;
      };
    },
    952616: function (t, e, r) {
      "use strict";
      var n = r(581079),
        i = /\.textClipping$/,
        o = { "text/plain": !0, "text/html": !0, "text/rtf": !0 };
      t.exports = function (t, e) {
        var a = 0,
          u = [];
        t.forEach(function (s) {
          (function (t, e) {
            if (!r.g.FileReader || (t.type && !(t.type in o))) {
              e("");
              return;
            }
            if ("" === t.type) {
              var a = "";
              i.test(t.name) && (a = t.name.replace(i, "")), e(a);
              return;
            }
            var u = new FileReader();
            (u.onload = function () {
              var t = u.result;
              "string" != typeof t && n(!1), e(t);
            }),
              (u.onerror = function () {
                e("");
              }),
              u.readAsText(t);
          })(s, function (r) {
            a++, r && u.push(r.slice(0, 5e3)), a == t.length && e(u.join("\r"));
          });
        });
      };
    },
    880353: function (t, e, r) {
      "use strict";
      var n = r(297326),
        i = r(467159);
      t.exports = function (t, e, r, o, a) {
        var u = i(t.getSelection()),
          s = n.decode(e),
          c = s.blockKey,
          l = t.getBlockTree(c),
          f = l && l.getIn([s.decoratorKey, "leaves", s.leafKey]),
          p = n.decode(o),
          h = p.blockKey,
          d = t.getBlockTree(h),
          g = d && d.getIn([p.decoratorKey, "leaves", p.leafKey]);
        if (!f || !g) return u;
        var y = f.get("start"),
          v = g.get("start"),
          m = f ? y + r : null,
          _ = g ? v + a : null;
        if (
          u.getAnchorKey() === c &&
          u.getAnchorOffset() === m &&
          u.getFocusKey() === h &&
          u.getFocusOffset() === _
        )
          return u;
        var b = !1;
        if (c === h) {
          var S = f.get("end"),
            w = g.get("end");
          b = v === y && w === S ? a < r : v < y;
        } else
          b =
            t
              .getCurrentContent()
              .getBlockMap()
              .keySeq()
              .skipUntil(function (t) {
                return t === c || t === h;
              })
              .first() === h;
        return u.merge({
          anchorKey: c,
          anchorOffset: m,
          focusKey: h,
          focusOffset: _,
          isBackward: b,
        });
      };
    },
    180936: function (t, e, r) {
      "use strict";
      var n = r(489727);
      t.exports = function (t) {
        var e = t.getSelection();
        if (!e.rangeCount) return null;
        var r = n(e.getRangeAt(0)),
          i = r.top,
          o = r.right,
          a = r.bottom,
          u = r.left;
        return 0 === i && 0 === o && 0 === a && 0 === u ? null : r;
      };
    },
    519827: function (t) {
      "use strict";
      t.exports = function (t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView
          ? t.ownerDocument.defaultView
          : window;
      };
    },
    316103: function (t) {
      "use strict";
      t.exports = function (t) {
        return (
          "undefined" != typeof window &&
          !!window.__DRAFT_GKX &&
          !!window.__DRAFT_GKX[t]
        );
      };
    },
    360870: function (t, e, r) {
      "use strict";
      var n = r(73009),
        i = r(546870),
        o = r(65183),
        a = r(436048),
        u = r(581079),
        s = r(381165),
        c = o.List,
        l = function (t, e, r, n, i, o) {
          var u =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : "REPLACE_WITH_NEW_DATA",
            s = r.get(i),
            c = s.getText(),
            l = s.getCharacterList(),
            f = o + n.getText().length,
            p = null;
          switch (u) {
            case "MERGE_OLD_DATA_TO_NEW_DATA":
              p = n.getData().merge(s.getData());
              break;
            case "REPLACE_WITH_NEW_DATA":
              p = n.getData();
          }
          var h = s.merge({
            text: c.slice(0, o) + n.getText() + c.slice(o),
            characterList: a(l, n.getCharacterList(), o),
            data: p,
          });
          return t.merge({
            blockMap: r.set(i, h),
            selectionBefore: e,
            selectionAfter: e.merge({
              anchorKey: i,
              anchorOffset: f,
              focusKey: i,
              focusOffset: f,
              isBackward: !1,
            }),
          });
        },
        f = function (t, e, r) {
          var n = t.getText(),
            i = t.getCharacterList(),
            o = n.slice(0, e),
            a = i.slice(0, e),
            u = r.first();
          return t.merge({
            text: o + u.getText(),
            characterList: a.concat(u.getCharacterList()),
            type: o ? t.getType() : u.getType(),
            data: u.getData(),
          });
        },
        p = function (t, e, r) {
          var n = t.getText(),
            i = t.getCharacterList(),
            o = n.length,
            a = n.slice(e, o),
            u = i.slice(e, o),
            s = r.last();
          return s.merge({
            text: s.getText() + a,
            characterList: s.getCharacterList().concat(u),
            data: s.getData(),
          });
        },
        h = function (t, e) {
          var r = t.getKey(),
            n = t,
            i = [];
          for (e.get(r) && i.push(r); n && n.getNextSiblingKey(); ) {
            var o = n.getNextSiblingKey();
            if (!o) break;
            i.push(o), (n = e.get(o));
          }
          return i;
        },
        d = function (t, e, r, o, a, u) {
          var s,
            l,
            d,
            g,
            y = r.first() instanceof i,
            v = [],
            m = o.size,
            _ = r.get(a),
            b = o.first(),
            S = o.last(),
            w = S.getLength(),
            k = S.getKey(),
            x =
              y && (!_.getChildKeys().isEmpty() || !b.getChildKeys().isEmpty());
          r.forEach(function (t, e) {
            if (e !== a) {
              v.push(t);
              return;
            }
            x ? v.push(t) : v.push(f(t, u, o)),
              o.slice(x ? 0 : 1, m - 1).forEach(function (t) {
                return v.push(t);
              }),
              v.push(p(t, u, o));
          });
          var C = n.createFromArray(v);
          if (y) {
            (s = C),
              (l = 0),
              (d = _),
              (g = b),
              (C = s.withMutations(function (t) {
                var e = d.getKey(),
                  r = g.getKey(),
                  n = d.getNextSiblingKey(),
                  i = d.getParentKey(),
                  o = h(g, s),
                  a = o[o.length - 1];
                if (
                  (t.get(r)
                    ? (t.setIn([e, "nextSibling"], r),
                      t.setIn([r, "prevSibling"], e))
                    : (t.setIn([e, "nextSibling"], g.getNextSiblingKey()),
                      t.setIn([g.getNextSiblingKey(), "prevSibling"], e)),
                  t.setIn([a, "nextSibling"], n),
                  n && t.setIn([n, "prevSibling"], a),
                  o.forEach(function (e) {
                    return t.setIn([e, "parent"], i);
                  }),
                  i)
                ) {
                  var u = s.get(i).getChildKeys(),
                    l = u.indexOf(e),
                    f = u.toArray();
                  f.splice.apply(f, [l + 1, 0].concat(o)),
                    t.setIn([i, "children"], c(f));
                }
              }));
          }
          return t.merge({
            blockMap: C,
            selectionBefore: e,
            selectionAfter: e.merge({
              anchorKey: k,
              anchorOffset: w,
              focusKey: k,
              focusOffset: w,
              isBackward: !1,
            }),
          });
        };
      t.exports = function (t, e, r) {
        var n =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "REPLACE_WITH_NEW_DATA";
        e.isCollapsed() || u(!1);
        var o = t.getBlockMap(),
          a = s(r),
          c = e.getStartKey(),
          f = e.getStartOffset(),
          p = o.get(c);
        return (p instanceof i && (p.getChildKeys().isEmpty() || u(!1)),
        1 === a.size)
          ? l(t, e, o, a.first(), c, f, n)
          : d(t, e, o, a, c, f);
      };
    },
    436048: function (t) {
      "use strict";
      t.exports = function (t, e, r) {
        var n = t;
        if (r === n.count())
          e.forEach(function (t) {
            n = n.push(t);
          });
        else if (0 === r)
          e.reverse().forEach(function (t) {
            n = n.unshift(t);
          });
        else {
          var i = n.slice(0, r),
            o = n.slice(r);
          n = i.concat(e, o).toList();
        }
        return n;
      };
    },
    867864: function (t, e, r) {
      "use strict";
      var n = r(65183),
        i = r(436048),
        o = r(581079),
        a = n.Repeat;
      t.exports = function (t, e, r, n) {
        e.isCollapsed() || o(!1);
        var u = null;
        if ((null != r && (u = r.length), null == u || 0 === u)) return t;
        var s = t.getBlockMap(),
          c = e.getStartKey(),
          l = e.getStartOffset(),
          f = s.get(c),
          p = f.getText(),
          h = f.merge({
            text: p.slice(0, l) + r + p.slice(l, f.getLength()),
            characterList: i(f.getCharacterList(), a(n, u).toList(), l),
          }),
          d = l + u;
        return t.merge({
          blockMap: s.set(c, h),
          selectionAfter: e.merge({ anchorOffset: d, focusOffset: d }),
        });
      };
    },
    660610: function (t) {
      "use strict";
      t.exports = function (t) {
        return !!t && !!t.ownerDocument && t.nodeType === Node.ELEMENT_NODE;
      };
    },
    121868: function (t) {
      "use strict";
      t.exports = function (t) {
        return "handled" === t || !0 === t;
      };
    },
    407734: function (t, e, r) {
      "use strict";
      var n = r(660610);
      t.exports = function (t) {
        return !!t && !!t.ownerDocument && n(t) && "A" === t.nodeName;
      };
    },
    45623: function (t, e, r) {
      "use strict";
      var n = r(660610);
      t.exports = function (t) {
        return !!t && !!t.ownerDocument && n(t) && "BR" === t.nodeName;
      };
    },
    822274: function (t) {
      "use strict";
      t.exports = function (t) {
        return (
          !!t &&
          !!t.ownerDocument &&
          (t.ownerDocument.defaultView
            ? t instanceof t.ownerDocument.defaultView.HTMLElement || !1
            : t instanceof HTMLElement)
        );
      };
    },
    710621: function (t, e, r) {
      "use strict";
      var n = r(660610);
      t.exports = function (t) {
        return !!t && !!t.ownerDocument && n(t) && "IMG" === t.nodeName;
      };
    },
    840513: function (t) {
      "use strict";
      t.exports = function (t) {
        if (!t || !("ownerDocument" in t)) return !1;
        if ("ownerDocument" in t) {
          if (!t.ownerDocument.defaultView) return t instanceof Node;
          if (t instanceof t.ownerDocument.defaultView.Node) return !0;
        }
        return !1;
      };
    },
    653635: function (t) {
      "use strict";
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getAnchorKey(),
          n = t.getBlockTree(r),
          i = e.getStartOffset(),
          o = !1;
        return (
          n.some(function (t) {
            return i === t.get("start")
              ? ((o = !0), !0)
              : !!(i < t.get("end")) &&
                  t.get("leaves").some(function (t) {
                    return i === t.get("start") && ((o = !0), !0);
                  });
          }),
          o
        );
      };
    },
    668342: function (t, e, r) {
      "use strict";
      var n = r(574369);
      t.exports = function (t) {
        return (
          t.which === n.RETURN &&
          (t.getModifierState("Shift") ||
            t.getModifierState("Alt") ||
            t.getModifierState("Control"))
        );
      };
    },
    608382: function (t, e, r) {
      "use strict";
      var n = r(379846),
        i = r(278203),
        o = r(158225),
        a = r(242891),
        u = r(235767);
      t.exports = function (t, e) {
        var r = u(
          t,
          function (t) {
            var r = t.getSelection();
            if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
            var n = e.currentTarget.ownerDocument.defaultView
              .getSelection()
              .getRangeAt(0);
            return o(
              t,
              null,
              (n = i(n)).endContainer,
              n.endOffset,
              n.startContainer,
              n.startOffset,
            ).selectionState;
          },
          "backward",
        );
        return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range");
      };
    },
    722661: function (t, e, r) {
      "use strict";
      var n = r(33012),
        i = r(379846),
        o = r(242891),
        a = r(235767);
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = e.getStartOffset();
            if (0 === r) return o(t, 1);
            var i = e.getStartKey(),
              a = t.getCurrentContent().getBlockForKey(i).getText().slice(0, r);
            return o(t, n.getBackward(a).length || 1);
          },
          "backward",
        );
        return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range");
      };
    },
    225389: function (t, e, r) {
      "use strict";
      var n = r(33012),
        i = r(379846),
        o = r(70440),
        a = r(235767);
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = e.getStartOffset(),
              i = e.getStartKey(),
              a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
            return o(t, n.getForward(a).length || 1);
          },
          "forward",
        );
        return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range");
      };
    },
    174076: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(379846);
      t.exports = function (t) {
        var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
        return i.push(t, e, "split-block");
      };
    },
    71716: function (t, e, r) {
      "use strict";
      var n = r(379846);
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getEndKey(),
          i = t.getCurrentContent().getBlockForKey(r).getLength();
        return n.set(t, {
          selection: e.merge({
            anchorKey: r,
            anchorOffset: i,
            focusKey: r,
            focusOffset: i,
            isBackward: !1,
          }),
          forceSelection: !0,
        });
      };
    },
    869045: function (t, e, r) {
      "use strict";
      var n = r(379846);
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getStartKey();
        return n.set(t, {
          selection: e.merge({
            anchorKey: r,
            anchorOffset: 0,
            focusKey: r,
            focusOffset: 0,
            isBackward: !1,
          }),
          forceSelection: !0,
        });
      };
    },
    110599: function (t, e, r) {
      "use strict";
      var n = r(379846),
        i = r(733359),
        o = r(242891),
        a = r(235767);
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = e.getAnchorKey(),
              a = e.getAnchorOffset(),
              u = r.getBlockForKey(n).getText()[a - 1];
            return o(t, u ? i.getUTF16Length(u, 0) : 1);
          },
          "backward",
        );
        if (e === t.getCurrentContent()) return t;
        var r = t.getSelection();
        return n.push(
          t,
          e.set("selectionBefore", r),
          r.isCollapsed() ? "backspace-character" : "remove-range",
        );
      };
    },
    801539: function (t, e, r) {
      "use strict";
      var n = r(379846),
        i = r(733359),
        o = r(70440),
        a = r(235767);
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = e.getAnchorKey(),
              a = e.getAnchorOffset(),
              u = r.getBlockForKey(n).getText()[a];
            return o(t, u ? i.getUTF16Length(u, 0) : 1);
          },
          "forward",
        );
        if (e === t.getCurrentContent()) return t;
        var r = t.getSelection();
        return n.push(
          t,
          e.set("selectionBefore", r),
          r.isCollapsed() ? "delete-character" : "remove-range",
        );
      };
    },
    887868: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(379846),
        o = r(624001);
      t.exports = function (t) {
        var e,
          r,
          a = t.getSelection();
        if (!a.isCollapsed()) return t;
        var u = a.getAnchorOffset();
        if (0 === u) return t;
        var s = a.getAnchorKey(),
          c = t.getCurrentContent(),
          l = c.getBlockForKey(s).getLength();
        if (l <= 1) return t;
        u === l
          ? ((e = a.set("anchorOffset", u - 1)), (r = a))
          : (r = (e = a.set("focusOffset", u + 1)).set("anchorOffset", u + 1));
        var f = o(c, e),
          p = n.removeRange(c, e, "backward"),
          h = p.getSelectionAfter(),
          d = h.getAnchorOffset() - 1,
          g = h.merge({ anchorOffset: d, focusOffset: d }),
          y = n.replaceWithFragment(p, g, f),
          v = i.push(t, y, "insert-fragment");
        return i.acceptSelection(v, r);
      };
    },
    869201: function (t, e, r) {
      "use strict";
      var n = r(379846);
      t.exports = function (t, e, r) {
        var i = n.undo(e);
        if ("spellcheck-change" === e.getLastChangeType()) {
          var o = i.getCurrentContent();
          r(n.set(i, { nativelyRenderedContent: o }));
          return;
        }
        if ((t.preventDefault(), !e.getNativelyRenderedContent())) {
          r(i);
          return;
        }
        r(n.set(e, { nativelyRenderedContent: null })),
          setTimeout(function () {
            r(i);
          }, 0);
      };
    },
    896775: function (t, e, r) {
      "use strict";
      var n = r(65183).Map;
      t.exports = function (t, e, r) {
        var i = e.getStartKey(),
          o = e.getEndKey(),
          a = t.getBlockMap(),
          u = a
            .toSeq()
            .skipUntil(function (t, e) {
              return e === i;
            })
            .takeUntil(function (t, e) {
              return e === o;
            })
            .concat(n([[o, a.get(o)]]))
            .map(r);
        return t.merge({
          blockMap: a.merge(u),
          selectionBefore: e,
          selectionAfter: e,
        });
      };
    },
    499373: function (t, e, r) {
      "use strict";
      var n = r(546870),
        i = r(195961),
        o = r(65183),
        a = r(581079),
        u = o.OrderedMap,
        s = o.List,
        c = function (t, e, r) {
          if (!t) return;
          var n = e.get(t);
          if (!!n) e.set(t, r(n));
        },
        l = function (t, e, r, n, i) {
          if (!i) return t;
          var o = "after" === n,
            a = e.getKey(),
            u = r.getKey(),
            l = e.getParentKey(),
            f = e.getNextSiblingKey(),
            p = e.getPrevSiblingKey(),
            h = r.getParentKey(),
            d = o ? r.getNextSiblingKey() : u,
            g = o ? u : r.getPrevSiblingKey();
          return t.withMutations(function (t) {
            c(l, t, function (t) {
              var e = t.getChildKeys();
              return t.merge({ children: e.delete(e.indexOf(a)) });
            }),
              c(p, t, function (t) {
                return t.merge({ nextSibling: f });
              }),
              c(f, t, function (t) {
                return t.merge({ prevSibling: p });
              }),
              c(d, t, function (t) {
                return t.merge({ prevSibling: a });
              }),
              c(g, t, function (t) {
                return t.merge({ nextSibling: a });
              }),
              c(h, t, function (t) {
                var e = t.getChildKeys(),
                  r = e.indexOf(u),
                  n = e.toArray();
                return (
                  n.splice(o ? r + 1 : 0 !== r ? r - 1 : 0, 0, a),
                  t.merge({ children: s(n) })
                );
              }),
              c(a, t, function (t) {
                return t.merge({ nextSibling: d, prevSibling: g, parent: h });
              });
          });
        };
      t.exports = function (t, e, r, o) {
        "replace" !== o || a(!1);
        var s = r.getKey(),
          c = e.getKey();
        c !== s || a(!1);
        var f = t.getBlockMap(),
          p = e instanceof n,
          h = [e],
          d = f.delete(c);
        p &&
          ((h = []),
          (d = f.withMutations(function (t) {
            var r = e.getNextSiblingKey(),
              n = i(e, t);
            t.toSeq()
              .skipUntil(function (t) {
                return t.getKey() === c;
              })
              .takeWhile(function (t) {
                var e = t.getKey(),
                  i = e === c,
                  o = !r && t.getParentKey() && (!n || e !== n);
                return !!(i || (r && e !== r) || o);
              })
              .forEach(function (e) {
                h.push(e), t.delete(e.getKey());
              });
          })));
        var g = d.toSeq().takeUntil(function (t) {
            return t === r;
          }),
          y = d
            .toSeq()
            .skipUntil(function (t) {
              return t === r;
            })
            .skip(1),
          v = h.map(function (t) {
            return [t.getKey(), t];
          }),
          m = u();
        if ("before" === o) {
          var _ = t.getBlockBefore(s);
          !_ || _.getKey() !== e.getKey() || a(!1),
            (m = g.concat([].concat(v, [[s, r]]), y).toOrderedMap());
        } else if ("after" === o) {
          var b = t.getBlockAfter(s);
          !b || b.getKey() !== c || a(!1),
            (m = g.concat([[s, r]].concat(v), y).toOrderedMap());
        }
        return t.merge({
          blockMap: l(m, e, r, o, p),
          selectionBefore: t.getSelectionAfter(),
          selectionAfter: t
            .getSelectionAfter()
            .merge({ anchorKey: c, focusKey: c }),
        });
      };
    },
    242891: function (t, e, r) {
      "use strict";
      r(42547);
      t.exports = function (t, e) {
        var r = t.getSelection(),
          n = t.getCurrentContent(),
          i = r.getStartKey(),
          o = r.getStartOffset(),
          a = i,
          u = 0;
        if (e > o) {
          var s = n.getKeyBefore(i);
          null == s
            ? (a = i)
            : ((a = s), (u = n.getBlockForKey(s).getText().length));
        } else u = o - e;
        return r.merge({ focusKey: a, focusOffset: u, isBackward: !0 });
      };
    },
    70440: function (t, e, r) {
      "use strict";
      r(42547);
      t.exports = function (t, e) {
        var r,
          n = t.getSelection(),
          i = n.getStartKey(),
          o = n.getStartOffset(),
          a = t.getCurrentContent(),
          u = i;
        return (
          e > a.getBlockForKey(i).getText().length - o
            ? ((u = a.getKeyAfter(i)), (r = 0))
            : (r = o + e),
          n.merge({ focusKey: u, focusOffset: r })
        );
      };
    },
    381165: function (t, e, r) {
      "use strict";
      var n = r(546870),
        i = r(680643),
        o = r(65183).OrderedMap,
        a = function (t) {
          var e,
            r = {};
          return o(
            t
              .withMutations(function (t) {
                t.forEach(function (n, o) {
                  var a = n.getKey(),
                    u = n.getNextSiblingKey(),
                    s = n.getPrevSiblingKey(),
                    c = n.getChildKeys(),
                    l = n.getParentKey(),
                    f = i();
                  if (
                    ((r[a] = f),
                    u &&
                      (t.get(u)
                        ? t.setIn([u, "prevSibling"], f)
                        : t.setIn([a, "nextSibling"], null)),
                    s &&
                      (t.get(s)
                        ? t.setIn([s, "nextSibling"], f)
                        : t.setIn([a, "prevSibling"], null)),
                    l && t.get(l))
                  ) {
                    var p = t.get(l).getChildKeys();
                    t.setIn([l, "children"], p.set(p.indexOf(n.getKey()), f));
                  } else
                    t.setIn([a, "parent"], null),
                      e &&
                        (t.setIn([e.getKey(), "nextSibling"], f),
                        t.setIn([a, "prevSibling"], r[e.getKey()])),
                      (e = t.get(a));
                  c.forEach(function (e) {
                    t.get(e)
                      ? t.setIn([e, "parent"], f)
                      : t.setIn(
                          [a, "children"],
                          n.getChildKeys().filter(function (t) {
                            return t !== e;
                          }),
                        );
                  });
                });
              })
              .toArray()
              .map(function (t) {
                return [r[t.getKey()], t.set("key", r[t.getKey()])];
              }),
          );
        };
      t.exports = function (t) {
        if (!(t.first() instanceof n))
          return o(
            t.toArray().map(function (t) {
              var e = i();
              return [e, t.set("key", e)];
            }),
          );
        return a(t);
      };
    },
    351612: function (t, e, r) {
      "use strict";
      var n = r(837512),
        i = r(531463),
        o = r(581079);
      function a(t, e, r) {
        var a = e.getCharacterList(),
          u = r > 0 ? a.get(r - 1) : void 0,
          s = r < a.count() ? a.get(r) : void 0,
          c = u ? u.getEntity() : void 0,
          l = s ? s.getEntity() : void 0;
        if (l && l === c && "MUTABLE" !== t.__get(l).getMutability()) {
          for (
            var f,
              p,
              h,
              d,
              g,
              y =
                ((f = a),
                (p = l),
                (h = r),
                i(
                  f,
                  function (t, e) {
                    return t.getEntity() === e.getEntity();
                  },
                  function (t) {
                    return t.getEntity() === p;
                  },
                  function (t, e) {
                    t <= h && e >= h && (d = { start: t, end: e });
                  },
                ),
                "object" != typeof d && o(!1),
                d),
              v = y.start,
              m = y.end;
            v < m;

          )
            (g = a.get(v)), (a = a.set(v, n.applyEntity(g, null))), v++;
          return e.set("characterList", a);
        }
        return e;
      }
      t.exports = function (t, e) {
        var r = t.getBlockMap(),
          n = t.getEntityMap(),
          i = {},
          o = e.getStartKey(),
          u = e.getStartOffset(),
          s = r.get(o),
          c = a(n, s, u);
        c !== s && (i[o] = c);
        var l = e.getEndKey(),
          f = e.getEndOffset(),
          p = r.get(l);
        o === l && (p = c);
        var h = a(n, p, f);
        return (h !== p && (i[l] = h), Object.keys(i).length)
          ? t.merge({ blockMap: r.merge(i), selectionAfter: e })
          : t.set("selectionAfter", e);
      };
    },
    958594: function (t, e, r) {
      "use strict";
      var n = r(546870),
        i = r(195961),
        o = r(65183);
      o.List;
      var a = o.Map,
        u = function (t, e, r) {
          if (!t) return;
          var n = e.get(t);
          if (!!n) e.set(t, r(n));
        },
        s = function (t, e) {
          var r = [];
          if (!t) return r;
          for (var n = e.get(t); n && n.getParentKey(); ) {
            var i = n.getParentKey();
            i && r.push(i), (n = i ? e.get(i) : null);
          }
          return r;
        },
        c = function (t, e) {
          var r = [];
          if (!t) return r;
          for (var n = i(t, e); n && e.get(n); ) {
            var o = e.get(n);
            r.push(n), (n = o.getParentKey() ? i(o, e) : null);
          }
          return r;
        },
        l = function (t, e, r) {
          if (!t) return null;
          for (var n = r.get(t.getKey()).getNextSiblingKey(); n && !e.get(n); )
            n = r.get(n).getNextSiblingKey() || null;
          return n;
        },
        f = function (t, e, r) {
          if (!t) return null;
          for (var n = r.get(t.getKey()).getPrevSiblingKey(); n && !e.get(n); )
            n = r.get(n).getPrevSiblingKey() || null;
          return n;
        },
        p = function (t, e, r) {
          if (0 === e) for (; e < r; ) (t = t.shift()), e++;
          else if (r === t.count()) for (; r > e; ) (t = t.pop()), r--;
          else {
            var n = t.slice(0, e),
              i = t.slice(r);
            t = n.concat(i).toList();
          }
          return t;
        };
      t.exports = function (t, e) {
        if (e.isCollapsed()) return t;
        var r,
          o,
          h,
          d,
          g,
          y = t.getBlockMap(),
          v = e.getStartKey(),
          m = e.getStartOffset(),
          _ = e.getEndKey(),
          b = e.getEndOffset(),
          S = y.get(v),
          w = y.get(_),
          k = S instanceof n,
          x = [];
        if (k) {
          var C = w.getChildKeys(),
            E = s(_, y);
          w.getNextSiblingKey() && (x = x.concat(E)),
            !C.isEmpty() && (x = x.concat(E.concat([_]))),
            (x = x.concat(s(i(w, y), y)));
        }
        g =
          S === w
            ? p(S.getCharacterList(), m, b)
            : S.getCharacterList()
                .slice(0, m)
                .concat(w.getCharacterList().slice(b));
        var D = S.merge({
            text: S.getText().slice(0, m) + w.getText().slice(b),
            characterList: g,
          }),
          O =
            k &&
            0 === m &&
            0 === b &&
            w.getParentKey() === v &&
            null == w.getPrevSiblingKey()
              ? a([[v, null]])
              : y
                  .toSeq()
                  .skipUntil(function (t, e) {
                    return e === v;
                  })
                  .takeUntil(function (t, e) {
                    return e === _;
                  })
                  .filter(function (t, e) {
                    return -1 === x.indexOf(e);
                  })
                  .concat(a([[_, null]]))
                  .map(function (t, e) {
                    return e === v ? D : null;
                  }),
          K = y.merge(O).filter(function (t) {
            return !!t;
          });
        if (k && S !== w) {
          (r = K),
            (o = S),
            (h = w),
            (d = y),
            (K = r.withMutations(function (t) {
              if (
                (u(o.getKey(), t, function (e) {
                  return e.merge({
                    nextSibling: l(e, t, d),
                    prevSibling: f(e, t, d),
                  });
                }),
                u(h.getKey(), t, function (e) {
                  return e.merge({
                    nextSibling: l(e, t, d),
                    prevSibling: f(e, t, d),
                  });
                }),
                s(o.getKey(), d).forEach(function (e) {
                  return u(e, t, function (e) {
                    return e.merge({
                      children: e.getChildKeys().filter(function (e) {
                        return t.get(e);
                      }),
                      nextSibling: l(e, t, d),
                      prevSibling: f(e, t, d),
                    });
                  });
                }),
                u(o.getNextSiblingKey(), t, function (t) {
                  return t.merge({ prevSibling: o.getPrevSiblingKey() });
                }),
                u(o.getPrevSiblingKey(), t, function (e) {
                  return e.merge({ nextSibling: l(e, t, d) });
                }),
                u(h.getNextSiblingKey(), t, function (e) {
                  return e.merge({ prevSibling: f(e, t, d) });
                }),
                u(h.getPrevSiblingKey(), t, function (t) {
                  return t.merge({ nextSibling: h.getNextSiblingKey() });
                }),
                s(h.getKey(), d).forEach(function (e) {
                  u(e, t, function (e) {
                    return e.merge({
                      children: e.getChildKeys().filter(function (e) {
                        return t.get(e);
                      }),
                      nextSibling: l(e, t, d),
                      prevSibling: f(e, t, d),
                    });
                  });
                }),
                c(h, d).forEach(function (e) {
                  return u(e, t, function (e) {
                    return e.merge({
                      nextSibling: l(e, t, d),
                      prevSibling: f(e, t, d),
                    });
                  });
                }),
                null == r.get(o.getKey()) &&
                  null != r.get(h.getKey()) &&
                  h.getParentKey() === o.getKey() &&
                  null == h.getPrevSiblingKey())
              ) {
                var e = o.getPrevSiblingKey();
                u(h.getKey(), t, function (t) {
                  return t.merge({ prevSibling: e });
                }),
                  u(e, t, function (t) {
                    return t.merge({ nextSibling: h.getKey() });
                  });
                var n = e ? r.get(e) : null,
                  i = n ? n.getParentKey() : null;
                if (
                  (o.getChildKeys().forEach(function (e) {
                    u(e, t, function (t) {
                      return t.merge({ parent: i });
                    });
                  }),
                  null != i)
                ) {
                  var a = r.get(i);
                  u(i, t, function (t) {
                    return t.merge({
                      children: a.getChildKeys().concat(o.getChildKeys()),
                    });
                  });
                }
                u(
                  o.getChildKeys().find(function (t) {
                    return null === r.get(t).getNextSiblingKey();
                  }),
                  t,
                  function (t) {
                    return t.merge({ nextSibling: o.getNextSiblingKey() });
                  },
                );
              }
            }));
        }
        return t.merge({
          blockMap: K,
          selectionBefore: e,
          selectionAfter: e.merge({
            anchorKey: v,
            anchorOffset: m,
            focusKey: v,
            focusOffset: m,
            isBackward: !1,
          }),
        });
      };
    },
    235767: function (t, e, r) {
      "use strict";
      var n = r(310176),
        i = r(316103)("draft_tree_data_support");
      t.exports = function (t, e, r) {
        var o = t.getSelection(),
          a = t.getCurrentContent(),
          u = o,
          s = o.getAnchorKey(),
          c = o.getFocusKey(),
          l = a.getBlockForKey(s);
        if (i && "forward" === r && s !== c) return a;
        if (o.isCollapsed()) {
          if ("forward" === r) {
            if (t.isSelectionAtEndOfContent()) return a;
            if (i && o.getAnchorOffset() === a.getBlockForKey(s).getLength()) {
              var f = a.getBlockForKey(l.nextSibling);
              if (!f || 0 === f.getLength()) return a;
            }
          } else if (t.isSelectionAtStartOfContent()) return a;
          if ((u = e(t)) === o) return a;
        }
        return n.removeRange(a, u, r);
      };
    },
    856520: function (t) {
      "use strict";
      var e = RegExp("\r", "g");
      t.exports = function (t) {
        return t.replace(e, "");
      };
    },
    907949: function (t, e, r) {
      "use strict";
      var n = r(8400),
        i = r(887109),
        o = r(118658),
        a = r(808570),
        u = r(924125),
        s = r(488959),
        c = r(581079),
        l = r(660610),
        f = o.isBrowser("IE");
      function p(t, e) {
        for (var r = t, n = r; r; ) {
          if (l(r) && n.hasAttribute("contenteditable"))
            return (function (t, e) {
              if (!t) return "[empty]";
              var r = (function t(e, r) {
                var n = void 0 !== r ? r(e) : [];
                if (e.nodeType === Node.TEXT_NODE) {
                  var i = e.textContent.length;
                  return s(e).createTextNode(
                    "[text " + i + (n.length ? " | " + n.join(", ") : "") + "]",
                  );
                }
                var o = e.cloneNode();
                1 === o.nodeType &&
                  n.length &&
                  o.setAttribute("data-labels", n.join(", "));
                for (var a = e.childNodes, u = 0; u < a.length; u++)
                  o.appendChild(t(a[u], r));
                return o;
              })(t, e);
              return r.nodeType === Node.TEXT_NODE
                ? r.textContent
                : (l(r) || c(!1), r.outerHTML);
            })(r, e);
          n = r = r.parentNode;
        }
        return "Could not find contentEditable parent of node";
      }
      function h(t) {
        return null === t.nodeValue ? t.childNodes.length : t.nodeValue.length;
      }
      function d(t, e, r, n) {
        var o = u();
        if (t.extend && a(o, e)) {
          r > h(e) &&
            i.logSelectionStateFailure({
              anonymizedDom: p(e),
              extraParams: JSON.stringify({ offset: r }),
              selectionState: JSON.stringify(n.toJS()),
            });
          var s = e === t.focusNode;
          try {
            t.extend(e, r);
          } catch (a) {
            throw (
              (i.logSelectionStateFailure({
                anonymizedDom: p(e, function (e) {
                  var r = [];
                  return (
                    e === o && r.push("active element"),
                    e === t.anchorNode && r.push("selection anchor node"),
                    e === t.focusNode && r.push("selection focus node"),
                    r
                  );
                }),
                extraParams: JSON.stringify(
                  {
                    activeElementName: o ? o.nodeName : null,
                    nodeIsFocus: e === t.focusNode,
                    nodeWasFocus: s,
                    selectionRangeCount: t.rangeCount,
                    selectionAnchorNodeName: t.anchorNode
                      ? t.anchorNode.nodeName
                      : null,
                    selectionAnchorOffset: t.anchorOffset,
                    selectionFocusNodeName: t.focusNode
                      ? t.focusNode.nodeName
                      : null,
                    selectionFocusOffset: t.focusOffset,
                    message: a ? "" + a : null,
                    offset: r,
                  },
                  null,
                  2,
                ),
                selectionState: JSON.stringify(n.toJS(), null, 2),
              }),
              a)
            );
          }
        } else if (t.rangeCount > 0) {
          var c = t.getRangeAt(0);
          c.setEnd(e, r), t.addRange(c.cloneRange());
        }
      }
      function g(t, e, r, o) {
        var a = s(e).createRange();
        if (
          (r > h(e) &&
            (i.logSelectionStateFailure({
              anonymizedDom: p(e),
              extraParams: JSON.stringify({ offset: r }),
              selectionState: JSON.stringify(o.toJS()),
            }),
            n.handleExtensionCausedError()),
          a.setStart(e, r),
          f)
        )
          try {
            t.addRange(a);
          } catch (t) {}
        else t.addRange(a);
      }
      t.exports = {
        setDraftEditorSelection: function (t, e, r, n, i) {
          var o = s(e);
          if (!!a(o.documentElement, e)) {
            var u = o.defaultView.getSelection(),
              c = t.getAnchorKey(),
              l = t.getAnchorOffset(),
              f = t.getFocusKey(),
              p = t.getFocusOffset(),
              h = t.getIsBackward();
            if (!u.extend && h) {
              var y = c,
                v = l;
              (c = f), (l = p), (f = y), (p = v), (h = !1);
            }
            var m = c === r && n <= l && i >= l,
              _ = f === r && n <= p && i >= p;
            if (m && _) {
              u.removeAllRanges(), g(u, e, l - n, t), d(u, e, p - n, t);
              return;
            }
            if (h) {
              if ((_ && (u.removeAllRanges(), g(u, e, p - n, t)), m)) {
                var b = u.focusNode,
                  S = u.focusOffset;
                u.removeAllRanges(), g(u, e, l - n, t), d(u, b, S, t);
              }
            } else
              m && (u.removeAllRanges(), g(u, e, l - n, t)),
                _ && d(u, e, p - n, t);
          }
        },
        addFocusToSelection: d,
      };
    },
    81368: function (t, e, r) {
      "use strict";
      var n = r(546870),
        i = r(680643),
        o = r(65183),
        a = r(581079),
        u = r(896775),
        s = o.List,
        c = o.Map,
        l = function (t, e, r) {
          if (!t) return;
          var n = e.get(t);
          if (!!n) e.set(t, r(n));
        };
      t.exports = function (t, e) {
        e.isCollapsed() || a(!1);
        var r,
          o,
          f,
          p = e.getAnchorKey(),
          h = t.getBlockMap(),
          d = h.get(p),
          g = d.getText();
        if (!g) {
          var y = d.getType();
          if ("unordered-list-item" === y || "ordered-list-item" === y)
            return u(t, e, function (t) {
              return t.merge({ type: "unstyled", depth: 0 });
            });
        }
        var v = e.getAnchorOffset(),
          m = d.getCharacterList(),
          _ = i(),
          b = d instanceof n,
          S = d.merge({ text: g.slice(0, v), characterList: m.slice(0, v) }),
          w = S.merge({
            key: _,
            text: g.slice(v),
            characterList: m.slice(v),
            data: c(),
          }),
          k = h.toSeq().takeUntil(function (t) {
            return t === d;
          }),
          x = h
            .toSeq()
            .skipUntil(function (t) {
              return t === d;
            })
            .rest(),
          C = k
            .concat(
              [
                [p, S],
                [_, w],
              ],
              x,
            )
            .toOrderedMap();
        if (b) {
          d.getChildKeys().isEmpty() || a(!1),
            (r = C),
            (o = S),
            (f = w),
            (C = r.withMutations(function (t) {
              var e = o.getKey(),
                r = f.getKey();
              l(o.getParentKey(), t, function (t) {
                var n = t.getChildKeys(),
                  i = n.indexOf(e) + 1,
                  o = n.toArray();
                return o.splice(i, 0, r), t.merge({ children: s(o) });
              }),
                l(o.getNextSiblingKey(), t, function (t) {
                  return t.merge({ prevSibling: r });
                }),
                l(e, t, function (t) {
                  return t.merge({ nextSibling: r });
                }),
                l(r, t, function (t) {
                  return t.merge({ prevSibling: e });
                });
            }));
        }
        return t.merge({
          blockMap: C,
          selectionBefore: e,
          selectionAfter: e.merge({
            anchorKey: _,
            anchorOffset: 0,
            focusKey: _,
            focusOffset: 0,
            isBackward: !1,
          }),
        });
      };
    },
    158971: function (t) {
      "use strict";
      var e = /\r\n?|\n/g;
      t.exports = function (t) {
        return t.split(e);
      };
    },
    198392: function (t, e, r) {
      "use strict";
      var n = r(8235),
        i = r(392919),
        o = r(304611),
        a = RegExp("\r\n", "g"),
        u = { "text/rtf": 1, "text/html": 1 };
      function s(t) {
        if ("file" == t.kind) return t.getAsFile();
      }
      var c = (function () {
        function t(t) {
          (this.data = t), (this.types = t.types ? i(t.types) : []);
        }
        var e = t.prototype;
        return (
          (e.isRichText = function () {
            return (
              !!(this.getHTML() && this.getText()) ||
              (!this.isImage() &&
                this.types.some(function (t) {
                  return u[t];
                }))
            );
          }),
          (e.getText = function () {
            var t;
            return (
              this.data.getData &&
                (this.types.length
                  ? -1 != this.types.indexOf("text/plain") &&
                    (t = this.data.getData("text/plain"))
                  : (t = this.data.getData("Text"))),
              t ? t.replace(a, "\n") : null
            );
          }),
          (e.getHTML = function () {
            if (this.data.getData) {
              if (!this.types.length) return this.data.getData("Text");
              if (-1 != this.types.indexOf("text/html"))
                return this.data.getData("text/html");
            }
          }),
          (e.isLink = function () {
            return this.types.some(function (t) {
              return (
                -1 != t.indexOf("Url") ||
                -1 != t.indexOf("text/uri-list") ||
                t.indexOf("text/x-moz-url")
              );
            });
          }),
          (e.getLink = function () {
            if (this.data.getData)
              return -1 != this.types.indexOf("text/x-moz-url")
                ? this.data.getData("text/x-moz-url").split("\n")[0]
                : -1 != this.types.indexOf("text/uri-list")
                  ? this.data.getData("text/uri-list")
                  : this.data.getData("url");
            return null;
          }),
          (e.isImage = function () {
            if (
              this.types.some(function (t) {
                return -1 != t.indexOf("application/x-moz-file");
              })
            )
              return !0;
            for (var t = this.getFiles(), e = 0; e < t.length; e++) {
              var r = t[e].type;
              if (!n.isImage(r)) return !1;
            }
            return !0;
          }),
          (e.getCount = function () {
            if (this.data.hasOwnProperty("items"))
              return this.data.items.length;
            if (this.data.hasOwnProperty("mozItemCount"))
              return this.data.mozItemCount;
            if (this.data.files) return this.data.files.length;
            return null;
          }),
          (e.getFiles = function () {
            return this.data.items
              ? Array.prototype.slice
                  .call(this.data.items)
                  .map(s)
                  .filter(o.thatReturnsArgument)
              : this.data.files
                ? Array.prototype.slice.call(this.data.files)
                : [];
          }),
          (e.hasFiles = function () {
            return this.getFiles().length > 0;
          }),
          t
        );
      })();
      t.exports = c;
    },
    574369: function (t) {
      "use strict";
      t.exports = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46,
        COMMA: 188,
        PERIOD: 190,
        A: 65,
        Z: 90,
        ZERO: 48,
        NUMPAD_0: 96,
        NUMPAD_9: 105,
      };
    },
    8235: function (t) {
      "use strict";
      var e = {
        isImage: function (t) {
          return "image" === r(t)[0];
        },
        isJpeg: function (t) {
          var n = r(t);
          return e.isImage(t) && ("jpeg" === n[1] || "pjpeg" === n[1]);
        },
      };
      function r(t) {
        return t.split("/");
      }
      t.exports = e;
    },
    1231: function (t) {
      "use strict";
      function e(t, e) {
        return !!e && (t === e.documentElement || t === e.body);
      }
      t.exports = {
        getTop: function (t) {
          var r = t.ownerDocument;
          return e(t, r)
            ? r.body.scrollTop || r.documentElement.scrollTop
            : t.scrollTop;
        },
        setTop: function (t, r) {
          var n = t.ownerDocument;
          e(t, n)
            ? (n.body.scrollTop = n.documentElement.scrollTop = r)
            : (t.scrollTop = r);
        },
        getLeft: function (t) {
          var r = t.ownerDocument;
          return e(t, r)
            ? r.body.scrollLeft || r.documentElement.scrollLeft
            : t.scrollLeft;
        },
        setLeft: function (t, r) {
          var n = t.ownerDocument;
          e(t, n)
            ? (n.body.scrollLeft = n.documentElement.scrollLeft = r)
            : (t.scrollLeft = r);
        },
      };
    },
    292489: function (t, e, r) {
      "use strict";
      function n(t, e) {
        var r = i.get(t, e);
        return "auto" === r || "scroll" === r;
      }
      var i = {
        get: r(858255),
        getScrollParent: function (t) {
          if (!t) return null;
          for (var e = t.ownerDocument; t && t !== e.body; ) {
            if (n(t, "overflow") || n(t, "overflowY") || n(t, "overflowX"))
              return t;
            t = t.parentNode;
          }
          return e.defaultView || e.parentWindow;
        },
      };
      t.exports = i;
    },
    207549: function (t) {
      "use strict";
      t.exports = {
        getPunctuation: function () {
          return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞\xa1-\xb1\xb4-\xb8\xba\xbb\xbf]";
        },
      };
    },
    946572: function (t) {
      "use strict";
      var e = (function () {
        function t(t) {
          var e, r, n;
          (e = this),
            (n = void 0),
            (r = "_uri") in e
              ? Object.defineProperty(e, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = n),
            (this._uri = t);
        }
        return (
          (t.prototype.toString = function () {
            return this._uri;
          }),
          t
        );
      })();
      t.exports = e;
    },
    746117: function (t, e, r) {
      "use strict";
      var n = r(856084),
        i = r(581079),
        o =
          "A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        a =
          "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
        u =
          "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾",
        s = RegExp("[" + o + a + u + "]"),
        c = RegExp("[" + a + u + "]");
      function l(t) {
        var e = s.exec(t);
        return null == e ? null : e[0];
      }
      function f(t) {
        var e = l(t);
        return null == e ? n.NEUTRAL : c.exec(e) ? n.RTL : n.LTR;
      }
      function p(t, e) {
        if (((e = e || n.NEUTRAL), !t.length)) return e;
        var r = f(t);
        return r === n.NEUTRAL ? e : r;
      }
      function h(t, e) {
        return !e && (e = n.getGlobalDir()), n.isStrong(e) || i(!1), p(t, e);
      }
      t.exports = {
        firstStrongChar: l,
        firstStrongCharDir: f,
        resolveBlockDir: p,
        getDirection: h,
        isDirectionLTR: function (t, e) {
          return h(t, e) === n.LTR;
        },
        isDirectionRTL: function (t, e) {
          return h(t, e) === n.RTL;
        },
      };
    },
    856084: function (t, e, r) {
      "use strict";
      var n = r(581079),
        i = null;
      function o(t) {
        return "LTR" === t || "RTL" === t;
      }
      function a(t) {
        return o(t) || n(!1), "LTR" === t ? "ltr" : "rtl";
      }
      function u(t) {
        i = t;
      }
      t.exports = {
        NEUTRAL: "NEUTRAL",
        LTR: "LTR",
        RTL: "RTL",
        isStrong: o,
        getHTMLDir: a,
        getHTMLDirIfDifferent: function (t, e) {
          return o(t) || n(!1), o(e) || n(!1), t === e ? null : a(t);
        },
        setGlobalDir: u,
        initGlobalDir: function () {
          i = "LTR";
        },
        getGlobalDir: function () {
          return !i && this.initGlobalDir(), i || n(!1), i;
        },
      };
    },
    166898: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r(746117),
        o = r(856084),
        a = r(581079),
        u = (function () {
          function t(t) {
            n(this, "_defaultDir", void 0),
              n(this, "_lastDir", void 0),
              t ? o.isStrong(t) || a(!1) : (t = o.getGlobalDir()),
              (this._defaultDir = t),
              this.reset();
          }
          var e = t.prototype;
          return (
            (e.reset = function () {
              this._lastDir = this._defaultDir;
            }),
            (e.getDirection = function (t) {
              return (
                (this._lastDir = i.getDirection(t, this._lastDir)),
                this._lastDir
              );
            }),
            t
          );
        })();
      t.exports = u;
    },
    733359: function (t, e, r) {
      "use strict";
      var n = r(581079),
        i = /[\uD800-\uDFFF]/;
      function o(t) {
        return 55296 <= t && t <= 57343;
      }
      function a(t) {
        return i.test(t);
      }
      function u(t, e) {
        return 1 + o(t.charCodeAt(e));
      }
      function s(t, e, r) {
        if (((e = e || 0), (r = void 0 === r ? 1 / 0 : r || 0), !a(t)))
          return t.substr(e, r);
        var n = t.length;
        if (n <= 0 || e > n || r <= 0) return "";
        var i = 0;
        if (e > 0) {
          for (; e > 0 && i < n; e--) i += u(t, i);
          if (i >= n) return "";
        } else if (e < 0) {
          for (i = n; e < 0 && 0 < i; e++) i -= u(t, i - 1);
          i < 0 && (i = 0);
        }
        var o = n;
        if (r < n) for (o = i; r > 0 && o < n; r--) o += u(t, o);
        return t.substring(i, o);
      }
      t.exports = {
        getCodePoints: function (t) {
          for (var e = [], r = 0; r < t.length; r += u(t, r))
            e.push(t.codePointAt(r));
          return e;
        },
        getUTF16Length: u,
        hasSurrogateUnit: a,
        isCodeUnitInSurrogateRange: o,
        isSurrogatePair: function (t, e) {
          if (((0 <= e && e < t.length) || n(!1), e + 1 === t.length))
            return !1;
          var r = t.charCodeAt(e),
            i = t.charCodeAt(e + 1);
          return 55296 <= r && r <= 56319 && 56320 <= i && i <= 57343;
        },
        strlen: function (t) {
          if (!a(t)) return t.length;
          for (var e = 0, r = 0; r < t.length; r += u(t, r)) e++;
          return e;
        },
        substring: function (t, e, r) {
          (e = e || 0) < 0 && (e = 0),
            (r = void 0 === r ? 1 / 0 : r || 0) < 0 && (r = 0);
          var n = Math.abs(r - e);
          return s(t, (e = e < r ? e : r), n);
        },
        substr: s,
      };
    },
    118658: function (t, e, r) {
      "use strict";
      var n = r(947268),
        i = r(881886),
        o = r(267100),
        a = r(746154);
      function u(t, e, r, n) {
        if (t === r) return !0;
        if (!r.startsWith(t)) return !1;
        var o = r.slice(t.length);
        return !!e && ((o = n ? n(o) : o), i.contains(o, e));
      }
      function s(t) {
        return "Windows" === n.platformName ? t.replace(/^\s*NT/, "") : t;
      }
      t.exports = o(
        {
          isBrowser: function (t) {
            return u(n.browserName, n.browserFullVersion, t);
          },
          isBrowserArchitecture: function (t) {
            return u(n.browserArchitecture, null, t);
          },
          isDevice: function (t) {
            return u(n.deviceName, null, t);
          },
          isEngine: function (t) {
            return u(n.engineName, n.engineVersion, t);
          },
          isPlatform: function (t) {
            return u(n.platformName, n.platformFullVersion, t, s);
          },
          isPlatformArchitecture: function (t) {
            return u(n.platformArchitecture, null, t);
          },
        },
        a,
      );
    },
    947268: function (t, e, r) {
      "use strict";
      var n,
        i = r(114912),
        o = "Unknown",
        a = { "Mac OS": "Mac OS X" },
        u = new i().getResult(),
        s = (function (t) {
          if (!t) return { major: "", minor: "" };
          var e = t.split(".");
          return { major: e[0], minor: e[1] };
        })(u.browser.version);
      var c = {
        browserArchitecture: u.cpu.architecture || o,
        browserFullVersion: u.browser.version || o,
        browserMinorVersion: s.minor || o,
        browserName: u.browser.name || o,
        browserVersion: u.browser.major || o,
        deviceName: u.device.model || o,
        engineName: u.engine.name || o,
        engineVersion: u.engine.version || o,
        platformArchitecture: u.cpu.architecture || o,
        platformName: a[(n = u.os.name)] || n || o,
        platformVersion: u.os.version || o,
        platformFullVersion: u.os.version || o,
      };
      t.exports = c;
    },
    881886: function (t, e, r) {
      "use strict";
      var n = r(581079),
        i = /\./,
        o = /\|\|/,
        a = /\s+\-\s+/,
        u = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        s = /^(\d*)(.*)/;
      function c(t, e) {
        if ("" === (t = t.trim())) return !0;
        var r = e.split(i),
          n = p(t),
          o = n.modifier,
          a = n.rangeComponents;
        switch (o) {
          case "<":
            return (function (t, e) {
              return -1 === v(t, e);
            })(r, a);
          case "<=":
            return (function (t, e) {
              var r = v(t, e);
              return -1 === r || 0 === r;
            })(r, a);
          case ">=":
            return f(r, a);
          case ">":
            return (function (t, e) {
              return 1 === v(t, e);
            })(r, a);
          case "~":
          case "~>":
            return (function (t, e) {
              var r = e.slice(),
                n = e.slice();
              n.length > 1 && n.pop();
              var i = n.length - 1,
                o = parseInt(n[i], 10);
              return h(o) && (n[i] = o + 1 + ""), f(t, r) && -1 === v(t, n);
            })(r, a);
          default:
            return (function (t, e) {
              return 0 === v(t, e);
            })(r, a);
        }
      }
      function l(t, e) {
        return -1 === v(t, e);
      }
      function f(t, e) {
        var r = v(t, e);
        return 1 === r || 0 === r;
      }
      function p(t) {
        var e = t.split(i),
          r = e[0].match(u);
        return (
          r || n(!1),
          { modifier: r[1], rangeComponents: [r[2]].concat(e.slice(1)) }
        );
      }
      function h(t) {
        return !isNaN(t) && isFinite(t);
      }
      function d(t) {
        return !p(t).modifier;
      }
      function g(t, e) {
        for (var r = t.length; r < e; r++) t[r] = "0";
      }
      function y(t, e) {
        return (typeof t != typeof e && n(!1), t > e) ? 1 : t < e ? -1 : 0;
      }
      function v(t, e) {
        for (
          var r = (function (t, e) {
              (t = t.slice()), g(t, (e = e.slice()).length);
              for (var r = 0; r < e.length; r++) {
                var n = e[r].match(/^[x*]$/i);
                if (
                  n &&
                  ((e[r] = t[r] = "0"), "*" === n[0] && r === e.length - 1)
                )
                  for (var i = r; i < t.length; i++) t[i] = "0";
              }
              return g(e, t.length), [t, e];
            })(t, e),
            n = r[0],
            i = r[1],
            o = 0;
          o < i.length;
          o++
        ) {
          var a = (function (t, e) {
            var r = t.match(s)[1],
              n = e.match(s)[1],
              i = parseInt(r, 10),
              o = parseInt(n, 10);
            return h(i) && h(o) && i !== o ? y(i, o) : y(t, e);
          })(n[o], i[o]);
          if (a) return a;
        }
        return 0;
      }
      var m = {
        contains: function (t, e) {
          var r, i, u;
          return (
            (r = t.trim()),
            (i = e.trim()),
            (u = r.split(o)).length > 1
              ? u.some(function (t) {
                  return m.contains(t, i);
                })
              : (function (t, e) {
                  var r = t.split(a);
                  if (
                    ((r.length > 0 && r.length <= 2) || n(!1), 1 === r.length)
                  )
                    return c(r[0], e);
                  var i = r[0],
                    o = r[1];
                  return (
                    (d(i) && d(o)) || n(!1), c(">=" + i, e) && c("<=" + o, e)
                  );
                })((r = u[0].trim()), i)
          );
        },
      };
      t.exports = m;
    },
    322273: function (t) {
      "use strict";
      var e = /-(.)/g;
      t.exports = function (t) {
        return t.replace(e, function (t, e) {
          return e.toUpperCase();
        });
      };
    },
    808570: function (t, e, r) {
      "use strict";
      var n = r(656566);
      t.exports = function t(e, r) {
        if (!e || !r) return !1;
        if (e === r) return !0;
        if (n(e)) return !1;
        else if (n(r)) return t(e, r.parentNode);
        else if ("contains" in e) return e.contains(r);
        else if (e.compareDocumentPosition)
          return !!(16 & e.compareDocumentPosition(r));
        else return !1;
      };
    },
    392919: function (t, e, r) {
      "use strict";
      var n = r(581079);
      t.exports = function (t) {
        var e;
        return (e = t) &&
          ("object" == typeof e || "function" == typeof e) &&
          "length" in e &&
          !("setInterval" in e) &&
          "number" != typeof e.nodeType &&
          (Array.isArray(e) || "callee" in e || "item" in e)
          ? Array.isArray(t)
            ? t.slice()
            : (function (t) {
                var e = t.length;
                if (
                  ((!Array.isArray(t) &&
                    ("object" == typeof t || "function" == typeof t)) ||
                    n(!1),
                  "number" != typeof e && n(!1),
                  0 === e || e - 1 in t || n(!1),
                  "function" != typeof t.callee || n(!1),
                  t.hasOwnProperty)
                )
                  try {
                    return Array.prototype.slice.call(t);
                  } catch (t) {}
                for (var r = Array(e), i = 0; i < e; i++) r[i] = t[i];
                return r;
              })(t)
          : [t];
      };
    },
    606166: function (t) {
      "use strict";
      function e(t) {
        return t.replace(/\//g, "-");
      }
      t.exports = function (t) {
        return "object" == typeof t
          ? Object.keys(t)
              .filter(function (e) {
                return t[e];
              })
              .map(e)
              .join(" ")
          : Array.prototype.map.call(arguments, e).join(" ");
      };
    },
    304611: function (t) {
      "use strict";
      function e(t) {
        return function () {
          return t;
        };
      }
      var r = function () {};
      (r.thatReturns = e),
        (r.thatReturnsFalse = e(!1)),
        (r.thatReturnsTrue = e(!0)),
        (r.thatReturnsNull = e(null)),
        (r.thatReturnsThis = function () {
          return this;
        }),
        (r.thatReturnsArgument = function (t) {
          return t;
        }),
        (t.exports = r);
    },
    924125: function (t) {
      "use strict";
      t.exports = function (t) {
        if (
          void 0 ===
          (t = t || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return t.activeElement || t.body;
        } catch (e) {
          return t.body;
        }
      };
    },
    143310: function (t) {
      "use strict";
      var e =
        "undefined" != typeof navigator &&
        navigator.userAgent.indexOf("AppleWebKit") > -1;
      t.exports = function (t) {
        return (t = t || document).scrollingElement
          ? t.scrollingElement
          : e || "CSS1Compat" !== t.compatMode
            ? t.body
            : t.documentElement;
      };
    },
    675411: function (t, e, r) {
      "use strict";
      var n = r(222671);
      t.exports = function (t) {
        var e = n(t);
        return {
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        };
      };
    },
    222671: function (t, e, r) {
      "use strict";
      var n = r(808570);
      t.exports = function (t) {
        var e = t.ownerDocument.documentElement;
        if (!("getBoundingClientRect" in t) || !n(e, t))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        var r = t.getBoundingClientRect();
        return {
          left: Math.round(r.left) - e.clientLeft,
          right: Math.round(r.right) - e.clientLeft,
          top: Math.round(r.top) - e.clientTop,
          bottom: Math.round(r.bottom) - e.clientTop,
        };
      };
    },
    685536: function (t, e, r) {
      "use strict";
      var n = r(143310),
        i = r(688411);
      t.exports = function (t) {
        var e = n(t.ownerDocument || t.document);
        t.Window && t instanceof t.Window && (t = e);
        var r = i(t),
          o = t === e ? t.ownerDocument.documentElement : t,
          a = t.scrollWidth - o.clientWidth,
          u = t.scrollHeight - o.clientHeight;
        return (
          (r.x = Math.max(0, Math.min(r.x, a))),
          (r.y = Math.max(0, Math.min(r.y, u))),
          r
        );
      };
    },
    858255: function (t, e, r) {
      "use strict";
      var n = r(322273),
        i = r(550782);
      function o(t) {
        return null == t ? t : String(t);
      }
      t.exports = function (t, e) {
        var r;
        if (window.getComputedStyle && (r = window.getComputedStyle(t, null)))
          return o(r.getPropertyValue(i(e)));
        if (document.defaultView && document.defaultView.getComputedStyle) {
          if ((r = document.defaultView.getComputedStyle(t, null)))
            return o(r.getPropertyValue(i(e)));
          if ("display" === e) return "none";
        }
        if (t.currentStyle)
          return "float" === e
            ? o(t.currentStyle.cssFloat || t.currentStyle.styleFloat)
            : o(t.currentStyle[n(e)]);
        return o(t.style && t.style[n(e)]);
      };
    },
    688411: function (t) {
      "use strict";
      t.exports = function (t) {
        return t.Window && t instanceof t.Window
          ? {
              x: t.pageXOffset || t.document.documentElement.scrollLeft,
              y: t.pageYOffset || t.document.documentElement.scrollTop,
            }
          : { x: t.scrollLeft, y: t.scrollTop };
      };
    },
    126502: function (t) {
      "use strict";
      function e() {
        var t;
        return (
          document.documentElement &&
            (t = document.documentElement.clientWidth),
          !t && document.body && (t = document.body.clientWidth),
          t || 0
        );
      }
      function r() {
        var t;
        return (
          document.documentElement &&
            (t = document.documentElement.clientHeight),
          !t && document.body && (t = document.body.clientHeight),
          t || 0
        );
      }
      function n() {
        return {
          width: window.innerWidth || e(),
          height: window.innerHeight || r(),
        };
      }
      (n.withoutScrollbars = function () {
        return { width: e(), height: r() };
      }),
        (t.exports = n);
    },
    550782: function (t) {
      "use strict";
      var e = /([A-Z])/g;
      t.exports = function (t) {
        return t.replace(e, "-$1").toLowerCase();
      };
    },
    581079: function (t) {
      "use strict";
      var e = function (t) {
        if (void 0 === t)
          throw Error("invariant(...): Second argument must be a string.");
      };
      t.exports = function (t, r) {
        for (
          var n, i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2;
          a < i;
          a++
        )
          o[a - 2] = arguments[a];
        if ((e(r), !t)) {
          if (void 0 === r)
            n = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var u = 0;
            (n = Error(
              r.replace(/%s/g, function () {
                return String(o[u++]);
              }),
            )).name = "Invariant Violation";
          }
          throw ((n.framesToPop = 1), n);
        }
      };
    },
    998218: function (t) {
      "use strict";
      t.exports = function (t) {
        var e = (t ? t.ownerDocument || t : document).defaultView || window;
        return !!(
          t &&
          ("function" == typeof e.Node
            ? t instanceof e.Node
            : "object" == typeof t &&
              "number" == typeof t.nodeType &&
              "string" == typeof t.nodeName)
        );
      };
    },
    656566: function (t, e, r) {
      "use strict";
      var n = r(998218);
      t.exports = function (t) {
        return n(t) && 3 == t.nodeType;
      };
    },
    679785: function (t) {
      "use strict";
      t.exports = function (t) {
        var e = t || "",
          r = arguments.length;
        if (r > 1)
          for (var n = 1; n < r; n++) {
            var i = arguments[n];
            i && (e = (e ? e + " " : "") + i);
          }
        return e;
      };
    },
    267100: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty;
      t.exports = function (t, r, n) {
        if (!t) return null;
        var i = {};
        for (var o in t) e.call(t, o) && (i[o] = r.call(n, t[o], o, t));
        return i;
      };
    },
    746154: function (t) {
      "use strict";
      t.exports = function (t) {
        var e = {};
        return function (r) {
          return !e.hasOwnProperty(r) && (e[r] = t.call(this, r)), e[r];
        };
      };
    },
    467159: function (t) {
      "use strict";
      t.exports = function (t) {
        if (null != t) return t;
        throw Error("Got unexpected null or undefined");
      };
    },
    843260: function (t, e, r) {
      "use strict";
      r(2831), (t.exports = r.g.setImmediate);
    },
    42547: function (t, e, r) {
      "use strict";
      var n = r(304611);
      t.exports = n;
    },
    65183: function (t) {
      var e, r;
      (e = 0),
        (r = function () {
          "use strict";
          var t,
            e,
            r,
            n,
            i,
            o,
            a,
            u,
            s,
            c,
            l = Array.prototype.slice;
          function f(t, e) {
            e && (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t);
          }
          function p(t) {
            return y(t) ? t : Q(t);
          }
          function h(t) {
            return v(t) ? t : tt(t);
          }
          function d(t) {
            return m(t) ? t : te(t);
          }
          function g(t) {
            return y(t) && !_(t) ? t : tr(t);
          }
          function y(t) {
            return !!(t && t[S]);
          }
          function v(t) {
            return !!(t && t[w]);
          }
          function m(t) {
            return !!(t && t[k]);
          }
          function _(t) {
            return v(t) || m(t);
          }
          function b(t) {
            return !!(t && t[x]);
          }
          f(h, p),
            f(d, p),
            f(g, p),
            (p.isIterable = y),
            (p.isKeyed = v),
            (p.isIndexed = m),
            (p.isAssociative = _),
            (p.isOrdered = b),
            (p.Keyed = h),
            (p.Indexed = d),
            (p.Set = g);
          var S = "@@__IMMUTABLE_ITERABLE__@@",
            w = "@@__IMMUTABLE_KEYED__@@",
            k = "@@__IMMUTABLE_INDEXED__@@",
            x = "@@__IMMUTABLE_ORDERED__@@",
            C = "delete",
            E = 32,
            D = 31,
            O = {},
            K = { value: !1 },
            T = { value: !1 };
          function M(t) {
            return (t.value = !1), t;
          }
          function A(t) {
            t && (t.value = !0);
          }
          function I() {}
          function B(t, e) {
            e = e || 0;
            for (
              var r = Math.max(0, t.length - e), n = Array(r), i = 0;
              i < r;
              i++
            )
              n[i] = t[i + e];
            return n;
          }
          function R(t) {
            return void 0 === t.size && (t.size = t.__iterate(N)), t.size;
          }
          function L(t, e) {
            if ("number" != typeof e) {
              var r = e >>> 0;
              if ("" + r !== e || 4294967295 === r) return NaN;
              e = r;
            }
            return e < 0 ? R(t) + e : e;
          }
          function N() {
            return !0;
          }
          function F(t, e, r) {
            return (
              (0 === t || (void 0 !== r && t <= -r)) &&
              (void 0 === e || (void 0 !== r && e >= r))
            );
          }
          function z(t, e) {
            return j(t, e, 0);
          }
          function P(t, e) {
            return j(t, e, e);
          }
          function j(t, e, r) {
            return void 0 === t
              ? r
              : t < 0
                ? Math.max(0, e + t)
                : void 0 === e
                  ? t
                  : Math.min(e, t);
          }
          var U = "function" == typeof Symbol && Symbol.iterator,
            q = "@@iterator",
            H = U || q;
          function W(t) {
            this.next = t;
          }
          function V(t, e, r, n) {
            var i = 0 === t ? e : 1 === t ? r : [e, r];
            return n ? (n.value = i) : (n = { value: i, done: !1 }), n;
          }
          function G() {
            return { value: void 0, done: !0 };
          }
          function J(t) {
            return !!Y(t);
          }
          function $(t) {
            return t && "function" == typeof t.next;
          }
          function X(t) {
            var e = Y(t);
            return e && e.call(t);
          }
          function Y(t) {
            var e = t && ((U && t[U]) || t[q]);
            if ("function" == typeof e) return e;
          }
          function Z(t) {
            return t && "number" == typeof t.length;
          }
          function Q(t) {
            return null == t
              ? tc()
              : y(t)
                ? t.toSeq()
                : (function (t) {
                    var e = tp(t) || ("object" == typeof t && new to(t));
                    if (!e)
                      throw TypeError(
                        "Expected Array or iterable object of values, or keyed object: " +
                          t,
                      );
                    return e;
                  })(t);
          }
          function tt(t) {
            return null == t
              ? tc().toKeyedSeq()
              : y(t)
                ? v(t)
                  ? t.toSeq()
                  : t.fromEntrySeq()
                : tl(t);
          }
          function te(t) {
            return null == t
              ? tc()
              : y(t)
                ? v(t)
                  ? t.entrySeq()
                  : t.toIndexedSeq()
                : tf(t);
          }
          function tr(t) {
            return (
              null == t ? tc() : y(t) ? (v(t) ? t.entrySeq() : t) : tf(t)
            ).toSetSeq();
          }
          (W.prototype.toString = function () {
            return "[Iterator]";
          }),
            (W.KEYS = 0),
            (W.VALUES = 1),
            (W.ENTRIES = 2),
            (W.prototype.inspect = W.prototype.toSource =
              function () {
                return this.toString();
              }),
            (W.prototype[H] = function () {
              return this;
            }),
            f(Q, p),
            (Q.of = function () {
              return Q(arguments);
            }),
            (Q.prototype.toSeq = function () {
              return this;
            }),
            (Q.prototype.toString = function () {
              return this.__toString("Seq {", "}");
            }),
            (Q.prototype.cacheResult = function () {
              return (
                !this._cache &&
                  this.__iterateUncached &&
                  ((this._cache = this.entrySeq().toArray()),
                  (this.size = this._cache.length)),
                this
              );
            }),
            (Q.prototype.__iterate = function (t, e) {
              return th(this, t, e, !0);
            }),
            (Q.prototype.__iterator = function (t, e) {
              return td(this, t, e, !0);
            }),
            f(tt, Q),
            (tt.prototype.toKeyedSeq = function () {
              return this;
            }),
            f(te, Q),
            (te.of = function () {
              return te(arguments);
            }),
            (te.prototype.toIndexedSeq = function () {
              return this;
            }),
            (te.prototype.toString = function () {
              return this.__toString("Seq [", "]");
            }),
            (te.prototype.__iterate = function (t, e) {
              return th(this, t, e, !1);
            }),
            (te.prototype.__iterator = function (t, e) {
              return td(this, t, e, !1);
            }),
            f(tr, Q),
            (tr.of = function () {
              return tr(arguments);
            }),
            (tr.prototype.toSetSeq = function () {
              return this;
            }),
            (Q.isSeq = ts),
            (Q.Keyed = tt),
            (Q.Set = tr),
            (Q.Indexed = te);
          var tn = "@@__IMMUTABLE_SEQ__@@";
          function ti(t) {
            (this._array = t), (this.size = t.length);
          }
          function to(t) {
            var e = Object.keys(t);
            (this._object = t), (this._keys = e), (this.size = e.length);
          }
          function ta(t) {
            (this._iterable = t), (this.size = t.length || t.size);
          }
          function tu(t) {
            (this._iterator = t), (this._iteratorCache = []);
          }
          function ts(t) {
            return !!(t && t[tn]);
          }
          function tc() {
            return t || (t = new ti([]));
          }
          function tl(t) {
            var e = Array.isArray(t)
              ? new ti(t).fromEntrySeq()
              : $(t)
                ? new tu(t).fromEntrySeq()
                : Y(t)
                  ? new ta(t).fromEntrySeq()
                  : "object" == typeof t
                    ? new to(t)
                    : void 0;
            if (!e)
              throw TypeError(
                "Expected Array or iterable object of [k, v] entries, or keyed object: " +
                  t,
              );
            return e;
          }
          function tf(t) {
            var e = tp(t);
            if (!e)
              throw TypeError(
                "Expected Array or iterable object of values: " + t,
              );
            return e;
          }
          (Q.prototype[tn] = !0),
            f(ti, te),
            (ti.prototype.get = function (t, e) {
              return this.has(t) ? this._array[L(this, t)] : e;
            }),
            (ti.prototype.__iterate = function (t, e) {
              for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++)
                if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;
              return i;
            }),
            (ti.prototype.__iterator = function (t, e) {
              var r = this._array,
                n = r.length - 1,
                i = 0;
              return new W(function () {
                return i > n ? G() : V(t, i, r[e ? n - i++ : i++]);
              });
            }),
            f(to, tt),
            (to.prototype.get = function (t, e) {
              return void 0 === e || this.has(t) ? this._object[t] : e;
            }),
            (to.prototype.has = function (t) {
              return this._object.hasOwnProperty(t);
            }),
            (to.prototype.__iterate = function (t, e) {
              for (
                var r = this._object, n = this._keys, i = n.length - 1, o = 0;
                o <= i;
                o++
              ) {
                var a = n[e ? i - o : o];
                if (!1 === t(r[a], a, this)) return o + 1;
              }
              return o;
            }),
            (to.prototype.__iterator = function (t, e) {
              var r = this._object,
                n = this._keys,
                i = n.length - 1,
                o = 0;
              return new W(function () {
                var a = n[e ? i - o : o];
                return o++ > i ? G() : V(t, a, r[a]);
              });
            }),
            (to.prototype[x] = !0),
            f(ta, te),
            (ta.prototype.__iterateUncached = function (t, e) {
              if (e) return this.cacheResult().__iterate(t, e);
              var r,
                n = X(this._iterable),
                i = 0;
              if ($(n))
                for (; !(r = n.next()).done && !1 !== t(r.value, i++, this); );
              return i;
            }),
            (ta.prototype.__iteratorUncached = function (t, e) {
              if (e) return this.cacheResult().__iterator(t, e);
              var r = X(this._iterable);
              if (!$(r)) return new W(G);
              var n = 0;
              return new W(function () {
                var e = r.next();
                return e.done ? e : V(t, n++, e.value);
              });
            }),
            f(tu, te),
            (tu.prototype.__iterateUncached = function (t, e) {
              if (e) return this.cacheResult().__iterate(t, e);
              for (
                var r, n = this._iterator, i = this._iteratorCache, o = 0;
                o < i.length;

              )
                if (!1 === t(i[o], o++, this)) return o;
              for (; !(r = n.next()).done; ) {
                var a = r.value;
                if (((i[o] = a), !1 === t(a, o++, this))) break;
              }
              return o;
            }),
            (tu.prototype.__iteratorUncached = function (t, e) {
              if (e) return this.cacheResult().__iterator(t, e);
              var r = this._iterator,
                n = this._iteratorCache,
                i = 0;
              return new W(function () {
                if (i >= n.length) {
                  var e = r.next();
                  if (e.done) return e;
                  n[i] = e.value;
                }
                return V(t, i, n[i++]);
              });
            });
          function tp(t) {
            return Z(t)
              ? new ti(t)
              : $(t)
                ? new tu(t)
                : Y(t)
                  ? new ta(t)
                  : void 0;
          }
          function th(t, e, r, n) {
            var i = t._cache;
            if (i) {
              for (var o = i.length - 1, a = 0; a <= o; a++) {
                var u = i[r ? o - a : a];
                if (!1 === e(u[1], n ? u[0] : a, t)) return a + 1;
              }
              return a;
            }
            return t.__iterateUncached(e, r);
          }
          function td(t, e, r, n) {
            var i = t._cache;
            if (i) {
              var o = i.length - 1,
                a = 0;
              return new W(function () {
                var t = i[r ? o - a : a];
                return a++ > o ? G() : V(e, n ? t[0] : a - 1, t[1]);
              });
            }
            return t.__iteratorUncached(e, r);
          }
          function tg(t, e) {
            return e
              ? (function t(e, r, n, i) {
                  return Array.isArray(r)
                    ? e.call(
                        i,
                        n,
                        te(r).map(function (n, i) {
                          return t(e, n, i, r);
                        }),
                      )
                    : ty(r)
                      ? e.call(
                          i,
                          n,
                          tt(r).map(function (n, i) {
                            return t(e, n, i, r);
                          }),
                        )
                      : r;
                })(e, t, "", { "": t })
              : (function t(e) {
                  return Array.isArray(e)
                    ? te(e).map(t).toList()
                    : ty(e)
                      ? tt(e).map(t).toMap()
                      : e;
                })(t);
          }
          function ty(t) {
            return t && (t.constructor === Object || void 0 === t.constructor);
          }
          function tv(t, e) {
            if (t === e || (t != t && e != e)) return !0;
            if (!t || !e) return !1;
            if (
              "function" == typeof t.valueOf &&
              "function" == typeof e.valueOf
            ) {
              if (
                ((t = t.valueOf()),
                t === (e = e.valueOf()) || (t != t && e != e))
              )
                return !0;
              if (!t || !e) return !1;
            }
            return (
              !!(
                "function" == typeof t.equals &&
                "function" == typeof e.equals &&
                t.equals(e)
              ) || !1
            );
          }
          function tm(t, e) {
            if (t === e) return !0;
            if (
              !y(e) ||
              (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
              (void 0 !== t.__hash &&
                void 0 !== e.__hash &&
                t.__hash !== e.__hash) ||
              v(t) !== v(e) ||
              m(t) !== m(e) ||
              b(t) !== b(e)
            )
              return !1;
            if (0 === t.size && 0 === e.size) return !0;
            var r = !_(t);
            if (b(t)) {
              var n = t.entries();
              return (
                e.every(function (t, e) {
                  var i = n.next().value;
                  return i && tv(i[1], t) && (r || tv(i[0], e));
                }) && n.next().done
              );
            }
            var i = !1;
            if (void 0 === t.size) {
              if (void 0 === e.size)
                "function" == typeof t.cacheResult && t.cacheResult();
              else {
                i = !0;
                var o = t;
                (t = e), (e = o);
              }
            }
            var a = !0,
              u = e.__iterate(function (e, n) {
                if (
                  r ? !t.has(e) : i ? !tv(e, t.get(n, O)) : !tv(t.get(n, O), e)
                )
                  return (a = !1), !1;
              });
            return a && t.size === u;
          }
          function t_(t, r) {
            if (!(this instanceof t_)) return new t_(t, r);
            if (
              ((this._value = t),
              (this.size = void 0 === r ? 1 / 0 : Math.max(0, r)),
              0 === this.size)
            ) {
              if (e) return e;
              e = this;
            }
          }
          function tb(t, e) {
            if (!t) throw Error(e);
          }
          function tS(t, e, n) {
            if (!(this instanceof tS)) return new tS(t, e, n);
            if (
              (tb(0 !== n, "Cannot step a Range by 0"),
              (t = t || 0),
              void 0 === e && (e = 1 / 0),
              (n = void 0 === n ? 1 : Math.abs(n)),
              e < t && (n = -n),
              (this._start = t),
              (this._end = e),
              (this._step = n),
              (this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1)),
              0 === this.size)
            ) {
              if (r) return r;
              r = this;
            }
          }
          function tw() {
            throw TypeError("Abstract");
          }
          function tk() {}
          function tx() {}
          function tC() {}
          f(t_, te),
            (t_.prototype.toString = function () {
              return 0 === this.size
                ? "Repeat []"
                : "Repeat [ " + this._value + " " + this.size + " times ]";
            }),
            (t_.prototype.get = function (t, e) {
              return this.has(t) ? this._value : e;
            }),
            (t_.prototype.includes = function (t) {
              return tv(this._value, t);
            }),
            (t_.prototype.slice = function (t, e) {
              var r,
                n = this.size;
              return F(t, e, n)
                ? this
                : new t_(this._value, j(e, (r = n), r) - j(t, n, 0));
            }),
            (t_.prototype.reverse = function () {
              return this;
            }),
            (t_.prototype.indexOf = function (t) {
              return tv(this._value, t) ? 0 : -1;
            }),
            (t_.prototype.lastIndexOf = function (t) {
              return tv(this._value, t) ? this.size : -1;
            }),
            (t_.prototype.__iterate = function (t, e) {
              for (var r = 0; r < this.size; r++)
                if (!1 === t(this._value, r, this)) return r + 1;
              return r;
            }),
            (t_.prototype.__iterator = function (t, e) {
              var r = this,
                n = 0;
              return new W(function () {
                return n < r.size ? V(t, n++, r._value) : G();
              });
            }),
            (t_.prototype.equals = function (t) {
              return t instanceof t_ ? tv(this._value, t._value) : tm(t);
            }),
            f(tS, te),
            (tS.prototype.toString = function () {
              return 0 === this.size
                ? "Range []"
                : "Range [ " +
                    this._start +
                    "..." +
                    this._end +
                    (this._step > 1 ? " by " + this._step : "") +
                    " ]";
            }),
            (tS.prototype.get = function (t, e) {
              return this.has(t) ? this._start + L(this, t) * this._step : e;
            }),
            (tS.prototype.includes = function (t) {
              var e = (t - this._start) / this._step;
              return e >= 0 && e < this.size && e === Math.floor(e);
            }),
            (tS.prototype.slice = function (t, e) {
              var r;
              if (F(t, e, this.size)) return this;
              return ((t = j(t, this.size, 0)),
              (e = j(e, (r = this.size), r)) <= t)
                ? new tS(0, 0)
                : new tS(
                    this.get(t, this._end),
                    this.get(e, this._end),
                    this._step,
                  );
            }),
            (tS.prototype.indexOf = function (t) {
              var e = t - this._start;
              if (e % this._step == 0) {
                var r = e / this._step;
                if (r >= 0 && r < this.size) return r;
              }
              return -1;
            }),
            (tS.prototype.lastIndexOf = function (t) {
              return this.indexOf(t);
            }),
            (tS.prototype.__iterate = function (t, e) {
              for (
                var r = this.size - 1,
                  n = this._step,
                  i = e ? this._start + r * n : this._start,
                  o = 0;
                o <= r;
                o++
              ) {
                if (!1 === t(i, o, this)) return o + 1;
                i += e ? -n : n;
              }
              return o;
            }),
            (tS.prototype.__iterator = function (t, e) {
              var r = this.size - 1,
                n = this._step,
                i = e ? this._start + r * n : this._start,
                o = 0;
              return new W(function () {
                var a = i;
                return (i += e ? -n : n), o > r ? G() : V(t, o++, a);
              });
            }),
            (tS.prototype.equals = function (t) {
              return t instanceof tS
                ? this._start === t._start &&
                    this._end === t._end &&
                    this._step === t._step
                : tm(this, t);
            }),
            f(tw, p),
            f(tk, tw),
            f(tx, tw),
            f(tC, tw),
            (tw.Keyed = tk),
            (tw.Indexed = tx),
            (tw.Set = tC);
          var tE =
            "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2)
              ? Math.imul
              : function (t, e) {
                  var r = 65535 & (t |= 0),
                    n = 65535 & (e |= 0);
                  return (
                    (r * n +
                      ((((t >>> 16) * n + r * (e >>> 16)) << 16) >>> 0)) |
                    0
                  );
                };
          function tD(t) {
            return ((t >>> 1) & 1073741824) | (3221225471 & t);
          }
          function tO(t) {
            if (
              !1 === t ||
              null == t ||
              ("function" == typeof t.valueOf &&
                (!1 === (t = t.valueOf()) || null == t))
            )
              return 0;
            if (!0 === t) return 1;
            var e = typeof t;
            if ("number" === e) {
              var r = 0 | t;
              for (r !== t && (r ^= 4294967295 * t); t > 4294967295; )
                (t /= 4294967295), (r ^= t);
              return tD(r);
            }
            if ("string" === e)
              return t.length > tR
                ? (function (t) {
                    var e = tF[t];
                    return (
                      void 0 === e &&
                        ((e = tK(t)),
                        tN === tL && ((tN = 0), (tF = {})),
                        tN++,
                        (tF[t] = e)),
                      e
                    );
                  })(t)
                : tK(t);
            if ("function" == typeof t.hashCode) return t.hashCode();
            if ("object" === e)
              return (function (t) {
                var e;
                if (
                  (tA && void 0 !== (e = n.get(t))) ||
                  void 0 !== (e = t[tB]) ||
                  (!tM &&
                    (void 0 !==
                      (e =
                        t.propertyIsEnumerable && t.propertyIsEnumerable[tB]) ||
                      void 0 !==
                        (e = (function (t) {
                          if (t && t.nodeType > 0)
                            switch (t.nodeType) {
                              case 1:
                                return t.uniqueID;
                              case 9:
                                return (
                                  t.documentElement &&
                                  t.documentElement.uniqueID
                                );
                            }
                        })(t))))
                )
                  return e;
                if (((e = ++tI), 1073741824 & tI && (tI = 0), tA)) n.set(t, e);
                else if (void 0 !== tT && !1 === tT(t))
                  throw Error(
                    "Non-extensible objects are not allowed as keys.",
                  );
                else if (tM)
                  Object.defineProperty(t, tB, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: e,
                  });
                else if (
                  void 0 !== t.propertyIsEnumerable &&
                  t.propertyIsEnumerable ===
                    t.constructor.prototype.propertyIsEnumerable
                )
                  (t.propertyIsEnumerable = function () {
                    return this.constructor.prototype.propertyIsEnumerable.apply(
                      this,
                      arguments,
                    );
                  }),
                    (t.propertyIsEnumerable[tB] = e);
                else if (void 0 !== t.nodeType) t[tB] = e;
                else
                  throw Error(
                    "Unable to set a non-enumerable property on object.",
                  );
                return e;
              })(t);
            if ("function" == typeof t.toString) return tK(t.toString());
            throw Error("Value type " + e + " cannot be hashed.");
          }
          function tK(t) {
            for (var e = 0, r = 0; r < t.length; r++)
              e = (31 * e + t.charCodeAt(r)) | 0;
            return tD(e);
          }
          var tT = Object.isExtensible,
            tM = (function () {
              try {
                return Object.defineProperty({}, "@", {}), !0;
              } catch (t) {
                return !1;
              }
            })(),
            tA = "function" == typeof WeakMap;
          tA && (n = new WeakMap());
          var tI = 0,
            tB = "__immutablehash__";
          "function" == typeof Symbol && (tB = Symbol(tB));
          var tR = 16,
            tL = 255,
            tN = 0,
            tF = {};
          function tz(t) {
            tb(
              t !== 1 / 0,
              "Cannot perform this action with an infinite size.",
            );
          }
          function tP(t) {
            return null == t
              ? tQ()
              : tj(t) && !b(t)
                ? t
                : tQ().withMutations(function (e) {
                    var r = h(t);
                    tz(r.size),
                      r.forEach(function (t, r) {
                        return e.set(r, t);
                      });
                  });
          }
          function tj(t) {
            return !!(t && t[tU]);
          }
          f(tP, tk),
            (tP.prototype.toString = function () {
              return this.__toString("Map {", "}");
            }),
            (tP.prototype.get = function (t, e) {
              return this._root ? this._root.get(0, void 0, t, e) : e;
            }),
            (tP.prototype.set = function (t, e) {
              return t0(this, t, e);
            }),
            (tP.prototype.setIn = function (t, e) {
              return this.updateIn(t, O, function () {
                return e;
              });
            }),
            (tP.prototype.remove = function (t) {
              return t0(this, t, O);
            }),
            (tP.prototype.deleteIn = function (t) {
              return this.updateIn(t, function () {
                return O;
              });
            }),
            (tP.prototype.update = function (t, e, r) {
              return 1 == arguments.length ? t(this) : this.updateIn([t], e, r);
            }),
            (tP.prototype.updateIn = function (t, e, r) {
              !r && ((r = e), (e = void 0));
              var n = (function t(e, r, n, i) {
                var o = e === O,
                  a = r.next();
                if (a.done) {
                  var u = o ? n : e,
                    s = i(u);
                  return s === u ? e : s;
                }
                tb(o || (e && e.set), "invalid keyPath");
                var c = a.value,
                  l = o ? O : e.get(c, O),
                  f = t(l, r, n, i);
                return f === l
                  ? e
                  : f === O
                    ? e.remove(c)
                    : (o ? tQ() : e).set(c, f);
              })(this, eW(t), e, r);
              return n === O ? void 0 : n;
            }),
            (tP.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = 0),
                    (this._root = null),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : tQ();
            }),
            (tP.prototype.merge = function () {
              return t2(this, void 0, arguments);
            }),
            (tP.prototype.mergeWith = function (t) {
              var e = l.call(arguments, 1);
              return t2(this, t, e);
            }),
            (tP.prototype.mergeIn = function (t) {
              var e = l.call(arguments, 1);
              return this.updateIn(t, tQ(), function (t) {
                return "function" == typeof t.merge
                  ? t.merge.apply(t, e)
                  : e[e.length - 1];
              });
            }),
            (tP.prototype.mergeDeep = function () {
              return t2(this, t8, arguments);
            }),
            (tP.prototype.mergeDeepWith = function (t) {
              var e = l.call(arguments, 1);
              return t2(this, t5(t), e);
            }),
            (tP.prototype.mergeDeepIn = function (t) {
              var e = l.call(arguments, 1);
              return this.updateIn(t, tQ(), function (t) {
                return "function" == typeof t.mergeDeep
                  ? t.mergeDeep.apply(t, e)
                  : e[e.length - 1];
              });
            }),
            (tP.prototype.sort = function (t) {
              return em(eB(this, t));
            }),
            (tP.prototype.sortBy = function (t, e) {
              return em(eB(this, e, t));
            }),
            (tP.prototype.withMutations = function (t) {
              var e = this.asMutable();
              return (
                t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
              );
            }),
            (tP.prototype.asMutable = function () {
              return this.__ownerID ? this : this.__ensureOwner(new I());
            }),
            (tP.prototype.asImmutable = function () {
              return this.__ensureOwner();
            }),
            (tP.prototype.wasAltered = function () {
              return this.__altered;
            }),
            (tP.prototype.__iterator = function (t, e) {
              return new t$(this, t, e);
            }),
            (tP.prototype.__iterate = function (t, e) {
              var r = this,
                n = 0;
              return (
                this._root &&
                  this._root.iterate(function (e) {
                    return n++, t(e[1], e[0], r);
                  }, e),
                n
              );
            }),
            (tP.prototype.__ensureOwner = function (t) {
              return t === this.__ownerID
                ? this
                : t
                  ? tZ(this.size, this._root, t, this.__hash)
                  : ((this.__ownerID = t), (this.__altered = !1), this);
            }),
            (tP.isMap = tj);
          var tU = "@@__IMMUTABLE_MAP__@@",
            tq = tP.prototype;
          function tH(t, e) {
            (this.ownerID = t), (this.entries = e);
          }
          function tW(t, e, r) {
            (this.ownerID = t), (this.bitmap = e), (this.nodes = r);
          }
          function tV(t, e, r) {
            (this.ownerID = t), (this.count = e), (this.nodes = r);
          }
          function tG(t, e, r) {
            (this.ownerID = t), (this.keyHash = e), (this.entries = r);
          }
          function tJ(t, e, r) {
            (this.ownerID = t), (this.keyHash = e), (this.entry = r);
          }
          function t$(t, e, r) {
            (this._type = e),
              (this._reverse = r),
              (this._stack = t._root && tY(t._root));
          }
          function tX(t, e) {
            return V(t, e[0], e[1]);
          }
          function tY(t, e) {
            return { node: t, index: 0, __prev: e };
          }
          function tZ(t, e, r, n) {
            var i = Object.create(tq);
            return (
              (i.size = t),
              (i._root = e),
              (i.__ownerID = r),
              (i.__hash = n),
              (i.__altered = !1),
              i
            );
          }
          function tQ() {
            return i || (i = tZ(0));
          }
          function t0(t, e, r) {
            if (t._root) {
              var n,
                i,
                o = M(K),
                a = M(T);
              if (
                ((n = t1(t._root, t.__ownerID, 0, void 0, e, r, o, a)),
                !a.value)
              )
                return t;
              i = t.size + (o.value ? (r === O ? -1 : 1) : 0);
            } else {
              if (r === O) return t;
              (i = 1), (n = new tH(t.__ownerID, [[e, r]]));
            }
            return t.__ownerID
              ? ((t.size = i),
                (t._root = n),
                (t.__hash = void 0),
                (t.__altered = !0),
                t)
              : n
                ? tZ(i, n)
                : tQ();
          }
          function t1(t, e, r, n, i, o, a, u) {
            if (!t) return o === O ? t : (A(u), A(a), new tJ(e, n, [i, o]));
            return t.update(e, r, n, i, o, a, u);
          }
          function t6(t) {
            return t.constructor === tJ || t.constructor === tG;
          }
          function t3(t, e, r, n, i) {
            if (t.keyHash === n) return new tG(e, n, [t.entry, i]);
            var o,
              a = (0 === r ? t.keyHash : t.keyHash >>> r) & D,
              u = (0 === r ? n : n >>> r) & D,
              s =
                a === u
                  ? [t3(t, e, r + 5, n, i)]
                  : ((o = new tJ(e, n, i)), a < u ? [t, o] : [o, t]);
            return new tW(e, (1 << a) | (1 << u), s);
          }
          (tq[tU] = !0),
            (tq[C] = tq.remove),
            (tq.removeIn = tq.deleteIn),
            (tH.prototype.get = function (t, e, r, n) {
              for (var i = this.entries, o = 0, a = i.length; o < a; o++)
                if (tv(r, i[o][0])) return i[o][1];
              return n;
            }),
            (tH.prototype.update = function (t, e, r, n, i, o, a) {
              for (
                var u = i === O, s = this.entries, c = 0, l = s.length;
                c < l && !tv(n, s[c][0]);
                c++
              );
              var f = c < l;
              if (f ? s[c][1] === i : u) return this;
              if ((A(a), (u || !f) && A(o), !u || 1 !== s.length)) {
                if (!f && !u && s.length >= et)
                  return (function (t, e, r, n) {
                    !t && (t = new I());
                    for (
                      var i = new tJ(t, tO(r), [r, n]), o = 0;
                      o < e.length;
                      o++
                    ) {
                      var a = e[o];
                      i = i.update(t, 0, void 0, a[0], a[1]);
                    }
                    return i;
                  })(t, s, n, i);
                var p = t && t === this.ownerID,
                  h = p ? s : B(s);
                return (f
                  ? u
                    ? c === l - 1
                      ? h.pop()
                      : (h[c] = h.pop())
                    : (h[c] = [n, i])
                  : h.push([n, i]),
                p)
                  ? ((this.entries = h), this)
                  : new tH(t, h);
              }
            }),
            (tW.prototype.get = function (t, e, r, n) {
              void 0 === e && (e = tO(r));
              var i = 1 << ((0 === t ? e : e >>> t) & D),
                o = this.bitmap;
              return (o & i) == 0
                ? n
                : this.nodes[t9(o & (i - 1))].get(t + 5, e, r, n);
            }),
            (tW.prototype.update = function (t, e, r, n, i, o, a) {
              void 0 === r && (r = tO(n));
              var u = (0 === e ? r : r >>> e) & D,
                s = 1 << u,
                c = this.bitmap,
                l = (c & s) != 0;
              if (!l && i === O) return this;
              var f = t9(c & (s - 1)),
                p = this.nodes,
                h = l ? p[f] : void 0,
                d = t1(h, t, e + 5, r, n, i, o, a);
              if (d === h) return this;
              if (!l && d && p.length >= ee)
                return (function (t, e, r, n, i) {
                  for (var o = 0, a = Array(E), u = 0; 0 !== r; u++, r >>>= 1)
                    a[u] = 1 & r ? e[o++] : void 0;
                  return (a[n] = i), new tV(t, o + 1, a);
                })(t, p, c, u, d);
              if (l && !d && 2 === p.length && t6(p[1 ^ f])) return p[1 ^ f];
              if (l && d && 1 === p.length && t6(d)) return d;
              var g = t && t === this.ownerID,
                y = l ? (d ? c : c ^ s) : c | s,
                v = l
                  ? d
                    ? t4(p, f, d, g)
                    : (function (t, e, r) {
                        var n = t.length - 1;
                        if (r && e === n) return t.pop(), t;
                        for (var i = Array(n), o = 0, a = 0; a < n; a++)
                          a === e && (o = 1), (i[a] = t[a + o]);
                        return i;
                      })(p, f, g)
                  : (function (t, e, r, n) {
                      var i = t.length + 1;
                      if (n && e + 1 === i) return (t[e] = r), t;
                      for (var o = Array(i), a = 0, u = 0; u < i; u++)
                        u === e ? ((o[u] = r), (a = -1)) : (o[u] = t[u + a]);
                      return o;
                    })(p, f, d, g);
              return g
                ? ((this.bitmap = y), (this.nodes = v), this)
                : new tW(t, y, v);
            }),
            (tV.prototype.get = function (t, e, r, n) {
              void 0 === e && (e = tO(r));
              var i = (0 === t ? e : e >>> t) & D,
                o = this.nodes[i];
              return o ? o.get(t + 5, e, r, n) : n;
            }),
            (tV.prototype.update = function (t, e, r, n, i, o, a) {
              void 0 === r && (r = tO(n));
              var u = (0 === e ? r : r >>> e) & D,
                s = i === O,
                c = this.nodes,
                l = c[u];
              if (s && !l) return this;
              var f = t1(l, t, e + 5, r, n, i, o, a);
              if (f === l) return this;
              var p = this.count;
              if (l) {
                if (!f && --p < er)
                  return (function (t, e, r, n) {
                    for (
                      var i = 0,
                        o = 0,
                        a = Array(r),
                        u = 0,
                        s = 1,
                        c = e.length;
                      u < c;
                      u++, s <<= 1
                    ) {
                      var l = e[u];
                      void 0 !== l && u !== n && ((i |= s), (a[o++] = l));
                    }
                    return new tW(t, i, a);
                  })(t, c, p, u);
              } else p++;
              var h = t && t === this.ownerID,
                d = t4(c, u, f, h);
              return h
                ? ((this.count = p), (this.nodes = d), this)
                : new tV(t, p, d);
            }),
            (tG.prototype.get = function (t, e, r, n) {
              for (var i = this.entries, o = 0, a = i.length; o < a; o++)
                if (tv(r, i[o][0])) return i[o][1];
              return n;
            }),
            (tG.prototype.update = function (t, e, r, n, i, o, a) {
              void 0 === r && (r = tO(n));
              var u = i === O;
              if (r !== this.keyHash)
                return u ? this : (A(a), A(o), t3(this, t, e, r, [n, i]));
              for (
                var s = this.entries, c = 0, l = s.length;
                c < l && !tv(n, s[c][0]);
                c++
              );
              var f = c < l;
              if (f ? s[c][1] === i : u) return this;
              if ((A(a), (u || !f) && A(o), u && 2 === l))
                return new tJ(t, this.keyHash, s[1 ^ c]);
              var p = t && t === this.ownerID,
                h = p ? s : B(s);
              return (f
                ? u
                  ? c === l - 1
                    ? h.pop()
                    : (h[c] = h.pop())
                  : (h[c] = [n, i])
                : h.push([n, i]),
              p)
                ? ((this.entries = h), this)
                : new tG(t, this.keyHash, h);
            }),
            (tJ.prototype.get = function (t, e, r, n) {
              return tv(r, this.entry[0]) ? this.entry[1] : n;
            }),
            (tJ.prototype.update = function (t, e, r, n, i, o, a) {
              var u = i === O,
                s = tv(n, this.entry[0]);
              if (s ? i === this.entry[1] : u) return this;
              if ((A(a), u)) {
                A(o);
                return;
              }
              if (s)
                return t && t === this.ownerID
                  ? ((this.entry[1] = i), this)
                  : new tJ(t, this.keyHash, [n, i]);
              return A(o), t3(this, t, e, tO(n), [n, i]);
            }),
            (tH.prototype.iterate = tG.prototype.iterate =
              function (t, e) {
                for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++)
                  if (!1 === t(r[e ? i - n : n])) return !1;
              }),
            (tW.prototype.iterate = tV.prototype.iterate =
              function (t, e) {
                for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
                  var o = r[e ? i - n : n];
                  if (o && !1 === o.iterate(t, e)) return !1;
                }
              }),
            (tJ.prototype.iterate = function (t, e) {
              return t(this.entry);
            }),
            f(t$, W),
            (t$.prototype.next = function () {
              for (var t = this._type, e = this._stack; e; ) {
                var r,
                  n = e.node,
                  i = e.index++;
                if (n.entry) {
                  if (0 === i) return tX(t, n.entry);
                } else if (n.entries) {
                  if (i <= (r = n.entries.length - 1))
                    return tX(t, n.entries[this._reverse ? r - i : i]);
                } else if (i <= (r = n.nodes.length - 1)) {
                  var o = n.nodes[this._reverse ? r - i : i];
                  if (o) {
                    if (o.entry) return tX(t, o.entry);
                    e = this._stack = tY(o, e);
                  }
                  continue;
                }
                e = this._stack = this._stack.__prev;
              }
              return G();
            });
          function t2(t, e, r) {
            for (var n = [], i = 0; i < r.length; i++) {
              var o = r[i],
                a = h(o);
              !y(o) &&
                (a = a.map(function (t) {
                  return tg(t);
                })),
                n.push(a);
            }
            return t7(t, e, n);
          }
          function t8(t, e, r) {
            return t && t.mergeDeep && y(e) ? t.mergeDeep(e) : tv(t, e) ? t : e;
          }
          function t5(t) {
            return function (e, r, n) {
              if (e && e.mergeDeepWith && y(r)) return e.mergeDeepWith(t, r);
              var i = t(e, r, n);
              return tv(e, i) ? e : i;
            };
          }
          function t7(t, e, r) {
            return 0 ===
              (r = r.filter(function (t) {
                return 0 !== t.size;
              })).length
              ? t
              : 0 !== t.size || t.__ownerID || 1 !== r.length
                ? t.withMutations(function (t) {
                    for (
                      var n = e
                          ? function (r, n) {
                              t.update(n, O, function (t) {
                                return t === O ? r : e(t, r, n);
                              });
                            }
                          : function (e, r) {
                              t.set(r, e);
                            },
                        i = 0;
                      i < r.length;
                      i++
                    )
                      r[i].forEach(n);
                  })
                : t.constructor(r[0]);
          }
          function t9(t) {
            return (
              (t -= (t >> 1) & 1431655765),
              (t =
                ((t = (858993459 & t) + ((t >> 2) & 858993459)) + (t >> 4)) &
                252645135),
              (t += t >> 8),
              127 & (t += t >> 16)
            );
          }
          function t4(t, e, r, n) {
            var i = n ? t : B(t);
            return (i[e] = r), i;
          }
          var et = E / 4,
            ee = E / 2,
            er = E / 4;
          function en(t) {
            var e = ef();
            if (null == t) return e;
            if (ei(t)) return t;
            var r = d(t),
              n = r.size;
            return 0 === n
              ? e
              : (tz(n), n > 0 && n < E)
                ? el(0, n, 5, null, new eu(r.toArray()))
                : e.withMutations(function (t) {
                    t.setSize(n),
                      r.forEach(function (e, r) {
                        return t.set(r, e);
                      });
                  });
          }
          function ei(t) {
            return !!(t && t[eo]);
          }
          f(en, tx),
            (en.of = function () {
              return this(arguments);
            }),
            (en.prototype.toString = function () {
              return this.__toString("List [", "]");
            }),
            (en.prototype.get = function (t, e) {
              if ((t = L(this, t)) >= 0 && t < this.size) {
                var r = ed(this, (t += this._origin));
                return r && r.array[t & D];
              }
              return e;
            }),
            (en.prototype.set = function (t, e) {
              return (function (t, e, r) {
                if ((e = L(t, e)) != e) return t;
                if (e >= t.size || e < 0)
                  return t.withMutations(function (t) {
                    e < 0 ? eg(t, e).set(0, r) : eg(t, 0, e + 1).set(e, r);
                  });
                e += t._origin;
                var n = t._tail,
                  i = t._root,
                  o = M(T);
                return (e >= ev(t._capacity)
                  ? (n = ep(n, t.__ownerID, 0, e, r, o))
                  : (i = ep(i, t.__ownerID, t._level, e, r, o)),
                o.value)
                  ? t.__ownerID
                    ? ((t._root = i),
                      (t._tail = n),
                      (t.__hash = void 0),
                      (t.__altered = !0),
                      t)
                    : el(t._origin, t._capacity, t._level, i, n)
                  : t;
              })(this, t, e);
            }),
            (en.prototype.remove = function (t) {
              return this.has(t)
                ? 0 === t
                  ? this.shift()
                  : t === this.size - 1
                    ? this.pop()
                    : this.splice(t, 1)
                : this;
            }),
            (en.prototype.insert = function (t, e) {
              return this.splice(t, 0, e);
            }),
            (en.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = this._origin = this._capacity = 0),
                    (this._level = 5),
                    (this._root = this._tail = null),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : ef();
            }),
            (en.prototype.push = function () {
              var t = arguments,
                e = this.size;
              return this.withMutations(function (r) {
                eg(r, 0, e + t.length);
                for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
              });
            }),
            (en.prototype.pop = function () {
              return eg(this, 0, -1);
            }),
            (en.prototype.unshift = function () {
              var t = arguments;
              return this.withMutations(function (e) {
                eg(e, -t.length);
                for (var r = 0; r < t.length; r++) e.set(r, t[r]);
              });
            }),
            (en.prototype.shift = function () {
              return eg(this, 1);
            }),
            (en.prototype.merge = function () {
              return ey(this, void 0, arguments);
            }),
            (en.prototype.mergeWith = function (t) {
              var e = l.call(arguments, 1);
              return ey(this, t, e);
            }),
            (en.prototype.mergeDeep = function () {
              return ey(this, t8, arguments);
            }),
            (en.prototype.mergeDeepWith = function (t) {
              var e = l.call(arguments, 1);
              return ey(this, t5(t), e);
            }),
            (en.prototype.setSize = function (t) {
              return eg(this, 0, t);
            }),
            (en.prototype.slice = function (t, e) {
              var r,
                n = this.size;
              if (F(t, e, n)) return this;
              return eg(this, j(t, n, 0), j(e, (r = n), r));
            }),
            (en.prototype.__iterator = function (t, e) {
              var r = 0,
                n = ec(this, e);
              return new W(function () {
                var e = n();
                return e === es ? G() : V(t, r++, e);
              });
            }),
            (en.prototype.__iterate = function (t, e) {
              for (
                var r, n = 0, i = ec(this, e);
                (r = i()) !== es && !1 !== t(r, n++, this);

              );
              return n;
            }),
            (en.prototype.__ensureOwner = function (t) {
              return t === this.__ownerID
                ? this
                : t
                  ? el(
                      this._origin,
                      this._capacity,
                      this._level,
                      this._root,
                      this._tail,
                      t,
                      this.__hash,
                    )
                  : ((this.__ownerID = t), this);
            }),
            (en.isList = ei);
          var eo = "@@__IMMUTABLE_LIST__@@",
            ea = en.prototype;
          function eu(t, e) {
            (this.array = t), (this.ownerID = e);
          }
          (ea[eo] = !0),
            (ea[C] = ea.remove),
            (ea.setIn = tq.setIn),
            (ea.deleteIn = ea.removeIn = tq.removeIn),
            (ea.update = tq.update),
            (ea.updateIn = tq.updateIn),
            (ea.mergeIn = tq.mergeIn),
            (ea.mergeDeepIn = tq.mergeDeepIn),
            (ea.withMutations = tq.withMutations),
            (ea.asMutable = tq.asMutable),
            (ea.asImmutable = tq.asImmutable),
            (ea.wasAltered = tq.wasAltered),
            (eu.prototype.removeBefore = function (t, e, r) {
              if (r === e ? 1 << e : 0 === this.array.length) return this;
              var n,
                i = (r >>> e) & D;
              if (i >= this.array.length) return new eu([], t);
              var o = 0 === i;
              if (e > 0) {
                var a = this.array[i];
                if ((n = a && a.removeBefore(t, e - 5, r)) === a && o)
                  return this;
              }
              if (o && !n) return this;
              var u = eh(this, t);
              if (!o) for (var s = 0; s < i; s++) u.array[s] = void 0;
              return n && (u.array[i] = n), u;
            }),
            (eu.prototype.removeAfter = function (t, e, r) {
              if (r === (e ? 1 << e : 0) || 0 === this.array.length)
                return this;
              var n,
                i = ((r - 1) >>> e) & D;
              if (i >= this.array.length) return this;
              if (e > 0) {
                var o = this.array[i];
                if (
                  (n = o && o.removeAfter(t, e - 5, r)) === o &&
                  i === this.array.length - 1
                )
                  return this;
              }
              var a = eh(this, t);
              return a.array.splice(i + 1), n && (a.array[i] = n), a;
            });
          var es = {};
          function ec(t, e) {
            var r = t._origin,
              n = t._capacity,
              i = ev(n),
              o = t._tail;
            return a(t._root, t._level, 0);
            function a(t, u, s) {
              return 0 === u
                ? (function (t, a) {
                    var u = a === i ? o && o.array : t && t.array,
                      s = a > r ? 0 : r - a,
                      c = n - a;
                    return (
                      c > E && (c = E),
                      function () {
                        if (s === c) return es;
                        var t = e ? --c : s++;
                        return u && u[t];
                      }
                    );
                  })(t, s)
                : (function (t, i, o) {
                    var u,
                      s = t && t.array,
                      c = o > r ? 0 : (r - o) >> i,
                      l = ((n - o) >> i) + 1;
                    return (
                      l > E && (l = E),
                      function () {
                        for (;;) {
                          if (u) {
                            var t = u();
                            if (t !== es) return t;
                            u = null;
                          }
                          if (c === l) return es;
                          var r = e ? --l : c++;
                          u = a(s && s[r], i - 5, o + (r << i));
                        }
                      }
                    );
                  })(t, u, s);
            }
          }
          function el(t, e, r, n, i, o, a) {
            var u = Object.create(ea);
            return (
              (u.size = e - t),
              (u._origin = t),
              (u._capacity = e),
              (u._level = r),
              (u._root = n),
              (u._tail = i),
              (u.__ownerID = o),
              (u.__hash = a),
              (u.__altered = !1),
              u
            );
          }
          function ef() {
            return o || (o = el(0, 0, 5));
          }
          function ep(t, e, r, n, i, o) {
            var a,
              u = (n >>> r) & D,
              s = t && u < t.array.length;
            if (!s && void 0 === i) return t;
            if (r > 0) {
              var c = t && t.array[u],
                l = ep(c, e, r - 5, n, i, o);
              return l === c ? t : (((a = eh(t, e)).array[u] = l), a);
            }
            return s && t.array[u] === i
              ? t
              : (A(o),
                (a = eh(t, e)),
                void 0 === i && u === a.array.length - 1
                  ? a.array.pop()
                  : (a.array[u] = i),
                a);
          }
          function eh(t, e) {
            return e && t && e === t.ownerID
              ? t
              : new eu(t ? t.array.slice() : [], e);
          }
          function ed(t, e) {
            if (e >= ev(t._capacity)) return t._tail;
            if (e < 1 << (t._level + 5)) {
              for (var r = t._root, n = t._level; r && n > 0; )
                (r = r.array[(e >>> n) & D]), (n -= 5);
              return r;
            }
          }
          function eg(t, e, r) {
            void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
            var n = t.__ownerID || new I(),
              i = t._origin,
              o = t._capacity,
              a = i + e,
              u = void 0 === r ? o : r < 0 ? o + r : i + r;
            if (a === i && u === o) return t;
            if (a >= u) return t.clear();
            for (var s = t._level, c = t._root, l = 0; a + l < 0; )
              (c = new eu(c && c.array.length ? [void 0, c] : [], n)),
                (s += 5),
                (l += 1 << s);
            l && ((a += l), (i += l), (u += l), (o += l));
            for (var f = ev(o), p = ev(u); p >= 1 << (s + 5); )
              (c = new eu(c && c.array.length ? [c] : [], n)), (s += 5);
            var h = t._tail,
              d = p < f ? ed(t, u - 1) : p > f ? new eu([], n) : h;
            if (h && p > f && a < o && h.array.length) {
              for (var g = (c = eh(c, n)), y = s; y > 5; y -= 5) {
                var v = (f >>> y) & D;
                g = g.array[v] = eh(g.array[v], n);
              }
              g.array[(f >>> 5) & D] = h;
            }
            if ((u < o && (d = d && d.removeAfter(n, 0, u)), a >= p))
              (a -= p),
                (u -= p),
                (s = 5),
                (c = null),
                (d = d && d.removeBefore(n, 0, a));
            else if (a > i || p < f) {
              for (l = 0; c; ) {
                var m = (a >>> s) & D;
                if ((m !== p >>> s) & D) break;
                m && (l += (1 << s) * m), (s -= 5), (c = c.array[m]);
              }
              c && a > i && (c = c.removeBefore(n, s, a - l)),
                c && p < f && (c = c.removeAfter(n, s, p - l)),
                l && ((a -= l), (u -= l));
            }
            return t.__ownerID
              ? ((t.size = u - a),
                (t._origin = a),
                (t._capacity = u),
                (t._level = s),
                (t._root = c),
                (t._tail = d),
                (t.__hash = void 0),
                (t.__altered = !0),
                t)
              : el(a, u, s, c, d);
          }
          function ey(t, e, r) {
            for (var n = [], i = 0, o = 0; o < r.length; o++) {
              var a = r[o],
                u = d(a);
              u.size > i && (i = u.size),
                !y(a) &&
                  (u = u.map(function (t) {
                    return tg(t);
                  })),
                n.push(u);
            }
            return i > t.size && (t = t.setSize(i)), t7(t, e, n);
          }
          function ev(t) {
            return t < E ? 0 : ((t - 1) >>> 5) << 5;
          }
          function em(t) {
            return null == t
              ? eS()
              : e_(t)
                ? t
                : eS().withMutations(function (e) {
                    var r = h(t);
                    tz(r.size),
                      r.forEach(function (t, r) {
                        return e.set(r, t);
                      });
                  });
          }
          function e_(t) {
            return tj(t) && b(t);
          }
          function eb(t, e, r, n) {
            var i = Object.create(em.prototype);
            return (
              (i.size = t ? t.size : 0),
              (i._map = t),
              (i._list = e),
              (i.__ownerID = r),
              (i.__hash = n),
              i
            );
          }
          function eS() {
            return a || (a = eb(tQ(), ef()));
          }
          function ew(t, e, r) {
            var n,
              i,
              o = t._map,
              a = t._list,
              u = o.get(e),
              s = void 0 !== u;
            if (r === O) {
              if (!s) return t;
              a.size >= E && a.size >= 2 * o.size
                ? ((n = (i = a.filter(function (t, e) {
                    return void 0 !== t && u !== e;
                  }))
                    .toKeyedSeq()
                    .map(function (t) {
                      return t[0];
                    })
                    .flip()
                    .toMap()),
                  t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID))
                : ((n = o.remove(e)),
                  (i = u === a.size - 1 ? a.pop() : a.set(u, void 0)));
            } else if (s) {
              if (r === a.get(u)[1]) return t;
              (n = o), (i = a.set(u, [e, r]));
            } else (n = o.set(e, a.size)), (i = a.set(a.size, [e, r]));
            return t.__ownerID
              ? ((t.size = n.size),
                (t._map = n),
                (t._list = i),
                (t.__hash = void 0),
                t)
              : eb(n, i);
          }
          function ek(t, e) {
            (this._iter = t), (this._useKeys = e), (this.size = t.size);
          }
          function ex(t) {
            (this._iter = t), (this.size = t.size);
          }
          function eC(t) {
            (this._iter = t), (this.size = t.size);
          }
          function eE(t) {
            (this._iter = t), (this.size = t.size);
          }
          function eD(t) {
            var e = eU(t);
            return (
              (e._iter = t),
              (e.size = t.size),
              (e.flip = function () {
                return t;
              }),
              (e.reverse = function () {
                var e = t.reverse.apply(this);
                return (
                  (e.flip = function () {
                    return t.reverse();
                  }),
                  e
                );
              }),
              (e.has = function (e) {
                return t.includes(e);
              }),
              (e.includes = function (e) {
                return t.has(e);
              }),
              (e.cacheResult = eq),
              (e.__iterateUncached = function (e, r) {
                var n = this;
                return t.__iterate(function (t, r) {
                  return !1 !== e(r, t, n);
                }, r);
              }),
              (e.__iteratorUncached = function (e, r) {
                if (2 === e) {
                  var n = t.__iterator(e, r);
                  return new W(function () {
                    var t = n.next();
                    if (!t.done) {
                      var e = t.value[0];
                      (t.value[0] = t.value[1]), (t.value[1] = e);
                    }
                    return t;
                  });
                }
                return t.__iterator(1 === e ? 0 : 1, r);
              }),
              e
            );
          }
          function eO(t, e, r) {
            var n = eU(t);
            return (
              (n.size = t.size),
              (n.has = function (e) {
                return t.has(e);
              }),
              (n.get = function (n, i) {
                var o = t.get(n, O);
                return o === O ? i : e.call(r, o, n, t);
              }),
              (n.__iterateUncached = function (n, i) {
                var o = this;
                return t.__iterate(function (t, i, a) {
                  return !1 !== n(e.call(r, t, i, a), i, o);
                }, i);
              }),
              (n.__iteratorUncached = function (n, i) {
                var o = t.__iterator(2, i);
                return new W(function () {
                  var i = o.next();
                  if (i.done) return i;
                  var a = i.value,
                    u = a[0];
                  return V(n, u, e.call(r, a[1], u, t), i);
                });
              }),
              n
            );
          }
          function eK(t, e) {
            var r = eU(t);
            return (
              (r._iter = t),
              (r.size = t.size),
              (r.reverse = function () {
                return t;
              }),
              t.flip &&
                (r.flip = function () {
                  var e = eD(t);
                  return (
                    (e.reverse = function () {
                      return t.flip();
                    }),
                    e
                  );
                }),
              (r.get = function (r, n) {
                return t.get(e ? r : -1 - r, n);
              }),
              (r.has = function (r) {
                return t.has(e ? r : -1 - r);
              }),
              (r.includes = function (e) {
                return t.includes(e);
              }),
              (r.cacheResult = eq),
              (r.__iterate = function (e, r) {
                var n = this;
                return t.__iterate(function (t, r) {
                  return e(t, r, n);
                }, !r);
              }),
              (r.__iterator = function (e, r) {
                return t.__iterator(e, !r);
              }),
              r
            );
          }
          function eT(t, e, r, n) {
            var i = eU(t);
            return (
              n &&
                ((i.has = function (n) {
                  var i = t.get(n, O);
                  return i !== O && !!e.call(r, i, n, t);
                }),
                (i.get = function (n, i) {
                  var o = t.get(n, O);
                  return o !== O && e.call(r, o, n, t) ? o : i;
                })),
              (i.__iterateUncached = function (i, o) {
                var a = this,
                  u = 0;
                return (
                  t.__iterate(function (t, o, s) {
                    if (e.call(r, t, o, s)) return u++, i(t, n ? o : u - 1, a);
                  }, o),
                  u
                );
              }),
              (i.__iteratorUncached = function (i, o) {
                var a = t.__iterator(2, o),
                  u = 0;
                return new W(function () {
                  for (;;) {
                    var o = a.next();
                    if (o.done) return o;
                    var s = o.value,
                      c = s[0],
                      l = s[1];
                    if (e.call(r, l, c, t)) return V(i, n ? c : u++, l, o);
                  }
                });
              }),
              i
            );
          }
          f(em, tP),
            (em.of = function () {
              return this(arguments);
            }),
            (em.prototype.toString = function () {
              return this.__toString("OrderedMap {", "}");
            }),
            (em.prototype.get = function (t, e) {
              var r = this._map.get(t);
              return void 0 !== r ? this._list.get(r)[1] : e;
            }),
            (em.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = 0),
                    this._map.clear(),
                    this._list.clear(),
                    this)
                  : eS();
            }),
            (em.prototype.set = function (t, e) {
              return ew(this, t, e);
            }),
            (em.prototype.remove = function (t) {
              return ew(this, t, O);
            }),
            (em.prototype.wasAltered = function () {
              return this._map.wasAltered() || this._list.wasAltered();
            }),
            (em.prototype.__iterate = function (t, e) {
              var r = this;
              return this._list.__iterate(function (e) {
                return e && t(e[1], e[0], r);
              }, e);
            }),
            (em.prototype.__iterator = function (t, e) {
              return this._list.fromEntrySeq().__iterator(t, e);
            }),
            (em.prototype.__ensureOwner = function (t) {
              if (t === this.__ownerID) return this;
              var e = this._map.__ensureOwner(t),
                r = this._list.__ensureOwner(t);
              return t
                ? eb(e, r, t, this.__hash)
                : ((this.__ownerID = t),
                  (this._map = e),
                  (this._list = r),
                  this);
            }),
            (em.isOrderedMap = e_),
            (em.prototype[x] = !0),
            (em.prototype[C] = em.prototype.remove),
            f(ek, tt),
            (ek.prototype.get = function (t, e) {
              return this._iter.get(t, e);
            }),
            (ek.prototype.has = function (t) {
              return this._iter.has(t);
            }),
            (ek.prototype.valueSeq = function () {
              return this._iter.valueSeq();
            }),
            (ek.prototype.reverse = function () {
              var t = this,
                e = eK(this, !0);
              return (
                !this._useKeys &&
                  (e.valueSeq = function () {
                    return t._iter.toSeq().reverse();
                  }),
                e
              );
            }),
            (ek.prototype.map = function (t, e) {
              var r = this,
                n = eO(this, t, e);
              return (
                !this._useKeys &&
                  (n.valueSeq = function () {
                    return r._iter.toSeq().map(t, e);
                  }),
                n
              );
            }),
            (ek.prototype.__iterate = function (t, e) {
              var r,
                n = this;
              return this._iter.__iterate(
                this._useKeys
                  ? function (e, r) {
                      return t(e, r, n);
                    }
                  : ((r = e ? eP(this) : 0),
                    function (i) {
                      return t(i, e ? --r : r++, n);
                    }),
                e,
              );
            }),
            (ek.prototype.__iterator = function (t, e) {
              if (this._useKeys) return this._iter.__iterator(t, e);
              var r = this._iter.__iterator(1, e),
                n = e ? eP(this) : 0;
              return new W(function () {
                var i = r.next();
                return i.done ? i : V(t, e ? --n : n++, i.value, i);
              });
            }),
            (ek.prototype[x] = !0),
            f(ex, te),
            (ex.prototype.includes = function (t) {
              return this._iter.includes(t);
            }),
            (ex.prototype.__iterate = function (t, e) {
              var r = this,
                n = 0;
              return this._iter.__iterate(function (e) {
                return t(e, n++, r);
              }, e);
            }),
            (ex.prototype.__iterator = function (t, e) {
              var r = this._iter.__iterator(1, e),
                n = 0;
              return new W(function () {
                var e = r.next();
                return e.done ? e : V(t, n++, e.value, e);
              });
            }),
            f(eC, tr),
            (eC.prototype.has = function (t) {
              return this._iter.includes(t);
            }),
            (eC.prototype.__iterate = function (t, e) {
              var r = this;
              return this._iter.__iterate(function (e) {
                return t(e, e, r);
              }, e);
            }),
            (eC.prototype.__iterator = function (t, e) {
              var r = this._iter.__iterator(1, e);
              return new W(function () {
                var e = r.next();
                return e.done ? e : V(t, e.value, e.value, e);
              });
            }),
            f(eE, tt),
            (eE.prototype.entrySeq = function () {
              return this._iter.toSeq();
            }),
            (eE.prototype.__iterate = function (t, e) {
              var r = this;
              return this._iter.__iterate(function (e) {
                if (e) {
                  ez(e);
                  var n = y(e);
                  return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
                }
              }, e);
            }),
            (eE.prototype.__iterator = function (t, e) {
              var r = this._iter.__iterator(1, e);
              return new W(function () {
                for (;;) {
                  var e = r.next();
                  if (e.done) return e;
                  var n = e.value;
                  if (n) {
                    ez(n);
                    var i = y(n);
                    return V(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
                  }
                }
              });
            }),
            (ex.prototype.cacheResult =
              ek.prototype.cacheResult =
              eC.prototype.cacheResult =
              eE.prototype.cacheResult =
                eq);
          function eM(t, e, r, n) {
            var i,
              o,
              a = t.size;
            if (
              (void 0 !== e && (e |= 0), void 0 !== r && (r |= 0), F(e, r, a))
            )
              return t;
            var u = j(e, a, 0);
            var s = j(r, (i = a), i);
            if (u != u || s != s) return eM(t.toSeq().cacheResult(), e, r, n);
            var c = s - u;
            c == c && (o = c < 0 ? 0 : c);
            var l = eU(t);
            return (
              (l.size = 0 === o ? o : (t.size && o) || void 0),
              !n &&
                ts(t) &&
                o >= 0 &&
                (l.get = function (e, r) {
                  return (e = L(this, e)) >= 0 && e < o ? t.get(e + u, r) : r;
                }),
              (l.__iterateUncached = function (e, r) {
                var i = this;
                if (0 === o) return 0;
                if (r) return this.cacheResult().__iterate(e, r);
                var a = 0,
                  s = !0,
                  c = 0;
                return (
                  t.__iterate(function (t, r) {
                    if (!(s && (s = a++ < u)))
                      return c++, !1 !== e(t, n ? r : c - 1, i) && c !== o;
                  }),
                  c
                );
              }),
              (l.__iteratorUncached = function (e, r) {
                if (0 !== o && r) return this.cacheResult().__iterator(e, r);
                var i = 0 !== o && t.__iterator(e, r),
                  a = 0,
                  s = 0;
                return new W(function () {
                  for (; a++ < u; ) i.next();
                  if (++s > o) return G();
                  var t = i.next();
                  return n || 1 === e
                    ? t
                    : 0 === e
                      ? V(e, s - 1, void 0, t)
                      : V(e, s - 1, t.value[1], t);
                });
              }),
              l
            );
          }
          function eA(t, e, r, n) {
            var i = eU(t);
            return (
              (i.__iterateUncached = function (i, o) {
                var a = this;
                if (o) return this.cacheResult().__iterate(i, o);
                var u = !0,
                  s = 0;
                return (
                  t.__iterate(function (t, o, c) {
                    if (!(u && (u = e.call(r, t, o, c))))
                      return s++, i(t, n ? o : s - 1, a);
                  }),
                  s
                );
              }),
              (i.__iteratorUncached = function (i, o) {
                var a = this;
                if (o) return this.cacheResult().__iterator(i, o);
                var u = t.__iterator(2, o),
                  s = !0,
                  c = 0;
                return new W(function () {
                  var t, o, l;
                  do {
                    if ((t = u.next()).done) {
                      if (n || 1 === i) return t;
                      if (0 === i) return V(i, c++, void 0, t);
                      else return V(i, c++, t.value[1], t);
                    }
                    var f = t.value;
                    (o = f[0]), (l = f[1]), s && (s = e.call(r, l, o, a));
                  } while (s);
                  return 2 === i ? t : V(i, o, l, t);
                });
              }),
              i
            );
          }
          function eI(t, e, r) {
            var n = eU(t);
            return (
              (n.__iterateUncached = function (n, i) {
                var o = 0,
                  a = !1;
                return (
                  !(function t(u, s) {
                    var c = this;
                    u.__iterate(function (i, u) {
                      return (
                        (!e || s < e) && y(i)
                          ? t(i, s + 1)
                          : !1 === n(i, r ? u : o++, c) && (a = !0),
                        !a
                      );
                    }, i);
                  })(t, 0),
                  o
                );
              }),
              (n.__iteratorUncached = function (n, i) {
                var o = t.__iterator(n, i),
                  a = [],
                  u = 0;
                return new W(function () {
                  for (; o; ) {
                    var t = o.next();
                    if (!1 !== t.done) {
                      o = a.pop();
                      continue;
                    }
                    var s = t.value;
                    if (
                      (2 === n && (s = s[1]), !((!e || a.length < e) && y(s)))
                    )
                      return r ? t : V(n, u++, s, t);
                    a.push(o), (o = s.__iterator(n, i));
                  }
                  return G();
                });
              }),
              n
            );
          }
          function eB(t, e, r) {
            !e && (e = eH);
            var n = v(t),
              i = 0,
              o = t
                .toSeq()
                .map(function (e, n) {
                  return [n, e, i++, r ? r(e, n, t) : e];
                })
                .toArray();
            return (
              o
                .sort(function (t, r) {
                  return e(t[3], r[3]) || t[2] - r[2];
                })
                .forEach(
                  n
                    ? function (t, e) {
                        o[e].length = 2;
                      }
                    : function (t, e) {
                        o[e] = t[1];
                      },
                ),
              n ? tt(o) : m(t) ? te(o) : tr(o)
            );
          }
          function eR(t, e, r) {
            if ((!e && (e = eH), !r))
              return t.reduce(function (t, r) {
                return eL(e, t, r) ? r : t;
              });
            var n = t
              .toSeq()
              .map(function (e, n) {
                return [e, r(e, n, t)];
              })
              .reduce(function (t, r) {
                return eL(e, t[1], r[1]) ? r : t;
              });
            return n && n[0];
          }
          function eL(t, e, r) {
            var n = t(r, e);
            return (0 === n && r !== e && (null == r || r != r)) || n > 0;
          }
          function eN(t, e, r) {
            var n = eU(t);
            return (
              (n.size = new ti(r)
                .map(function (t) {
                  return t.size;
                })
                .min()),
              (n.__iterate = function (t, e) {
                for (
                  var r, n = this.__iterator(1, e), i = 0;
                  !(r = n.next()).done && !1 !== t(r.value, i++, this);

                );
                return i;
              }),
              (n.__iteratorUncached = function (t, n) {
                var i = r.map(function (t) {
                    return (t = p(t)), X(n ? t.reverse() : t);
                  }),
                  o = 0,
                  a = !1;
                return new W(function () {
                  var r;
                  return (!a &&
                    (a = (r = i.map(function (t) {
                      return t.next();
                    })).some(function (t) {
                      return t.done;
                    })),
                  a)
                    ? G()
                    : V(
                        t,
                        o++,
                        e.apply(
                          null,
                          r.map(function (t) {
                            return t.value;
                          }),
                        ),
                      );
                });
              }),
              n
            );
          }
          function eF(t, e) {
            return ts(t) ? e : t.constructor(e);
          }
          function ez(t) {
            if (t !== Object(t)) throw TypeError("Expected [K, V] tuple: " + t);
          }
          function eP(t) {
            return tz(t.size), R(t);
          }
          function ej(t) {
            return v(t) ? h : m(t) ? d : g;
          }
          function eU(t) {
            return Object.create((v(t) ? tt : m(t) ? te : tr).prototype);
          }
          function eq() {
            return this._iter.cacheResult
              ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
              : Q.prototype.cacheResult.call(this);
          }
          function eH(t, e) {
            return t > e ? 1 : t < e ? -1 : 0;
          }
          function eW(t) {
            var e = X(t);
            if (!e) {
              if (!Z(t))
                throw TypeError("Expected iterable or array-like: " + t);
              e = X(p(t));
            }
            return e;
          }
          function eV(t, e) {
            var r,
              n = function (o) {
                if (o instanceof n) return o;
                if (!(this instanceof n)) return new n(o);
                if (!r) {
                  r = !0;
                  var a = Object.keys(t);
                  (function (t, e) {
                    try {
                      e.forEach(eX.bind(void 0, t));
                    } catch (t) {}
                  })(i, a),
                    (i.size = a.length),
                    (i._name = e),
                    (i._keys = a),
                    (i._defaultValues = t);
                }
                this._map = tP(o);
              },
              i = (n.prototype = Object.create(eG));
            return (i.constructor = n), n;
          }
          f(eV, tk),
            (eV.prototype.toString = function () {
              return this.__toString(e$(this) + " {", "}");
            }),
            (eV.prototype.has = function (t) {
              return this._defaultValues.hasOwnProperty(t);
            }),
            (eV.prototype.get = function (t, e) {
              if (!this.has(t)) return e;
              var r = this._defaultValues[t];
              return this._map ? this._map.get(t, r) : r;
            }),
            (eV.prototype.clear = function () {
              if (this.__ownerID) return this._map && this._map.clear(), this;
              var t = this.constructor;
              return t._empty || (t._empty = eJ(this, tQ()));
            }),
            (eV.prototype.set = function (t, e) {
              if (!this.has(t))
                throw Error(
                  'Cannot set unknown key "' + t + '" on ' + e$(this),
                );
              var r = this._map && this._map.set(t, e);
              return this.__ownerID || r === this._map ? this : eJ(this, r);
            }),
            (eV.prototype.remove = function (t) {
              if (!this.has(t)) return this;
              var e = this._map && this._map.remove(t);
              return this.__ownerID || e === this._map ? this : eJ(this, e);
            }),
            (eV.prototype.wasAltered = function () {
              return this._map.wasAltered();
            }),
            (eV.prototype.__iterator = function (t, e) {
              var r = this;
              return h(this._defaultValues)
                .map(function (t, e) {
                  return r.get(e);
                })
                .__iterator(t, e);
            }),
            (eV.prototype.__iterate = function (t, e) {
              var r = this;
              return h(this._defaultValues)
                .map(function (t, e) {
                  return r.get(e);
                })
                .__iterate(t, e);
            }),
            (eV.prototype.__ensureOwner = function (t) {
              if (t === this.__ownerID) return this;
              var e = this._map && this._map.__ensureOwner(t);
              return t
                ? eJ(this, e, t)
                : ((this.__ownerID = t), (this._map = e), this);
            });
          var eG = eV.prototype;
          function eJ(t, e, r) {
            var n = Object.create(Object.getPrototypeOf(t));
            return (n._map = e), (n.__ownerID = r), n;
          }
          function e$(t) {
            return t._name || t.constructor.name || "Record";
          }
          (eG[C] = eG.remove),
            (eG.deleteIn = eG.removeIn = tq.removeIn),
            (eG.merge = tq.merge),
            (eG.mergeWith = tq.mergeWith),
            (eG.mergeIn = tq.mergeIn),
            (eG.mergeDeep = tq.mergeDeep),
            (eG.mergeDeepWith = tq.mergeDeepWith),
            (eG.mergeDeepIn = tq.mergeDeepIn),
            (eG.setIn = tq.setIn),
            (eG.update = tq.update),
            (eG.updateIn = tq.updateIn),
            (eG.withMutations = tq.withMutations),
            (eG.asMutable = tq.asMutable),
            (eG.asImmutable = tq.asImmutable);
          function eX(t, e) {
            Object.defineProperty(t, e, {
              get: function () {
                return this.get(e);
              },
              set: function (t) {
                tb(this.__ownerID, "Cannot set on an immutable record."),
                  this.set(e, t);
              },
            });
          }
          function eY(t) {
            return null == t
              ? e3()
              : eZ(t) && !b(t)
                ? t
                : e3().withMutations(function (e) {
                    var r = g(t);
                    tz(r.size),
                      r.forEach(function (t) {
                        return e.add(t);
                      });
                  });
          }
          function eZ(t) {
            return !!(t && t[eQ]);
          }
          f(eY, tC),
            (eY.of = function () {
              return this(arguments);
            }),
            (eY.fromKeys = function (t) {
              return this(h(t).keySeq());
            }),
            (eY.prototype.toString = function () {
              return this.__toString("Set {", "}");
            }),
            (eY.prototype.has = function (t) {
              return this._map.has(t);
            }),
            (eY.prototype.add = function (t) {
              return e1(this, this._map.set(t, !0));
            }),
            (eY.prototype.remove = function (t) {
              return e1(this, this._map.remove(t));
            }),
            (eY.prototype.clear = function () {
              return e1(this, this._map.clear());
            }),
            (eY.prototype.union = function () {
              var t = l.call(arguments, 0);
              return 0 ===
                (t = t.filter(function (t) {
                  return 0 !== t.size;
                })).length
                ? this
                : 0 !== this.size || this.__ownerID || 1 !== t.length
                  ? this.withMutations(function (e) {
                      for (var r = 0; r < t.length; r++)
                        g(t[r]).forEach(function (t) {
                          return e.add(t);
                        });
                    })
                  : this.constructor(t[0]);
            }),
            (eY.prototype.intersect = function () {
              var t = l.call(arguments, 0);
              if (0 === t.length) return this;
              t = t.map(function (t) {
                return g(t);
              });
              var e = this;
              return this.withMutations(function (r) {
                e.forEach(function (e) {
                  !t.every(function (t) {
                    return t.includes(e);
                  }) && r.remove(e);
                });
              });
            }),
            (eY.prototype.subtract = function () {
              var t = l.call(arguments, 0);
              if (0 === t.length) return this;
              t = t.map(function (t) {
                return g(t);
              });
              var e = this;
              return this.withMutations(function (r) {
                e.forEach(function (e) {
                  t.some(function (t) {
                    return t.includes(e);
                  }) && r.remove(e);
                });
              });
            }),
            (eY.prototype.merge = function () {
              return this.union.apply(this, arguments);
            }),
            (eY.prototype.mergeWith = function (t) {
              var e = l.call(arguments, 1);
              return this.union.apply(this, e);
            }),
            (eY.prototype.sort = function (t) {
              return e2(eB(this, t));
            }),
            (eY.prototype.sortBy = function (t, e) {
              return e2(eB(this, e, t));
            }),
            (eY.prototype.wasAltered = function () {
              return this._map.wasAltered();
            }),
            (eY.prototype.__iterate = function (t, e) {
              var r = this;
              return this._map.__iterate(function (e, n) {
                return t(n, n, r);
              }, e);
            }),
            (eY.prototype.__iterator = function (t, e) {
              return this._map
                .map(function (t, e) {
                  return e;
                })
                .__iterator(t, e);
            }),
            (eY.prototype.__ensureOwner = function (t) {
              if (t === this.__ownerID) return this;
              var e = this._map.__ensureOwner(t);
              return t
                ? this.__make(e, t)
                : ((this.__ownerID = t), (this._map = e), this);
            }),
            (eY.isSet = eZ);
          var eQ = "@@__IMMUTABLE_SET__@@",
            e0 = eY.prototype;
          function e1(t, e) {
            return t.__ownerID
              ? ((t.size = e.size), (t._map = e), t)
              : e === t._map
                ? t
                : 0 === e.size
                  ? t.__empty()
                  : t.__make(e);
          }
          function e6(t, e) {
            var r = Object.create(e0);
            return (
              (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r
            );
          }
          function e3() {
            return u || (u = e6(tQ()));
          }
          function e2(t) {
            return null == t
              ? e9()
              : e8(t)
                ? t
                : e9().withMutations(function (e) {
                    var r = g(t);
                    tz(r.size),
                      r.forEach(function (t) {
                        return e.add(t);
                      });
                  });
          }
          function e8(t) {
            return eZ(t) && b(t);
          }
          (e0[eQ] = !0),
            (e0[C] = e0.remove),
            (e0.mergeDeep = e0.merge),
            (e0.mergeDeepWith = e0.mergeWith),
            (e0.withMutations = tq.withMutations),
            (e0.asMutable = tq.asMutable),
            (e0.asImmutable = tq.asImmutable),
            (e0.__empty = e3),
            (e0.__make = e6),
            f(e2, eY),
            (e2.of = function () {
              return this(arguments);
            }),
            (e2.fromKeys = function (t) {
              return this(h(t).keySeq());
            }),
            (e2.prototype.toString = function () {
              return this.__toString("OrderedSet {", "}");
            }),
            (e2.isOrderedSet = e8);
          var e5 = e2.prototype;
          function e7(t, e) {
            var r = Object.create(e5);
            return (
              (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r
            );
          }
          function e9() {
            return s || (s = e7(eS()));
          }
          function e4(t) {
            return null == t ? ri() : rt(t) ? t : ri().unshiftAll(t);
          }
          function rt(t) {
            return !!(t && t[re]);
          }
          (e5[x] = !0),
            (e5.__empty = e9),
            (e5.__make = e7),
            f(e4, tx),
            (e4.of = function () {
              return this(arguments);
            }),
            (e4.prototype.toString = function () {
              return this.__toString("Stack [", "]");
            }),
            (e4.prototype.get = function (t, e) {
              var r = this._head;
              for (t = L(this, t); r && t--; ) r = r.next;
              return r ? r.value : e;
            }),
            (e4.prototype.peek = function () {
              return this._head && this._head.value;
            }),
            (e4.prototype.push = function () {
              if (0 == arguments.length) return this;
              for (
                var t = this.size + arguments.length,
                  e = this._head,
                  r = arguments.length - 1;
                r >= 0;
                r--
              )
                e = { value: arguments[r], next: e };
              return this.__ownerID
                ? ((this.size = t),
                  (this._head = e),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : rn(t, e);
            }),
            (e4.prototype.pushAll = function (t) {
              if (0 === (t = d(t)).size) return this;
              tz(t.size);
              var e = this.size,
                r = this._head;
              return (t.reverse().forEach(function (t) {
                e++, (r = { value: t, next: r });
              }),
              this.__ownerID)
                ? ((this.size = e),
                  (this._head = r),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : rn(e, r);
            }),
            (e4.prototype.pop = function () {
              return this.slice(1);
            }),
            (e4.prototype.unshift = function () {
              return this.push.apply(this, arguments);
            }),
            (e4.prototype.unshiftAll = function (t) {
              return this.pushAll(t);
            }),
            (e4.prototype.shift = function () {
              return this.pop.apply(this, arguments);
            }),
            (e4.prototype.clear = function () {
              return 0 === this.size
                ? this
                : this.__ownerID
                  ? ((this.size = 0),
                    (this._head = void 0),
                    (this.__hash = void 0),
                    (this.__altered = !0),
                    this)
                  : ri();
            }),
            (e4.prototype.slice = function (t, e) {
              if (F(t, e, this.size)) return this;
              var r,
                n = j(t, this.size, 0);
              if (j(e, (r = this.size), r) !== this.size)
                return tx.prototype.slice.call(this, t, e);
              for (var i = this.size - n, o = this._head; n--; ) o = o.next;
              return this.__ownerID
                ? ((this.size = i),
                  (this._head = o),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : rn(i, o);
            }),
            (e4.prototype.__ensureOwner = function (t) {
              return t === this.__ownerID
                ? this
                : t
                  ? rn(this.size, this._head, t, this.__hash)
                  : ((this.__ownerID = t), (this.__altered = !1), this);
            }),
            (e4.prototype.__iterate = function (t, e) {
              if (e) return this.reverse().__iterate(t);
              for (
                var r = 0, n = this._head;
                n && !1 !== t(n.value, r++, this);

              ) {
                n = n.next;
              }
              return r;
            }),
            (e4.prototype.__iterator = function (t, e) {
              if (e) return this.reverse().__iterator(t);
              var r = 0,
                n = this._head;
              return new W(function () {
                if (n) {
                  var e = n.value;
                  return (n = n.next), V(t, r++, e);
                }
                return G();
              });
            }),
            (e4.isStack = rt);
          var re = "@@__IMMUTABLE_STACK__@@",
            rr = e4.prototype;
          function rn(t, e, r, n) {
            var i = Object.create(rr);
            return (
              (i.size = t),
              (i._head = e),
              (i.__ownerID = r),
              (i.__hash = n),
              (i.__altered = !1),
              i
            );
          }
          function ri() {
            return c || (c = rn(0));
          }
          function ro(t, e) {
            var r = function (r) {
              t.prototype[r] = e[r];
            };
            return (
              Object.keys(e).forEach(r),
              Object.getOwnPropertySymbols &&
                Object.getOwnPropertySymbols(e).forEach(r),
              t
            );
          }
          (rr[re] = !0),
            (rr.withMutations = tq.withMutations),
            (rr.asMutable = tq.asMutable),
            (rr.asImmutable = tq.asImmutable),
            (rr.wasAltered = tq.wasAltered),
            (p.Iterator = W),
            ro(p, {
              toArray: function () {
                tz(this.size);
                var t = Array(this.size || 0);
                return (
                  this.valueSeq().__iterate(function (e, r) {
                    t[r] = e;
                  }),
                  t
                );
              },
              toIndexedSeq: function () {
                return new ex(this);
              },
              toJS: function () {
                return this.toSeq()
                  .map(function (t) {
                    return t && "function" == typeof t.toJS ? t.toJS() : t;
                  })
                  .__toJS();
              },
              toJSON: function () {
                return this.toSeq()
                  .map(function (t) {
                    return t && "function" == typeof t.toJSON ? t.toJSON() : t;
                  })
                  .__toJS();
              },
              toKeyedSeq: function () {
                return new ek(this, !0);
              },
              toMap: function () {
                return tP(this.toKeyedSeq());
              },
              toObject: function () {
                tz(this.size);
                var t = {};
                return (
                  this.__iterate(function (e, r) {
                    t[r] = e;
                  }),
                  t
                );
              },
              toOrderedMap: function () {
                return em(this.toKeyedSeq());
              },
              toOrderedSet: function () {
                return e2(v(this) ? this.valueSeq() : this);
              },
              toSet: function () {
                return eY(v(this) ? this.valueSeq() : this);
              },
              toSetSeq: function () {
                return new eC(this);
              },
              toSeq: function () {
                return m(this)
                  ? this.toIndexedSeq()
                  : v(this)
                    ? this.toKeyedSeq()
                    : this.toSetSeq();
              },
              toStack: function () {
                return e4(v(this) ? this.valueSeq() : this);
              },
              toList: function () {
                return en(v(this) ? this.valueSeq() : this);
              },
              toString: function () {
                return "[Iterable]";
              },
              __toString: function (t, e) {
                return 0 === this.size
                  ? t + e
                  : t +
                      " " +
                      this.toSeq().map(this.__toStringMapper).join(", ") +
                      " " +
                      e;
              },
              concat: function () {
                var t = l.call(arguments, 0);
                return eF(
                  this,
                  (function (t, e) {
                    var r = v(t),
                      n = [t]
                        .concat(e)
                        .map(function (t) {
                          return (
                            y(t)
                              ? r && (t = h(t))
                              : (t = r
                                  ? tl(t)
                                  : tf(Array.isArray(t) ? t : [t])),
                            t
                          );
                        })
                        .filter(function (t) {
                          return 0 !== t.size;
                        });
                    if (0 === n.length) return t;
                    if (1 === n.length) {
                      var i = n[0];
                      if (i === t || (r && v(i)) || (m(t) && m(i))) return i;
                    }
                    var o = new ti(n);
                    return (
                      r ? (o = o.toKeyedSeq()) : !m(t) && (o = o.toSetSeq()),
                      ((o = o.flatten(!0)).size = n.reduce(function (t, e) {
                        if (void 0 !== t) {
                          var r = e.size;
                          if (void 0 !== r) return t + r;
                        }
                      }, 0)),
                      o
                    );
                  })(this, t),
                );
              },
              includes: function (t) {
                return this.some(function (e) {
                  return tv(e, t);
                });
              },
              entries: function () {
                return this.__iterator(2);
              },
              every: function (t, e) {
                tz(this.size);
                var r = !0;
                return (
                  this.__iterate(function (n, i, o) {
                    if (!t.call(e, n, i, o)) return (r = !1), !1;
                  }),
                  r
                );
              },
              filter: function (t, e) {
                return eF(this, eT(this, t, e, !0));
              },
              find: function (t, e, r) {
                var n = this.findEntry(t, e);
                return n ? n[1] : r;
              },
              findEntry: function (t, e) {
                var r;
                return (
                  this.__iterate(function (n, i, o) {
                    if (t.call(e, n, i, o)) return (r = [i, n]), !1;
                  }),
                  r
                );
              },
              findLastEntry: function (t, e) {
                return this.toSeq().reverse().findEntry(t, e);
              },
              forEach: function (t, e) {
                return tz(this.size), this.__iterate(e ? t.bind(e) : t);
              },
              join: function (t) {
                tz(this.size), (t = void 0 !== t ? "" + t : ",");
                var e = "",
                  r = !0;
                return (
                  this.__iterate(function (n) {
                    r ? (r = !1) : (e += t),
                      (e += null != n ? n.toString() : "");
                  }),
                  e
                );
              },
              keys: function () {
                return this.__iterator(0);
              },
              map: function (t, e) {
                return eF(this, eO(this, t, e));
              },
              reduce: function (t, e, r) {
                var n, i;
                return (
                  tz(this.size),
                  arguments.length < 2 ? (i = !0) : (n = e),
                  this.__iterate(function (e, o, a) {
                    i ? ((i = !1), (n = e)) : (n = t.call(r, n, e, o, a));
                  }),
                  n
                );
              },
              reduceRight: function (t, e, r) {
                var n = this.toKeyedSeq().reverse();
                return n.reduce.apply(n, arguments);
              },
              reverse: function () {
                return eF(this, eK(this, !0));
              },
              slice: function (t, e) {
                return eF(this, eM(this, t, e, !0));
              },
              some: function (t, e) {
                return !this.every(rl(t), e);
              },
              sort: function (t) {
                return eF(this, eB(this, t));
              },
              values: function () {
                return this.__iterator(1);
              },
              butLast: function () {
                return this.slice(0, -1);
              },
              isEmpty: function () {
                return void 0 !== this.size
                  ? 0 === this.size
                  : !this.some(function () {
                      return !0;
                    });
              },
              count: function (t, e) {
                return R(t ? this.toSeq().filter(t, e) : this);
              },
              countBy: function (t, e) {
                var r, n, i, o;
                return (
                  (r = this),
                  (n = t),
                  (i = e),
                  (o = tP().asMutable()),
                  r.__iterate(function (t, e) {
                    o.update(n.call(i, t, e, r), 0, function (t) {
                      return t + 1;
                    });
                  }),
                  o.asImmutable()
                );
              },
              equals: function (t) {
                return tm(this, t);
              },
              entrySeq: function () {
                var t = this;
                if (t._cache) return new ti(t._cache);
                var e = t.toSeq().map(rc).toIndexedSeq();
                return (
                  (e.fromEntrySeq = function () {
                    return t.toSeq();
                  }),
                  e
                );
              },
              filterNot: function (t, e) {
                return this.filter(rl(t), e);
              },
              findLast: function (t, e, r) {
                return this.toKeyedSeq().reverse().find(t, e, r);
              },
              first: function () {
                return this.find(N);
              },
              flatMap: function (t, e) {
                var r, n, i, o;
                return eF(
                  this,
                  ((r = this),
                  (n = t),
                  (i = e),
                  (o = ej(r)),
                  r
                    .toSeq()
                    .map(function (t, e) {
                      return o(n.call(i, t, e, r));
                    })
                    .flatten(!0)),
                );
              },
              flatten: function (t) {
                return eF(this, eI(this, t, !0));
              },
              fromEntrySeq: function () {
                return new eE(this);
              },
              get: function (t, e) {
                return this.find(
                  function (e, r) {
                    return tv(r, t);
                  },
                  void 0,
                  e,
                );
              },
              getIn: function (t, e) {
                for (var r, n = this, i = eW(t); !(r = i.next()).done; ) {
                  var o = r.value;
                  if ((n = n && n.get ? n.get(o, O) : O) === O) return e;
                }
                return n;
              },
              groupBy: function (t, e) {
                return (function (t, e, r) {
                  var n = v(t),
                    i = (b(t) ? em() : tP()).asMutable();
                  t.__iterate(function (o, a) {
                    i.update(e.call(r, o, a, t), function (t) {
                      return (t = t || []).push(n ? [a, o] : o), t;
                    });
                  });
                  var o = ej(t);
                  return i.map(function (e) {
                    return eF(t, o(e));
                  });
                })(this, t, e);
              },
              has: function (t) {
                return this.get(t, O) !== O;
              },
              hasIn: function (t) {
                return this.getIn(t, O) !== O;
              },
              isSubset: function (t) {
                return (
                  (t = "function" == typeof t.includes ? t : p(t)),
                  this.every(function (e) {
                    return t.includes(e);
                  })
                );
              },
              isSuperset: function (t) {
                return (t =
                  "function" == typeof t.isSubset ? t : p(t)).isSubset(this);
              },
              keySeq: function () {
                return this.toSeq().map(rs).toIndexedSeq();
              },
              last: function () {
                return this.toSeq().reverse().first();
              },
              max: function (t) {
                return eR(this, t);
              },
              maxBy: function (t, e) {
                return eR(this, e, t);
              },
              min: function (t) {
                return eR(this, t ? rf(t) : rd);
              },
              minBy: function (t, e) {
                return eR(this, e ? rf(e) : rd, t);
              },
              rest: function () {
                return this.slice(1);
              },
              skip: function (t) {
                return this.slice(Math.max(0, t));
              },
              skipLast: function (t) {
                return eF(this, this.toSeq().reverse().skip(t).reverse());
              },
              skipWhile: function (t, e) {
                return eF(this, eA(this, t, e, !0));
              },
              skipUntil: function (t, e) {
                return this.skipWhile(rl(t), e);
              },
              sortBy: function (t, e) {
                return eF(this, eB(this, e, t));
              },
              take: function (t) {
                return this.slice(0, Math.max(0, t));
              },
              takeLast: function (t) {
                return eF(this, this.toSeq().reverse().take(t).reverse());
              },
              takeWhile: function (t, e) {
                var r, n, i, o;
                return eF(
                  this,
                  ((r = this),
                  (n = t),
                  (i = e),
                  ((o = eU(r)).__iterateUncached = function (t, e) {
                    var o = this;
                    if (e) return this.cacheResult().__iterate(t, e);
                    var a = 0;
                    return (
                      r.__iterate(function (e, r, u) {
                        return n.call(i, e, r, u) && ++a && t(e, r, o);
                      }),
                      a
                    );
                  }),
                  (o.__iteratorUncached = function (t, e) {
                    var o = this;
                    if (e) return this.cacheResult().__iterator(t, e);
                    var a = r.__iterator(2, e),
                      u = !0;
                    return new W(function () {
                      if (!u) return G();
                      var e = a.next();
                      if (e.done) return e;
                      var r = e.value,
                        s = r[0],
                        c = r[1];
                      return n.call(i, c, s, o)
                        ? 2 === t
                          ? e
                          : V(t, s, c, e)
                        : ((u = !1), G());
                    });
                  }),
                  o),
                );
              },
              takeUntil: function (t, e) {
                return this.takeWhile(rl(t), e);
              },
              valueSeq: function () {
                return this.toIndexedSeq();
              },
              hashCode: function () {
                return (
                  this.__hash ||
                  (this.__hash = (function (t) {
                    if (t.size === 1 / 0) return 0;
                    var e = b(t),
                      r = v(t),
                      n = e ? 1 : 0;
                    return (function (t, e) {
                      return (
                        (e = tE(e, 3432918353)),
                        (e = tE((e << 15) | (e >>> -15), 461845907)),
                        (e =
                          (((e = tE((e << 13) | (e >>> -13), 5)) + 3864292196) |
                            0) ^
                          t),
                        (e = tE(e ^ (e >>> 16), 2246822507)),
                        (e = tD(
                          (e = tE(e ^ (e >>> 13), 3266489909)) ^ (e >>> 16),
                        ))
                      );
                    })(
                      t.__iterate(
                        r
                          ? e
                            ? function (t, e) {
                                n = (31 * n + rg(tO(t), tO(e))) | 0;
                              }
                            : function (t, e) {
                                n = (n + rg(tO(t), tO(e))) | 0;
                              }
                          : e
                            ? function (t) {
                                n = (31 * n + tO(t)) | 0;
                              }
                            : function (t) {
                                n = (n + tO(t)) | 0;
                              },
                      ),
                      n,
                    );
                  })(this))
                );
              },
            });
          var ra = p.prototype;
          (ra[S] = !0),
            (ra[H] = ra.values),
            (ra.__toJS = ra.toArray),
            (ra.__toStringMapper = rp),
            (ra.inspect = ra.toSource =
              function () {
                return this.toString();
              }),
            (ra.chain = ra.flatMap),
            (ra.contains = ra.includes),
            !(function () {
              try {
                Object.defineProperty(ra, "length", {
                  get: function () {
                    if (!p.noLengthWarning) {
                      var t;
                      try {
                        throw Error();
                      } catch (e) {
                        t = e.stack;
                      }
                      if (-1 === t.indexOf("_wrapObject"))
                        return (
                          console &&
                            console.warn &&
                            console.warn(
                              "iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " +
                                t,
                            ),
                          this.size
                        );
                    }
                  },
                });
              } catch (t) {}
            })(),
            ro(h, {
              flip: function () {
                return eF(this, eD(this));
              },
              findKey: function (t, e) {
                var r = this.findEntry(t, e);
                return r && r[0];
              },
              findLastKey: function (t, e) {
                return this.toSeq().reverse().findKey(t, e);
              },
              keyOf: function (t) {
                return this.findKey(function (e) {
                  return tv(e, t);
                });
              },
              lastKeyOf: function (t) {
                return this.findLastKey(function (e) {
                  return tv(e, t);
                });
              },
              mapEntries: function (t, e) {
                var r = this,
                  n = 0;
                return eF(
                  this,
                  this.toSeq()
                    .map(function (i, o) {
                      return t.call(e, [o, i], n++, r);
                    })
                    .fromEntrySeq(),
                );
              },
              mapKeys: function (t, e) {
                var r = this;
                return eF(
                  this,
                  this.toSeq()
                    .flip()
                    .map(function (n, i) {
                      return t.call(e, n, i, r);
                    })
                    .flip(),
                );
              },
            });
          var ru = h.prototype;
          function rs(t, e) {
            return e;
          }
          function rc(t, e) {
            return [e, t];
          }
          function rl(t) {
            return function () {
              return !t.apply(this, arguments);
            };
          }
          function rf(t) {
            return function () {
              return -t.apply(this, arguments);
            };
          }
          function rp(t) {
            return "string" == typeof t ? JSON.stringify(t) : t;
          }
          function rh() {
            return B(arguments);
          }
          function rd(t, e) {
            return t < e ? 1 : t > e ? -1 : 0;
          }
          (ru[w] = !0),
            (ru[H] = ra.entries),
            (ru.__toJS = ra.toObject),
            (ru.__toStringMapper = function (t, e) {
              return JSON.stringify(e) + ": " + rp(t);
            }),
            ro(d, {
              toKeyedSeq: function () {
                return new ek(this, !1);
              },
              filter: function (t, e) {
                return eF(this, eT(this, t, e, !1));
              },
              findIndex: function (t, e) {
                var r = this.findEntry(t, e);
                return r ? r[0] : -1;
              },
              indexOf: function (t) {
                var e = this.toKeyedSeq().keyOf(t);
                return void 0 === e ? -1 : e;
              },
              lastIndexOf: function (t) {
                var e = this.toKeyedSeq().reverse().keyOf(t);
                return void 0 === e ? -1 : e;
              },
              reverse: function () {
                return eF(this, eK(this, !1));
              },
              slice: function (t, e) {
                return eF(this, eM(this, t, e, !1));
              },
              splice: function (t, e) {
                var r = arguments.length;
                if (((e = Math.max(0 | e, 0)), 0 === r || (2 === r && !e)))
                  return this;
                t = j(t, t < 0 ? this.count() : this.size, 0);
                var n = this.slice(0, t);
                return eF(
                  this,
                  1 === r ? n : n.concat(B(arguments, 2), this.slice(t + e)),
                );
              },
              findLastIndex: function (t, e) {
                var r = this.toKeyedSeq().findLastKey(t, e);
                return void 0 === r ? -1 : r;
              },
              first: function () {
                return this.get(0);
              },
              flatten: function (t) {
                return eF(this, eI(this, t, !1));
              },
              get: function (t, e) {
                return (t = L(this, t)) < 0 ||
                  this.size === 1 / 0 ||
                  (void 0 !== this.size && t > this.size)
                  ? e
                  : this.find(
                      function (e, r) {
                        return r === t;
                      },
                      void 0,
                      e,
                    );
              },
              has: function (t) {
                return (
                  (t = L(this, t)) >= 0 &&
                  (void 0 !== this.size
                    ? this.size === 1 / 0 || t < this.size
                    : -1 !== this.indexOf(t))
                );
              },
              interpose: function (t) {
                var e, r, n;
                return eF(
                  this,
                  ((e = this),
                  (r = t),
                  ((n = eU(e)).size = e.size && 2 * e.size - 1),
                  (n.__iterateUncached = function (t, n) {
                    var i = this,
                      o = 0;
                    return (
                      e.__iterate(function (e, n) {
                        return (
                          (!o || !1 !== t(r, o++, i)) && !1 !== t(e, o++, i)
                        );
                      }, n),
                      o
                    );
                  }),
                  (n.__iteratorUncached = function (t, n) {
                    var i,
                      o = e.__iterator(1, n),
                      a = 0;
                    return new W(function () {
                      return (!i || a % 2) && (i = o.next()).done
                        ? i
                        : a % 2
                          ? V(t, a++, r)
                          : V(t, a++, i.value, i);
                    });
                  }),
                  n),
                );
              },
              interleave: function () {
                var t = [this].concat(B(arguments)),
                  e = eN(this.toSeq(), te.of, t),
                  r = e.flatten(!0);
                return e.size && (r.size = e.size * t.length), eF(this, r);
              },
              last: function () {
                return this.get(-1);
              },
              skipWhile: function (t, e) {
                return eF(this, eA(this, t, e, !1));
              },
              zip: function () {
                var t = [this].concat(B(arguments));
                return eF(this, eN(this, rh, t));
              },
              zipWith: function (t) {
                var e = B(arguments);
                return (e[0] = this), eF(this, eN(this, t, e));
              },
            }),
            (d.prototype[k] = !0),
            (d.prototype[x] = !0),
            ro(g, {
              get: function (t, e) {
                return this.has(t) ? t : e;
              },
              includes: function (t) {
                return this.has(t);
              },
              keySeq: function () {
                return this.valueSeq();
              },
            }),
            (g.prototype.has = ra.includes),
            ro(tt, h.prototype),
            ro(te, d.prototype),
            ro(tr, g.prototype),
            ro(tk, h.prototype),
            ro(tx, d.prototype),
            ro(tC, g.prototype);
          function rg(t, e) {
            return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0;
          }
          return {
            Iterable: p,
            Seq: Q,
            Collection: tw,
            Map: tP,
            OrderedMap: em,
            List: en,
            Stack: e4,
            Set: eY,
            OrderedSet: e2,
            Record: eV,
            Range: tS,
            Repeat: t_,
            is: tv,
            fromJS: tg,
          };
        }),
        (t.exports = r());
    },
    349445: function (t, e, r) {
      "use strict";
      r.d(e, {
        SV: function () {
          return a;
        },
      });
      var n = r(470079);
      let i = (0, n.createContext)(null),
        o = { didCatch: !1, error: null };
      class a extends n.Component {
        constructor(t) {
          super(t),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = o);
        }
        static getDerivedStateFromError(t) {
          return { didCatch: !0, error: t };
        }
        resetErrorBoundary() {
          let { error: t } = this.state;
          if (null !== t) {
            for (
              var e, r, n = arguments.length, i = Array(n), a = 0;
              a < n;
              a++
            )
              i[a] = arguments[a];
            null === (e = (r = this.props).onReset) ||
              void 0 === e ||
              e.call(r, { args: i, reason: "imperative-api" }),
              this.setState(o);
          }
        }
        componentDidCatch(t, e) {
          var r, n;
          null === (r = (n = this.props).onError) ||
            void 0 === r ||
            r.call(n, t, e);
        }
        componentDidUpdate(t, e) {
          let { didCatch: r } = this.state,
            { resetKeys: n } = this.props;
          if (
            r &&
            null !== e.error &&
            (function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                t.length !== e.length || t.some((t, r) => !Object.is(t, e[r]))
              );
            })(t.resetKeys, n)
          ) {
            var i, a;
            null === (i = (a = this.props).onReset) ||
              void 0 === i ||
              i.call(a, { next: n, prev: t.resetKeys, reason: "keys" }),
              this.setState(o);
          }
        }
        render() {
          let {
              children: t,
              fallbackRender: e,
              FallbackComponent: r,
              fallback: o,
            } = this.props,
            { didCatch: a, error: u } = this.state,
            s = t;
          if (a) {
            let t = { error: u, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, n.isValidElement)(o)) s = o;
            else if ("function" == typeof e) s = e(t);
            else if (r) s = (0, n.createElement)(r, t);
            else throw u;
          }
          return (0, n.createElement)(
            i.Provider,
            {
              value: {
                didCatch: a,
                error: u,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            s,
          );
        }
      }
    },
    114912: function (t, e) {
      !(function (r, n) {
        "use strict";
        var i = "function",
          o = "undefined",
          a = "object",
          u = "string",
          s = "major",
          c = "model",
          l = "name",
          f = "type",
          p = "vendor",
          h = "version",
          d = "architecture",
          g = "console",
          y = "mobile",
          v = "tablet",
          m = "smarttv",
          _ = "wearable",
          b = "embedded",
          S = "Amazon",
          w = "Apple",
          k = "ASUS",
          x = "BlackBerry",
          C = "Browser",
          E = "Chrome",
          D = "Firefox",
          O = "Google",
          K = "Huawei",
          T = "Microsoft",
          M = "Motorola",
          A = "Opera",
          I = "Samsung",
          B = "Sharp",
          R = "Sony",
          L = "Xiaomi",
          N = "Zebra",
          F = "Facebook",
          z = "Chromium OS",
          P = "Mac OS",
          j = function (t, e) {
            var r = {};
            for (var n in t)
              e[n] && e[n].length % 2 == 0
                ? (r[n] = e[n].concat(t[n]))
                : (r[n] = t[n]);
            return r;
          },
          U = function (t) {
            for (var e = {}, r = 0; r < t.length; r++)
              e[t[r].toUpperCase()] = t[r];
            return e;
          },
          q = function (t, e) {
            return typeof t === u && -1 !== H(e).indexOf(H(t));
          },
          H = function (t) {
            return t.toLowerCase();
          },
          W = function (t, e) {
            if (typeof t === u)
              return (
                (t = t.replace(/^\s\s*/, "")),
                typeof e === o ? t : t.substring(0, 350)
              );
          },
          V = function (t, e) {
            for (var r, o, u, s, c, l, f = 0; f < e.length && !c; ) {
              var p = e[f],
                h = e[f + 1];
              for (r = o = 0; r < p.length && !c && p[r]; ) {
                if ((c = p[r++].exec(t)))
                  for (u = 0; u < h.length; u++)
                    (l = c[++o]),
                      typeof (s = h[u]) === a && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == i
                            ? (this[s[0]] = s[1].call(this, l))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                            ? typeof s[1] !== i || (s[1].exec && s[1].test)
                              ? (this[s[0]] = l
                                  ? l.replace(s[1], s[2])
                                  : void 0)
                              : (this[s[0]] = l ? s[1].call(this, l, s[2]) : n)
                            : 4 === s.length &&
                              (this[s[0]] = l
                                ? s[3].call(this, l.replace(s[1], s[2]))
                                : n)
                        : (this[s] = l || n);
              }
              f += 2;
            }
          },
          G = function (t, e) {
            for (var r in e)
              if (typeof e[r] === a && e[r].length > 0) {
                for (var i = 0; i < e[r].length; i++)
                  if (q(e[r][i], t)) return "?" === r ? n : r;
              } else if (q(e[r], t)) return "?" === r ? n : r;
            return t;
          },
          J = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          $ = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [h, [l, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [h, [l, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [l, h],
              [/opios[\/ ]+([\w\.]+)/i],
              [h, [l, A + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [h, [l, A]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [l, h],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [h, [l, "UC" + C]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [h, [l, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [h, [l, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [h, [l, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [h, [l, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [h, [l, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[l, /(.+)/, "$1 Secure " + C], h],
              [/\bfocus\/([\w\.]+)/i],
              [h, [l, D + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [h, [l, A + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [h, [l, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [h, [l, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [h, [l, A + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [h, [l, "MIUI " + C]],
              [/fxios\/([-\w\.]+)/i],
              [h, [l, D]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[l, "360 " + C]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[l, /(.+)/, "$1 " + C], h],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[l, /_/g, " "], h],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [l, h],
              [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i,
              ],
              [l],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[l, F], h],
              [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [l, h],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [h, [l, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [h, [l, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [h, [l, E + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[l, E + " WebView"], h],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [h, [l, "Android " + C]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [l, h],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [h, [l, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [h, l],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                l,
                [
                  h,
                  G,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [l, h],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[l, "Netscape"], h],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [h, [l, D + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i,
              ],
              [l, h],
              [/(cobalt)\/([\w\.]+)/i],
              [l, [h, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[d, "amd64"]],
              [/(ia32(?=;))/i],
              [[d, H]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[d, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[d, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[d, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[d, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[d, /ower/, "", H]],
              [/(sun4\w)[;\)]/i],
              [[d, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[d, H]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [c, [p, I], [f, v]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [c, [p, I], [f, y]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [c, [p, w], [f, y]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [c, [p, w], [f, v]],
              [/(macintosh);/i],
              [c, [p, w]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [c, [p, B], [f, y]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [c, [p, K], [f, v]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [c, [p, K], [f, y]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [c, /_/g, " "],
                [p, L],
                [f, y],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [c, /_/g, " "],
                [p, L],
                [f, v],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [c, [p, "OPPO"], [f, y]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [c, [p, "Vivo"], [f, y]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [c, [p, "Realme"], [f, y]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [c, [p, M], [f, y]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [c, [p, M], [f, v]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [c, [p, "LG"], [f, v]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [c, [p, "LG"], [f, y]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [c, [p, "Lenovo"], [f, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [c, /_/g, " "],
                [p, "Nokia"],
                [f, y],
              ],
              [/(pixel c)\b/i],
              [c, [p, O], [f, v]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [c, [p, O], [f, y]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [c, [p, R], [f, y]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [c, "Xperia Tablet"],
                [p, R],
                [f, v],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [c, [p, "OnePlus"], [f, y]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [c, [p, S], [f, v]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [c, /(.+)/g, "Fire Phone $1"],
                [p, S],
                [f, y],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [c, p, [f, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [c, [p, x], [f, y]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [c, [p, k], [f, v]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [c, [p, k], [f, y]],
              [/(nexus 9)/i],
              [c, [p, "HTC"], [f, v]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [p, [c, /_/g, " "], [f, y]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [c, [p, "Acer"], [f, v]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [c, [p, "Meizu"], [f, y]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [p, c, [f, y]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [p, c, [f, v]],
              [/(surface duo)/i],
              [c, [p, T], [f, v]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [c, [p, "Fairphone"], [f, y]],
              [/(u304aa)/i],
              [c, [p, "AT&T"], [f, y]],
              [/\bsie-(\w*)/i],
              [c, [p, "Siemens"], [f, y]],
              [/\b(rct\w+) b/i],
              [c, [p, "RCA"], [f, v]],
              [/\b(venue[\d ]{2,7}) b/i],
              [c, [p, "Dell"], [f, v]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [c, [p, "Verizon"], [f, v]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [c, [p, "Barnes & Noble"], [f, v]],
              [/\b(tm\d{3}\w+) b/i],
              [c, [p, "NuVision"], [f, v]],
              [/\b(k88) b/i],
              [c, [p, "ZTE"], [f, v]],
              [/\b(nx\d{3}j) b/i],
              [c, [p, "ZTE"], [f, y]],
              [/\b(gen\d{3}) b.+49h/i],
              [c, [p, "Swiss"], [f, y]],
              [/\b(zur\d{3}) b/i],
              [c, [p, "Swiss"], [f, v]],
              [/\b((zeki)?tb.*\b) b/i],
              [c, [p, "Zeki"], [f, v]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], c, [f, v]],
              [/\b(ns-?\w{0,9}) b/i],
              [c, [p, "Insignia"], [f, v]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [c, [p, "NextBook"], [f, v]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], c, [f, y]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], c, [f, y]],
              [/\b(ph-1) /i],
              [c, [p, "Essential"], [f, y]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [c, [p, "Envizen"], [f, v]],
              [/\b(trio[-\w\. ]+) b/i],
              [c, [p, "MachSpeed"], [f, v]],
              [/\btu_(1491) b/i],
              [c, [p, "Rotor"], [f, v]],
              [/(shield[\w ]+) b/i],
              [c, [p, "Nvidia"], [f, v]],
              [/(sprint) (\w+)/i],
              [p, c, [f, y]],
              [/(kin\.[onetw]{3})/i],
              [
                [c, /\./g, " "],
                [p, T],
                [f, y],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [c, [p, N], [f, v]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [c, [p, N], [f, y]],
              [/smart-tv.+(samsung)/i],
              [p, [f, m]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [c, /^/, "SmartTV"],
                [p, I],
                [f, m],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, "LG"],
                [f, m],
              ],
              [/(apple) ?tv/i],
              [p, [c, w + " TV"], [f, m]],
              [/crkey/i],
              [
                [c, E + "cast"],
                [p, O],
                [f, m],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [c, [p, S], [f, m]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [c, [p, B], [f, m]],
              [/(bravia[\w ]+)( bui|\))/i],
              [c, [p, R], [f, m]],
              [/(mitv-\w{5}) bui/i],
              [c, [p, L], [f, m]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, c, [f, m]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [p, W],
                [c, W],
                [f, m],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[f, m]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, c, [f, g]],
              [/droid.+; (shield) bui/i],
              [c, [p, "Nvidia"], [f, g]],
              [/(playstation [345portablevi]+)/i],
              [c, [p, R], [f, g]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [c, [p, T], [f, g]],
              [/((pebble))app/i],
              [p, c, [f, _]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [c, [p, w], [f, _]],
              [/droid.+; (glass) \d/i],
              [c, [p, O], [f, _]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [c, [p, N], [f, _]],
              [/(quest( 2| pro)?)/i],
              [c, [p, F], [f, _]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [f, b]],
              [/(aeobc)\b/i],
              [c, [p, S], [f, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [c, [f, y]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [c, [f, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[f, v]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[f, y]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [c, [p, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [h, [l, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [h, [l, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [l, h],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [h, l],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [l, h],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [l, [h, G, J]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [l, "Windows"],
                [h, G, J],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [h, /_/g, "."],
                [l, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [l, P],
                [h, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [h, l],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [l, h],
              [/\(bb(10);/i],
              [h, [l, x]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [h, [l, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [h, [l, D + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [h, [l, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [h, [l, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [h, [l, E + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[l, z], h],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [l, h],
              [/(sunos) ?([\w\.\d]*)/i],
              [[l, "Solaris"], h],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [l, h],
            ],
          },
          X = function (t, e) {
            if ((typeof t === a && ((e = t), (t = n)), !(this instanceof X)))
              return new X(t, e).getResult();
            var g = typeof r !== o && r.navigator ? r.navigator : n,
              m = t || (g && g.userAgent ? g.userAgent : ""),
              _ = g && g.userAgentData ? g.userAgentData : n,
              b = e ? j($, e) : $,
              S = g && g.userAgent == m;
            return (
              (this.getBrowser = function () {
                var t,
                  e = {};
                return (
                  (e[l] = n),
                  (e[h] = n),
                  V.call(e, m, b.browser),
                  (e[s] =
                    typeof (t = e[h]) === u
                      ? t.replace(/[^\d\.]/g, "").split(".")[0]
                      : n),
                  S &&
                    g &&
                    g.brave &&
                    typeof g.brave.isBrave == i &&
                    (e[l] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var t = {};
                return (t[d] = n), V.call(t, m, b.cpu), t;
              }),
              (this.getDevice = function () {
                var t = {};
                return (
                  (t[p] = n),
                  (t[c] = n),
                  (t[f] = n),
                  V.call(t, m, b.device),
                  S && !t[f] && _ && _.mobile && (t[f] = y),
                  S &&
                    "Macintosh" == t[c] &&
                    g &&
                    typeof g.standalone !== o &&
                    g.maxTouchPoints &&
                    g.maxTouchPoints > 2 &&
                    ((t[c] = "iPad"), (t[f] = v)),
                  t
                );
              }),
              (this.getEngine = function () {
                var t = {};
                return (t[l] = n), (t[h] = n), V.call(t, m, b.engine), t;
              }),
              (this.getOS = function () {
                var t = {};
                return (
                  (t[l] = n),
                  (t[h] = n),
                  V.call(t, m, b.os),
                  S &&
                    !t[l] &&
                    _ &&
                    "Unknown" != _.platform &&
                    (t[l] = _.platform
                      .replace(/chrome os/i, z)
                      .replace(/macos/i, P)),
                  t
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return m;
              }),
              (this.setUA = function (t) {
                return (
                  (m = typeof t === u && t.length > 350 ? W(t, 350) : t), this
                );
              }),
              this.setUA(m),
              this
            );
          };
        (X.VERSION = "0.7.36"),
          (X.BROWSER = U([l, h, s])),
          (X.CPU = U([d])),
          (X.DEVICE = U([c, p, f, g, y, m, v, _, b])),
          (X.ENGINE = X.OS = U([l, h])),
          typeof e !== o
            ? (t.exports && (e = t.exports = X), (e.UAParser = X))
            : typeof define === i && define.amd
              ? define(function () {
                  return X;
                })
              : typeof r !== o && (r.UAParser = X);
        var Y = typeof r !== o && (r.jQuery || r.Zepto);
        if (Y && !Y.ua) {
          var Z = new X();
          (Y.ua = Z.getResult()),
            (Y.ua.get = function () {
              return Z.getUA();
            }),
            (Y.ua.set = function (t) {
              Z.setUA(t);
              var e = Z.getResult();
              for (var r in e) Y.ua[r] = e[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
    781402: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = r(470079);
      function i() {
        let t = (0, n.createContext)(void 0);
        return {
          Provider: ({ initialStore: e, createStore: r, children: i }) => {
            let o = (0, n.useRef)();
            return (
              !o.current &&
                (e &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version.",
                  ),
                  !r && (r = () => e)),
                (o.current = r())),
              (0, n.createElement)(t.Provider, { value: o.current }, i)
            );
          },
          useStore: (e, r = Object.is) => {
            let i = (0, n.useContext)(t);
            if (!i)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return i(e, r);
          },
          useStoreApi: () => {
            let e = (0, n.useContext)(t);
            if (!e)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, n.useMemo)(
              () => ({
                getState: e.getState,
                setState: e.setState,
                subscribe: e.subscribe,
                destroy: e.destroy,
              }),
              [e],
            );
          },
        };
      }
    },
    697741: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return E;
        },
      });
      let n = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        i = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        o = "[aeiouy]",
        a = "([^aeiou][^aeiouy]*)",
        u = "(" + o + "[aeiou]*)",
        s = RegExp("^" + a + "?" + u + a),
        c = RegExp("^" + a + "?" + u + a + u + "?$"),
        l = RegExp("^" + a + "?(" + u + a + "){2,}"),
        f = RegExp("^" + a + "?" + o),
        p = RegExp("^" + a + o + "[^aeiouwxy]$"),
        h = /ll$/,
        d = /^(.+?)e$/,
        g = /^(.+?)y$/,
        y = /^(.+?(s|t))(ion)$/,
        v = /^(.+?)(ed|ing)$/,
        m = /(at|bl|iz)$/,
        _ = /^(.+?)eed$/,
        b = /^.+?[^s]s$/,
        S = /^.+?(ss|i)es$/,
        w = /([^aeiouylsz])\1$/,
        k =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        x = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        C =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function E(t) {
        let e,
          r = String(t).toLowerCase();
        if (r.length < 3) return r;
        let o = !1;
        return (
          121 === r.codePointAt(0) && ((o = !0), (r = "Y" + r.slice(1))),
          S.test(r) ? (r = r.slice(0, -2)) : b.test(r) && (r = r.slice(0, -1)),
          (e = _.exec(r))
            ? s.test(e[1]) && (r = r.slice(0, -1))
            : (e = v.exec(r)) &&
              f.test(e[1]) &&
              ((r = e[1]),
              m.test(r)
                ? (r += "e")
                : w.test(r)
                  ? (r = r.slice(0, -1))
                  : p.test(r) && (r += "e")),
          (e = g.exec(r)) && f.test(e[1]) && (r = e[1] + "i"),
          (e = k.exec(r)) && s.test(e[1]) && (r = e[1] + n[e[2]]),
          (e = x.exec(r)) && s.test(e[1]) && (r = e[1] + i[e[2]]),
          (e = C.exec(r))
            ? l.test(e[1]) && (r = e[1])
            : (e = y.exec(r)) && l.test(e[1]) && (r = e[1]),
          (e = d.exec(r)) &&
            (l.test(e[1]) || (c.test(e[1]) && !p.test(e[1]))) &&
            (r = e[1]),
          h.test(r) && l.test(r) && (r = r.slice(0, -1)),
          o && (r = "y" + r.slice(1)),
          r
        );
      }
    },
  },
]);
//# sourceMappingURL=de10a78e330495377cd7.js.map
