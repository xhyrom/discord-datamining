"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93382"],
  {
    863942: function (e, t, i) {
      var l = i(22092);
      (0, i(192291).exportTypedArrayStaticMethod)("from", i(12367), l);
    },
    152708: function (e, t, i) {
      var l,
        r,
        n,
        s = i(200651),
        a = i(192379),
        c = i(120356),
        o = i.n(c),
        d = i(600164),
        f = i(82126);
      function u(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      ((l = r || (r = {})).WRAP = "wrap"), (l.STACK = "stack");
      class h extends (n = a.PureComponent) {
        renderChildren() {
          let e;
          let { children: t, layout: i, columns: l } = this.props;
          switch (i) {
            case "stack":
              e = "100%";
              break;
            case "wrap":
              e = "".concat((1 / l) * 100, "%");
          }
          return t.map((t, i) =>
            (0, s.jsx)(
              d.Z.Child,
              { className: f.tile, basis: e, grow: 0, children: t },
              i,
            ),
          );
        }
        render() {
          let { className: e } = this.props;
          return (0, s.jsx)(d.Z, {
            className: o()(e, f.grid),
            wrap: d.Z.Wrap.WRAP,
            children: this.renderChildren(),
          });
        }
      }
      u(h, "Layout", r),
        u(h, "defaultProps", { children: [], layout: "wrap", columns: 4 }),
        (t.Z = h);
    },
    463727: function (e, t, i) {
      let l = (0, i(818083).B)({
        kind: "user",
        id: "2023-06_golive_capture_card",
        label: "GoLive Capture Card Support",
        defaultConfig: { enableGoLiveCaptureCard: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable go live capture card support",
            config: { enableGoLiveCaptureCard: !0 },
          },
        ],
      });
      t.Z = l;
    },
    537413: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return n;
        },
      }),
        i(47120);
      var l = i(451467),
        r = i(37113);
      function n(e, t, i) {
        for (let n of r.no[e])
          if ((0, l.Z)(e, n.resolution, n.fps, t, i))
            return [n.resolution, n.fps];
        return null;
      }
    },
    958707: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = i(200651);
      i(192379);
      var r = i(120356),
        n = i.n(r),
        s = i(66011);
      function a(e) {
        let { separator: t = !1 } = e;
        return (0, l.jsx)("div", {
          className: n()(s.divider, { [s.separator]: t }),
        });
      }
    },
    152165: function (e, t, i) {
      var l = i(200651),
        r = i(192379),
        n = i(120356),
        s = i.n(n),
        a = i(442837),
        c = i(607070),
        o = i(468516);
      t.Z = r.memo(function (e) {
        let { className: t, animated: i = !1 } = e,
          n = r.useId();
        function d(e) {
          return "".concat(n, "-").concat(e);
        }
        function f(e) {
          return "url(#".concat(d(e), ")");
        }
        let u = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, l.jsx)("svg", {
          className: s()(o.nativePickerGuide, t),
          width: "392",
          height: "254",
          viewBox: "0 0 392 254",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children:
            !0 !== i || u
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("g", {
                      clipPath: f("clip0"),
                      children: [
                        (0, l.jsx)("rect", {
                          width: "392",
                          height: "254",
                          rx: "8",
                          fill: "#1A1C37",
                          fillOpacity: "0.8",
                        }),
                        (0, l.jsx)("g", {
                          filter: f("filter0"),
                          children: (0, l.jsx)("rect", {
                            x: "21",
                            y: "-0.21051",
                            width: "241.861",
                            height: "148.887",
                            rx: "8",
                            fill: "#F47FFF",
                          }),
                        }),
                        (0, l.jsx)("g", {
                          filter: f("filter1"),
                          children: (0, l.jsx)("rect", {
                            x: "57.8317",
                            y: "47.8552",
                            width: "335.168",
                            height: "206.331",
                            rx: "8",
                            fill: "#5865F2",
                          }),
                        }),
                        (0, l.jsx)("g", {
                          filter: f("filter2"),
                          children: (0, l.jsx)("rect", {
                            x: "223.574",
                            y: "11.5128",
                            width: "154.693",
                            height: "101.993",
                            rx: "8",
                            fill: "#FFD836",
                          }),
                        }),
                        (0, l.jsx)("g", {
                          filter: f("filter3"),
                          children: (0, l.jsx)("rect", {
                            x: "142.545",
                            y: "67.785",
                            width: "232.04",
                            height: "143.025",
                            rx: "8",
                            fill: "#AEC7FF",
                          }),
                        }),
                        (0, l.jsx)("g", {
                          filter: f("filter4"),
                          children: (0, l.jsx)("rect", {
                            x: "152.558",
                            y: "84",
                            width: "86",
                            height: "86",
                            rx: "24",
                            fill: f("paint0"),
                          }),
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M171.907 114.1C171.907 110.538 174.795 107.65 178.357 107.65H212.757C216.319 107.65 219.207 110.538 219.207 114.1V118.4C219.207 119.587 218.244 120.55 217.057 120.55H174.057C172.869 120.55 171.907 119.587 171.907 118.4V114.1ZM178.357 116.25C179.544 116.25 180.507 115.287 180.507 114.1C180.507 112.913 179.544 111.95 178.357 111.95C177.169 111.95 176.207 112.913 176.207 114.1C176.207 115.287 177.169 116.25 178.357 116.25ZM186.957 114.1C186.957 115.287 185.994 116.25 184.807 116.25C183.619 116.25 182.657 115.287 182.657 114.1C182.657 112.913 183.619 111.95 184.807 111.95C185.994 111.95 186.957 112.913 186.957 114.1ZM191.257 116.25C192.444 116.25 193.407 115.287 193.407 114.1C193.407 112.913 192.444 111.95 191.257 111.95C190.069 111.95 189.107 112.913 189.107 114.1C189.107 115.287 190.069 116.25 191.257 116.25Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          d: "M171.907 127C171.907 125.813 172.869 124.85 174.057 124.85H217.057C218.244 124.85 219.207 125.813 219.207 127V139.9C219.207 143.462 216.319 146.35 212.757 146.35H178.357C174.795 146.35 171.907 143.462 171.907 139.9V127Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("rect", {
                          x: "44",
                          y: "84",
                          width: "86",
                          height: "86",
                          rx: "24",
                          fill: "white",
                          fillOpacity: "0.2",
                        }),
                        (0, l.jsx)("path", {
                          d: "M71.9512 105.5C68.389 105.5 65.5012 108.388 65.5012 111.95V129.15C65.5012 132.712 68.389 135.6 71.9512 135.6H102.051C105.613 135.6 108.501 132.712 108.501 129.15V111.95C108.501 108.388 105.613 105.5 102.051 105.5H71.9512Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          d: "M90.2262 144.2C89.6325 144.2 89.1512 143.719 89.1512 143.125V138.825C89.1512 138.231 88.6699 137.75 88.0762 137.75H85.9262C85.3325 137.75 84.8512 138.231 84.8512 138.825V143.125C84.8512 143.719 84.3699 144.2 83.7762 144.2H80.5512C79.3638 144.2 78.4012 145.163 78.4012 146.35C78.4012 147.537 79.3638 148.5 80.5512 148.5H93.4512C94.6386 148.5 95.6012 147.537 95.6012 146.35C95.6012 145.163 94.6386 144.2 93.4512 144.2H90.2262Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("rect", {
                          x: "261",
                          y: "84",
                          width: "86",
                          height: "86",
                          rx: "24",
                          fill: "white",
                          fillOpacity: "0.2",
                        }),
                        (0, l.jsx)("path", {
                          d: "M320.425 111.461C317.273 109.993 313.95 108.959 310.542 108.371C310.077 109.222 309.651 110.094 309.275 110.985C305.648 110.438 301.952 110.438 298.324 110.985C297.938 110.094 297.514 109.222 297.049 108.381C293.629 108.969 290.307 110.003 287.154 111.472C280.888 120.863 279.197 130.032 280.048 139.059C283.715 141.804 287.815 143.891 292.175 145.229C293.155 143.891 294.024 142.463 294.767 140.973C293.351 140.437 291.979 139.778 290.673 138.988C291.02 138.735 291.356 138.481 291.681 138.198C299.361 141.865 308.238 141.865 315.919 138.198C316.245 138.471 316.58 138.735 316.916 138.988C315.613 139.768 314.238 140.437 312.825 140.973C313.577 142.463 314.437 143.881 315.414 145.218C319.773 143.881 323.874 141.794 327.541 139.049H327.553C328.55 128.593 325.853 119.516 320.425 111.461ZM295.84 133.505C293.476 133.505 291.528 131.306 291.528 128.632C291.528 125.957 293.428 123.759 295.84 123.759C298.252 123.759 300.187 125.957 300.149 128.632C300.149 131.306 298.24 133.505 295.84 133.505ZM311.754 133.505C309.39 133.505 307.442 131.306 307.442 128.632C307.442 125.957 309.351 123.759 311.754 123.759C314.154 123.759 316.101 125.957 316.063 128.632C316.063 131.306 314.154 133.505 311.754 133.505Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M194 187.542V153L219 178.06H204.374L203.488 178.328L194 187.542Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M213.594 188.996L205.818 192.307L195.72 168.39L203.67 165.04L213.594 188.996Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M210.718 187.528L206.741 189.197L200.054 173.293L204.025 171.621L210.718 187.528Z",
                          fill: "black",
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M196.157 158.192V182.323L202.561 176.141L203.484 175.841H213.768L196.157 158.192Z",
                          fill: "black",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("defs", {
                      children: [
                        (0, l.jsxs)("filter", {
                          id: d("filter0"),
                          x: "-99",
                          y: "-120.211",
                          width: "481.861",
                          height: "388.887",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "60",
                              result: "effect1_foregroundBlur_7254_10733",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter1"),
                          x: "-62.1683",
                          y: "-72.1448",
                          width: "575.168",
                          height: "446.331",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "60",
                              result: "effect1_foregroundBlur_7254_10733",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter2"),
                          x: "103.574",
                          y: "-108.487",
                          width: "394.693",
                          height: "341.993",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "60",
                              result: "effect1_foregroundBlur_7254_10733",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter3"),
                          x: "22.5446",
                          y: "-52.215",
                          width: "472.04",
                          height: "383.025",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "60",
                              result: "effect1_foregroundBlur_7254_10733",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter4"),
                          x: "132.558",
                          y: "72.6",
                          width: "126",
                          height: "126",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feColorMatrix", {
                              in: "SourceAlpha",
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                              result: "hardAlpha",
                            }),
                            (0, l.jsx)("feOffset", { dy: "8.6" }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "10",
                            }),
                            (0, l.jsx)("feComposite", {
                              in2: "hardAlpha",
                              operator: "out",
                            }),
                            (0, l.jsx)("feColorMatrix", {
                              type: "matrix",
                              values:
                                "0 0 0 0 0.0870551 0 0 0 0 0.112803 0 0 0 0 0.392074 0 0 0 0.2 0",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in2: "BackgroundImageFix",
                              result: "effect1_dropShadow_7254_10733",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_dropShadow_7254_10733",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("paint0"),
                          x1: "238.558",
                          y1: "170",
                          x2: "152.558",
                          y2: "84",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, l.jsx)("stop", { stopColor: "#4752C4" }),
                            (0, l.jsx)("stop", {
                              offset: "1",
                              stopColor: "#6571F3",
                            }),
                          ],
                        }),
                        (0, l.jsx)("clipPath", {
                          id: d("clip0"),
                          children: (0, l.jsx)("rect", {
                            width: "392",
                            height: "254",
                            rx: "8",
                            fill: "white",
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("defs", {
                      children: [
                        (0, l.jsx)("filter", {
                          id: d("filter0"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "60,60",
                            result: "result",
                          }),
                        }),
                        (0, l.jsx)("filter", {
                          id: d("filter1"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "60,60",
                            result: "result",
                          }),
                        }),
                        (0, l.jsx)("filter", {
                          id: d("filter2"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "60,60",
                            result: "result",
                          }),
                        }),
                        (0, l.jsx)("filter", {
                          id: d("filter3"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "60,60",
                            result: "result",
                          }),
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter4"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: [
                            (0, l.jsx)("feGaussianBlur", {
                              in: "SourceAlpha",
                              stdDeviation: "10,10",
                            }),
                            (0, l.jsx)("feOffset", {
                              dx: "0",
                              dy: "8.6",
                              result: "tmp",
                            }),
                            (0, l.jsx)("feFlood", {
                              floodColor: "rgba(22,29,100,0.2)",
                            }),
                            (0, l.jsx)("feComposite", {
                              operator: "in",
                              in2: "tmp",
                            }),
                            (0, l.jsxs)("feMerge", {
                              result: "result",
                              children: [
                                (0, l.jsx)("feMergeNode", {}),
                                (0, l.jsx)("feMergeNode", {
                                  in: "SourceGraphic",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("screenIconHighlight-fill"),
                          x1: "0.059738",
                          y1: "0.059805",
                          x2: "0.900088",
                          y2: "0.912265",
                          spreadMethod: "pad",
                          gradientUnits: "objectBoundingBox",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              className: o.screenIconHighlight_fill_g1_0,
                              offset: "0%",
                              stopColor: "#5f6be9",
                            }),
                            (0, l.jsx)("stop", {
                              className: o.screenIconHighlight_fill_g1_1,
                              offset: "100%",
                              stopColor: "#4d58ce",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter5"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: [
                            (0, l.jsx)("feGaussianBlur", {
                              in: "SourceAlpha",
                              stdDeviation: "8,8",
                            }),
                            (0, l.jsx)("feOffset", {
                              dx: "0",
                              dy: "16",
                              result: "tmp",
                            }),
                            (0, l.jsx)("feFlood", {
                              floodColor: "rgba(19,25,93,0.23)",
                            }),
                            (0, l.jsx)("feComposite", {
                              operator: "in",
                              in2: "tmp",
                            }),
                            (0, l.jsxs)("feMerge", {
                              result: "result",
                              children: [
                                (0, l.jsx)("feMergeNode", {}),
                                (0, l.jsx)("feMergeNode", {
                                  in: "SourceGraphic",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("fill0"),
                          x1: "86.2913",
                          y1: "141.923",
                          x2: "173.989",
                          y2: "89.1545",
                          spreadMethod: "pad",
                          gradientUnits: "userSpaceOnUse",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#3e70dd",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "60%",
                              stopColor: "#6089f4",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#7196ff",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("fill1"),
                          x1: "1900.86",
                          y1: "1361.52",
                          x2: "1343.93",
                          y2: "1903.75",
                          spreadMethod: "pad",
                          gradientUnits: "userSpaceOnUse",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#3e70dd",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "60%",
                              stopColor: "#6089f4",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#7196ff",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("fill2"),
                          x1: "6091.83",
                          y1: "1378.91",
                          x2: "6962.32",
                          y2: "-423.639",
                          spreadMethod: "pad",
                          gradientUnits: "userSpaceOnUse",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#3e70dd",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "60%",
                              stopColor: "#6089f4",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#7196ff",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter6"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: [
                            (0, l.jsx)("feGaussianBlur", {
                              in: "SourceAlpha",
                              stdDeviation: "8,8",
                            }),
                            (0, l.jsx)("feOffset", {
                              dx: "0",
                              dy: "16",
                              result: "tmp",
                            }),
                            (0, l.jsx)("feFlood", {
                              floodColor: "rgba(19,25,93,0.23)",
                            }),
                            (0, l.jsx)("feComposite", {
                              operator: "in",
                              in2: "tmp",
                            }),
                            (0, l.jsxs)("feMerge", {
                              result: "result",
                              children: [
                                (0, l.jsx)("feMergeNode", {}),
                                (0, l.jsx)("feMergeNode", {
                                  in: "SourceGraphic",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("buttonOverWindowHighlight-fill"),
                          x1: "0.109232",
                          y1: "0.072144",
                          x2: "0.888615",
                          y2: "0.947629",
                          spreadMethod: "pad",
                          gradientUnits: "objectBoundingBox",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              className: o.buttonOverWindowHighlight_fill_g1_0,
                              offset: "0%",
                              stopColor: "#606ceb",
                            }),
                            (0, l.jsx)("stop", {
                              className: o.buttonOverWindowHighlight_fill_g1_1,
                              offset: "100%",
                              stopColor: "#4b56cb",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("g", {
                      children: [
                        (0, l.jsx)("rect", {
                          width: "392",
                          height: "254",
                          rx: "0",
                          ry: "0",
                          fill: "#1a1c37",
                        }),
                        (0, l.jsxs)("g", {
                          opacity: "0.7",
                          children: [
                            (0, l.jsx)("g", {
                              filter: f("filter0"),
                              children: (0, l.jsx)("rect", {
                                width: "241.861",
                                height: "148.887",
                                rx: "8",
                                ry: "8",
                                transform: "translate(21-.21051)",
                                fill: "#f47fff",
                              }),
                            }),
                            (0, l.jsx)("g", {
                              filter: f("filter1"),
                              children: (0, l.jsx)("rect", {
                                width: "335.168",
                                height: "206.331",
                                rx: "8",
                                ry: "8",
                                transform: "translate(57.8317 47.8552)",
                                fill: "#5865f2",
                              }),
                            }),
                            (0, l.jsx)("g", {
                              filter: f("filter2"),
                              children: (0, l.jsx)("rect", {
                                width: "154.693",
                                height: "101.993",
                                rx: "8",
                                ry: "8",
                                transform: "translate(223.574 11.5128)",
                                fill: "#ffd836",
                              }),
                            }),
                            (0, l.jsx)("g", {
                              filter: f("filter3"),
                              children: (0, l.jsx)("rect", {
                                width: "232.04",
                                height: "143.025",
                                rx: "8",
                                ry: "8",
                                transform: "translate(142.545 67.785)",
                                fill: "#aec7ff",
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsx)("g", {
                          className: o.windowIcon_to,
                          transform: "translate(195.557999,127)",
                          children: (0, l.jsx)("g", {
                            className: o.windowIcon_ts,
                            transform: "scale(1,1)",
                            children: (0, l.jsxs)("g", {
                              className: o.windowIcon,
                              transform: "translate(-195.557999,-127)",
                              filter: f("filter4"),
                              children: [
                                (0, l.jsx)("rect", {
                                  width: "86",
                                  height: "86",
                                  rx: "24",
                                  ry: "24",
                                  transform: "translate(152.558 84)",
                                  fill: "rgba(255,255,255,0.2)",
                                  fillOpacity: "0.967277",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M171.907,127c0-1.187.962-2.15,2.15-2.15h43c1.187,0,2.15.963,2.15,2.15v12.9c0,3.562-2.888,6.45-6.45,6.45h-34.4c-3.562,0-6.45-2.888-6.45-6.45v-12.9Z",
                                  fill: "#fff",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M171.907,114.1c0-3.562,2.888-6.45,6.45-6.45h34.4c3.562,0,6.45,2.888,6.45,6.45v4.3c0,1.187-.963,2.15-2.15,2.15h-43c-1.188,0-2.15-.963-2.15-2.15v-4.3Zm6.45,2.15c1.187,0,2.15-.963,2.15-2.15s-.963-2.15-2.15-2.15c-1.188,0-2.15.963-2.15,2.15s.962,2.15,2.15,2.15Zm8.6-2.15c0,1.187-.963,2.15-2.15,2.15-1.188,0-2.15-.963-2.15-2.15s.962-2.15,2.15-2.15c1.187,0,2.15.963,2.15,2.15Zm4.3,2.15c1.187,0,2.15-.963,2.15-2.15s-.963-2.15-2.15-2.15c-1.188,0-2.15.963-2.15,2.15s.962,2.15,2.15,2.15Z",
                                  clipRule: "evenodd",
                                  fill: "#fff",
                                  fillRule: "evenodd",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: o.clydeIcon_to,
                          transform: "translate(87,127)",
                          children: (0, l.jsx)("g", {
                            className: o.clydeIcon_ts,
                            transform: "scale(1,1)",
                            children: (0, l.jsxs)("g", {
                              className: o.clydeIcon,
                              transform: "translate(-87,-127)",
                              children: [
                                (0, l.jsx)("rect", {
                                  width: "86",
                                  height: "86",
                                  rx: "24",
                                  ry: "24",
                                  transform: "translate(44 84)",
                                  fill: "#fff",
                                  fillOpacity: "0.2",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M320.425,111.461c-3.152-1.468-6.475-2.502-9.883-3.09-.465.851-.891,1.723-1.267,2.614-3.627-.547-7.323-.547-10.951,0-.386-.891-.81-1.763-1.275-2.604-3.42.588-6.742,1.622-9.895,3.091-6.266,9.391-7.957,18.56-7.106,27.587c3.667,2.745,7.767,4.832,12.127,6.17.98-1.338,1.849-2.766,2.592-4.256-1.416-.536-2.788-1.195-4.094-1.985.347-.253.683-.507,1.008-.79c7.68,3.667,16.557,3.667,24.238,0c.326.273.661.537.997.79-1.303.78-2.678,1.449-4.091,1.985.752,1.49,1.612,2.908,2.589,4.245c4.359-1.337,8.46-3.424,12.127-6.169h.012c.997-10.456-1.7-19.533-7.128-27.588ZM295.84,133.505c-2.364,0-4.312-2.199-4.312-4.873c0-2.675,1.9-4.873,4.312-4.873s4.347,2.198,4.309,4.873c0,2.674-1.909,4.873-4.309,4.873Zm15.914,0c-2.364,0-4.312-2.199-4.312-4.873c0-2.675,1.909-4.873,4.312-4.873c2.4,0,4.347,2.198,4.309,4.873c0,2.674-1.909,4.873-4.309,4.873Z",
                                  transform: "translate(-216.043403 0)",
                                  fill: "#fff",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: o.screenIcon_to,
                          transform: "translate(304,127)",
                          children: (0, l.jsx)("g", {
                            className: o.screenIcon_ts,
                            transform: "scale(1,1)",
                            children: (0, l.jsxs)("g", {
                              className: o.screenIcon,
                              transform: "translate(-304,-127)",
                              children: [
                                (0, l.jsx)("rect", {
                                  className: o.screenIconHighlight,
                                  width: "86",
                                  height: "86",
                                  rx: "24",
                                  ry: "24",
                                  transform: "translate(261 84)",
                                  fill: f("screenIconHighlight-fill"),
                                  fillOpacity: "0.2",
                                }),
                                (0, l.jsxs)("g", {
                                  transform: "translate(217.000001 0)",
                                  children: [
                                    (0, l.jsx)("path", {
                                      d: "M71.9512,105.5c-3.5622,0-6.45,2.888-6.45,6.45v17.2c0,3.562,2.8878,6.45,6.45,6.45h30.0998c3.562,0,6.45-2.888,6.45-6.45v-17.2c0-3.562-2.888-6.45-6.45-6.45h-30.0998Z",
                                      fill: "#fff",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M90.2262,144.2c-.5937,0-1.075-.481-1.075-1.075v-4.3c0-.594-.4813-1.075-1.075-1.075h-2.15c-.5937,0-1.075.481-1.075,1.075v4.3c0,.594-.4813,1.075-1.075,1.075h-3.225c-1.1874,0-2.15.963-2.15,2.15s.9626,2.15,2.15,2.15h12.9c1.1874,0,2.15-.963,2.15-2.15s-.9626-2.15-2.15-2.15h-3.225Z",
                                      fill: "#fff",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: o.windowCard_ts,
                          transform:
                            "translate(194.2121,124.850005) scale(0.5,0.5)",
                          children: (0, l.jsxs)("g", {
                            className: o.windowCard,
                            transform: "translate(-109,-73.046998)",
                            opacity: "0",
                            children: [
                              (0, l.jsxs)("g", {
                                clipPath: f("windowCard-clip"),
                                children: [
                                  (0, l.jsxs)("g", {
                                    children: [
                                      (0, l.jsx)("g", {
                                        filter: f("filter5"),
                                        children: (0, l.jsx)("rect", {
                                          width: "218",
                                          height: "150",
                                          rx: "16",
                                          ry: "16",
                                          fill: "#fff",
                                        }),
                                      }),
                                      (0, l.jsxs)("g", {
                                        opacity: "0.4",
                                        children: [
                                          (0, l.jsx)("path", {
                                            d: "M173.774,75.7111l1.235-7.2965c-2.097.1074-4.142.6951-5.974,1.7174-1.832,1.0222-3.404,2.4515-4.592,4.177-7.414,11.7126-17.41,21.5865-29.228,28.871-2.955,3.383-6.746,5.937-10.996,7.411l1.722,7.068l4.537,18.57.459-.143c28.711-12.647,43.239-27.755,56.044-46.5831.173-.2289.316-.4864.46-.7153.871-1.4703,1.456-3.0916,1.722-4.7785l-10.824-1.8313c-1.449-.2855-2.733-1.1169-3.583-2.3213s-1.202-2.6892-.982-4.1454Z",
                                            fill: f("fill0"),
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M21.319,122.295c-1.1695-.128-2.3297-.329-3.4741-.601-.4737.269-.9249.575-1.3494.915-9.85782,7.969-18.49529,17.329-25.63905,27.785h26.44295l2.3543-16.31l1.6653-11.789Z",
                                            fill: f("fill1"),
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M19.6537,134.083l-2.3256,16.31h116.5959l-3.445-14.049-4.537-18.571-106.2883,16.31Z",
                                            fill: "#6a94ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M26.8024,122.266c-1.8232.186-3.6606.186-5.4838,0l-1.6653,11.789l106.2307-16.31-1.722-7.068c-1.854.673-3.782,1.124-5.742,1.345L26.8024,122.266Z",
                                            fill: f("fill2"),
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M117.041,19.7425l-2.325.2576c3.708.5198,7.261,1.8289,10.416,3.8384c3.156,2.0094,5.841,4.6722,7.873,7.8074c5.35.4964,10.453,2.4792,14.729,5.7228-1.981-7.8825-6.768-14.7792-13.47-19.4062-6.703-4.6269-14.864-6.6688-22.965-5.7454L12.9922,23.3193L108.141,12.6749c2.118-.2257,4.24.3896,5.906,1.7126s2.742,3.247,2.994,5.355v0Z",
                                            fill: "#f47fff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M137.053,42.8912l4.45,39.5443c2.278-2.5498,4.209-5.388,5.743-8.441.721-1.3954,1.345-2.8391,1.866-4.3207.23-.6009.43-1.2018.631-1.8313v-.1431l.173-.7153c.295-1.0013.507-2.0254.631-3.0617.46-4.149,6.862-3.1189,6.403,1.0015-.209,1.4544-.536,2.8897-.976,4.2921-.988,3.4033-2.376,6.6785-4.135,9.7573c3.479-3.9599,5.794-8.7991,6.691-13.9854.897-5.1862.341-10.5186-1.605-15.4107-1.947-4.892-5.21-9.1542-9.43-12.3178-4.22-3.1635-9.234-5.1059-14.49-5.6134c2.215,3.3803,3.602,7.2324,4.048,11.2452v0Z",
                                            fill: "#f47fff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M-6.73351,49.5297c.25761-.0286.5176-.0286.77521,0c1.3094-5.1229,4.15403-9.7265,8.15492-13.1975c4.00089-3.4711,8.96808-5.6447,14.23978-6.2313L108.14,19.8571c2.183-.2729,4.392-.2729,6.575,0l2.325-.2575c-.252-2.1191-1.336-4.0525-3.015-5.377-1.678-1.3246-3.815-1.9324-5.943-1.6906L12.991,23.3194l-3.21561.3434c-7.25704.7992-14.05693,3.9272-19.3752,8.9126s-8.86689,11.5583-10.11109,18.7283c3.7744-2.5168,8.094-4.1054,12.60415-4.6354l.37324,2.8614Z",
                                            fill: "#f47fff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M21.3185,122.295c1.8232.185,3.6607.185,5.4839,0l91.6746-10.244c1.961-.221,3.888-.673,5.742-1.345c4.202-1.474,7.958-3.989,10.916-7.307c2.958-3.319,5.021-7.3325,5.995-11.664-9.635,7.4631-21.232,11.985-33.391,13.019-.819.031-1.619-.248-2.239-.781-.621-.533-1.017-1.28-1.108-2.091-.09-.812.13-1.627.618-2.2833.487-.6561,1.206-1.1041,2.011-1.2539c7.706-.755,15.208-2.9078,22.137-6.3523c4.643-2.4035,8.8-5.6439,12.259-9.557l-4.364-39.5444c-.446-4.0128-1.833-7.8649-4.048-11.2452-2.032-3.1352-4.717-5.798-7.872-7.8074-3.156-2.0095-6.709-3.3186-10.417-3.8384-2.183-.2729-4.392-.2729-6.575,0L16.4376,30.1008C11.166,30.6874,6.19878,32.861,2.19789,36.332s-6.84552,8.0747-8.15492,13.1976C0.072305,49.7871,6.10164,60.9751,7.70946,75.282c1.69396,14.9364-2.0672,27.584-8.354937,28.299h-.717783c1.296534,4.429,3.74569,8.438,7.09894,11.619s7.49122,5.421,11.99392,6.494c1.1822.276,2.381.477,3.5889.601v0ZM88.1868,93.6807L61.6002,96.5421c-5.8859.6593-11.7936-1.0382-16.424-4.7192-4.6303-3.681-7.6042-9.0441-8.2675-14.9099L34.8128,58.3712c-.2422-2.2035.4013-4.413,1.7894-6.145s3.4082-2.8456,5.618-3.0972l52.6562-5.8659c2.2111-.2413,4.428.3999,6.1656,1.7834c1.738,1.3835,2.856,3.3966,3.108,5.599l2.268,20.2014c.312,2.693.087,5.4209-.661,8.0272s-2.005,5.0398-3.699,7.1611c-1.694,2.1212-3.7907,3.8885-6.171,5.2004s-4.9971,2.1429-7.7002,2.4451v0ZM122.095,65.9825c-1.551.1793-3.119-.105-4.507-.8166-1.387-.7116-2.531-1.8184-3.286-3.1797s-1.086-2.9155-.952-4.465.727-3.0243,1.705-4.2368c.977-1.2124,2.294-2.1078,3.784-2.5723c1.489-.4644,3.083-.4769,4.58-.0359c1.496.4411,2.827,1.3157,3.824,2.5127.996,1.197,1.613,2.6623,1.771,4.2095.21,2.0499-.398,4.0999-1.693,5.7063-1.295,1.6065-3.173,2.6403-5.226,2.8778ZM12.5042,71.133c-.1799-1.5449.1054-3.1082.8194-4.4911s1.8246-2.5229,3.1905-3.275s2.9255-1.0824,4.4802-.9488c1.5548.1335,3.0346.725,4.2512,1.699s2.115,2.2866,2.581,3.7709.4786,3.0731.036,4.5646c-.4425,1.4914-1.3201,2.8179-2.5211,3.8109s-2.6714,1.6075-4.2238,1.7654c-2.057.2093-4.1139-.3969-5.7258-1.6874s-2.6492-3.1616-2.8876-5.2085v0Z",
                                            fill: "#7196ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M104.15,50.7315c-.252-2.2024-1.37-4.2155-3.108-5.5989-1.7376-1.3835-3.9546-2.0247-6.1656-1.7834L42.2202,49.215c-2.2099.2516-4.2299,1.3652-5.618,3.0973-1.3882,1.732-2.0316,3.9414-1.7895,6.145L36.9086,76.999c.6634,5.8658,3.6372,11.2289,8.2676,14.9099c4.6303,3.681,10.538,5.3785,16.424,4.7192l26.5865-2.8614c5.4428-.611,10.4198-3.3498,13.8383-7.6149c3.418-4.2651,4.998-9.7078,4.393-15.1331L104.15,50.7315ZM71.7927,82.8076l-11.4845,1.259c-.9556.1063-1.9145-.1702-2.6656-.7685s-1.233-1.4695-1.3396-2.4219.1708-1.908.7711-2.6566s1.4745-1.2288,2.4302-1.335L69.6106,75.74c.9576-.0968,1.9152.1846,2.6668.7839s1.2374,1.4685,1.3528,2.4209c.2584,1.9743.1435,3.6625-1.8375,3.8628ZM93.0389,80.776l-7.2352.8012c-.4899.0839-.9919.0671-1.4751-.0494-.4831-.1166-.9373-.3303-1.3345-.6282s-.7291-.6734-.9754-1.1038c-.2462-.4304-.4015-.9064-.4564-1.3988s-.0082-.9907.1372-1.4644c.1455-.4738.3865-.9129.7085-1.2903.3219-.3775.7179-.6854,1.1636-.9048s.9317-.3456,1.4282-.3709l7.2352-.8012c.9283-.0474,1.8397.2603,2.548.8603.7082.5999,1.1598,1.4468,1.2625,2.3676.1026.9207-.1514,1.8457-.7103,2.586s-1.3802,1.2399-2.2963,1.3967v0Z",
                                            fill: "#a9c7ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M120.401,50.5311c-1.551.1572-3.021.7704-4.222,1.7617s-2.079,2.316-2.523,3.8059-.434,3.0775.029,4.5616c.464,1.484,1.359,2.7973,2.573,3.7731c1.213.9757,2.691,1.57,4.244,1.7073c1.554.1372,3.113-.1888,4.48-.9365c1.367-.7478,2.48-1.8836,3.198-3.2633.718-1.3796,1.009-2.9408.835-4.4852-.246-2.046-1.284-3.9153-2.893-5.209-1.61-1.2937-3.662-1.9093-5.721-1.7156v0Z",
                                            fill: "#202225",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M21.2034,78.0291c1.5438-.1627,3.0044-.7786,4.1965-1.7697c1.1921-.991,2.0621-2.3126,2.4997-3.797s.4229-3.0649-.0421-4.5411-1.3592-2.7814-2.5695-3.7504-2.682-1.5579-4.2285-1.6922-3.0984.1922-4.4585.9379c-1.3602.7458-2.4675,1.8773-3.1816,3.2511s-1.0027,2.9279-.8294,4.4654c.2312,2.05,1.2666,3.9257,2.8803,5.2176s3.6747,1.8953,5.7331,1.6784v0Z",
                                            fill: "#202225",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M92.2341,73.5653l-7.2352.8012c-.4965.0253-.9825.1516-1.4282.371s-.8417.5272-1.1636.9047c-.322.3775-.563.8166-.7085,1.2903-.1454.4737-.1921.9721-.1372,1.4645s.2102.9684.4564,1.3987c.2463.4304.5782.806.9754,1.1039.3972.2978.8514.5116,1.3345.6281.4832.1165.9852.1334,1.4751.0495l7.2352-.8012c.9161-.1569,1.7375-.6565,2.2963-1.3968.5589-.7402.8129-1.6653.7103-2.586-.1027-.9207-.5543-1.7676-1.2625-2.3676s-1.6197-.9077-2.548-.8603Z",
                                            fill: "#7196ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M69.6688,75.7397L59.5625,76.8843c-.4732.0526-.9313.1976-1.3483.4267-.417.229-.7846.5377-1.0818.9084s-.5184.796-.6507,1.2518-.1733.9332-.1205,1.4047.1983.9282.4281,1.3438c.2299.4155.5396.7819.9115,1.0781.3719.2963.7988.5167,1.2561.6485.4574.1319.9363.1727,1.4095.1201l11.4845-1.259c1.981-.2003,2.0959-1.8886,1.8949-3.8629-.1151-.9634-.609-1.842-1.3734-2.4428s-1.7367-.8749-2.7036-.762Z",
                                            fill: "#7196ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M-6.73361,49.5295c-6.28779.6868-10.04889,13.3627-8.38369,28.2705c1.6366,14.3069,7.75204,25.752,13.86752,25.752h.602926C5.64089,102.837,9.40204,90.1898,7.70809,75.2534C6.10026,60.9465,0.070929,49.7871,-5.95841,49.5009c-.2576-.0286-.5176-.0286-.7752,0v.0286Z",
                                            fill: "#f47fff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M225.455,25.4939l-36.377-6.152c-.749-.1354-1.518-.1211-2.261.0422-.744.1633-1.447.4722-2.069.9089-.623.4367-1.152.9923-1.557,1.6347-.405.6423-.678,1.3585-.803,2.1069l-7.551,44.3801-1.062,7.2965c-.25,1.4905.102,3.019.979,4.252.876,1.233,2.207,2.0702,3.701,2.3292l10.824,1.8312l31.582,5.3794c.805.1297,1.628.0871,2.416-.1251.787-.2121,1.519-.5889,2.149-1.1053l.029-62.7787Z",
                                            fill: "#d4e4ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M198.237,35.5948c3.614,3.2179,6.238,7.3908,7.57,12.0348c1.331,4.644,1.315,9.569-.048,14.204-.301,1.0466-.823,2.0169-1.531,2.846s-1.586,1.4977-2.575,1.9612c-.828.395-1.758.5299-2.666.3868-.907-.143-1.749-.5573-2.415-1.188-.623-.9681-.904-2.1149-.8-3.2598s.587-2.2228,1.374-3.0639c1.403-1.7183,3.249-3.0238,5.34-3.777c2.387-.8759,4.96-1.128,7.473-.7323s4.882,1.426,6.883,2.9928c2.124,1.7454,5.168-1.259,3.043-3.0331-2.393-1.9775-5.23-3.3487-8.27-3.9964-3.04-.6478-6.191-.5529-9.186.2766-5.743,1.6596-12.03,6.896-10.939,13.563s9.13,8.1835,14.011,4.521c4.881-3.6626,6-11.6745,5.311-17.712-.699-7.3159-4.107-14.1099-9.561-19.0568-2.095-1.8027-5.168,1.2304-3.072,3.0331h.058Z",
                                            fill: "#3e70dd",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("g", {
                                        filter: f("filter6"),
                                        children: (0, l.jsx)("rect", {
                                          width: "218",
                                          height: "150",
                                          rx: "16",
                                          ry: "16",
                                          fill: "#5865f2",
                                          fillOpacity: "0.36",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("clipPath", {
                                    id: d("windowCard-clip"),
                                    children: (0, l.jsx)("rect", {
                                      width: "218",
                                      height: "150",
                                      rx: "16",
                                      ry: "16",
                                      fill: "#fff",
                                    }),
                                  }),
                                ],
                              }),
                              (0, l.jsx)("ellipse", {
                                rx: "3.9077",
                                ry: "4",
                                transform: "translate(15.9077 16)",
                                fill: "#2e2f32",
                                fillOpacity: "0.74",
                              }),
                              (0, l.jsx)("ellipse", {
                                rx: "3.9077",
                                ry: "4",
                                transform: "translate(28 16)",
                                fill: "#2e2f32",
                                fillOpacity: "0.74",
                              }),
                              (0, l.jsx)("ellipse", {
                                rx: "3.9077",
                                ry: "4",
                                transform: "translate(40.0923 16)",
                                fill: "#2e2f32",
                                fillOpacity: "0.74",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: o.buttonOverWindow_ts,
                          transform: "translate(197,127) scale(0.8,0.8)",
                          children: (0, l.jsxs)("g", {
                            className: o.buttonOverWindow,
                            transform: "translate(-87,-127)",
                            opacity: "0",
                            children: [
                              (0, l.jsx)("rect", {
                                className: o.buttonOverWindowHighlight,
                                width: "86",
                                height: "86",
                                rx: "24",
                                ry: "24",
                                transform: "translate(44 84)",
                                fill: f("buttonOverWindowHighlight-fill"),
                                fillOpacity: "0.2",
                              }),
                              (0, l.jsxs)("g", {
                                transform: "translate(.750001 0)",
                                children: [
                                  (0, l.jsx)("path", {
                                    d: "M71.9512,105.5c-3.5622,0-6.45,2.888-6.45,6.45v17.2c0,3.562,2.8878,6.45,6.45,6.45h30.0998c3.562,0,6.45-2.888,6.45-6.45v-17.2c0-3.562-2.888-6.45-6.45-6.45h-30.0998Z",
                                    fill: "#fff",
                                  }),
                                  (0, l.jsx)("path", {
                                    d: "M90.2262,144.2c-.5937,0-1.075-.481-1.075-1.075v-4.3c0-.594-.4813-1.075-1.075-1.075h-2.15c-.5937,0-1.075.481-1.075,1.075v4.3c0,.594-.4813,1.075-1.075,1.075h-3.225c-1.1874,0-2.15.963-2.15,2.15s.9626,2.15,2.15,2.15h12.9c1.1874,0,2.15-.963,2.15-2.15s-.9626-2.15-2.15-2.15h-3.225Z",
                                    fill: "#fff",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: o.cursor_to,
                          transform: "translate(206.707,213.525767)",
                          children: (0, l.jsx)("g", {
                            className: o.cursor_ts,
                            transform: "scale(1,1)",
                            children: (0, l.jsxs)("g", {
                              className: o.cursor,
                              transform: "translate(-206.5,-172.653503)",
                              children: [
                                (0, l.jsx)("path", {
                                  d: "M194,187.542L194,153l25,25.06h-14.626l-.886.268L194,187.542Z",
                                  clipRule: "evenodd",
                                  fill: "#fff",
                                  fillRule: "evenodd",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M213.594,188.996l-7.776,3.311L195.72,168.39l7.95-3.35l9.924,23.956Z",
                                  clipRule: "evenodd",
                                  fill: "#fff",
                                  fillRule: "evenodd",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M210.718,187.528l-3.977,1.669-6.687-15.904l3.971-1.672l6.693,15.907Z",
                                  clipRule: "evenodd",
                                  fill: "#000",
                                  fillRule: "evenodd",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M196.157,158.192v24.131l6.404-6.182.923-.3h10.284l-17.611-17.649Z",
                                  clipRule: "evenodd",
                                  fill: "#000",
                                  fillRule: "evenodd",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
        });
      });
    },
    567126: function (e, t, i) {
      i.d(t, {
        Hu: function () {
          return Q;
        },
        _Q: function () {
          return D;
        },
        oA: function () {
          return V;
        },
        ov: function () {
          return U;
        },
        se: function () {
          return X;
        },
      }),
        i(47120),
        i(518263),
        i(970173),
        i(520712),
        i(268111),
        i(941497),
        i(32026),
        i(480839),
        i(744285),
        i(492257),
        i(873817),
        i(863942),
        i(642549),
        i(653041),
        i(724458);
      var l = i(200651),
        r = i(192379),
        n = i(120356),
        s = i.n(n),
        a = i(553813),
        c = i.n(a),
        o = i(788900),
        d = i(268146),
        f = i(442837),
        u = i(141038),
        h = i(846519),
        x = i(481060),
        p = i(224706),
        g = i(579806),
        m = i(600164),
        j = i(152708),
        v = i(594190),
        C = i(751571),
        _ = i(569984),
        w = i(918701),
        y = i(977156),
        Z = i(28798),
        b = i(131951),
        S = i(449224),
        I = i(358085),
        N = i(463727),
        M = i(855403),
        R = i(299570),
        k = i(960861),
        T = i(989941),
        O = i(958707),
        B = i(152165),
        A = i(133179),
        G = i(70722),
        P = i(761274),
        L = i(46140),
        E = i(65154),
        H = i(388032),
        W = i(545477);
      async function F() {
        let e = b.Z.getVideoDevices(),
          t = (0, u.Z)(b.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99,
          }),
          i = D(),
          l = await i,
          r = await t,
          n = r
            .filter((e) => e.id.startsWith(d.vA.SCREEN))
            .map((e) => {
              let t = e.name;
              return (
                "Entire screen" === t
                  ? (t = H.intl.string(H.t.R4wpLC))
                  : /^Screen \d+$/.test(t) &&
                    (t = H.intl.formatToPlainString(H.t["y/R7n5"], {
                      index: parseInt(t.split(" ")[1]),
                    })),
                { ...e, name: t }
              );
            }),
          s = (function (e, t) {
            let i = {};
            return (
              t.forEach((e) => {
                i[e.id] = e;
              }),
              e.forEach((e) => {
                i[e.id] = e;
              }),
              Object.values(i)
            );
          })(
            r.filter((e) => e.id.startsWith(d.vA.WINDOW)),
            l,
          ),
          a = [
            "GQgGHISKZ5aYqYeYhX9isDUHGw",
            "bAgKFITWhoVvmHVRuokCdjVQaA",
            "XAgGDIJ/ipadd3iCiYUcWpCZBA",
            "HRkGDIT5aXRneomGdlvUawB7qA",
            "I9gNDISmlqqPmHiKd3isTp/5lg",
            "XxgGBIIwT2ZGpneUeZev6fWLXQ",
            "KzsKNIZDeYmfd3ihe1bXfr8Jxg",
            "J9cRDIJ6iHd/d4h4eIUJf5LyRw",
            "DggKFIQwtndKe3hVfXnAWQmddQ",
            "WggKDILeh3ePZpd6l4jln1b5SQ",
            "4PgJJIJVl3eAaod2iJeHj7tE8Q",
          ];
        return {
          windowSources: s,
          screenSources: n,
          cameraSources: Object.entries(e)
            .filter((e) => {
              let [t, i] = e;
              return !i.disabled;
            })
            .map((e, t) => {
              let [i, l] = e,
                r = a[t % a.length],
                n = Uint8Array.from(atob(r), (e) => e.charCodeAt(0)),
                s = (0, o.xS)(n);
              return { id: "camera:" + l.id, name: l.name, url: s };
            }),
        };
      }
      async function D() {
        let e = v.ZP.getRunningGames();
        return (
          await Promise.all(
            e.map(async (e) => {
              let t;
              if (null == e.name) return null;
              try {
                t = await p.Z.identifyGame(e.pid, e.name);
              } catch (e) {
                return null;
              }
              let i = e.windowHandle,
                l = e.name,
                r = t.icon;
              return null != i && null != l && null != r
                ? {
                    id: "window:".concat(i),
                    name: l,
                    url: "data:image/bmp;base64,".concat(r),
                  }
                : null;
            }),
          )
        ).filter((e) => null !== e);
      }
      function U(e) {
        let t = (0, I.isWindows)() ? (0, T.Z)(v.ZP, S.Z) : null,
          i = v.ZP.getRunningGames();
        return null != t && (0, M.Z)(e.id, t.windowHandle)
          ? 2
          : null != i.find((t) => (0, M.Z)(e.id, t.windowHandle))
            ? 1
            : 0;
      }
      function V(e) {
        let { selectedSource: t, onChangeSelectedSource: i } = e,
          { enableGoLiveCaptureCard: n } = N.Z.useExperiment({
            location: "GoLive_Source_Select",
          }),
          a = b.Z.supports(E.AN.GO_LIVE_HARDWARE),
          [c, o] = r.useState(null),
          [u, p] = r.useState(null),
          [g, S] = r.useState(null),
          I = null != g && g.length > 0,
          [R, k] = r.useState(d.vA.WINDOW),
          [T, B] = r.useState(!1),
          G = r.useRef(null),
          D = r.useRef(new h.Xp()),
          V = (0, f.e7)([v.ZP], () => v.ZP.getRunningGames()),
          J = (function (e, t, i) {
            let l = (0, y.Zy)({ location: L.dr.STREAM_SOURCE_SELECT });
            return r.useMemo(() => {
              if (null == i || !l) return null;
              for (let l of i) {
                var r, n;
                let i = t.find((e) => (0, M.Z)(l.id, e.windowHandle));
                if ((null == i ? void 0 : i.id) == null) continue;
                let s = (0, w.lQ)(e, i.id);
                if (
                  null != s &&
                  (null === (r = s.userStatus) || void 0 === r
                    ? void 0
                    : r.enrolledAt) != null &&
                  (null === (n = s.userStatus) || void 0 === n
                    ? void 0
                    : n.completedAt) == null
                )
                  return { source: l, quest: s };
              }
              return null;
            }, [l, e, t, i]);
          })(
            (0, f.e7)([_.Z], () => _.Z.quests),
            V,
            u,
          ),
          K = r.useMemo(
            () =>
              null == u
                ? null
                : [...u].sort((e, t) =>
                    (null == J ? void 0 : J.source.id) === e.id
                      ? -1
                      : (null == J ? void 0 : J.source.id) === t.id
                        ? 1
                        : U(t) - U(e),
                  ),
            [J, u],
          );
        r.useEffect(() => {
          let e = D.current;
          return (
            F().then((e) => {
              let { screenSources: t, windowSources: i, cameraSources: l } = e;
              o(t), p(i), S(l);
            }),
            e.start(1e3, async () => {
              let {
                screenSources: e,
                windowSources: t,
                cameraSources: i,
              } = await F();
              o(e), p(t), S(i);
            }),
            () => {
              e.stop();
            }
          );
        }, []);
        let X = r.useCallback((e) => {
            null !== e && ((G.current = e), B(!e.isScrolledToTop()));
          }, []),
          [Q, q] = r.useState(void 0);
        r.useEffect(() => {
          C.Z.hasPermission(P.Eu.SCREEN_RECORDING, {
            showAuthorizationError: !1,
          }).then(q);
        }, []);
        let Y = (function (e) {
          switch (e) {
            case d.vA.WINDOW:
              return K;
            case d.vA.SCREEN:
              return c;
            case d.vA.CAMERA:
              return g;
          }
        })(R);
        if (null == Y)
          return !1 === Q
            ? (0, l.jsxs)(x.Text, {
                className: W.errorMessage,
                variant: "text-md/normal",
                color: "text-danger",
                children: [
                  H.intl.string(H.t["kW5h/f"]),
                  (0, l.jsx)("br", {}),
                  H.intl.string(H.t["5Jvu1d"]),
                ],
              })
            : (0, l.jsx)(m.Z, {
                className: W.spinner,
                justify: m.Z.Justify.CENTER,
                align: m.Z.Align.CENTER,
                children: (0, l.jsx)(x.Spinner, {}),
              });
        let z = Y.map((e) => {
          let { id: r } = e,
            n = (null == t ? void 0 : t.id) === r;
          return (0, l.jsx)(
            x.Clickable,
            {
              className: s()(W.tile, { [W.selected]: n }),
              onClick: () => i(e, null),
              children: (0, l.jsx)(A.Z, { source: e, selectedSource: t }, e.id),
            },
            r,
          );
        });
        function $() {
          let e = G.current;
          null != e && B(!e.isScrolledToTop());
        }
        return (0, l.jsxs)(r.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: W.segmentContainer,
              children: [
                (0, l.jsx)(O.Z, { separator: T }),
                (0, l.jsx)(x.SegmentedControl, {
                  options: (function () {
                    let e = [
                      { name: H.intl.string(H.t.tHoi7u), value: d.vA.WINDOW },
                      {
                        name: H.intl.string(H.t["/iX8u7"]),
                        value: d.vA.SCREEN,
                      },
                    ];
                    return (
                      n &&
                        a &&
                        I &&
                        e.push({
                          name: H.intl.string(H.t.cWt5Ul),
                          value: d.vA.CAMERA,
                        }),
                      e
                    );
                  })(),
                  value: R,
                  onChange: (e) => {
                    let { value: t } = e;
                    return k(t);
                  },
                  className: W.segmentControl,
                  optionClassName: W.segmentControlOption,
                }),
              ],
            }),
            R === d.vA.CAMERA
              ? (0, l.jsx)("div", {
                  className: W.sourceContainer,
                  children: (0, l.jsx)(x.AdvancedScroller, {
                    ref: X,
                    className: W.sourceScroller,
                    onScroll: $,
                    children: (0, l.jsx)(j.Z, {
                      layout: j.Z.Layout.WRAP,
                      columns: 2,
                      className: W.sourceContainer,
                      children: z,
                    }),
                  }),
                })
              : (0, l.jsxs)(x.AdvancedScroller, {
                  ref: X,
                  className: W.sourceScroller,
                  onScroll: $,
                  children: [
                    R === d.vA.WINDOW &&
                      null != J &&
                      (0, l.jsx)(Z.Z, { quest: J.quest }),
                    (0, l.jsx)(j.Z, {
                      layout: j.Z.Layout.WRAP,
                      columns: 2,
                      className: W.sourceContainer,
                      children: z,
                    }),
                  ],
                }),
          ],
        });
      }
      function J(e) {
        let { onSelect: t } = e,
          i = r.useCallback(() => {
            t({
              id: "prepicked:",
              name: H.intl.string(H.t["KKcy9/"]),
              url: "",
            });
          }, [t]);
        return (0, l.jsx)(x.Clickable, {
          role: "radio",
          "aria-checked": !1,
          onClick: i,
          tabIndex: 0,
          className: s()(
            W.nativeSourceSingleTypeButton,
            W.nativePickerRadioItem,
          ),
          children: (0, l.jsxs)("div", {
            className: W.nativeSourceSingleTypeButtonInner,
            children: [
              (0, l.jsx)(B.Z, { className: W.nativeSourceSingleTypeImage }),
              (0, l.jsx)(x.Text, {
                variant: "text-md/medium",
                color: "none",
                children: H.intl.string(H.t.Yp6h5e),
              }),
            ],
          }),
        });
      }
      function K(e) {
        let { id: t, name: i, text: n, icon: a, onSelect: c } = e,
          o = r.useCallback(() => {
            c({ id: "prepicked:" + t, name: i, url: "" });
          }, [t, i, c]);
        return (0, l.jsx)(x.Clickable, {
          role: "radio",
          "aria-checked": !1,
          onClick: o,
          tabIndex: 0,
          className: s()(W.nativeSourceTypeButton, W.nativePickerRadioItem),
          children: (0, l.jsxs)("div", {
            className: W.nativeSourceTypeButtonInner,
            children: [
              (0, l.jsx)(a, { size: "lg" }),
              (0, l.jsx)(x.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: n,
              }),
            ],
          }),
        });
      }
      function X(e) {
        let { onSourceSelect: t } = e,
          [i, n] = r.useState([]),
          [a, o] = r.useState({}),
          d = r.useRef(new h.Xp());
        r.useEffect(() => {
          let e = d.current,
            t = () => {
              let e = Object.entries(b.Z.getVideoDevices()).filter((e) => {
                let [t, i] = e;
                return !i.disabled;
              });
              n(e),
                o({
                  ...e.reduce((e, t) => {
                    let [i, l] = t;
                    return { ...e, ["camera:" + i]: l.name };
                  }, {}),
                });
            };
          return (
            t(),
            e.start(1e3, t),
            () => {
              e.stop();
            }
          );
        }, []);
        let f = r.useCallback(
            (e) => {
              var i;
              let { value: l } = e;
              t({
                id: l,
                name: null !== (i = a[l]) && void 0 !== i ? i : "",
                url: "",
              });
            },
            [t, a],
          ),
          u =
            (0, I.isMac)() &&
            c().satisfies(
              null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release,
              G.jR,
            ),
          p = (0, I.isMac)(),
          [m, j] = r.useState(!1),
          v = r.useCallback(() => {
            j(!m);
          }, [m]),
          C = u
            ? (0, l.jsx)(J, { onSelect: t })
            : (0, l.jsxs)("div", {
                className: W.nativePickerTypes,
                children: [
                  (0, l.jsx)(K, {
                    onSelect: t,
                    id: "screen",
                    name: H.intl.string(H.t.R4wpLC),
                    text: H.intl.string(H.t.cVUFXV),
                    icon: x.ScreenIcon,
                  }),
                  (0, l.jsx)(K, {
                    onSelect: t,
                    id: "window",
                    name: H.intl.string(H.t["+SLJCg"]),
                    text: H.intl.string(H.t.dG2A1N),
                    icon: x.BrowserIcon,
                  }),
                  p
                    ? (0, l.jsx)(K, {
                        onSelect: t,
                        id: "app",
                        name: H.intl.string(H.t.ct7AKS),
                        text: H.intl.string(H.t["8lQwf3"]),
                        icon: x.ClydeIcon,
                      })
                    : null,
                ],
              });
        return (0, l.jsxs)("div", {
          className: W.nativePickerScroll,
          children: [
            (0, l.jsx)(x.Text, {
              className: W.nativePickerLabel,
              variant: "text-md/semibold",
              color: "interactive-normal",
              children: H.intl.string(H.t.XyYoFR),
            }),
            C,
            0 === i.length
              ? null
              : (0, l.jsxs)("div", {
                  className: s()(
                    W.nativePickerCaptureSection,
                    m ? null : W.nativePickerCollapsed,
                  ),
                  children: [
                    (0, l.jsxs)(x.Clickable, {
                      onClick: v,
                      className: s()(W.nativePickerLabel),
                      children: [
                        (0, l.jsx)(x.Text, {
                          className: W.nativeCaptureDevicesText,
                          variant: "text-md/semibold",
                          color: "interactive-normal",
                          children: H.intl.string(H.t.rO0Vi4),
                        }),
                        (0, l.jsx)(x.ChevronSmallDownIcon, {
                          size: "sm",
                          color: "currentColor",
                          className: W.captureDevicesToggleIndicator,
                        }),
                      ],
                    }),
                    (0, l.jsx)(x.RadioGroup, {
                      className: W.nativePickerCaptureList,
                      onChange: f,
                      radioItemClassName: W.nativePickerRadioItem,
                      options: i.map((e) => {
                        let [t, i] = e;
                        return {
                          name: i.name,
                          value: "camera:" + i.id,
                          icon: x.VideoIcon,
                          radioItemIconClassName: W.hideRadioCheckbox,
                        };
                      }),
                    }),
                  ],
                }),
          ],
        });
      }
      function Q(e) {
        let { onSourceSelect: t, onCancel: i, pickerType: n } = e,
          { lastPickerAction: s, lastPickerError: a } = (0, f.e7)([k.ZP], () =>
            k.ZP.getPickerState(),
          ),
          [o, d] = r.useState(!1);
        return (
          (0, k.kE)(),
          r.useEffect(() => {
            (0, I.isLinux)() ||
            ((0, I.isMac)() &&
              c().satisfies(
                null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release,
                G.jR,
              ))
              ? (0, R.T)(n)
              : (0, R.t)();
          }, [n]),
          r.useEffect(() => {
            o
              ? s === k.Uc.Update
                ? t()
                : s === k.Uc.Cancel && ((0, R.t)(), i())
              : (null == s || s === k.Uc.Present) && d(!0);
          }, [o, s, t, i]),
          s === k.Uc.Error
            ? (0, l.jsx)(x.Text, {
                className: W.errorMessage,
                variant: "text-md/normal",
                color: "text-danger",
                children:
                  null != a && a.length > 0 ? a : H.intl.string(H.t.CKsXk5),
              })
            : (0, l.jsx)(B.Z, { animated: !0, className: W.nativePickerGuide })
        );
      }
    },
    133179: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = i(200651);
      i(192379);
      var r = i(120356),
        n = i.n(r),
        s = i(481060),
        a = i(600164),
        c = i(545477);
      function o(e) {
        let { source: t, selectedSource: i } = e,
          { id: r, name: o, url: d } = t,
          f = (null == i ? void 0 : i.id) === r;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            justify: a.Z.Justify.CENTER,
            align: a.Z.Align.CENTER,
            children: [
              (0, l.jsx)(a.Z, {
                justify: a.Z.Justify.CENTER,
                align: a.Z.Align.CENTER,
                children: (0, l.jsx)("div", {
                  style: { backgroundImage: "url(".concat(d, ")") },
                  className: n()(c.sourceThumbnail, { [c.selected]: f }),
                }),
              }),
              (0, l.jsx)(s.Text, {
                className: n()(c.sourceName, { [c.selected]: f }),
                variant: "text-sm/normal",
                children: o,
              }),
            ],
          }),
        });
      }
    },
    143135: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = i(855403);
      function r(e, t, i) {
        return null == t ? e : i.find((e) => (0, l.Z)(t.id, e.windowHandle));
      }
    },
    28798: function (e, t, i) {
      var l = i(200651);
      i(192379);
      var r = i(442837),
        n = i(780384),
        s = i(481060),
        a = i(210887),
        c = i(475595),
        o = i(231338),
        d = i(388032),
        f = i(81959);
      t.Z = function (e) {
        let { quest: t } = e,
          i = (0, r.e7)([a.Z], () => a.Z.getState().theme),
          u = (0, n.wj)(i) ? o.BR.DARK : o.BR.LIGHT;
        return (0, l.jsx)("div", {
          className: f.wrapper,
          children: (0, l.jsxs)("div", {
            className: f.content,
            children: [
              (0, l.jsx)("img", {
                src: (0, c.fh)(t, c.eC.GAME_TILE, u).url,
                alt: "",
                className: f.gameTile,
              }),
              (0, l.jsxs)("div", {
                className: f.copy,
                children: [
                  (0, l.jsx)(s.Heading, {
                    color: "always-white",
                    variant: "text-sm/medium",
                    children: d.intl.format(d.t["5nMfBQ"], {
                      gameTitle: t.config.messages.gameTitle,
                    }),
                  }),
                  (0, l.jsx)(s.Text, {
                    className: f.subheading,
                    color: "always-white",
                    variant: "text-xs/medium",
                    children: d.intl.string(d.t.mjbPtb),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    82126: function (e, t, i) {
      e.exports = { grid: "grid_b500ad", tile: "tile_b500ad" };
    },
    66011: function (e, t, i) {
      e.exports = { divider: "divider_bcb954", separator: "separator_bcb954" };
    },
    468516: function (e, t, i) {
      e.exports = {
        nativePickerGuide: "nativePickerGuide_b2ca72",
        windowIcon_to: "windowIcon_to_b2ca72",
        windowIcon_ts: "windowIcon_ts_b2ca72",
        windowIcon: "windowIcon_b2ca72",
        clydeIcon_to: "clydeIcon_to_b2ca72",
        clydeIcon_ts: "clydeIcon_ts_b2ca72",
        clydeIcon: "clydeIcon_b2ca72",
        screenIcon_to: "screenIcon_to_b2ca72",
        screenIcon_ts: "screenIcon_ts_b2ca72",
        screenIcon: "screenIcon_b2ca72",
        screenIconHighlight_fill_g1_0: "screenIconHighlight_fill_g1_0_b2ca72",
        screenIconHighlight_fill_g1_1: "screenIconHighlight_fill_g1_1_b2ca72",
        screenIconHighlight: "screenIconHighlight_b2ca72",
        windowCard_ts: "windowCard_ts_b2ca72",
        windowCard: "windowCard_b2ca72",
        buttonOverWindow_ts: "buttonOverWindow_ts_b2ca72",
        buttonOverWindow: "buttonOverWindow_b2ca72",
        buttonOverWindowHighlight_fill_g1_0:
          "buttonOverWindowHighlight_fill_g1_0_b2ca72",
        buttonOverWindowHighlight_fill_g1_1:
          "buttonOverWindowHighlight_fill_g1_1_b2ca72",
        buttonOverWindowHighlight: "buttonOverWindowHighlight_b2ca72",
        cursor_to: "cursor_to_b2ca72",
        cursor_ts: "cursor_ts_b2ca72",
        cursor: "cursor_b2ca72",
      };
    },
    545477: function (e, t, i) {
      e.exports = {
        spinner: "spinner_d7ec26",
        tile: "tile_d7ec26",
        sourceThumbnail: "sourceThumbnail_d7ec26",
        sourceScroller: "sourceScroller_d7ec26",
        sourceContainer: "sourceContainer_d7ec26",
        selected: "selected_d7ec26",
        sourceName: "sourceName_d7ec26",
        segmentContainer: "segmentContainer_d7ec26",
        segmentControl: "segmentControl_d7ec26",
        segmentControlOption: "segmentControlOption_d7ec26",
        errorMessage: "errorMessage_d7ec26",
        nativePickerScroll: "nativePickerScroll_d7ec26",
        nativeCaptureDevicesText: "nativeCaptureDevicesText_d7ec26",
        captureDevicesToggleIndicator: "captureDevicesToggleIndicator_d7ec26",
        nativePickerCollapsed: "nativePickerCollapsed_d7ec26",
        nativePickerCaptureList: "nativePickerCaptureList_d7ec26",
        nativePickerRadioItem: "nativePickerRadioItem_d7ec26",
        nativePickerGuide: "nativePickerGuide_d7ec26",
        nativePickerLabel: "nativePickerLabel_d7ec26",
        nativePickerCaptureSection: "nativePickerCaptureSection_d7ec26",
        nativeSourceSingleTypeButton: "nativeSourceSingleTypeButton_d7ec26",
        nativeSourceSingleTypeButtonInner:
          "nativeSourceSingleTypeButtonInner_d7ec26",
        nativeSourceSingleTypeImage: "nativeSourceSingleTypeImage_d7ec26",
        nativePickerTypes: "nativePickerTypes_d7ec26",
        nativeSourceTypeButton: "nativeSourceTypeButton_d7ec26",
        nativeSourceTypeButtonInner: "nativeSourceTypeButtonInner_d7ec26",
        hideRadioCheckbox: "hideRadioCheckbox_d7ec26",
      };
    },
    81959: function (e, t, i) {
      e.exports = {
        wrapper: "wrapper_b3936e",
        content: "content_b3936e",
        gameTile: "gameTile_b3936e",
        copy: "copy_b3936e",
        subheading: "subheading_b3936e",
      };
    },
    788900: function (e, t, i) {
      i.d(t, {
        xS: function () {
          return l;
        },
      });
      function l(e) {
        let t = (function (e) {
          let { PI: t, min: i, max: l, cos: r, round: n } = Math,
            s = e[0] | (e[1] << 8) | (e[2] << 16),
            a = e[3] | (e[4] << 8),
            c = (63 & s) / 63,
            o = ((s >> 6) & 63) / 31.5 - 1,
            d = ((s >> 12) & 63) / 31.5 - 1,
            f = s >> 23,
            u = a >> 15,
            h = l(3, u ? (f ? 5 : 7) : 7 & a),
            x = l(3, u ? 7 & a : f ? 5 : 7),
            p = f ? (15 & e[5]) / 15 : 1,
            g = (e[5] >> 4) / 15,
            m = f ? 6 : 5,
            j = 0,
            v = (t, i, l) => {
              let r = [];
              for (let n = 0; n < i; n++)
                for (let s = n ? 0 : 1; s * i < t * (i - n); s++)
                  r.push(
                    (((e[m + (j >> 1)] >> ((1 & j++) << 2)) & 15) / 7.5 - 1) *
                      l,
                  );
              return r;
            },
            C = v(h, x, ((s >> 18) & 31) / 31),
            _ = v(3, 3, (((a >> 3) & 63) / 63) * 1.25),
            w = v(3, 3, (((a >> 9) & 63) / 63) * 1.25),
            y = f && v(5, 5, g),
            Z = (function (e) {
              let t = e[3],
                i = 128 & e[2],
                l = 128 & e[4];
              return (l ? (i ? 5 : 7) : 7 & t) / (l ? 7 & t : i ? 5 : 7);
            })(e),
            b = n(Z > 1 ? 32 : 32 * Z),
            S = n(Z > 1 ? 32 / Z : 32),
            I = new Uint8Array(b * S * 4),
            N = [],
            M = [];
          for (let e = 0, n = 0; e < S; e++)
            for (let s = 0; s < b; s++, n += 4) {
              let a = c,
                u = o,
                g = d,
                m = p;
              for (let e = 0, i = l(h, f ? 5 : 3); e < i; e++)
                N[e] = r((t / b) * (s + 0.5) * e);
              for (let i = 0, n = l(x, f ? 5 : 3); i < n; i++)
                M[i] = r((t / S) * (e + 0.5) * i);
              for (let e = 0, t = 0; e < x; e++)
                for (
                  let i = e ? 0 : 1, l = 2 * M[e];
                  i * x < h * (x - e);
                  i++, t++
                )
                  a += C[t] * N[i] * l;
              for (let e = 0, t = 0; e < 3; e++)
                for (let i = e ? 0 : 1, l = 2 * M[e]; i < 3 - e; i++, t++) {
                  let e = N[i] * l;
                  (u += _[t] * e), (g += w[t] * e);
                }
              if (f)
                for (let e = 0, t = 0; e < 5; e++)
                  for (let i = e ? 0 : 1, l = 2 * M[e]; i < 5 - e; i++, t++)
                    m += y[t] * N[i] * l;
              let j = a - (2 / 3) * u,
                v = (3 * a - j + g) / 2,
                Z = v - g;
              (I[n] = l(0, 255 * i(1, v))),
                (I[n + 1] = l(0, 255 * i(1, Z))),
                (I[n + 2] = l(0, 255 * i(1, j))),
                (I[n + 3] = l(0, 255 * i(1, m)));
            }
          return { w: b, h: S, rgba: I };
        })(e);
        return (function (e, t, i) {
          let l = 4 * e + 1,
            r = 6 + t * (5 + l),
            n = [
              137,
              80,
              78,
              71,
              13,
              10,
              26,
              10,
              0,
              0,
              0,
              13,
              73,
              72,
              68,
              82,
              0,
              0,
              e >> 8,
              255 & e,
              0,
              0,
              t >> 8,
              255 & t,
              8,
              6,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              r >>> 24,
              (r >> 16) & 255,
              (r >> 8) & 255,
              255 & r,
              73,
              68,
              65,
              84,
              120,
              1,
            ],
            s = [
              0, 498536548, 997073096, 651767980, 1994146192, 1802195444,
              1303535960, 1342533948, -306674912, -267414716, -690576408,
              -882789492, -1687895376, -2032938284, -1609899400, -1111625188,
            ],
            a = 1,
            c = 0;
          for (let e = 0, r = 0, s = l - 1; e < t; e++, s += l - 1)
            for (
              n.push(
                e + 1 < t ? 0 : 1,
                255 & l,
                l >> 8,
                255 & ~l,
                (l >> 8) ^ 255,
                0,
              ),
                c = (c + a) % 65521;
              r < s;
              r++
            ) {
              let e = 255 & i[r];
              n.push(e), (c = (c + (a = (a + e) % 65521)) % 65521);
            }
          for (let [e, t] of (n.push(
            c >> 8,
            255 & c,
            a >> 8,
            255 & a,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            73,
            69,
            78,
            68,
            174,
            66,
            96,
            130,
          ),
          [
            [12, 29],
            [37, 41 + r],
          ])) {
            let i = -1;
            for (let l = e; l < t; l++)
              (i ^= n[l]),
                (i = ((i = (i >>> 4) ^ s[15 & i]) >>> 4) ^ s[15 & i]);
            (i = ~i),
              (n[t++] = i >>> 24),
              (n[t++] = (i >> 16) & 255),
              (n[t++] = (i >> 8) & 255),
              (n[t++] = 255 & i);
          }
          return "data:image/png;base64," + btoa(String.fromCharCode(...n));
        })(t.w, t.h, t.rgba);
      }
    },
  },
]);
//# sourceMappingURL=9c9cb8037ff3d36e2fbe.js.map
