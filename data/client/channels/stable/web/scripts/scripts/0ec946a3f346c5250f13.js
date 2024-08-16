"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15450"],
  {
    163248: function (t, e, a) {
      var i, r;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ICalAlarmType = void 0);
      let n = a(411496);
      ((r = i = e.ICalAlarmType || (e.ICalAlarmType = {})).display = "display"),
        (r.audio = "audio");
      e.default = class t {
        constructor(t, e) {
          if (
            ((this.data = {
              type: null,
              trigger: null,
              repeat: null,
              interval: null,
              attach: null,
              description: null,
              x: [],
            }),
            (this.event = e),
            !e)
          )
            throw Error("`event` option required!");
          void 0 !== t.type && this.type(t.type),
            void 0 !== t.trigger && this.trigger(t.trigger),
            void 0 !== t.triggerBefore && this.triggerBefore(t.triggerBefore),
            void 0 !== t.triggerAfter && this.triggerAfter(t.triggerAfter),
            void 0 !== t.repeat && this.repeat(t.repeat),
            void 0 !== t.interval && this.interval(t.interval),
            void 0 !== t.attach && this.attach(t.attach),
            void 0 !== t.description && this.description(t.description),
            void 0 !== t.x && this.x(t.x);
        }
        type(t) {
          if (void 0 === t) return this.data.type;
          if (!t) return (this.data.type = null), this;
          if (!Object.keys(i).includes(t))
            throw Error(
              "`type` is not correct, must be either `display` or `audio`!",
            );
          return (this.data.type = t), this;
        }
        trigger(t) {
          if (void 0 === t && "number" == typeof this.data.trigger)
            return -1 * this.data.trigger;
          if (void 0 === t && this.data.trigger) return this.data.trigger;
          if (void 0 === t) return null;
          if (t) {
            if ("number" == typeof t && isFinite(t)) this.data.trigger = -1 * t;
            else if ("number" == typeof t)
              throw Error(
                "`trigger` is not correct, must be a finite number or a supported date!",
              );
            else this.data.trigger = (0, n.checkDate)(t, "trigger");
          } else this.data.trigger = null;
          return this;
        }
        triggerAfter(t) {
          return void 0 === t
            ? this.data.trigger
            : this.trigger("number" == typeof t ? -1 * t : t);
        }
        triggerBefore(t) {
          return void 0 === t ? this.trigger() : this.trigger(t);
        }
        repeat(t) {
          if (void 0 === t) return this.data.repeat;
          if (!t) return (this.data.repeat = null), this;
          if ("number" != typeof t || !isFinite(t))
            throw Error("`repeat` is not correct, must be numeric!");
          return (this.data.repeat = t), this;
        }
        interval(t) {
          if (void 0 === t) return this.data.interval || null;
          if (!t) return (this.data.interval = null), this;
          if ("number" != typeof t || !isFinite(t))
            throw Error("`interval` is not correct, must be numeric!");
          return (this.data.interval = t), this;
        }
        attach(t) {
          if (void 0 === t) return this.data.attach;
          if (!t) return (this.data.attach = null), this;
          let e = null;
          if ("string" == typeof t) e = { uri: t, mime: null };
          else if ("object" == typeof t)
            e = { uri: t.uri, mime: t.mime || null };
          else
            throw Error(
              "`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalalarm.html#attach",
            );
          if (!e.uri) throw Error("`attach.uri` is empty!");
          return (this.data.attach = { uri: e.uri, mime: e.mime }), this;
        }
        description(t) {
          return void 0 === t
            ? this.data.description
            : t
              ? ((this.data.description = t), this)
              : ((this.data.description = null), this);
        }
        x(t, e) {
          if (void 0 === t) return (0, n.addOrGetCustomAttributes)(this.data);
          if ("string" == typeof t && "string" == typeof e)
            (0, n.addOrGetCustomAttributes)(this.data, t, e);
          else if ("object" == typeof t)
            (0, n.addOrGetCustomAttributes)(this.data, t);
          else throw Error("Either key or value is not a string!");
          return this;
        }
        toJSON() {
          let t = this.trigger();
          return Object.assign({}, this.data, {
            trigger: "number" == typeof t ? t : (0, n.toJSON)(t),
            x: this.x(),
          });
        }
        toString() {
          let t = "BEGIN:VALARM\r\n";
          if (!this.data.type)
            throw Error("No value for `type` in ICalAlarm given!");
          if (!this.data.trigger)
            throw Error("No value for `trigger` in ICalAlarm given!");
          if (
            ((t += "ACTION:" + this.data.type.toUpperCase() + "\r\n"),
            "number" == typeof this.data.trigger && this.data.trigger > 0
              ? (t +=
                  "TRIGGER;RELATED=END:" +
                  (0, n.toDurationString)(this.data.trigger) +
                  "\r\n")
              : "number" == typeof this.data.trigger
                ? (t +=
                    "TRIGGER:" +
                    (0, n.toDurationString)(this.data.trigger) +
                    "\r\n")
                : (t +=
                    "TRIGGER;VALUE=DATE-TIME:" +
                    (0, n.formatDate)(
                      this.event.timezone(),
                      this.data.trigger,
                    ) +
                    "\r\n"),
            this.data.repeat && !this.data.interval)
          )
            throw Error(
              "No value for `interval` in ICalAlarm given, but required for `repeat`!",
            );
          if (
            (this.data.repeat && (t += "REPEAT:" + this.data.repeat + "\r\n"),
            this.data.interval && !this.data.repeat)
          )
            throw Error(
              "No value for `repeat` in ICalAlarm given, but required for `interval`!",
            );
          return (
            this.data.interval &&
              (t +=
                "DURATION:" +
                (0, n.toDurationString)(this.data.interval) +
                "\r\n"),
            "audio" === this.data.type &&
            this.data.attach &&
            this.data.attach.mime
              ? (t +=
                  "ATTACH;FMTTYPE=" +
                  this.data.attach.mime +
                  ":" +
                  this.data.attach.uri +
                  "\r\n")
              : "audio" === this.data.type && this.data.attach
                ? (t += "ATTACH;VALUE=URI:" + this.data.attach.uri + "\r\n")
                : "audio" === this.data.type &&
                  (t += "ATTACH;VALUE=URI:Basso\r\n"),
            "display" === this.data.type && this.data.description
              ? (t +=
                  "DESCRIPTION:" +
                  (0, n.escape)(this.data.description) +
                  "\r\n")
              : "display" === this.data.type &&
                (t +=
                  "DESCRIPTION:" +
                  (0, n.escape)(this.event.summary()) +
                  "\r\n"),
            (t += (0, n.generateCustomAttributes)(this.data) + "END:VALARM\r\n")
          );
        }
      };
    },
    529647: function (t, e, a) {
      var i, r, n, s, o, d;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ICalAttendeeType =
          e.ICalAttendeeStatus =
          e.ICalAttendeeRole =
            void 0);
      let l = a(411496);
      ((s = i = e.ICalAttendeeRole || (e.ICalAttendeeRole = {})).CHAIR =
        "CHAIR"),
        (s.REQ = "REQ-PARTICIPANT"),
        (s.OPT = "OPT-PARTICIPANT"),
        (s.NON = "NON-PARTICIPANT"),
        ((o = r =
          e.ICalAttendeeStatus || (e.ICalAttendeeStatus = {})).ACCEPTED =
          "ACCEPTED"),
        (o.TENTATIVE = "TENTATIVE"),
        (o.DECLINED = "DECLINED"),
        (o.DELEGATED = "DELEGATED"),
        (o.NEEDSACTION = "NEEDS-ACTION"),
        ((d = n = e.ICalAttendeeType || (e.ICalAttendeeType = {})).INDIVIDUAL =
          "INDIVIDUAL"),
        (d.GROUP = "GROUP"),
        (d.RESOURCE = "RESOURCE"),
        (d.ROOM = "ROOM"),
        (d.UNKNOWN = "UNKNOWN");
      class h {
        constructor(t, e) {
          if (
            ((this.data = {
              name: null,
              email: null,
              mailto: null,
              status: null,
              role: i.REQ,
              rsvp: null,
              type: null,
              delegatedTo: null,
              delegatedFrom: null,
              x: [],
            }),
            (this.event = e),
            !this.event)
          )
            throw Error("`event` option required!");
          void 0 !== t.name && this.name(t.name),
            void 0 !== t.email && this.email(t.email),
            void 0 !== t.mailto && this.mailto(t.mailto),
            void 0 !== t.status && this.status(t.status),
            void 0 !== t.role && this.role(t.role),
            void 0 !== t.rsvp && this.rsvp(t.rsvp),
            void 0 !== t.type && this.type(t.type),
            void 0 !== t.delegatedTo && this.delegatedTo(t.delegatedTo),
            void 0 !== t.delegatedFrom && this.delegatedFrom(t.delegatedFrom),
            t.delegatesTo && this.delegatesTo(t.delegatesTo),
            t.delegatesFrom && this.delegatesFrom(t.delegatesFrom),
            void 0 !== t.x && this.x(t.x);
        }
        name(t) {
          return void 0 === t
            ? this.data.name
            : ((this.data.name = t || null), this);
        }
        email(t) {
          return t ? ((this.data.email = t), this) : this.data.email;
        }
        mailto(t) {
          return void 0 === t
            ? this.data.mailto
            : ((this.data.mailto = t || null), this);
        }
        role(t) {
          return void 0 === t
            ? this.data.role
            : ((this.data.role = (0, l.checkEnum)(i, t)), this);
        }
        rsvp(t) {
          return void 0 === t
            ? this.data.rsvp
            : null === t
              ? ((this.data.rsvp = null), this)
              : ((this.data.rsvp = !!t), this);
        }
        status(t) {
          return void 0 === t
            ? this.data.status
            : t
              ? ((this.data.status = (0, l.checkEnum)(r, t)), this)
              : ((this.data.status = null), this);
        }
        type(t) {
          return void 0 === t
            ? this.data.type
            : t
              ? ((this.data.type = (0, l.checkEnum)(n, t)), this)
              : ((this.data.type = null), this);
        }
        delegatedTo(t) {
          return void 0 === t
            ? this.data.delegatedTo
            : t
              ? ("string" == typeof t
                  ? (this.data.delegatedTo = new h(
                      (0, l.checkNameAndMail)("delegatedTo", t),
                      this.event,
                    ))
                  : t instanceof h
                    ? (this.data.delegatedTo = t)
                    : (this.data.delegatedTo = new h(t, this.event)),
                (this.data.status = r.DELEGATED),
                this)
              : ((this.data.delegatedTo = null),
                this.data.status === r.DELEGATED && (this.data.status = null),
                this);
        }
        delegatedFrom(t) {
          return void 0 === t
            ? this.data.delegatedFrom
            : (t
                ? "string" == typeof t
                  ? (this.data.delegatedFrom = new h(
                      (0, l.checkNameAndMail)("delegatedFrom", t),
                      this.event,
                    ))
                  : t instanceof h
                    ? (this.data.delegatedFrom = t)
                    : (this.data.delegatedFrom = new h(t, this.event))
                : (this.data.delegatedFrom = null),
              this);
        }
        delegatesTo(t) {
          let e = t instanceof h ? t : this.event.createAttendee(t);
          return this.delegatedTo(e), e.delegatedFrom(this), e;
        }
        delegatesFrom(t) {
          let e = t instanceof h ? t : this.event.createAttendee(t);
          return this.delegatedFrom(e), e.delegatedTo(this), e;
        }
        x(t, e) {
          if (void 0 === t) return (0, l.addOrGetCustomAttributes)(this.data);
          if ("string" == typeof t && "string" == typeof e)
            (0, l.addOrGetCustomAttributes)(this.data, t, e);
          else if ("object" == typeof t)
            (0, l.addOrGetCustomAttributes)(this.data, t);
          else throw Error("Either key or value is not a string!");
          return this;
        }
        toJSON() {
          var t, e;
          return Object.assign({}, this.data, {
            delegatedTo:
              (null === (t = this.data.delegatedTo) || void 0 === t
                ? void 0
                : t.email()) || null,
            delegatedFrom:
              (null === (e = this.data.delegatedFrom) || void 0 === e
                ? void 0
                : e.email()) || null,
            x: this.x(),
          });
        }
        toString() {
          let t = "ATTENDEE";
          if (!this.data.email)
            throw Error("No value for `email` in ICalAttendee given!");
          return (
            (t += ";ROLE=" + this.data.role),
            this.data.type && (t += ";CUTYPE=" + this.data.type),
            this.data.status && (t += ";PARTSTAT=" + this.data.status),
            this.data.rsvp &&
              (t += ";RSVP=" + this.data.rsvp.toString().toUpperCase()),
            this.data.delegatedTo &&
              (t += ';DELEGATED-TO="' + this.data.delegatedTo.email() + '"'),
            this.data.delegatedFrom &&
              (t +=
                ';DELEGATED-FROM="' + this.data.delegatedFrom.email() + '"'),
            this.data.name &&
              (t += ';CN="' + (0, l.escape)(this.data.name) + '"'),
            this.data.email &&
              this.data.mailto &&
              (t += ";EMAIL=" + (0, l.escape)(this.data.email)),
            this.data.x.length &&
              (t +=
                ";" +
                this.data.x
                  .map(([t, e]) => t.toUpperCase() + "=" + (0, l.escape)(e))
                  .join(";")),
            (t +=
              ":MAILTO:" +
              (0, l.escape)(this.data.mailto || this.data.email) +
              "\r\n")
          );
        }
      }
      e.default = h;
    },
    407027: function (t, e, a) {
      var i,
        r,
        n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ICalCalendarMethod = void 0);
      let s = a(411496),
        o = n(a(210646)),
        d = a(613919),
        l = a(613919);
      ((i = r = e.ICalCalendarMethod || (e.ICalCalendarMethod = {})).PUBLISH =
        "PUBLISH"),
        (i.REQUEST = "REQUEST"),
        (i.REPLY = "REPLY"),
        (i.ADD = "ADD"),
        (i.CANCEL = "CANCEL"),
        (i.REFRESH = "REFRESH"),
        (i.COUNTER = "COUNTER"),
        (i.DECLINECOUNTER = "DECLINECOUNTER");
      e.default = class t {
        constructor(t = {}) {
          (this.data = {
            prodId: "//sebbo.net//ical-generator//EN",
            method: null,
            name: null,
            description: null,
            timezone: null,
            source: null,
            url: null,
            scale: null,
            ttl: null,
            events: [],
            x: [],
          }),
            void 0 !== t.prodId && this.prodId(t.prodId),
            void 0 !== t.method && this.method(t.method),
            void 0 !== t.name && this.name(t.name),
            void 0 !== t.description && this.description(t.description),
            void 0 !== t.timezone && this.timezone(t.timezone),
            void 0 !== t.source && this.source(t.source),
            void 0 !== t.url && this.url(t.url),
            void 0 !== t.scale && this.scale(t.scale),
            void 0 !== t.ttl && this.ttl(t.ttl),
            void 0 !== t.events && this.events(t.events),
            void 0 !== t.x && this.x(t.x);
        }
        prodId(t) {
          if (!t) return this.data.prodId;
          if (
            "string" == typeof t &&
            /^\/\/(.+)\/\/(.+)\/\/([A-Z]{1,4})$/.test(t)
          )
            return (this.data.prodId = t), this;
          if ("string" == typeof t)
            throw Error(
              "`prodId` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalcalendar.html#prodid",
            );
          if ("object" != typeof t)
            throw Error(
              "`prodid` needs to be a valid formed string or an object!",
            );
          if (!t.company) throw Error("`prodid.company` is a mandatory item!");
          if (!t.product) throw Error("`prodid.product` is a mandatory item!");
          let e = (t.language || "EN").toUpperCase();
          return (
            (this.data.prodId = "//" + t.company + "//" + t.product + "//" + e),
            this
          );
        }
        method(t) {
          return void 0 === t
            ? this.data.method
            : t
              ? ((this.data.method = (0, s.checkEnum)(r, t)), this)
              : ((this.data.method = null), this);
        }
        name(t) {
          return void 0 === t
            ? this.data.name
            : ((this.data.name = t ? String(t) : null), this);
        }
        description(t) {
          return void 0 === t
            ? this.data.description
            : ((this.data.description = t ? String(t) : null), this);
        }
        timezone(t) {
          var e;
          return void 0 === t
            ? (null === (e = this.data.timezone) || void 0 === e
                ? void 0
                : e.name) || null
            : ("string" == typeof t
                ? (this.data.timezone = { name: t })
                : null === t
                  ? (this.data.timezone = null)
                  : (this.data.timezone = t),
              this);
        }
        source(t) {
          return void 0 === t
            ? this.data.source
            : ((this.data.source = t || null), this);
        }
        url(t) {
          return void 0 === t
            ? this.data.url
            : ((this.data.url = t || null), this);
        }
        scale(t) {
          return void 0 === t
            ? this.data.scale
            : (null === t
                ? (this.data.scale = null)
                : (this.data.scale = t.toUpperCase()),
              this);
        }
        ttl(t) {
          return void 0 === t
            ? this.data.ttl
            : ((0, s.isMomentDuration)(t)
                ? (this.data.ttl = t.asSeconds())
                : t && t > 0
                  ? (this.data.ttl = t)
                  : (this.data.ttl = null),
              this);
        }
        createEvent(t) {
          let e = t instanceof o.default ? t : new o.default(t, this);
          return this.data.events.push(e), e;
        }
        events(t) {
          return t
            ? (t.forEach((t) => this.createEvent(t)), this)
            : this.data.events;
        }
        clear() {
          return (this.data.events = []), this;
        }
        save(t, e) {
          return e
            ? ((0, d.writeFile)(t, this.toString(), e), this)
            : l.promises.writeFile(t, this.toString());
        }
        saveSync(t) {
          return (0, d.writeFileSync)(t, this.toString()), this;
        }
        serve(t, e = "calendar.ics") {
          return (
            t.writeHead(200, {
              "Content-Type": "text/calendar; charset=utf-8",
              "Content-Disposition": `attachment; filename="${e}"`,
            }),
            t.end(this.toString()),
            this
          );
        }
        toBlob() {
          return new Blob([this.toString()], { type: "text/calendar" });
        }
        toURL() {
          return URL.createObjectURL(this.toBlob());
        }
        x(t, e) {
          if (void 0 === t) return (0, s.addOrGetCustomAttributes)(this.data);
          if ("string" == typeof t && "string" == typeof e)
            (0, s.addOrGetCustomAttributes)(this.data, t, e);
          else if ("object" == typeof t)
            (0, s.addOrGetCustomAttributes)(this.data, t);
          else throw Error("Either key or value is not a string!");
          return this;
        }
        toJSON() {
          return Object.assign({}, this.data, {
            timezone: this.timezone(),
            events: this.data.events.map((t) => t.toJSON()),
            x: this.x(),
          });
        }
        length() {
          return this.data.events.length;
        }
        toString() {
          var t, e;
          let a = "";
          return (
            (a =
              "BEGIN:VCALENDAR\r\nVERSION:2.0\r\n" +
              ("PRODID:-" + this.data.prodId + "\r\n")),
            this.data.url && (a += "URL:" + this.data.url + "\r\n"),
            this.data.source &&
              (a += "SOURCE;VALUE=URI:" + this.data.source + "\r\n"),
            this.data.scale && (a += "CALSCALE:" + this.data.scale + "\r\n"),
            this.data.method && (a += "METHOD:" + this.data.method + "\r\n"),
            this.data.name &&
              (a +=
                "NAME:" +
                this.data.name +
                "\r\n" +
                ("X-WR-CALNAME:" + this.data.name + "\r\n")),
            this.data.description &&
              (a += "X-WR-CALDESC:" + this.data.description + "\r\n"),
            (null === (t = this.data.timezone) || void 0 === t
              ? void 0
              : t.generator) &&
              [
                ...new Set([
                  this.timezone(),
                  ...this.data.events.map((t) => t.timezone()),
                ]),
              ]
                .filter((t) => null !== t && !t.startsWith("/"))
                .forEach((t) => {
                  var e;
                  if (
                    !(null === (e = this.data.timezone) || void 0 === e
                      ? void 0
                      : e.generator)
                  )
                    return;
                  let i = this.data.timezone.generator(t);
                  if (!!i)
                    a +=
                      i.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n").trim() +
                      "\r\n";
                }),
            (null === (e = this.data.timezone) || void 0 === e
              ? void 0
              : e.name) &&
              (a +=
                "TIMEZONE-ID:" +
                this.data.timezone.name +
                "\r\n" +
                ("X-WR-TIMEZONE:" + this.data.timezone.name + "\r\n")),
            this.data.ttl &&
              (a +=
                "REFRESH-INTERVAL;VALUE=DURATION:" +
                (0, s.toDurationString)(this.data.ttl) +
                "\r\n" +
                ("X-PUBLISHED-TTL:" +
                  (0, s.toDurationString)(this.data.ttl) +
                  "\r\n")),
            this.data.events.forEach((t) => (a += t.toString())),
            (a += (0, s.generateCustomAttributes)(this.data) + "END:VCALENDAR"),
            (0, s.foldLines)(a)
          );
        }
      };
    },
    939001: function (t, e, a) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      let i = a(411496);
      e.default = class t {
        constructor(t) {
          (this.data = { name: null }), void 0 !== t.name && this.name(t.name);
        }
        name(t) {
          return void 0 === t
            ? this.data.name
            : ((this.data.name = t || null), this);
        }
        toJSON() {
          return Object.assign({}, this.data);
        }
        toString() {
          if (!this.data.name)
            throw Error("No value for `name` in ICalCategory given!");
          return (0, i.escape)(this.data.name);
        }
      };
    },
    210646: function (t, e, a) {
      var i,
        r,
        n,
        s,
        o,
        d,
        l =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ICalEventTransparency =
          e.ICalEventBusyStatus =
          e.ICalEventStatus =
            void 0);
      let h = l(a(659738)),
        u = a(411496),
        c = l(a(529647)),
        p = l(a(163248)),
        f = l(a(939001)),
        m = a(195070);
      ((i = s = e.ICalEventStatus || (e.ICalEventStatus = {})).CONFIRMED =
        "CONFIRMED"),
        (i.TENTATIVE = "TENTATIVE"),
        (i.CANCELLED = "CANCELLED"),
        ((r = o = e.ICalEventBusyStatus || (e.ICalEventBusyStatus = {})).FREE =
          "FREE"),
        (r.TENTATIVE = "TENTATIVE"),
        (r.BUSY = "BUSY"),
        (r.OOF = "OOF"),
        ((n = d =
          e.ICalEventTransparency ||
          (e.ICalEventTransparency = {})).TRANSPARENT = "TRANSPARENT"),
        (n.OPAQUE = "OPAQUE");
      e.default = class t {
        constructor(t, e) {
          if (
            ((this.data = {
              id: (0, h.default)(),
              sequence: 0,
              start: null,
              end: null,
              recurrenceId: null,
              timezone: null,
              stamp: new Date(),
              allDay: !1,
              floating: !1,
              repeating: null,
              summary: "",
              location: null,
              description: null,
              organizer: null,
              attendees: [],
              alarms: [],
              categories: [],
              status: null,
              busystatus: null,
              priority: null,
              url: null,
              transparency: null,
              created: null,
              lastModified: null,
              x: [],
            }),
            (this.calendar = e),
            !e)
          )
            throw Error("`calendar` option required!");
          t.id && this.id(t.id),
            void 0 !== t.sequence && this.sequence(t.sequence),
            t.start && this.start(t.start),
            void 0 !== t.end && this.end(t.end),
            void 0 !== t.recurrenceId && this.recurrenceId(t.recurrenceId),
            void 0 !== t.timezone && this.timezone(t.timezone),
            void 0 !== t.stamp && this.stamp(t.stamp),
            void 0 !== t.allDay && this.allDay(t.allDay),
            void 0 !== t.floating && this.floating(t.floating),
            void 0 !== t.repeating && this.repeating(t.repeating),
            void 0 !== t.summary && this.summary(t.summary),
            void 0 !== t.location && this.location(t.location),
            void 0 !== t.description && this.description(t.description),
            void 0 !== t.organizer && this.organizer(t.organizer),
            void 0 !== t.attendees && this.attendees(t.attendees),
            void 0 !== t.alarms && this.alarms(t.alarms),
            void 0 !== t.categories && this.categories(t.categories),
            void 0 !== t.status && this.status(t.status),
            void 0 !== t.busystatus && this.busystatus(t.busystatus),
            void 0 !== t.priority && this.priority(t.priority),
            void 0 !== t.url && this.url(t.url),
            void 0 !== t.transparency && this.transparency(t.transparency),
            void 0 !== t.created && this.created(t.created),
            void 0 !== t.lastModified && this.lastModified(t.lastModified),
            void 0 !== t.x && this.x(t.x);
        }
        id(t) {
          return void 0 === t
            ? this.data.id
            : ((this.data.id = String(t)), this);
        }
        uid(t) {
          return void 0 === t ? this.id() : this.id(t);
        }
        sequence(t) {
          if (void 0 === t) return this.data.sequence;
          if (isNaN(parseInt(String(t), 10)))
            throw Error("`sequence` must be a number!");
          return (this.data.sequence = t), this;
        }
        start(t) {
          if (void 0 === t) return this.data.start;
          if (
            ((this.data.start = (0, u.checkDate)(t, "start")),
            this.data.start &&
              this.data.end &&
              (0, u.toDate)(this.data.start).getTime() >
                (0, u.toDate)(this.data.end).getTime())
          ) {
            let t = this.data.start;
            (this.data.start = this.data.end), (this.data.end = t);
          }
          return this;
        }
        end(t) {
          if (void 0 === t) return this.data.end;
          if (null === t) return (this.data.end = null), this;
          if (
            ((this.data.end = (0, u.checkDate)(t, "end")),
            this.data.start &&
              this.data.end &&
              (0, u.toDate)(this.data.start).getTime() >
                (0, u.toDate)(this.data.end).getTime())
          ) {
            let t = this.data.start;
            (this.data.start = this.data.end), (this.data.end = t);
          }
          return this;
        }
        recurrenceId(t) {
          return void 0 === t
            ? this.data.recurrenceId
            : null === t
              ? ((this.data.recurrenceId = null), this)
              : ((this.data.recurrenceId = (0, u.checkDate)(t, "recurrenceId")),
                this);
        }
        timezone(t) {
          return void 0 === t && null !== this.data.timezone
            ? this.data.timezone
            : void 0 === t
              ? this.calendar.timezone()
              : ((this.data.timezone = t ? t.toString() : null),
                this.data.timezone && (this.data.floating = !1),
                this);
        }
        stamp(t) {
          return void 0 === t
            ? this.data.stamp
            : ((this.data.stamp = (0, u.checkDate)(t, "stamp")), this);
        }
        timestamp(t) {
          return void 0 === t ? this.stamp() : this.stamp(t);
        }
        allDay(t) {
          return void 0 === t
            ? this.data.allDay
            : ((this.data.allDay = !!t), this);
        }
        floating(t) {
          return void 0 === t
            ? this.data.floating
            : ((this.data.floating = !!t),
              this.data.floating && (this.data.timezone = null),
              this);
        }
        repeating(t) {
          if (void 0 === t) return this.data.repeating;
          if (!t) return (this.data.repeating = null), this;
          if ((0, u.isRRule)(t) || "string" == typeof t)
            return (this.data.repeating = t), this;
          if (
            ((this.data.repeating = {
              freq: (0, u.checkEnum)(m.ICalEventRepeatingFreq, t.freq),
            }),
            t.count)
          ) {
            if (!isFinite(t.count))
              throw Error("`repeating.count` must be a finite number!");
            this.data.repeating.count = t.count;
          }
          if (t.interval) {
            if (!isFinite(t.interval))
              throw Error("`repeating.interval` must be a finite number!");
            this.data.repeating.interval = t.interval;
          }
          if (
            (void 0 !== t.until &&
              (this.data.repeating.until = (0, u.checkDate)(
                t.until,
                "repeating.until",
              )),
            t.byDay)
          ) {
            let e = Array.isArray(t.byDay) ? t.byDay : [t.byDay];
            this.data.repeating.byDay = e.map((t) =>
              (0, u.checkEnum)(m.ICalWeekday, t),
            );
          }
          if (t.byMonth) {
            let e = Array.isArray(t.byMonth) ? t.byMonth : [t.byMonth];
            this.data.repeating.byMonth = e.map((t) => {
              if ("number" != typeof t || t < 1 || t > 12)
                throw Error(
                  "`repeating.byMonth` contains invalid value `" + t + "`!",
                );
              return t;
            });
          }
          if (t.byMonthDay) {
            let e = Array.isArray(t.byMonthDay) ? t.byMonthDay : [t.byMonthDay];
            this.data.repeating.byMonthDay = e.map((t) => {
              if ("number" != typeof t || t < 1 || t > 31)
                throw Error(
                  "`repeating.byMonthDay` contains invalid value `" + t + "`!",
                );
              return t;
            });
          }
          if (t.bySetPos) {
            if (!this.data.repeating.byDay)
              throw "`repeating.bySetPos` must be used along with `repeating.byDay`!";
            if (
              "number" != typeof t.bySetPos ||
              t.bySetPos < -1 ||
              t.bySetPos > 4
            )
              throw (
                "`repeating.bySetPos` contains invalid value `" +
                t.bySetPos +
                "`!"
              );
            this.data.repeating.byDay.splice(1),
              (this.data.repeating.bySetPos = t.bySetPos);
          }
          if (t.exclude) {
            let e = Array.isArray(t.exclude) ? t.exclude : [t.exclude];
            this.data.repeating.exclude = e.map((t, e) =>
              (0, u.checkDate)(t, `repeating.exclude[${e}]`),
            );
          }
          return (
            t.startOfWeek &&
              (this.data.repeating.startOfWeek = (0, u.checkEnum)(
                m.ICalWeekday,
                t.startOfWeek,
              )),
            this
          );
        }
        summary(t) {
          return void 0 === t
            ? this.data.summary
            : ((this.data.summary = t ? String(t) : ""), this);
        }
        location(t) {
          if (void 0 === t) return this.data.location;
          if ("string" == typeof t)
            return (this.data.location = { title: t }), this;
          if (
            (t && !t.title) ||
            ((null == t ? void 0 : t.geo) &&
              (!isFinite(t.geo.lat) || !isFinite(t.geo.lon)))
          )
            throw Error(
              "`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalevent.html#location",
            );
          return (this.data.location = t || null), this;
        }
        description(t) {
          return void 0 === t
            ? this.data.description
            : null === t
              ? ((this.data.description = null), this)
              : ("string" == typeof t
                  ? (this.data.description = { plain: t })
                  : (this.data.description = t),
                this);
        }
        organizer(t) {
          return void 0 === t
            ? this.data.organizer
            : null === t
              ? ((this.data.organizer = null), this)
              : ((this.data.organizer = (0, u.checkNameAndMail)(
                  "organizer",
                  t,
                )),
                this);
        }
        createAttendee(t = {}) {
          if (t instanceof c.default) return this.data.attendees.push(t), t;
          "string" == typeof t && (t = (0, u.checkNameAndMail)("data", t));
          let e = new c.default(t, this);
          return this.data.attendees.push(e), e;
        }
        attendees(t) {
          return t
            ? (t.forEach((t) => this.createAttendee(t)), this)
            : this.data.attendees;
        }
        createAlarm(t = {}) {
          let e = t instanceof p.default ? t : new p.default(t, this);
          return this.data.alarms.push(e), e;
        }
        alarms(t) {
          return t
            ? (t.forEach((t) => this.createAlarm(t)), this)
            : this.data.alarms;
        }
        createCategory(t = {}) {
          let e = t instanceof f.default ? t : new f.default(t);
          return this.data.categories.push(e), e;
        }
        categories(t) {
          return t
            ? (t.forEach((t) => this.createCategory(t)), this)
            : this.data.categories;
        }
        status(t) {
          return void 0 === t
            ? this.data.status
            : null === t
              ? ((this.data.status = null), this)
              : ((this.data.status = (0, u.checkEnum)(s, t)), this);
        }
        busystatus(t) {
          return void 0 === t
            ? this.data.busystatus
            : null === t
              ? ((this.data.busystatus = null), this)
              : ((this.data.busystatus = (0, u.checkEnum)(o, t)), this);
        }
        priority(t) {
          if (void 0 === t) return this.data.priority;
          if (null === t) return (this.data.priority = null), this;
          if (t < 0 || t > 9)
            throw Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");
          return (this.data.priority = Math.round(t)), this;
        }
        url(t) {
          return void 0 === t
            ? this.data.url
            : ((this.data.url = t ? String(t) : null), this);
        }
        transparency(t) {
          return void 0 === t
            ? this.data.transparency
            : t
              ? ((this.data.transparency = (0, u.checkEnum)(d, t)), this)
              : ((this.data.transparency = null), this);
        }
        created(t) {
          return void 0 === t
            ? this.data.created
            : null === t
              ? ((this.data.created = null), this)
              : ((this.data.created = (0, u.checkDate)(t, "created")), this);
        }
        lastModified(t) {
          return void 0 === t
            ? this.data.lastModified
            : null === t
              ? ((this.data.lastModified = null), this)
              : ((this.data.lastModified = (0, u.checkDate)(t, "lastModified")),
                this);
        }
        x(t, e) {
          return void 0 === t
            ? (0, u.addOrGetCustomAttributes)(this.data)
            : ("string" == typeof t &&
                "string" == typeof e &&
                (0, u.addOrGetCustomAttributes)(this.data, t, e),
              "object" == typeof t &&
                (0, u.addOrGetCustomAttributes)(this.data, t),
              this);
        }
        toJSON() {
          var t;
          let e = null;
          return (
            (0, u.isRRule)(this.data.repeating) ||
            "string" == typeof this.data.repeating
              ? (e = this.data.repeating.toString())
              : this.data.repeating &&
                (e = Object.assign({}, this.data.repeating, {
                  until: (0, u.toJSON)(this.data.repeating.until),
                  exclude:
                    null === (t = this.data.repeating.exclude) || void 0 === t
                      ? void 0
                      : t.map((t) => (0, u.toJSON)(t)),
                })),
            Object.assign({}, this.data, {
              start: (0, u.toJSON)(this.data.start) || null,
              end: (0, u.toJSON)(this.data.end) || null,
              recurrenceId: (0, u.toJSON)(this.data.recurrenceId) || null,
              stamp: (0, u.toJSON)(this.data.stamp) || null,
              created: (0, u.toJSON)(this.data.created) || null,
              lastModified: (0, u.toJSON)(this.data.lastModified) || null,
              repeating: e,
              x: this.x(),
            })
          );
        }
        toString() {
          var t, e, a, i, r;
          let n = "";
          if (!this.data.start)
            throw Error(
              "No value for `start` in ICalEvent #" + this.data.id + " given!",
            );
          return (
            (n +=
              "BEGIN:VEVENT\r\n" +
              ("UID:" + this.data.id + "\r\n") +
              ("SEQUENCE:" + this.data.sequence + "\r\n") +
              ("DTSTAMP:" +
                (0, u.formatDate)(this.calendar.timezone(), this.data.stamp) +
                "\r\n")),
            this.data.allDay
              ? ((n +=
                  "DTSTART;VALUE=DATE:" +
                  (0, u.formatDate)(
                    this.calendar.timezone(),
                    this.data.start,
                    !0,
                  ) +
                  "\r\n"),
                this.data.end &&
                  (n +=
                    "DTEND;VALUE=DATE:" +
                    (0, u.formatDate)(
                      this.calendar.timezone(),
                      this.data.end,
                      !0,
                    ) +
                    "\r\n"),
                (n +=
                  "X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r\nX-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r\n"))
              : ((n +=
                  (0, u.formatDateTZ)(
                    this.timezone(),
                    "DTSTART",
                    this.data.start,
                    this.data,
                  ) + "\r\n"),
                this.data.end &&
                  (n +=
                    (0, u.formatDateTZ)(
                      this.timezone(),
                      "DTEND",
                      this.data.end,
                      this.data,
                    ) + "\r\n")),
            (0, u.isRRule)(this.data.repeating) ||
            "string" == typeof this.data.repeating
              ? (n +=
                  this.data.repeating
                    .toString()
                    .replace(/\r\n/g, "\n")
                    .split("\n")
                    .filter((t) => t && !t.startsWith("DTSTART:"))
                    .join("\r\n") + "\r\n")
              : this.data.repeating &&
                ((n += "RRULE:FREQ=" + this.data.repeating.freq),
                this.data.repeating.count &&
                  (n += ";COUNT=" + this.data.repeating.count),
                this.data.repeating.interval &&
                  (n += ";INTERVAL=" + this.data.repeating.interval),
                this.data.repeating.until &&
                  (n +=
                    ";UNTIL=" +
                    (0, u.formatDate)(
                      this.calendar.timezone(),
                      this.data.repeating.until,
                    )),
                this.data.repeating.byDay &&
                  (n += ";BYDAY=" + this.data.repeating.byDay.join(",")),
                this.data.repeating.byMonth &&
                  (n += ";BYMONTH=" + this.data.repeating.byMonth.join(",")),
                this.data.repeating.byMonthDay &&
                  (n +=
                    ";BYMONTHDAY=" + this.data.repeating.byMonthDay.join(",")),
                this.data.repeating.bySetPos &&
                  (n += ";BYSETPOS=" + this.data.repeating.bySetPos),
                this.data.repeating.startOfWeek &&
                  (n += ";WKST=" + this.data.repeating.startOfWeek),
                (n += "\r\n"),
                this.data.repeating.exclude &&
                  (this.data.allDay
                    ? (n +=
                        "EXDATE;VALUE=DATE:" +
                        this.data.repeating.exclude
                          .map((t) =>
                            (0, u.formatDate)(this.calendar.timezone(), t, !0),
                          )
                          .join(",") +
                        "\r\n")
                    : ((n += "EXDATE"),
                      this.timezone()
                        ? (n +=
                            ";TZID=" +
                            this.timezone() +
                            ":" +
                            this.data.repeating.exclude
                              .map((t) =>
                                (0, u.formatDate)(this.timezone(), t, !1, !0),
                              )
                              .join(",") +
                            "\r\n")
                        : (n +=
                            ":" +
                            this.data.repeating.exclude
                              .map((t) => (0, u.formatDate)(this.timezone(), t))
                              .join(",") +
                            "\r\n")))),
            this.data.recurrenceId &&
              (n +=
                (0, u.formatDateTZ)(
                  this.timezone(),
                  "RECURRENCE-ID",
                  this.data.recurrenceId,
                  this.data,
                ) + "\r\n"),
            (n += "SUMMARY:" + (0, u.escape)(this.data.summary) + "\r\n"),
            this.data.transparency &&
              (n += "TRANSP:" + (0, u.escape)(this.data.transparency) + "\r\n"),
            (null === (t = this.data.location) || void 0 === t
              ? void 0
              : t.title) &&
              ((n +=
                "LOCATION:" +
                (0, u.escape)(
                  this.data.location.title +
                    (this.data.location.address
                      ? "\n" + this.data.location.address
                      : ""),
                ) +
                "\r\n"),
              this.data.location.radius &&
                this.data.location.geo &&
                (n +=
                  "X-APPLE-STRUCTURED-LOCATION;VALUE=URI;" +
                  (this.data.location.address
                    ? "X-ADDRESS=" +
                      (0, u.escape)(this.data.location.address) +
                      ";"
                    : "") +
                  "X-APPLE-RADIUS=" +
                  (0, u.escape)(this.data.location.radius) +
                  ";X-TITLE=" +
                  (0, u.escape)(this.data.location.title) +
                  ":geo:" +
                  (0, u.escape)(
                    null === (e = this.data.location.geo) || void 0 === e
                      ? void 0
                      : e.lat,
                  ) +
                  "," +
                  (0, u.escape)(
                    null === (a = this.data.location.geo) || void 0 === a
                      ? void 0
                      : a.lon,
                  ) +
                  "\r\n"),
              this.data.location.geo &&
                (n +=
                  "GEO:" +
                  (0, u.escape)(
                    null === (i = this.data.location.geo) || void 0 === i
                      ? void 0
                      : i.lat,
                  ) +
                  ";" +
                  (0, u.escape)(
                    null === (r = this.data.location.geo) || void 0 === r
                      ? void 0
                      : r.lon,
                  ) +
                  "\r\n")),
            this.data.description &&
              ((n +=
                "DESCRIPTION:" +
                (0, u.escape)(this.data.description.plain) +
                "\r\n"),
              this.data.description.html &&
                (n +=
                  "X-ALT-DESC;FMTTYPE=text/html:" +
                  (0, u.escape)(this.data.description.html) +
                  "\r\n")),
            this.data.organizer &&
              ((n +=
                'ORGANIZER;CN="' +
                (0, u.escape)(this.data.organizer.name) +
                '"'),
              this.data.organizer.email &&
                this.data.organizer.mailto &&
                (n += ";EMAIL=" + (0, u.escape)(this.data.organizer.email)),
              this.data.organizer.email &&
                (n +=
                  ":mailto:" +
                  (0, u.escape)(
                    this.data.organizer.mailto || this.data.organizer.email,
                  )),
              (n += "\r\n")),
            this.data.attendees.forEach(function (t) {
              n += t.toString();
            }),
            this.data.alarms.forEach(function (t) {
              n += t.toString();
            }),
            this.data.categories.length > 0 &&
              (n +=
                "CATEGORIES:" +
                this.data.categories
                  .map(function (t) {
                    return t.toString();
                  })
                  .join() +
                "\r\n"),
            this.data.url &&
              (n += "URL;VALUE=URI:" + (0, u.escape)(this.data.url) + "\r\n"),
            this.data.status &&
              (n += "STATUS:" + this.data.status.toUpperCase() + "\r\n"),
            this.data.busystatus &&
              (n +=
                "X-MICROSOFT-CDO-BUSYSTATUS:" +
                this.data.busystatus.toUpperCase() +
                "\r\n"),
            null !== this.data.priority &&
              (n += "PRIORITY:" + this.data.priority + "\r\n"),
            (n += (0, u.generateCustomAttributes)(this.data)),
            this.data.created &&
              (n +=
                "CREATED:" +
                (0, u.formatDate)(this.calendar.timezone(), this.data.created) +
                "\r\n"),
            this.data.lastModified &&
              (n +=
                "LAST-MODIFIED:" +
                (0, u.formatDate)(
                  this.calendar.timezone(),
                  this.data.lastModified,
                ) +
                "\r\n"),
            (n += "END:VEVENT\r\n")
          );
        }
      };
    },
    360963: function (t, e, a) {
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.foldLines =
          e.escape =
          e.formatDateTZ =
          e.formatDate =
          e.ICalWeekday =
          e.ICalEventRepeatingFreq =
          e.ICalEventTransparency =
          e.ICalEventBusyStatus =
          e.ICalEventStatus =
          e.ICalEvent =
          e.ICalCategory =
          e.ICalCalendarMethod =
          e.ICalCalendar =
          e.ICalAttendeeStatus =
          e.ICalAttendeeRole =
          e.ICalAttendeeType =
          e.ICalAttendee =
          e.ICalAlarmType =
          e.ICalAlarm =
            void 0);
      let r = i(a(407027));
      function n(t) {
        return new r.default(t);
      }
      e.default = n;
      var s = a(163248);
      Object.defineProperty(e, "ICalAlarm", {
        enumerable: !0,
        get: function () {
          return i(s).default;
        },
      }),
        Object.defineProperty(e, "ICalAlarmType", {
          enumerable: !0,
          get: function () {
            return s.ICalAlarmType;
          },
        });
      var o = a(529647);
      Object.defineProperty(e, "ICalAttendee", {
        enumerable: !0,
        get: function () {
          return i(o).default;
        },
      }),
        Object.defineProperty(e, "ICalAttendeeType", {
          enumerable: !0,
          get: function () {
            return o.ICalAttendeeType;
          },
        }),
        Object.defineProperty(e, "ICalAttendeeRole", {
          enumerable: !0,
          get: function () {
            return o.ICalAttendeeRole;
          },
        }),
        Object.defineProperty(e, "ICalAttendeeStatus", {
          enumerable: !0,
          get: function () {
            return o.ICalAttendeeStatus;
          },
        });
      var d = a(407027);
      Object.defineProperty(e, "ICalCalendar", {
        enumerable: !0,
        get: function () {
          return i(d).default;
        },
      }),
        Object.defineProperty(e, "ICalCalendarMethod", {
          enumerable: !0,
          get: function () {
            return d.ICalCalendarMethod;
          },
        });
      var l = a(939001);
      Object.defineProperty(e, "ICalCategory", {
        enumerable: !0,
        get: function () {
          return i(l).default;
        },
      });
      var h = a(210646);
      Object.defineProperty(e, "ICalEvent", {
        enumerable: !0,
        get: function () {
          return i(h).default;
        },
      }),
        Object.defineProperty(e, "ICalEventStatus", {
          enumerable: !0,
          get: function () {
            return h.ICalEventStatus;
          },
        }),
        Object.defineProperty(e, "ICalEventBusyStatus", {
          enumerable: !0,
          get: function () {
            return h.ICalEventBusyStatus;
          },
        }),
        Object.defineProperty(e, "ICalEventTransparency", {
          enumerable: !0,
          get: function () {
            return h.ICalEventTransparency;
          },
        });
      var u = a(195070);
      Object.defineProperty(e, "ICalEventRepeatingFreq", {
        enumerable: !0,
        get: function () {
          return u.ICalEventRepeatingFreq;
        },
      }),
        Object.defineProperty(e, "ICalWeekday", {
          enumerable: !0,
          get: function () {
            return u.ICalWeekday;
          },
        });
      var c = a(411496);
      Object.defineProperty(e, "formatDate", {
        enumerable: !0,
        get: function () {
          return c.formatDate;
        },
      }),
        Object.defineProperty(e, "formatDateTZ", {
          enumerable: !0,
          get: function () {
            return c.formatDateTZ;
          },
        }),
        Object.defineProperty(e, "escape", {
          enumerable: !0,
          get: function () {
            return c.escape;
          },
        }),
        Object.defineProperty(e, "foldLines", {
          enumerable: !0,
          get: function () {
            return c.foldLines;
          },
        });
      t.exports = Object.assign(n, t.exports);
    },
    411496: function (t, e, a) {
      var i = a(413135).Buffer;
      function r(t, e, a, i) {
        if (
          ((null == t ? void 0 : t.startsWith("/")) && (t = t.substr(1)),
          "string" == typeof e || e instanceof Date)
        ) {
          let r = new Date(e),
            n =
              r.getUTCFullYear() +
              String(r.getUTCMonth() + 1).padStart(2, "0") +
              r.getUTCDate().toString().padStart(2, "0");
          return (t &&
            (n =
              r.getFullYear() +
              String(r.getMonth() + 1).padStart(2, "0") +
              r.getDate().toString().padStart(2, "0")),
          a)
            ? n
            : t
              ? (n +=
                  "T" +
                  r.getHours().toString().padStart(2, "0") +
                  r.getMinutes().toString().padStart(2, "0") +
                  r.getSeconds().toString().padStart(2, "0"))
              : (n +=
                  "T" +
                  r.getUTCHours().toString().padStart(2, "0") +
                  r.getUTCMinutes().toString().padStart(2, "0") +
                  r.getUTCSeconds().toString().padStart(2, "0") +
                  (i ? "" : "Z"));
        }
        if (s(e)) {
          let r = t ? (o(e) && !e.tz() ? e.clone().tz(t) : e) : i ? e : e.utc();
          return (
            r.format("YYYYMMDD") +
            (a ? "" : "T" + r.format("HHmmss") + (i || t ? "" : "Z"))
          );
        }
        if (l(e)) {
          let r = t ? e.setZone(t) : i ? e : e.setZone("utc");
          return (
            r.toFormat("yyyyLLdd") +
            (a ? "" : "T" + r.toFormat("HHmmss") + (i || t ? "" : "Z"))
          );
        } else {
          let r = e;
          if (t) r = "function" == typeof e.tz ? e.tz(t) : e;
          else if (i);
          else if ("function" == typeof e.utc) r = e.utc();
          else
            throw Error(
              "Unable to convert dayjs object to UTC value: UTC plugin is not available!",
            );
          return (
            r.format("YYYYMMDD") +
            (a ? "" : "T" + r.format("HHmmss") + (i || t ? "" : "Z"))
          );
        }
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.toDurationString =
          e.toJSON =
          e.isRRule =
          e.isMomentDuration =
          e.isLuxonDate =
          e.isDayjs =
          e.isMomentTZ =
          e.isMoment =
          e.toDate =
          e.checkDate =
          e.checkEnum =
          e.checkNameAndMail =
          e.generateCustomAttributes =
          e.addOrGetCustomAttributes =
          e.foldLines =
          e.escape =
          e.formatDateTZ =
          e.formatDate =
            void 0),
        (e.formatDate = r);
      function n(t) {
        return String(t)
          .replace(/[\\;,"]/g, function (t) {
            return "\\" + t;
          })
          .replace(/(?:\r\n|\r|\n)/g, "\\n");
      }
      (e.formatDateTZ = function (t, e, a, i) {
        let n = "",
          s = (null == i ? void 0 : i.floating) || !1;
        return (
          (null == i ? void 0 : i.timezone) &&
            ((n = ";TZID=" + i.timezone), (s = !0)),
          e + n + ":" + r(t, a, !1, s)
        );
      }),
        (e.escape = n);
      e.foldLines = function (t) {
        return t
          .split("\r\n")
          .map(function (t) {
            let e = "",
              a = 0;
            for (let r = 0; r < t.length; r++) {
              let n = t.charAt(r);
              n >= "\ud800" && n <= "\udbff" && (n += t.charAt(++r));
              let s = i.from(n).length;
              (a += s) > 74 && ((e += "\r\n "), (a = s)), (e += n);
            }
            return e;
          })
          .join("\r\n");
      };
      e.addOrGetCustomAttributes = function (t, e, a) {
        if (Array.isArray(e))
          t.x = e.map((t) => {
            if (Array.isArray(t)) return t;
            if ("string" != typeof t.key || "string" != typeof t.value)
              throw Error("Either key or value is not a string!");
            if ("X-" !== t.key.substr(0, 2))
              throw Error("Key has to start with `X-`!");
            return [t.key, t.value];
          });
        else if ("object" == typeof e)
          t.x = Object.entries(e).map(([t, e]) => {
            if ("string" != typeof t || "string" != typeof e)
              throw Error("Either key or value is not a string!");
            if ("X-" !== t.substr(0, 2))
              throw Error("Key has to start with `X-`!");
            return [t, e];
          });
        else {
          if ("string" != typeof e || "string" != typeof a)
            return t.x.map((t) => ({ key: t[0], value: t[1] }));
          if ("X-" !== e.substr(0, 2))
            throw Error("Key has to start with `X-`!");
          t.x.push([e, a]);
        }
      };
      e.generateCustomAttributes = function (t) {
        let e = t.x.map(([t, e]) => t.toUpperCase() + ":" + n(e)).join("\r\n");
        return e.length ? e + "\r\n" : "";
      };
      e.checkNameAndMail = function (t, e) {
        let a = null;
        if ("string" == typeof e) {
          let t = e.match(/^(.+) ?<([^>]+)>$/);
          t
            ? (a = { name: t[1].trim(), email: t[2].trim() })
            : e.includes("@") && (a = { name: e.trim(), email: e.trim() });
        } else
          "object" == typeof e &&
            (a = { name: e.name, email: e.email, mailto: e.mailto });
        if (a || "string" != typeof e) {
          if (!a)
            throw Error(
              "`" +
                t +
                "` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/icalorganizer.html",
            );
        } else
          throw Error(
            "`" +
              t +
              "` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/icalorganizer.html",
          );
        if (!a.name) throw Error("`" + t + ".name` is empty!");
        return a;
      };
      e.checkEnum = function (t, e) {
        let a = Object.values(t),
          i = String(e).toUpperCase();
        if (!i || !a.includes(i))
          throw Error(`Input must be one of the following: ${a.join(", ")}`);
        return i;
      };
      e.checkDate = function (t, e) {
        if (
          (t instanceof Date && isNaN(t.getTime())) ||
          ("string" == typeof t && isNaN(new Date(t).getTime()))
        )
          throw Error(`\`${e}\` has to be a valid date!`);
        if (
          t instanceof Date ||
          "string" == typeof t ||
          (l(t) && !0 === t.isValid) ||
          ((s(t) || d(t)) && t.isValid())
        )
          return t;
        throw Error(`\`${e}\` has to be a valid date!`);
      };
      function s(t) {
        return null != t && null != t._isAMomentObject;
      }
      function o(t) {
        return s(t) && "function" == typeof t.tz;
      }
      function d(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          !(t instanceof Date) &&
          !s(t) &&
          !l(t)
        );
      }
      function l(t) {
        return (
          "object" == typeof t && null !== t && "function" == typeof t.toJSDate
        );
      }
      (e.toDate = function (t) {
        return "string" == typeof t || t instanceof Date
          ? new Date(t)
          : l(t)
            ? t.toJSDate()
            : t.toDate();
      }),
        (e.isMoment = s),
        (e.isMomentTZ = o),
        (e.isDayjs = d),
        (e.isLuxonDate = l);
      e.isMomentDuration = function (t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.asSeconds
        );
      };
      e.isRRule = function (t) {
        return (
          null !== t &&
          "object" == typeof t &&
          "function" == typeof t.between &&
          "function" == typeof t.toString
        );
      };
      e.toJSON = function (t) {
        return t && "string" != typeof t ? t.toJSON() : t;
      };
      e.toDurationString = function (t) {
        let e = "";
        return (t < 0 && ((e = "-"), (t *= -1)),
        (e += "P"),
        t >= 86400 && ((e += Math.floor(t / 86400) + "D"), (t %= 86400)),
        !t && e.length > 1)
          ? e
          : ((e += "T"),
            t >= 3600 && ((e += Math.floor(t / 3600) + "H"), (t %= 3600)),
            t >= 60 && ((e += Math.floor(t / 60) + "M"), (t %= 60)),
            t > 0 ? (e += t + "S") : e.length <= 2 && (e += "0S"),
            e);
      };
    },
    195070: function (t, e) {
      var a, i, r, n;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ICalWeekday = e.ICalEventRepeatingFreq = void 0),
        ((r =
          e.ICalEventRepeatingFreq ||
          (e.ICalEventRepeatingFreq = {})).SECONDLY = "SECONDLY"),
        (r.MINUTELY = "MINUTELY"),
        (r.HOURLY = "HOURLY"),
        (r.DAILY = "DAILY"),
        (r.WEEKLY = "WEEKLY"),
        (r.MONTHLY = "MONTHLY"),
        (r.YEARLY = "YEARLY"),
        ((n = e.ICalWeekday || (e.ICalWeekday = {})).SU = "SU"),
        (n.MO = "MO"),
        (n.TU = "TU"),
        (n.WE = "WE"),
        (n.TH = "TH"),
        (n.FR = "FR"),
        (n.SA = "SA");
    },
    659738: function (t, e, a) {
      !(function () {
        var e,
          i,
          r,
          n = 0,
          s = [];
        for (r = 0; r < 256; r++) s[r] = (r + 256).toString(16).substr(1);
        (d.BUFFER_SIZE = 4096),
          (d.bin = o),
          (d.clearBuffer = function () {
            (i = null), (n = 0);
          }),
          (d.test = function (t) {
            return (
              "string" == typeof t &&
              /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
                t,
              )
            );
          }),
          "undefined" != typeof crypto
            ? (e = crypto)
            : "undefined" != typeof window &&
              void 0 !== window.msCrypto &&
              (e = window.msCrypto);
        (e = e || a(636463)),
          (t.exports = d),
          (d.randomBytes = (function () {
            if (e) {
              if (e.randomBytes) return e.randomBytes;
              if (e.getRandomValues)
                return "function" != typeof Uint8Array.prototype.slice
                  ? function (t) {
                      var a = new Uint8Array(t);
                      return e.getRandomValues(a), Array.from(a);
                    }
                  : function (t) {
                      var a = new Uint8Array(t);
                      return e.getRandomValues(a), a;
                    };
            }
            return function (t) {
              var e,
                a = [];
              for (e = 0; e < t; e++) a.push(Math.floor(256 * Math.random()));
              return a;
            };
          })());
        function o() {
          var t,
            e =
              ((t = 16),
              (!i || n + 16 > d.BUFFER_SIZE) &&
                ((n = 0), (i = d.randomBytes(d.BUFFER_SIZE))),
              i.slice(n, (n += t)));
          return (e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128), e;
        }
        function d() {
          var t = o();
          return (
            s[t[0]] +
            s[t[1]] +
            s[t[2]] +
            s[t[3]] +
            "-" +
            s[t[4]] +
            s[t[5]] +
            "-" +
            s[t[6]] +
            s[t[7]] +
            "-" +
            s[t[8]] +
            s[t[9]] +
            "-" +
            s[t[10]] +
            s[t[11]] +
            s[t[12]] +
            s[t[13]] +
            s[t[14]] +
            s[t[15]]
          );
        }
      })();
    },
  },
]);
//# sourceMappingURL=0ec946a3f346c5250f13.js.map
