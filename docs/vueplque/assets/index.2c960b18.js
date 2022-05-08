var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, p as parse, b as ref, d as createBaseVNode, t as toDisplayString, w as withDirectives, v as vModelText, u as useStore, e as useRouter, f as vShow, g as computed, n as normalizeClass, h as withCtx, i as createTextVNode, F as Fragment, j as renderList, k as renderSlot, l as createCommentVNode, m as useWindowSize, q as withKeys, s as pushScopeId, x as popScopeId, y as createStore, z as useRoute, A as createBlock, S as Suspense, B as createRouter, C as createWebHashHistory, D as createApp } from "./vendor.59a6eaba.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$f = {
  name: "App"
};
const _hoisted_1$e = { id: "appDiv" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    createVNode(_component_router_view)
  ]);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
let config = {
  back4app_appId: "zRGylBSuB6QrHBDTWgEMafNsydz1cOqSZwSu5jlV",
  back4app_jsKey: "8SvsEjt8KWhHeEmx41BnEaZ791G4SivswF0kF3Mt"
};
parse.initialize(config.back4app_appId, config.back4app_jsKey);
parse.serverURL = "https://parseapi.back4app.com/";
async function login$1(store2, email, password, error, router2) {
  if (!email.value || !password.value) {
    alert("Please enter username and password");
    return;
  }
  store2.dispatch("login", {
    email: email.value,
    password: password.value
  }).then(function(result) {
    router2.push("/Main");
  }, function(error2) {
    alert(error2);
  }).catch(function(ex) {
    alert(ex);
  });
}
const _sfc_main$e = {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const store2 = useStore();
    const router2 = useRouter();
    const handleLogin = async () => {
      login$1(store2, email, password, error, router2);
    };
    const signup2 = () => {
      if (!email.value || !password.value) {
        alert("Please enter username and password");
        return;
      }
      store2.dispatch("signup", {
        email: email.value,
        password: password.value
      }).then(function(result) {
        alert("user created, please login");
      }, function(error2) {
        alert(error2);
      }).catch(function(ex) {
        alert(ex);
      });
    };
    return { handleLogin, email, password, error, signup: signup2 };
  }
};
const _hoisted_1$d = { class: "hero is-fullheight" };
const _hoisted_2$d = { class: "hero-body" };
const _hoisted_3$d = { class: "container has-text-centered" };
const _hoisted_4$d = { class: "column" };
const _hoisted_5$c = { class: "box" };
const _hoisted_6$a = { class: "subtitle" };
const _hoisted_7$8 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8$8 = { class: "field" };
const _hoisted_9$5 = { class: "control has-icons-left has-icons-right" };
const _hoisted_10$5 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-envelope" })
], -1);
const _hoisted_11$5 = { class: "field" };
const _hoisted_12$5 = { class: "control has-icons-left" };
const _hoisted_13$5 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-lock" })
], -1);
const _hoisted_14$5 = { class: "field" };
const _hoisted_15$5 = { class: "control" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1$d, [
    createBaseVNode("div", _hoisted_2$d, [
      createBaseVNode("div", _hoisted_3$d, [
        createBaseVNode("div", _hoisted_4$d, [
          createBaseVNode("div", _hoisted_5$c, [
            createBaseVNode("p", _hoisted_6$a, "Plaque Editor " + toDisplayString(_ctx.modeName), 1),
            _hoisted_7$8,
            createBaseVNode("div", _hoisted_8$8, [
              createBaseVNode("p", _hoisted_9$5, [
                withDirectives(createBaseVNode("input", {
                  class: "input",
                  type: "email",
                  placeholder: "Email",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.email = $event),
                  id: "email"
                }, null, 512), [
                  [vModelText, $setup.email]
                ]),
                _hoisted_10$5
              ])
            ]),
            createBaseVNode("div", _hoisted_11$5, [
              createBaseVNode("p", _hoisted_12$5, [
                withDirectives(createBaseVNode("input", {
                  class: "input",
                  type: "password",
                  placeholder: "Password",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.password = $event),
                  id: "password"
                }, null, 512), [
                  [vModelText, $setup.password]
                ]),
                _hoisted_13$5
              ])
            ]),
            createBaseVNode("div", _hoisted_14$5, [
              createBaseVNode("p", _hoisted_15$5, [
                createBaseVNode("button", {
                  class: "button is-success",
                  onClick: _cache[2] || (_cache[2] = (...args) => $setup.handleLogin && $setup.handleLogin(...args))
                }, " Plaque Login "),
                withDirectives(createBaseVNode("button", {
                  class: "button is-success",
                  onClick: _cache[3] || (_cache[3] = (...args) => $setup.signup && $setup.signup(...args))
                }, " Sign Up ", 512), [
                  [vShow, false]
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ]);
}
var Login = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const _sfc_main$d = {
  setup() {
    const isActive = ref(false);
    const error = ref(null);
    const showLoading2 = computed(() => store2.state.showLoading);
    const store2 = useStore();
    const router2 = useRouter();
    const handleLogout = async () => {
      logout$1(store2, error, router2);
    };
    const toggleMenu = () => {
      isActive.value = !isActive.value;
    };
    return { handleLogout, toggleMenu, showLoading: showLoading2, error, isActive };
  }
};
async function logout$1(store2, error, router2) {
  try {
    store2.dispatch("logout").then(function(res) {
      router2.push("/Login");
    }, function(err) {
    });
  } catch (err) {
    error.value = err.message;
  }
}
const _hoisted_1$c = { class: "navbar is-white has-background-light" };
const _hoisted_2$c = { class: "container" };
const _hoisted_3$c = { class: "navbar-brand" };
const _hoisted_4$c = /* @__PURE__ */ createBaseVNode("a", {
  class: "navbar-item brand-text",
  href: "../index.html"
}, " Plaque Admin ", -1);
const _hoisted_5$b = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6$9 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_7$7 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8$7 = [
  _hoisted_5$b,
  _hoisted_6$9,
  _hoisted_7$7
];
const _hoisted_9$4 = { class: "navbar-start" };
const _hoisted_10$4 = /* @__PURE__ */ createTextVNode("Edit");
const _hoisted_11$4 = /* @__PURE__ */ createTextVNode("Print");
const _hoisted_12$4 = /* @__PURE__ */ createTextVNode("Data");
const _hoisted_13$4 = { class: "loader-wrapper" };
const _hoisted_14$4 = /* @__PURE__ */ createBaseVNode("div", { class: "loader is-loading" }, null, -1);
const _hoisted_15$4 = [
  _hoisted_14$4
];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("section", null, [
    createBaseVNode("nav", _hoisted_1$c, [
      createBaseVNode("div", _hoisted_2$c, [
        createBaseVNode("div", _hoisted_3$c, [
          _hoisted_4$c,
          createBaseVNode("div", {
            class: normalizeClass(["navbar-burger burger", { "is-active": $setup.isActive }]),
            "data-target": "navMenu",
            onClick: _cache[0] || (_cache[0] = (...args) => $setup.toggleMenu && $setup.toggleMenu(...args))
          }, _hoisted_8$7, 2)
        ]),
        createBaseVNode("div", {
          id: "navMenu",
          class: normalizeClass(["navbar-menu", { "is-active": $setup.isActive }])
        }, [
          createBaseVNode("div", _hoisted_9$4, [
            createVNode(_component_router_link, {
              to: "/Main/",
              class: "navbar-item"
            }, {
              default: withCtx(() => [
                _hoisted_10$4
              ]),
              _: 1
            }),
            createVNode(_component_router_link, {
              to: "/Main/Print",
              class: "navbar-item"
            }, {
              default: withCtx(() => [
                _hoisted_11$4
              ]),
              _: 1
            }),
            createVNode(_component_router_link, {
              to: "/Main/Data",
              class: "navbar-item"
            }, {
              default: withCtx(() => [
                _hoisted_12$4
              ]),
              _: 1
            }),
            createBaseVNode("a", {
              class: "navbar-item",
              onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleLogout && $setup.handleLogout(...args))
            }, "Logout")
          ])
        ], 2)
      ])
    ]),
    createVNode(_component_router_view),
    withDirectives(createBaseVNode("div", _hoisted_13$4, _hoisted_15$4, 512), [
      [vShow, $setup.showLoading]
    ])
  ]);
}
var Main = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const appConfigMixin = {
  data() {
    return {
      modeName: "CN"
    };
  }
};
const printFormat = {
  rows: 4,
  cols: 6
};
const printStatus = { All: "A", No: "N", Individual: "I" };
const tabs = { live: "Live", dead: "Dead", ancestor: "Ancestor" };
const printTabs = { changshen: "changshen", yuanqin: "yuanqin", dead: "Dead", ancestor: "Ancestor" };
const fontSizes = [
  { max: 10, size: "font1" },
  { max: 15, size: "font2" },
  { max: 20, size: "font3" }
];
const columnsConfig = {
  Live: [
    { name: "LiveName", isRequired: true },
    { name: "IsPrint", isRequired: false },
    { name: "LastPrint", isRequired: false }
  ],
  Dead: [
    { name: "DeadName", isRequired: true },
    { name: "LiveName", isRequired: true },
    { name: "Relation", isRequired: true },
    { name: "IsPrint", isRequired: false },
    { name: "LastPrint", isRequired: false }
  ],
  Ancestor: [
    { name: "Surname", isRequired: true },
    { name: "LiveName", isRequired: true },
    { name: "IsPrint", isRequired: false },
    { name: "LastPrint", isRequired: false }
  ]
};
function isChinese(char) {
  return escape(char).indexOf("%u") >= 0;
}
function validateDetailInput(type, rec) {
  let config2 = columnsConfig[type];
  if (!config2) {
    return "Invalid type: " + type;
  }
  let error = "";
  config2.forEach((item) => {
    if (!rec[item.name] && item.isRequired) {
      error += "please enter " + item.name + ". ";
    }
  });
  return error;
}
function getMainNameCharListFunc(name) {
  let list = [];
  if (!name)
    return list;
  let currSeg = "";
  for (var i = 0; i < name.length; i++) {
    let char = name[i];
    if (isChinese(char)) {
      list.push(char);
    } else if (char === " ") {
      list.push(currSeg);
      currSeg = "";
    } else {
      currSeg = currSeg + char;
    }
  }
  if (currSeg != "") {
    list.push(currSeg);
    currSeg = "";
  }
  return list;
}
function getMainFontSizeFunc(name) {
  let list = getMainNameCharListFunc(name);
  var longest = list.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
  for (let i = 0; i < fontSizes.length; i++) {
    if (longest.length < fontSizes[i].max) {
      return fontSizes[i].size;
    }
  }
  return fontSizes[fontSizes.length - 1].size;
}
function getSideNameCharListFunc(name) {
  let hasEnglish = false;
  let list = [];
  if (!name)
    return list;
  for (var i = 0; i < name.length; i++) {
    let char = name[i];
    if (isChinese(char)) {
      list.push(char);
    } else if (char !== " ") {
      hasEnglish = true;
    }
  }
  if (hasEnglish)
    return [name];
  return list;
}
const _sfc_main$c = {
  props: ["list", "onSearch", "onSelected"],
  setup(props) {
    const showDropDown = computed(() => props.list && props.list.length > 0);
    const searchText = ref("");
    const list = computed(() => props.list);
    const onSearch = () => {
      props.onSearch(searchText.value);
    };
    const onSelected = (item) => {
      props.onSelected(item);
    };
    return {
      list,
      showDropDown,
      searchText,
      onSearch,
      onSelected
    };
  }
};
const _hoisted_1$b = { class: "dropdown is-active" };
const _hoisted_2$b = { class: "dropdown-trigger" };
const _hoisted_3$b = { class: "field" };
const _hoisted_4$b = { class: "control is-expanded has-icons-right" };
const _hoisted_5$a = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-right" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-search" })
], -1);
const _hoisted_6$8 = {
  class: "dropdown-menu",
  id: "dropdown-menu",
  role: "menu"
};
const _hoisted_7$6 = { class: "dropdown-content" };
const _hoisted_8$6 = ["onClick"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    createBaseVNode("div", _hoisted_2$b, [
      createBaseVNode("div", _hoisted_3$b, [
        createBaseVNode("p", _hoisted_4$b, [
          withDirectives(createBaseVNode("input", {
            class: "input",
            type: "search",
            placeholder: "Contact Name or Code",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchText = $event),
            onKeyup: _cache[1] || (_cache[1] = (...args) => $setup.onSearch && $setup.onSearch(...args))
          }, null, 544), [
            [vModelText, $setup.searchText]
          ]),
          _hoisted_5$a
        ])
      ])
    ]),
    withDirectives(createBaseVNode("div", _hoisted_6$8, [
      createBaseVNode("div", _hoisted_7$6, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.list, (item) => {
          return openBlock(), createElementBlock("a", {
            href: "#",
            class: "dropdown-item",
            key: item.id,
            onClick: ($event) => $setup.onSelected(item)
          }, toDisplayString(item.text), 9, _hoisted_8$6);
        }), 128))
      ])
    ], 512), [
      [vShow, $setup.showDropDown]
    ])
  ]);
}
var BulmaAutoComplete = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const _sfc_main$b = {
  components: { BulmaAutoComplete },
  props: ["type", "data", "numcols"],
  setup(props) {
    const store2 = useStore();
    const newInput = ref({});
    const curEditRecId = ref(-1);
    const isView = ref(true);
    const numberOfCols = ref(props.numcols);
    const error = ref("");
    const editError = ref("");
    const filtText = ref("");
    const curEditRec = ref({});
    const currentContact = computed(() => store2.getters.currentContact);
    const selectedIds = ref([]);
    const showDelete = ref(false);
    const showConvertToDead = ref(false);
    const newDead = ref({});
    const convertToDeadError = ref("");
    const showMoveToContact = ref(false);
    const searchResults = ref([]);
    const filtedData = computed(() => {
      if (props.data && Array.isArray(props.data)) {
        return props.data.filter((item) => {
          if (!item)
            return false;
          if (!filtText.value)
            return true;
          let isMatch = false;
          if (item.LiveName) {
            isMatch = isMatch || item.LiveName.indexOf(filtText.value) >= 0;
          }
          if (item.DeadName) {
            isMatch = isMatch || item.LiveName.indexOf(filtText.value) >= 0;
          }
          if (item.SurName) {
            isMatch = isMatch || item.LiveName.indexOf(filtText.value) >= 0;
          }
          return isMatch;
        });
      } else {
        return [];
      }
    });
    const addNew = () => {
      let inputValError = validateDetailInput(props.type, newInput.value);
      if (inputValError) {
        error.value = inputValError;
        return;
      } else {
        error.value = "";
      }
      store2.dispatch("addDetail", { type: props.type, contactId: currentContact.value.objectId, rec: newInput.value, isPrint: true }).then((res) => {
        newInput.value = {};
      }, (err) => {
      });
    };
    const printDetail = () => {
      selectedIds.value.reduce(async (prev, id) => {
        var rec = props.data.filter((x) => x.objectId == id);
        if (rec && rec.length > 0) {
          rec[0].IsPrint = !rec[0].IsPrint;
          await store2.dispatch("updateDetail", { type: props.type, rec: rec[0], notRefresh: true });
        }
      }, null);
      selectedIds.value = [];
      store2.dispatch("loadOneDetail", { type: props.type, contactId: currentContact.value.objectId });
    };
    const deleteDetail2 = () => {
      showDelete.value = true;
    };
    const realDeleteDetail = () => {
      selectedIds.value.reduce(async (prev, id) => {
        var rec = props.data.filter((x) => x.objectId == id);
        if (rec && rec.length > 0) {
          await store2.dispatch("deleteDetail", { type: props.type, rec: rec[0] });
        }
      }, null);
      selectedIds.value = [];
      showDelete.value = false;
    };
    const selectRec = (id, checked) => {
      var recIdx = props.data.findIndex((x) => x.objectId == id);
      if (recIdx >= 0) {
        if (checked) {
          if (selectedIds.value.indexOf(id) < 0)
            selectedIds.value.push(id);
        } else {
          let selidx = selectedIds.value.indexOf(id);
          if (selidx >= 0)
            selectedIds.value.splice(selidx, 1);
        }
      }
    };
    const isSelected = (id) => {
      let selidx = selectedIds.value.findIndex((x) => x == id);
      return selidx >= 0;
    };
    const editDetail = (id) => {
      isView.value = false;
      curEditRecId.value = id;
      let recs = props.data.filter((x) => x.objectId == id);
      if (recs && recs.length > 0)
        curEditRec.value = __spreadValues({}, recs[0]);
    };
    const saveDetail = async (id) => {
      var rec = props.data.filter((x) => x.objectId == id);
      if (props.type == tabs.live) {
        if (!curEditRec.value.LiveName) {
          editError.value = "Please enter name(s)";
          return;
        }
      } else if (props.type == tabs.dead) {
        if (!curEditRec.value.LiveName || !curEditRec.value.DeadName || !curEditRec.value.Relation) {
          editError.value = "Please enter name(s)";
          return;
        }
      } else if (props.type == tabs.dead) {
        if (!curEditRec.value.Surname || !curEditRec.value.LiveName) {
          editError.value = "Please enter name(s)";
          return;
        }
      }
      editError.value = "";
      if (rec && rec.length > 0) {
        rec[0] = __spreadValues({}, curEditRec.value);
        rec[0].IsPrint = true;
        await store2.dispatch("updateDetail", { type: props.type, rec: rec[0] });
        resetFlag();
      }
    };
    const convertToDead = (id) => {
      var recs = props.data.filter((x) => x.objectId == id);
      if (recs && recs.length > 0) {
        newDead.value = { DeadName: recs[0].LiveName, LiveName: "", Relation: "", LiveId: id, ContactId: recs[0].ContactId };
        showConvertToDead.value = true;
        return;
      }
      showConvertToDead.value = false;
    };
    const readConvertToDead = async () => {
      if (!newDead.value.DeadName || !newDead.value.LiveName || !newDead.value.Relation) {
        convertToDeadError.value = "Please enter names";
        return;
      }
      convertToDeadError.value = "";
      let newRec = { DeadName: newDead.value.DeadName, LiveName: newDead.value.LiveName, Relation: newDead.value.Relation, IsPrint: true };
      await store2.dispatch("addDetail", { type: tabs.dead, contactId: newDead.value.ContactId, rec: newRec });
      await store2.dispatch("deleteDetail", { type: tabs.live, rec: { objectId: newDead.value.LiveId } });
      newDead.value = {};
      showConvertToDead.value = false;
    };
    const resetFlag = () => {
      curEditRecId.value = -1;
      isView.value = true;
    };
    const moveToContact = () => {
      showMoveToContact.value = true;
    };
    const searchContacts = (searchText) => {
      searchResults.value = [];
      let contacts = store2.getters.filteredContacts(searchText);
      contacts.forEach((item) => {
        searchResults.value.push({ text: item.Name + "(" + item.Code + ")", id: item.objectId, contact: item });
      });
    };
    const addSelectedToNewContact = async (contactId) => {
      selectedIds.value.reduce(async (prev, id) => {
        var rec = props.data.filter((x) => x.objectId == id);
        if (rec && rec.length > 0) {
          await store2.dispatch("addDetail", { type: props.type, contactId, rec: rec[0] });
        }
      }, null);
    };
    const onSelected = async (item) => {
      let contact = item.contact;
      if (contact.objectId != currentContact.value.objectId) {
        await addSelectedToNewContact(contact.objectId);
        realDeleteDetail();
        showMoveToContact.value = false;
      }
    };
    return {
      newInput,
      error,
      numberOfCols,
      filtText,
      filtedData,
      curEditRecId,
      isView,
      curEditRec,
      selectedIds,
      editError,
      showDelete,
      showConvertToDead,
      newDead,
      convertToDeadError,
      showMoveToContact,
      searchResults,
      addNew,
      selectRec,
      printDetail,
      deleteDetail: deleteDetail2,
      editDetail,
      saveDetail,
      isSelected,
      realDeleteDetail,
      readConvertToDead,
      convertToDead,
      moveToContact,
      searchContacts,
      onSelected
    };
  }
};
const _hoisted_1$a = { class: "has-text-left has-text-danger" };
const _hoisted_2$a = { class: "table is-bordered" };
const _hoisted_3$a = ["colspan"];
const _hoisted_4$a = { class: "field has-addons" };
const _hoisted_5$9 = { class: "control has-icons-left" };
const _hoisted_6$7 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fab fa-searchengin" })
], -1);
const _hoisted_7$5 = /* @__PURE__ */ createBaseVNode("div", { class: "modal-background" }, null, -1);
const _hoisted_8$5 = { class: "modal-card" };
const _hoisted_9$3 = { class: "modal-card-head" };
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("p", { class: "modal-card-title" }, "Delete Contact", -1);
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("section", { class: "modal-card-body" }, " Do you want to delete these records? ", -1);
const _hoisted_12$3 = { class: "modal-card-foot" };
const _hoisted_13$3 = /* @__PURE__ */ createBaseVNode("div", { class: "modal-background" }, null, -1);
const _hoisted_14$3 = { class: "modal-card" };
const _hoisted_15$3 = { class: "modal-card-head" };
const _hoisted_16$3 = /* @__PURE__ */ createBaseVNode("p", { class: "modal-card-title" }, "Convert to the dead", -1);
const _hoisted_17$3 = { class: "modal-card-body" };
const _hoisted_18$3 = { class: "field" };
const _hoisted_19$3 = { class: "control has-icons-left has-icons-right" };
const _hoisted_20$3 = { class: "field" };
const _hoisted_21$3 = { class: "control has-icons-left has-icons-right" };
const _hoisted_22$3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-user-alt" })
], -1);
const _hoisted_23$3 = { class: "field" };
const _hoisted_24$3 = { class: "control has-icons-left" };
const _hoisted_25$3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-user-alt" })
], -1);
const _hoisted_26$2 = { class: "has-text-danger" };
const _hoisted_27$2 = { class: "modal-card-foot" };
const _hoisted_28$2 = /* @__PURE__ */ createBaseVNode("div", { class: "modal-background" }, null, -1);
const _hoisted_29$2 = { class: "modal-card has-dropdown" };
const _hoisted_30$2 = { class: "modal-card-head" };
const _hoisted_31$2 = /* @__PURE__ */ createBaseVNode("p", { class: "modal-card-title" }, "Move records to another Contact", -1);
const _hoisted_32$2 = { class: "modal-card-body has-dropdown" };
const _hoisted_33$2 = { class: "field" };
const _hoisted_34$2 = { class: "has-text-danger" };
const _hoisted_35$2 = { class: "modal-card-foot" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BulmaAutoComplete = resolveComponent("BulmaAutoComplete");
  return openBlock(), createElementBlock("section", null, [
    renderSlot(_ctx.$slots, "add", {
      rec: $setup.newInput,
      addNew: $setup.addNew,
      printDetail: $setup.printDetail,
      deleteDetail: $setup.deleteDetail,
      moveToContact: $setup.moveToContact
    }),
    createBaseVNode("span", _hoisted_1$a, toDisplayString($setup.error), 1),
    createBaseVNode("table", _hoisted_2$a, [
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", { colspan: $setup.numberOfCols }, [
            createBaseVNode("div", _hoisted_4$a, [
              createBaseVNode("p", _hoisted_5$9, [
                withDirectives(createBaseVNode("input", {
                  class: "input",
                  type: "text",
                  placeholder: "Search Names",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.filtText = $event)
                }, null, 512), [
                  [vModelText, $setup.filtText]
                ]),
                _hoisted_6$7
              ])
            ])
          ], 8, _hoisted_3$a)
        ]),
        renderSlot(_ctx.$slots, "cols"),
        renderSlot(_ctx.$slots, "display", {
          rec: $setup.filtedData,
          curEditRecId: $setup.curEditRecId,
          selectRec: $setup.selectRec,
          isSelected: $setup.isSelected,
          curEditRec: $setup.curEditRec,
          saveDetail: $setup.saveDetail,
          editDetail: $setup.editDetail,
          editError: $setup.editError,
          convertToDead: $setup.convertToDead,
          isView: $setup.isView
        })
      ])
    ]),
    $setup.showDelete ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["modal", { "is-active": $setup.showDelete }])
    }, [
      _hoisted_7$5,
      createBaseVNode("div", _hoisted_8$5, [
        createBaseVNode("header", _hoisted_9$3, [
          _hoisted_10$3,
          createBaseVNode("button", {
            class: "delete",
            "aria-label": "close",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.showDelete = false)
          })
        ]),
        _hoisted_11$3,
        createBaseVNode("footer", _hoisted_12$3, [
          createBaseVNode("button", {
            class: "button is-success",
            onClick: _cache[2] || (_cache[2] = (...args) => $setup.realDeleteDetail && $setup.realDeleteDetail(...args))
          }, "Delete"),
          createBaseVNode("button", {
            class: "button",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.showDelete = false)
          }, "Cancel")
        ])
      ])
    ], 2)) : createCommentVNode("", true),
    createBaseVNode("div", {
      class: normalizeClass(["modal", { "is-active": $setup.showConvertToDead }])
    }, [
      _hoisted_13$3,
      createBaseVNode("div", _hoisted_14$3, [
        createBaseVNode("header", _hoisted_15$3, [
          _hoisted_16$3,
          createBaseVNode("button", {
            class: "delete",
            "aria-label": "close",
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.showConvertToDead = false)
          })
        ]),
        createBaseVNode("section", _hoisted_17$3, [
          createBaseVNode("div", _hoisted_18$3, [
            createBaseVNode("p", _hoisted_19$3, toDisplayString($setup.newDead.DeadName), 1)
          ]),
          createBaseVNode("div", _hoisted_20$3, [
            createBaseVNode("p", _hoisted_21$3, [
              withDirectives(createBaseVNode("input", {
                class: "input",
                type: "text",
                placeholder: "LiveName",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.newDead.LiveName = $event)
              }, null, 512), [
                [vModelText, $setup.newDead.LiveName]
              ]),
              _hoisted_22$3
            ])
          ]),
          createBaseVNode("div", _hoisted_23$3, [
            createBaseVNode("p", _hoisted_24$3, [
              withDirectives(createBaseVNode("input", {
                class: "input",
                type: "text",
                placeholder: "Relation",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.newDead.Relation = $event)
              }, null, 512), [
                [vModelText, $setup.newDead.Relation]
              ]),
              _hoisted_25$3
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("span", _hoisted_26$2, toDisplayString($setup.convertToDeadError), 1)
            ])
          ])
        ]),
        createBaseVNode("footer", _hoisted_27$2, [
          createBaseVNode("button", {
            class: "button is-success",
            onClick: _cache[7] || (_cache[7] = (...args) => $setup.readConvertToDead && $setup.readConvertToDead(...args))
          }, "Convert"),
          createBaseVNode("button", {
            class: "button",
            onClick: _cache[8] || (_cache[8] = ($event) => $setup.showConvertToDead = false)
          }, "Cancel")
        ])
      ])
    ], 2),
    createBaseVNode("div", {
      class: normalizeClass(["modal has-dropdown", { "is-active": $setup.showMoveToContact }])
    }, [
      _hoisted_28$2,
      createBaseVNode("div", _hoisted_29$2, [
        createBaseVNode("header", _hoisted_30$2, [
          _hoisted_31$2,
          createBaseVNode("button", {
            class: "delete",
            "aria-label": "close",
            onClick: _cache[9] || (_cache[9] = ($event) => $setup.showMoveToContact = false)
          })
        ]),
        createBaseVNode("section", _hoisted_32$2, [
          createVNode(_component_BulmaAutoComplete, {
            onSearch: $setup.searchContacts,
            list: $setup.searchResults,
            onSelected: $setup.onSelected
          }, null, 8, ["onSearch", "list", "onSelected"]),
          createBaseVNode("div", _hoisted_33$2, [
            createBaseVNode("p", null, [
              createBaseVNode("span", _hoisted_34$2, toDisplayString($setup.convertToDeadError), 1)
            ])
          ])
        ]),
        createBaseVNode("footer", _hoisted_35$2, [
          createBaseVNode("button", {
            class: "button is-success",
            onClick: _cache[10] || (_cache[10] = (...args) => _ctx.realMoveToContact && _ctx.realMoveToContact(...args))
          }, "Move"),
          createBaseVNode("button", {
            class: "button",
            onClick: _cache[11] || (_cache[11] = ($event) => $setup.showMoveToContact = false)
          }, "Cancel")
        ])
      ])
    ], 2)
  ]);
}
var DetailEdit = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _sfc_main$a = {
  components: { DetailEdit },
  setup() {
    const store2 = useStore();
    const router2 = useRouter();
    const newName = ref("");
    const newCode = ref("");
    const disableEditContact = ref(true);
    const activeTab = ref(tabs.live);
    const currentLive = computed(() => store2.state.currentLive);
    const currentDead = computed(() => store2.state.currentDead);
    const currentAncestor = computed(() => store2.state.currentAncestor);
    const currentContact = computed(() => store2.getters.currentContact);
    const { width, height } = useWindowSize();
    const isMobile = computed(() => {
      return width.value <= 768;
    });
    const selectTab = (tabName) => {
      activeTab.value = tabName;
    };
    const editContact = () => {
      disableEditContact.value = false;
    };
    const cancelEditContact = () => {
      disableEditContact.value = true;
    };
    const saveContactChange = () => {
      let name = newName.value;
      if (!name)
        name = currentContact.value.Name;
      let code = newCode.value;
      if (!code)
        code = currentContact.value.Code;
    };
    const backToMain = () => {
      router2.push("/Main");
    };
    return {
      tabs,
      activeTab,
      currentContact,
      disableEditContact,
      currentLive,
      currentDead,
      currentAncestor,
      newName,
      newCode,
      isMobile,
      selectTab,
      editContact,
      cancelEditContact,
      saveContactChange,
      backToMain
    };
  }
};
const _hoisted_1$9 = { class: "card" };
const _hoisted_2$9 = { class: "card-header" };
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-chevron-left" })
], -1);
const _hoisted_4$9 = [
  _hoisted_3$9
];
const _hoisted_5$8 = /* @__PURE__ */ createBaseVNode("div", { class: "flexfullrow" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2 has-text-left" }, "\xA0 Please select a contact from left")
], -1);
const _hoisted_6$6 = { class: "card-header flexwrap" };
const _hoisted_7$4 = { class: "card-header" };
const _hoisted_8$4 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-chevron-left" })
], -1);
const _hoisted_9$2 = [
  _hoisted_8$4
];
const _hoisted_10$2 = { class: "title is-2 has-text-left" };
const _hoisted_11$2 = { class: "card-content box" };
const _hoisted_12$2 = { class: "content" };
const _hoisted_13$2 = { class: "tabs is-boxed" };
const _hoisted_14$2 = { class: "tab-no-left" };
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("a", null, "Live", -1);
const _hoisted_16$2 = [
  _hoisted_15$2
];
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("a", null, "Dead", -1);
const _hoisted_18$2 = [
  _hoisted_17$2
];
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("a", null, "Ancestor", -1);
const _hoisted_20$2 = [
  _hoisted_19$2
];
const _hoisted_21$2 = { class: "container" };
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("th", null, "Live", -1);
const _hoisted_23$2 = /* @__PURE__ */ createBaseVNode("th", null, "Date", -1);
const _hoisted_24$2 = /* @__PURE__ */ createBaseVNode("th", null, null, -1);
const _hoisted_25$2 = { class: "columns" };
const _hoisted_26$1 = { class: "column is-5" };
const _hoisted_27$1 = { class: "field has-addons" };
const _hoisted_28$1 = { class: "control" };
const _hoisted_29$1 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_30$1 = { class: "control" };
const _hoisted_31$1 = ["onClick"];
const _hoisted_32$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-large" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-plus-circle fa-lg" })
], -1);
const _hoisted_33$1 = [
  _hoisted_32$1
];
const _hoisted_34$1 = { class: "control" };
const _hoisted_35$1 = ["onClick"];
const _hoisted_36$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" })
], -1);
const _hoisted_37$1 = [
  _hoisted_36$1
];
const _hoisted_38$1 = { class: "control" };
const _hoisted_39$1 = ["onClick"];
const _hoisted_40$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "far fa-minus-square" })
], -1);
const _hoisted_41$1 = [
  _hoisted_40$1
];
const _hoisted_42$1 = { class: "control" };
const _hoisted_43$1 = ["onClick"];
const _hoisted_44$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-people-carry" })
], -1);
const _hoisted_45$1 = [
  _hoisted_44$1
];
const _hoisted_46$1 = { class: "icon" };
const _hoisted_47$1 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" }, null, -1);
const _hoisted_48$1 = [
  _hoisted_47$1
];
const _hoisted_49$1 = { class: "control" };
const _hoisted_50$1 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_51$1 = { class: "has-text-left has-text-danger" };
const _hoisted_52$1 = ["onClick"];
const _hoisted_53$1 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-share" })
], -1);
const _hoisted_54 = [
  _hoisted_53$1
];
const _hoisted_55 = ["onClick"];
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-pen-fancy" })
], -1);
const _hoisted_57 = [
  _hoisted_56
];
const _hoisted_58 = ["onClick"];
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "far fa-save" })
], -1);
const _hoisted_60 = [
  _hoisted_59
];
const _hoisted_61 = { class: "b-checkbox checkbox is-large" };
const _hoisted_62 = ["onChange", "checked"];
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("span", { class: "check" }, null, -1);
const _hoisted_64 = { class: "container" };
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("th", null, "Dead", -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("th", null, "Live", -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("th", null, "Rel.", -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("th", null, "Date", -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("th", null, null, -1);
const _hoisted_70 = { class: "columns" };
const _hoisted_71 = { class: "column is-8" };
const _hoisted_72 = { class: "field has-addons" };
const _hoisted_73 = { class: "control" };
const _hoisted_74 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_75 = { class: "has-text-left has-text-danger" };
const _hoisted_76 = { class: "control" };
const _hoisted_77 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_78 = { class: "control" };
const _hoisted_79 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_80 = { class: "control" };
const _hoisted_81 = ["onClick"];
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-large" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-plus-circle fa-lg" })
], -1);
const _hoisted_83 = [
  _hoisted_82
];
const _hoisted_84 = { class: "control" };
const _hoisted_85 = ["onClick"];
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" })
], -1);
const _hoisted_87 = [
  _hoisted_86
];
const _hoisted_88 = { class: "control" };
const _hoisted_89 = ["onClick"];
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "far fa-minus-square" })
], -1);
const _hoisted_91 = [
  _hoisted_90
];
const _hoisted_92 = { class: "control" };
const _hoisted_93 = ["onClick"];
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-people-carry" })
], -1);
const _hoisted_95 = [
  _hoisted_94
];
const _hoisted_96 = { class: "icon" };
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" }, null, -1);
const _hoisted_98 = [
  _hoisted_97
];
const _hoisted_99 = { class: "control" };
const _hoisted_100 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_101 = { class: "has-text-left has-text-danger" };
const _hoisted_102 = { class: "control" };
const _hoisted_103 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_104 = { class: "control" };
const _hoisted_105 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_106 = ["onClick"];
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-pen-fancy" })
], -1);
const _hoisted_108 = [
  _hoisted_107
];
const _hoisted_109 = ["onClick"];
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "far fa-save" })
], -1);
const _hoisted_111 = [
  _hoisted_110
];
const _hoisted_112 = { class: "b-checkbox checkbox is-large" };
const _hoisted_113 = ["onChange", "checked"];
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("span", { class: "check" }, null, -1);
const _hoisted_115 = { class: "container" };
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("th", null, "Surname", -1);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode("th", null, "LIVE", -1);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode("th", null, "Date", -1);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("th", null, null, -1);
const _hoisted_120 = { class: "columns" };
const _hoisted_121 = { class: "column is-8" };
const _hoisted_122 = { class: "field has-addons" };
const _hoisted_123 = { class: "control" };
const _hoisted_124 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_125 = { class: "control" };
const _hoisted_126 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_127 = { class: "control" };
const _hoisted_128 = ["onClick"];
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("span", { class: "icon is-large" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-plus-circle fa-lg" })
], -1);
const _hoisted_130 = [
  _hoisted_129
];
const _hoisted_131 = ["onClick"];
const _hoisted_132 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" })
], -1);
const _hoisted_133 = [
  _hoisted_132
];
const _hoisted_134 = ["onClick"];
const _hoisted_135 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "far fa-minus-square" })
], -1);
const _hoisted_136 = [
  _hoisted_135
];
const _hoisted_137 = { class: "control" };
const _hoisted_138 = ["onClick"];
const _hoisted_139 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-people-carry" })
], -1);
const _hoisted_140 = [
  _hoisted_139
];
const _hoisted_141 = { class: "icon" };
const _hoisted_142 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" }, null, -1);
const _hoisted_143 = [
  _hoisted_142
];
const _hoisted_144 = { class: "control" };
const _hoisted_145 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_146 = { class: "control" };
const _hoisted_147 = ["onUpdate:modelValue", "onKeyup"];
const _hoisted_148 = ["onClick"];
const _hoisted_149 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-pen-fancy" })
], -1);
const _hoisted_150 = [
  _hoisted_149
];
const _hoisted_151 = ["onClick"];
const _hoisted_152 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "far fa-save" })
], -1);
const _hoisted_153 = [
  _hoisted_152
];
const _hoisted_154 = { class: "b-checkbox checkbox is-large" };
const _hoisted_155 = ["onChange", "checked"];
const _hoisted_156 = /* @__PURE__ */ createBaseVNode("span", { class: "check" }, null, -1);
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DetailEdit = resolveComponent("DetailEdit");
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    withDirectives(createBaseVNode("header", _hoisted_2$9, [
      withDirectives(createBaseVNode("button", {
        class: "button is-link",
        "aria-label": "save",
        onClick: _cache[0] || (_cache[0] = (...args) => $setup.backToMain && $setup.backToMain(...args))
      }, _hoisted_4$9, 512), [
        [vShow, $setup.isMobile]
      ]),
      _hoisted_5$8
    ], 512), [
      [vShow, $setup.currentContact && Object.keys($setup.currentContact).length === 0]
    ]),
    withDirectives(createBaseVNode("header", _hoisted_6$6, [
      createBaseVNode("div", _hoisted_7$4, [
        withDirectives(createBaseVNode("button", {
          class: "button is-link",
          "aria-label": "save",
          onClick: _cache[1] || (_cache[1] = (...args) => $setup.backToMain && $setup.backToMain(...args))
        }, _hoisted_9$2, 512), [
          [vShow, $setup.isMobile]
        ]),
        createBaseVNode("h2", _hoisted_10$2, "\xA0" + toDisplayString($setup.currentContact.Name) + " - " + toDisplayString($setup.currentContact.Code), 1)
      ])
    ], 512), [
      [vShow, $setup.currentContact && Object.keys($setup.currentContact).length !== 0]
    ]),
    withDirectives(createBaseVNode("div", _hoisted_11$2, [
      createBaseVNode("div", _hoisted_12$2, [
        createBaseVNode("div", _hoisted_13$2, [
          createBaseVNode("ul", _hoisted_14$2, [
            createBaseVNode("li", {
              class: normalizeClass({ "is-active": $setup.activeTab == $setup.tabs.live }),
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.selectTab($setup.tabs.live))
            }, _hoisted_16$2, 2),
            createBaseVNode("li", {
              class: normalizeClass({ "is-active": $setup.activeTab == $setup.tabs.dead }),
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.selectTab($setup.tabs.dead))
            }, _hoisted_18$2, 2),
            createBaseVNode("li", {
              class: normalizeClass({ "is-active": $setup.activeTab == $setup.tabs.ancestor }),
              onClick: _cache[4] || (_cache[4] = ($event) => $setup.selectTab($setup.tabs.ancestor))
            }, _hoisted_20$2, 2)
          ])
        ]),
        withDirectives(createBaseVNode("div", _hoisted_21$2, [
          createVNode(_component_DetailEdit, {
            type: $setup.tabs.live,
            data: $setup.currentLive,
            numcols: 4
          }, {
            cols: withCtx(() => [
              _hoisted_22$2,
              _hoisted_23$2,
              _hoisted_24$2
            ]),
            add: withCtx((slotProps) => [
              createBaseVNode("div", _hoisted_25$2, [
                createBaseVNode("div", _hoisted_26$1, [
                  createBaseVNode("div", _hoisted_27$1, [
                    createBaseVNode("p", _hoisted_28$1, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        placeholder: "Live Name",
                        "onUpdate:modelValue": ($event) => slotProps.rec.LiveName = $event,
                        onKeyup: withKeys(slotProps.addNew, ["enter"])
                      }, null, 40, _hoisted_29$1), [
                        [vModelText, slotProps.rec.LiveName]
                      ])
                    ]),
                    createBaseVNode("p", _hoisted_30$1, [
                      createBaseVNode("a", {
                        class: "button is-success",
                        onClick: slotProps.addNew,
                        title: "add"
                      }, _hoisted_33$1, 8, _hoisted_31$1)
                    ]),
                    createBaseVNode("p", _hoisted_34$1, [
                      createBaseVNode("button", {
                        class: "button is-warning mx-2",
                        onClick: ($event) => slotProps.printDetail(),
                        title: "print/unprint"
                      }, _hoisted_37$1, 8, _hoisted_35$1)
                    ]),
                    createBaseVNode("p", _hoisted_38$1, [
                      createBaseVNode("button", {
                        class: "button is-danger mx-2",
                        onClick: ($event) => slotProps.deleteDetail(),
                        title: "delete"
                      }, _hoisted_41$1, 8, _hoisted_39$1)
                    ]),
                    createBaseVNode("p", _hoisted_42$1, [
                      createBaseVNode("button", {
                        class: "button is-info mx-2",
                        onClick: ($event) => slotProps.moveToContact(),
                        title: "move to another contact"
                      }, _hoisted_45$1, 8, _hoisted_43$1)
                    ])
                  ])
                ])
              ])
            ]),
            display: withCtx((slotProps) => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(slotProps.rec, (d) => {
                return openBlock(), createElementBlock("tr", {
                  key: d.objectId,
                  slot: "display"
                }, [
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("span", _hoisted_46$1, _hoisted_48$1, 512), [
                      [vShow, d.IsPrint]
                    ]),
                    withDirectives(createBaseVNode("span", null, toDisplayString(d.LiveName), 513), [
                      [vShow, slotProps.isView || slotProps.curEditRecId != d.objectId]
                    ]),
                    withDirectives(createBaseVNode("p", _hoisted_49$1, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        placeholder: "Live Name",
                        "onUpdate:modelValue": ($event) => slotProps.curEditRec.LiveName = $event,
                        onKeyup: withKeys(($event) => slotProps.saveDetail(d.objectId), ["enter"])
                      }, null, 40, _hoisted_50$1), [
                        [vModelText, slotProps.curEditRec.LiveName]
                      ]),
                      createBaseVNode("span", _hoisted_51$1, toDisplayString(slotProps.editError), 1)
                    ], 512), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ])
                  ]),
                  createBaseVNode("td", null, toDisplayString(d.LastPrint), 1),
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("button", {
                      class: "button is-danger mx-2",
                      onClick: ($event) => slotProps.convertToDead(d.objectId),
                      title: "convert to dead"
                    }, _hoisted_54, 8, _hoisted_52$1), [
                      [vShow, slotProps.isView]
                    ]),
                    withDirectives(createBaseVNode("button", {
                      class: "button is-primary mx-2",
                      onClick: ($event) => slotProps.editDetail(d.objectId),
                      title: "edit"
                    }, _hoisted_57, 8, _hoisted_55), [
                      [vShow, slotProps.isView]
                    ]),
                    withDirectives(createBaseVNode("button", {
                      class: "button is-primary mx-2",
                      onClick: ($event) => slotProps.saveDetail(d.objectId),
                      title: "save"
                    }, _hoisted_60, 8, _hoisted_58), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ]),
                    createBaseVNode("label", _hoisted_61, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        onChange: ($event) => slotProps.selectRec(d.objectId, $event.target.checked),
                        checked: slotProps.isSelected(d.objectId)
                      }, null, 40, _hoisted_62),
                      _hoisted_63
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          }, 8, ["type", "data"])
        ], 512), [
          [vShow, $setup.activeTab == $setup.tabs.live]
        ]),
        withDirectives(createBaseVNode("div", _hoisted_64, [
          createVNode(_component_DetailEdit, {
            type: $setup.tabs.dead,
            data: $setup.currentDead,
            numcols: 6
          }, {
            cols: withCtx(() => [
              _hoisted_65,
              _hoisted_66,
              _hoisted_67,
              _hoisted_68,
              _hoisted_69
            ]),
            add: withCtx((slotProps) => [
              createBaseVNode("div", _hoisted_70, [
                createBaseVNode("div", _hoisted_71, [
                  createBaseVNode("div", _hoisted_72, [
                    createBaseVNode("p", _hoisted_73, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": ($event) => slotProps.rec.DeadName = $event,
                        onKeyup: withKeys(slotProps.addNew, ["enter"]),
                        placeholder: "Dead Name"
                      }, null, 40, _hoisted_74), [
                        [vModelText, slotProps.rec.DeadName]
                      ]),
                      createBaseVNode("span", _hoisted_75, toDisplayString(slotProps.editError), 1)
                    ]),
                    createBaseVNode("p", _hoisted_76, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": ($event) => slotProps.rec.LiveName = $event,
                        onKeyup: withKeys(slotProps.addNew, ["enter"]),
                        placeholder: "Live Name"
                      }, null, 40, _hoisted_77), [
                        [vModelText, slotProps.rec.LiveName]
                      ])
                    ]),
                    createBaseVNode("p", _hoisted_78, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": ($event) => slotProps.rec.Relation = $event,
                        onKeyup: withKeys(slotProps.addNew, ["enter"]),
                        placeholder: "Relationship"
                      }, null, 40, _hoisted_79), [
                        [vModelText, slotProps.rec.Relation]
                      ])
                    ]),
                    createBaseVNode("p", _hoisted_80, [
                      createBaseVNode("a", {
                        class: "button is-success",
                        onClick: slotProps.addNew
                      }, _hoisted_83, 8, _hoisted_81)
                    ]),
                    createBaseVNode("p", _hoisted_84, [
                      createBaseVNode("button", {
                        class: "button is-warning mx-2",
                        onClick: ($event) => slotProps.printDetail(),
                        title: "print/unprint"
                      }, _hoisted_87, 8, _hoisted_85)
                    ]),
                    createBaseVNode("p", _hoisted_88, [
                      createBaseVNode("button", {
                        class: "button is-danger mx-2",
                        onClick: ($event) => slotProps.deleteDetail(),
                        title: "delete"
                      }, _hoisted_91, 8, _hoisted_89)
                    ]),
                    createBaseVNode("p", _hoisted_92, [
                      createBaseVNode("button", {
                        class: "button is-info mx-2",
                        onClick: ($event) => slotProps.moveToContact(),
                        title: "move"
                      }, _hoisted_95, 8, _hoisted_93)
                    ])
                  ])
                ])
              ])
            ]),
            display: withCtx((slotProps) => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(slotProps.rec, (d, idx) => {
                return openBlock(), createElementBlock("tr", {
                  key: d.objectId,
                  slot: "display"
                }, [
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("span", _hoisted_96, _hoisted_98, 512), [
                      [vShow, d.IsPrint]
                    ]),
                    withDirectives(createBaseVNode("span", null, toDisplayString(d.DeadName), 513), [
                      [vShow, slotProps.isView || slotProps.curEditRecId != d.objectId]
                    ]),
                    withDirectives(createBaseVNode("p", _hoisted_99, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        placeholder: "Live Name",
                        "onUpdate:modelValue": ($event) => slotProps.curEditRec.DeadName = $event,
                        onKeyup: withKeys(($event) => slotProps.saveDetail(d.objectId), ["enter"])
                      }, null, 40, _hoisted_100), [
                        [vModelText, slotProps.curEditRec.DeadName]
                      ]),
                      createBaseVNode("span", _hoisted_101, toDisplayString(slotProps.editError), 1)
                    ], 512), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ])
                  ]),
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("span", null, toDisplayString(d.LiveName), 513), [
                      [vShow, slotProps.isView || slotProps.curEditRecId != d.objectId]
                    ]),
                    withDirectives(createBaseVNode("p", _hoisted_102, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        placeholder: "Live Name",
                        "onUpdate:modelValue": ($event) => slotProps.curEditRec.LiveName = $event,
                        onKeyup: withKeys(($event) => slotProps.saveDetail(d.objectId), ["enter"])
                      }, null, 40, _hoisted_103), [
                        [vModelText, slotProps.curEditRec.LiveName]
                      ])
                    ], 512), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ])
                  ]),
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("span", null, toDisplayString(d.Relation), 513), [
                      [vShow, slotProps.isView || slotProps.curEditRecId != d.objectId]
                    ]),
                    withDirectives(createBaseVNode("p", _hoisted_104, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        placeholder: "Live Name",
                        "onUpdate:modelValue": ($event) => slotProps.curEditRec.Relation = $event,
                        onKeyup: withKeys(($event) => slotProps.saveDetail(d.objectId), ["enter"])
                      }, null, 40, _hoisted_105), [
                        [vModelText, slotProps.curEditRec.Relation]
                      ])
                    ], 512), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ])
                  ]),
                  createBaseVNode("td", null, toDisplayString(d.LastPrint), 1),
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("button", {
                      class: "button is-primary mx-2",
                      onClick: ($event) => slotProps.editDetail(d.objectId)
                    }, _hoisted_108, 8, _hoisted_106), [
                      [vShow, slotProps.isView]
                    ]),
                    withDirectives(createBaseVNode("button", {
                      class: "button is-primary mx-2",
                      onClick: ($event) => slotProps.saveDetail(d.objectId)
                    }, _hoisted_111, 8, _hoisted_109), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ]),
                    createBaseVNode("label", _hoisted_112, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        onChange: ($event) => slotProps.selectRec(d.objectId, $event.target.checked),
                        checked: slotProps.isSelected(d.objectId)
                      }, null, 40, _hoisted_113),
                      _hoisted_114
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          }, 8, ["type", "data"])
        ], 512), [
          [vShow, $setup.activeTab == $setup.tabs.dead]
        ]),
        withDirectives(createBaseVNode("div", _hoisted_115, [
          createVNode(_component_DetailEdit, {
            type: $setup.tabs.ancestor,
            data: $setup.currentAncestor,
            numcols: 5
          }, {
            cols: withCtx(() => [
              _hoisted_116,
              _hoisted_117,
              _hoisted_118,
              _hoisted_119
            ]),
            add: withCtx((slotProps) => [
              createBaseVNode("div", _hoisted_120, [
                createBaseVNode("div", _hoisted_121, [
                  createBaseVNode("div", _hoisted_122, [
                    createBaseVNode("p", _hoisted_123, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": ($event) => slotProps.rec.Surname = $event,
                        onKeyup: withKeys(slotProps.addNew, ["enter"]),
                        placeholder: "Surname"
                      }, null, 40, _hoisted_124), [
                        [vModelText, slotProps.rec.Surname]
                      ])
                    ]),
                    createBaseVNode("p", _hoisted_125, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": ($event) => slotProps.rec.LiveName = $event,
                        onKeyup: withKeys(slotProps.addNew, ["enter"]),
                        placeholder: "Live Name"
                      }, null, 40, _hoisted_126), [
                        [vModelText, slotProps.rec.LiveName]
                      ])
                    ]),
                    createBaseVNode("p", _hoisted_127, [
                      createBaseVNode("a", {
                        class: "button is-success",
                        onClick: slotProps.addNew
                      }, _hoisted_130, 8, _hoisted_128)
                    ]),
                    createBaseVNode("button", {
                      class: "button is-warning mx-2",
                      onClick: ($event) => slotProps.printDetail(),
                      title: "print/unprint"
                    }, _hoisted_133, 8, _hoisted_131),
                    createBaseVNode("button", {
                      class: "button is-danger mx-2",
                      onClick: ($event) => slotProps.deleteDetail(),
                      title: "delete"
                    }, _hoisted_136, 8, _hoisted_134),
                    createBaseVNode("p", _hoisted_137, [
                      createBaseVNode("button", {
                        class: "button is-info mx-2",
                        onClick: ($event) => slotProps.moveToContact(),
                        title: "move"
                      }, _hoisted_140, 8, _hoisted_138)
                    ])
                  ])
                ])
              ])
            ]),
            display: withCtx((slotProps) => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(slotProps.rec, (d, idx) => {
                return openBlock(), createElementBlock("tr", {
                  key: d.objectId,
                  slot: "display"
                }, [
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("span", _hoisted_141, _hoisted_143, 512), [
                      [vShow, d.IsPrint]
                    ]),
                    withDirectives(createBaseVNode("span", null, toDisplayString(d.Surname), 513), [
                      [vShow, slotProps.isView || slotProps.curEditRecId != d.objectId]
                    ]),
                    withDirectives(createBaseVNode("p", _hoisted_144, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        placeholder: "Live Name",
                        "onUpdate:modelValue": ($event) => slotProps.curEditRec.Surname = $event,
                        onKeyup: withKeys(($event) => slotProps.saveDetail(d.objectId), ["enter"])
                      }, null, 40, _hoisted_145), [
                        [vModelText, slotProps.curEditRec.Surname]
                      ])
                    ], 512), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ])
                  ]),
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("span", null, toDisplayString(d.LiveName), 513), [
                      [vShow, slotProps.isView || slotProps.curEditRecId != d.objectId]
                    ]),
                    withDirectives(createBaseVNode("p", _hoisted_146, [
                      withDirectives(createBaseVNode("input", {
                        class: "input",
                        type: "text",
                        placeholder: "Live Name",
                        "onUpdate:modelValue": ($event) => slotProps.curEditRec.LiveName = $event,
                        onKeyup: withKeys(($event) => slotProps.saveDetail(d.objectId), ["enter"])
                      }, null, 40, _hoisted_147), [
                        [vModelText, slotProps.curEditRec.LiveName]
                      ])
                    ], 512), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ])
                  ]),
                  createBaseVNode("td", null, toDisplayString(d.LastPrint), 1),
                  createBaseVNode("td", null, [
                    withDirectives(createBaseVNode("button", {
                      class: "button is-primary mx-2",
                      onClick: ($event) => slotProps.editDetail(d.objectId)
                    }, _hoisted_150, 8, _hoisted_148), [
                      [vShow, slotProps.isView]
                    ]),
                    withDirectives(createBaseVNode("button", {
                      class: "button is-primary mx-2",
                      onClick: ($event) => slotProps.saveDetail(d.objectId)
                    }, _hoisted_153, 8, _hoisted_151), [
                      [vShow, !slotProps.isView && slotProps.curEditRecId == d.objectId]
                    ]),
                    createBaseVNode("label", _hoisted_154, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        onChange: ($event) => slotProps.selectRec(d.objectId, $event.target.checked),
                        checked: slotProps.isSelected(d.objectId)
                      }, null, 40, _hoisted_155),
                      _hoisted_156
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          }, 8, ["type", "data"])
        ], 512), [
          [vShow, $setup.activeTab == $setup.tabs.ancestor]
        ])
      ])
    ], 512), [
      [vShow, $setup.currentContact && Object.keys($setup.currentContact).length !== 0]
    ])
  ]);
}
var Editor = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
var Contacts_vue_vue_type_style_index_0_scoped_true_lang = "";
const addOrEditTitleText = {
  add: "New Contact",
  edit: "Edit Contact"
};
const _sfc_main$9 = {
  setup() {
    const store2 = useStore();
    const router2 = useRouter();
    const { width, height } = useWindowSize();
    const modalError = ref("");
    const searchTxt = ref("");
    const addOrEditTitle = ref("");
    const newContact = ref({ name: "", code: "" });
    const showAddNewContact = ref(false);
    const showDeleteContact = ref(false);
    const contacts = computed(() => store2.getters.filteredContacts(searchTxt.value));
    const isMobile = computed(() => {
      return width.value <= 768;
    });
    const selectedContact = computed(() => store2.getters.currentContact);
    const selectedIdx = computed(() => store2.state.selectedIdx);
    const refreshContacts = () => {
      store2.dispatch("getAllContacts");
    };
    const addContact = async () => {
      if (!newContact.value.Name || !newContact.value.Code) {
        modalError.value = "Please enter name and code";
        return;
      }
      if (addOrEditTitle.value == addOrEditTitleText.add) {
        store2.dispatch("addNewContact", { contact: newContact.value }).then((res) => {
          showAddNewContact.value = false;
          newContact.value = { Name: "", Code: "" };
        }, (err) => {
          modalError.value = err;
        }).catch((err) => {
          modalError.value = err;
        });
      } else if (addOrEditTitle.value == addOrEditTitleText.edit) {
        store2.dispatch("updateContact", { name: newContact.value.Name, code: newContact.value.Code, id: newContact.value.objectId }).then((res) => {
          showAddNewContact.value = false;
          newContact.value = { Name: "", Code: "" };
        }, (err) => {
          modalError.value = err;
        }).catch((err) => {
          modalError.value = err;
        });
      }
    };
    const closeAddContact = () => {
      showAddNewContact.value = false;
      newContact.value = { name: "", code: "" };
    };
    const selectContact2 = (idx, source) => {
      store2.dispatch("selectContact", { idx }).then((res) => {
        let isEditbtnClick = isMobile.value && source == "editbtnclick";
        let contact = contacts.value[idx];
        if (!isMobile.value || isEditbtnClick) {
          store2.dispatch("loadContact", { contactid: contact.objectId }).then((res2) => {
            if (isEditbtnClick) {
              router2.push("/Main/Editor");
            }
          });
        }
      });
    };
    const deleteContact2 = () => {
      store2.dispatch("deleteContact", { id: selectedContact.value.objectId }).then((res) => {
        showDeleteContact.value = false;
      }, (err) => {
      }).catch((err) => {
      });
    };
    const setNextPrint = (c) => {
      let nextState = printStatus.All;
      switch (c.PrintState) {
        case printStatus.All:
          nextState = printStatus.No;
          break;
        case printStatus.No:
          nextState = printStatus.Individual;
          break;
        case printStatus.Individual:
          nextState = printStatus.All;
      }
      store2.dispatch("setPrintState", { id: c.objectId, printState: nextState });
    };
    const showAddNew = () => {
      showAddNewContact.value = true;
      newContact.value = {};
      addOrEditTitle.value = addOrEditTitleText.add;
    };
    const showEditContact = (c) => {
      addOrEditTitle.value = addOrEditTitleText.edit;
      showAddNewContact.value = true;
      newContact.value = __spreadValues({}, c);
    };
    const generateDetailList = (c) => {
    };
    refreshContacts();
    return {
      searchTxt,
      showAddNewContact,
      showDeleteContact,
      newContact,
      modalError,
      contacts,
      isMobile,
      width,
      selectedContact,
      selectedIdx,
      addOrEditTitle,
      refreshContacts,
      addContact,
      closeAddContact,
      selectContact: selectContact2,
      deleteContact: deleteContact2,
      setNextPrint,
      showAddNew,
      showEditContact,
      generateDetailList
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-47a30912"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { class: "container" };
const _hoisted_2$8 = { class: "field has-addons" };
const _hoisted_3$8 = { class: "control has-icons-left has-icons-right" };
const _hoisted_4$8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-user" })
], -1));
const _hoisted_5$7 = { class: "container has-text-left" };
const _hoisted_6$5 = { class: "control" };
const _hoisted_7$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-user-plus fa-lg" })
], -1));
const _hoisted_8$3 = [
  _hoisted_7$3
];
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-sync" })
], -1));
const _hoisted_10$1 = [
  _hoisted_9$1
];
const _hoisted_11$1 = { class: "container" };
const _hoisted_12$1 = {
  width: "100%",
  border: "1",
  class: "table is-striped narrower"
};
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", { class: "iconcol" }),
  /* @__PURE__ */ createBaseVNode("th", { class: "namecol" }, "Name"),
  /* @__PURE__ */ createBaseVNode("th", { class: "codecol" }, "Code"),
  /* @__PURE__ */ createBaseVNode("th", { class: "lastPrintcol" }, "LastPrint")
], -1));
const _hoisted_14$1 = ["onClick"];
const _hoisted_15$1 = {
  key: 0,
  class: "icon",
  title: "print all"
};
const _hoisted_16$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-file-powerpoint" }, null, -1));
const _hoisted_17$1 = [
  _hoisted_16$1
];
const _hoisted_18$1 = {
  key: 1,
  class: "icon",
  title: "print some"
};
const _hoisted_19$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-user-friends" }, null, -1));
const _hoisted_20$1 = [
  _hoisted_19$1
];
const _hoisted_21$1 = { key: 0 };
const _hoisted_22$1 = {
  class: "has-background-white has-text-right",
  colspan: "4"
};
const _hoisted_23$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "far fa-list-alt" })
], -1));
const _hoisted_24$1 = ["onClick"];
const _hoisted_25$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-th-list" })
], -1));
const _hoisted_26 = [
  _hoisted_25$1
];
const _hoisted_27 = ["onClick"];
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-edit" })
], -1));
const _hoisted_29 = [
  _hoisted_28
];
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-trash-alt" })
], -1));
const _hoisted_31 = [
  _hoisted_30
];
const _hoisted_32 = ["onClick"];
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" })
], -1));
const _hoisted_34 = [
  _hoisted_33
];
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "modal-background" }, null, -1));
const _hoisted_36 = { class: "modal-card" };
const _hoisted_37 = { class: "modal-card-head" };
const _hoisted_38 = { class: "modal-card-title" };
const _hoisted_39 = { class: "modal-card-body" };
const _hoisted_40 = { class: "field" };
const _hoisted_41 = { class: "control has-icons-left has-icons-right" };
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-user-alt" })
], -1));
const _hoisted_43 = { class: "field" };
const _hoisted_44 = { class: "control has-icons-left" };
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "icon is-small is-left" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-laptop-code" })
], -1));
const _hoisted_46 = { class: "has-text-danger" };
const _hoisted_47 = { class: "modal-card-foot" };
const _hoisted_48 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "modal-background" }, null, -1));
const _hoisted_49 = { class: "modal-card" };
const _hoisted_50 = { class: "modal-card-head" };
const _hoisted_51 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "modal-card-title" }, "Delete Contact", -1));
const _hoisted_52 = { class: "modal-card-body" };
const _hoisted_53 = { class: "modal-card-foot" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("section", null, [
    createBaseVNode("div", _hoisted_1$8, [
      createBaseVNode("div", _hoisted_2$8, [
        createBaseVNode("div", _hoisted_3$8, [
          withDirectives(createBaseVNode("input", {
            class: "input is-success",
            type: "text",
            placeholder: "Contact Name or Code",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchTxt = $event),
            onKeyup: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.doSearch && _ctx.doSearch(...args), ["enter"]))
          }, null, 544), [
            [vModelText, $setup.searchTxt]
          ]),
          _hoisted_4$8
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_5$7, [
      createBaseVNode("div", _hoisted_6$5, [
        createBaseVNode("button", {
          class: "button is-primary mx-2",
          onClick: _cache[2] || (_cache[2] = (...args) => $setup.showAddNew && $setup.showAddNew(...args)),
          title: "add new contact"
        }, _hoisted_8$3),
        createBaseVNode("button", {
          class: "button is-warning",
          onClick: _cache[3] || (_cache[3] = (...args) => $setup.refreshContacts && $setup.refreshContacts(...args)),
          title: "refresh contact list"
        }, _hoisted_10$1)
      ])
    ]),
    createBaseVNode("div", _hoisted_11$1, [
      createBaseVNode("table", _hoisted_12$1, [
        _hoisted_13$1,
        createBaseVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.contacts, (c, idx) => {
            return openBlock(), createElementBlock(Fragment, {
              key: c.objectId
            }, [
              createBaseVNode("tr", {
                onClick: ($event) => $setup.selectContact(idx, "rowclick"),
                class: normalizeClass({ "is-selected": idx == $setup.selectedIdx })
              }, [
                createBaseVNode("td", null, [
                  c.PrintState == "A" ? (openBlock(), createElementBlock("span", _hoisted_15$1, _hoisted_17$1)) : createCommentVNode("", true),
                  c.PrintState == "I" ? (openBlock(), createElementBlock("span", _hoisted_18$1, _hoisted_20$1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("td", null, toDisplayString(c.Name), 1),
                createBaseVNode("td", null, toDisplayString(c.Code), 1),
                createBaseVNode("td", null, toDisplayString(c.LastPrint), 1)
              ], 10, _hoisted_14$1),
              idx == $setup.selectedIdx ? (openBlock(), createElementBlock("tr", _hoisted_21$1, [
                createBaseVNode("td", _hoisted_22$1, [
                  createBaseVNode("div", null, [
                    createVNode(_component_router_link, {
                      class: "button is-warning mx-2",
                      to: { path: "/detailList", query: { c: c.objectId, d: c.DetailId } },
                      target: "_blank",
                      title: "print contact detail form"
                    }, {
                      default: withCtx(() => [
                        _hoisted_23$1
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    withDirectives(createBaseVNode("button", {
                      class: "button is-primary mx-2",
                      onClick: ($event) => $setup.selectContact(idx, "editbtnclick"),
                      title: "edit name/code"
                    }, _hoisted_26, 8, _hoisted_24$1), [
                      [vShow, $setup.isMobile]
                    ]),
                    createBaseVNode("button", {
                      class: "button is-danger mx-2",
                      onClick: ($event) => $setup.showEditContact(c),
                      title: "edit plaque"
                    }, _hoisted_29, 8, _hoisted_27),
                    createBaseVNode("button", {
                      class: "button is-danger mx-2",
                      onClick: _cache[4] || (_cache[4] = ($event) => $setup.showDeleteContact = true),
                      title: "delete contact"
                    }, _hoisted_31),
                    createBaseVNode("button", {
                      class: "button is-warning mx-2",
                      onClick: ($event) => $setup.setNextPrint(c),
                      title: "print/unprint plaque"
                    }, _hoisted_34, 8, _hoisted_32)
                  ])
                ])
              ])) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ])
      ])
    ]),
    createBaseVNode("div", {
      class: normalizeClass(["modal", { "is-active": $setup.showAddNewContact }])
    }, [
      _hoisted_35,
      createBaseVNode("div", _hoisted_36, [
        createBaseVNode("header", _hoisted_37, [
          createBaseVNode("p", _hoisted_38, toDisplayString($setup.addOrEditTitle), 1),
          createBaseVNode("button", {
            class: "delete",
            "aria-label": "close",
            onClick: _cache[5] || (_cache[5] = (...args) => $setup.closeAddContact && $setup.closeAddContact(...args))
          })
        ]),
        createBaseVNode("section", _hoisted_39, [
          createBaseVNode("div", _hoisted_40, [
            createBaseVNode("p", _hoisted_41, [
              withDirectives(createBaseVNode("input", {
                class: "input",
                type: "text",
                placeholder: "Name",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.newContact.Name = $event)
              }, null, 512), [
                [vModelText, $setup.newContact.Name]
              ]),
              _hoisted_42
            ])
          ]),
          createBaseVNode("div", _hoisted_43, [
            createBaseVNode("p", _hoisted_44, [
              withDirectives(createBaseVNode("input", {
                class: "input",
                type: "text",
                placeholder: "Code",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.newContact.Code = $event)
              }, null, 512), [
                [vModelText, $setup.newContact.Code]
              ]),
              _hoisted_45
            ]),
            createBaseVNode("p", null, [
              createBaseVNode("span", _hoisted_46, toDisplayString($setup.modalError), 1)
            ])
          ])
        ]),
        createBaseVNode("footer", _hoisted_47, [
          createBaseVNode("button", {
            class: "button is-success",
            onClick: _cache[8] || (_cache[8] = (...args) => $setup.addContact && $setup.addContact(...args))
          }, "Save"),
          createBaseVNode("button", {
            class: "button",
            onClick: _cache[9] || (_cache[9] = (...args) => $setup.closeAddContact && $setup.closeAddContact(...args))
          }, "Cancel")
        ])
      ])
    ], 2),
    $setup.showDeleteContact ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["modal", { "is-active": $setup.showDeleteContact }])
    }, [
      _hoisted_48,
      createBaseVNode("div", _hoisted_49, [
        createBaseVNode("header", _hoisted_50, [
          _hoisted_51,
          createBaseVNode("button", {
            class: "delete",
            "aria-label": "close",
            onClick: _cache[10] || (_cache[10] = ($event) => $setup.showDeleteContact = false)
          })
        ]),
        createBaseVNode("section", _hoisted_52, " Do you want to delete " + toDisplayString($setup.selectedContact.Name) + "(" + toDisplayString($setup.selectedContact.Code) + ") ", 1),
        createBaseVNode("footer", _hoisted_53, [
          createBaseVNode("button", {
            class: "button is-success",
            onClick: _cache[11] || (_cache[11] = (...args) => $setup.deleteContact && $setup.deleteContact(...args))
          }, "Delete"),
          createBaseVNode("button", {
            class: "button",
            onClick: _cache[12] || (_cache[12] = ($event) => $setup.showDeleteContact = false)
          }, "Cancel")
        ])
      ])
    ], 2)) : createCommentVNode("", true)
  ]);
}
var Contacts = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-47a30912"]]);
var Edit_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = {
  components: { Contacts, Editor },
  setup() {
    return {};
  }
};
const _hoisted_1$7 = { class: "container" };
const _hoisted_2$7 = { class: "columns is-3 has-background-light" };
const _hoisted_3$7 = { class: "column is-mobile is-full-mobile is-one-quarter-desktop is-narrow" };
const _hoisted_4$7 = { class: "column is-hidden-mobile is-three-quarters-desktop has-background-light is-narrow bd-notification is-primary" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Contacts = resolveComponent("Contacts");
  const _component_Editor = resolveComponent("Editor");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    createBaseVNode("div", _hoisted_2$7, [
      createBaseVNode("div", _hoisted_3$7, [
        createVNode(_component_Contacts)
      ]),
      createBaseVNode("div", _hoisted_4$7, [
        createVNode(_component_Editor)
      ])
    ])
  ]);
}
var Edit = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-9742fb56"]]);
const collectionNames = {
  contact: "Contacts",
  live: "Lives",
  dead: "Deads",
  ancestor: "Ancestors"
};
function backsignin(email, password) {
  return parse.User.logIn(email, password).then(function(user) {
    return { user };
  });
}
async function backsignout() {
  await parse.User.logOut();
}
function backsignup(email, password) {
  var user = new parse.User();
  user.set("username", email);
  user.set("password", password);
  user.set("email", email);
  return user.signUp();
}
async function addNewContactFunc(name, code, printState) {
  if (!printState)
    printState = printStatus.All;
  const contact = new parse.Object(collectionNames.contact);
  contact.set("Name", name);
  contact.set("Code", code);
  contact.set("PrintState", printState);
  contact.set("LastPrint", getTodayDate());
  return contact.save();
}
function getTodayDate() {
  let dd = new Date();
  let mon = (dd.getMonth() + 1).toString().padStart(2, "0");
  let day = dd.getDate().toString().padStart(2, "0");
  return dd.getFullYear() + "-" + mon + "-" + day;
}
function getAllContactList(callback) {
  const query = new parse.Query(collectionNames.contact);
  query.find().then((results) => {
    let list = JSON.parse(JSON.stringify(results));
    if (callback)
      callback(list);
  });
}
function deleteContactFunc(id) {
  const player = new parse.Object(collectionNames.contact);
  player.set("objectId", id);
  return player.destroy();
}
async function loadContactDetail(type, contactId) {
  let query = new parse.Query(type);
  query.equalTo("ContactId", contactId);
  let results = await query.find();
  let list = JSON.parse(JSON.stringify(results));
  return list;
}
function updateContactInfo(name, code, id) {
  const player = new parse.Object(collectionNames.contact);
  player.set("objectId", id);
  player.set("Name", name);
  player.set("Code", code);
  return player.save();
}
function addDetailRec(type, contactid, rec, isPrint) {
  if (type == collectionNames.live) {
    let live = new parse.Object(collectionNames.live);
    live.set("LiveName", rec.LiveName);
    live.set("ContactId", contactid);
    if (isPrint)
      live.set("IsPrint", true);
    return live.save();
  } else if (type == collectionNames.dead) {
    let d = new parse.Object(collectionNames.dead);
    d.set("DeadName", rec.DeadName);
    d.set("LiveName", rec.LiveName);
    d.set("Relation", rec.Relation);
    d.set("ContactId", contactid);
    if (isPrint)
      d.set("IsPrint", true);
    return d.save();
  } else if (type == collectionNames.ancestor) {
    let d = new parse.Object(collectionNames.ancestor);
    d.set("Surname", rec.Surname);
    d.set("LiveName", rec.LiveName);
    d.set("ContactId", contactid);
    if (isPrint)
      d.set("IsPrint", true);
    return d.save();
  }
}
function getDetailRec(type, contactid, rec, isPrint) {
  if (type == collectionNames.live) {
    let live = new parse.Object(collectionNames.live);
    live.set("LiveName", rec.LiveName);
    live.set("ContactId", contactid);
    if (isPrint)
      live.set("IsPrint", true);
    return live;
  } else if (type == collectionNames.dead) {
    let d = new parse.Object(collectionNames.dead);
    d.set("DeadName", rec.DeadName);
    d.set("LiveName", rec.LiveName);
    d.set("Relation", rec.Relation);
    d.set("ContactId", contactid);
    if (isPrint)
      d.set("IsPrint", true);
    return d;
  } else if (type == collectionNames.ancestor) {
    let d = new parse.Object(collectionNames.ancestor);
    d.set("Surname", rec.Surname);
    d.set("LiveName", rec.LiveName);
    d.set("ContactId", contactid);
    if (isPrint)
      d.set("IsPrint", true);
    return d;
  }
}
function bulkSave(type, list) {
  parse.Object.saveAll(list);
}
function setContactPrintState(contactId, printState) {
  const player = new parse.Object(collectionNames.contact);
  player.set("objectId", contactId);
  player.set("PrintState", printState);
  return player.save();
}
function deleteDetailFunc(type, detailId) {
  const player = new parse.Object(type);
  player.set("objectId", detailId);
  return player.destroy();
}
function updateDetailFunc(type, contactid, rec) {
  if (type == collectionNames.live) {
    let live = new parse.Object(collectionNames.live);
    live.set("objectId", rec.objectId);
    live.set("LiveName", rec.LiveName);
    live.set("IsPrint", rec.IsPrint);
    live.set("ContactId", contactid);
    return live.save();
  } else if (type == collectionNames.dead) {
    let d = new parse.Object(collectionNames.dead);
    d.set("objectId", rec.objectId);
    d.set("DeadName", rec.DeadName);
    d.set("LiveName", rec.LiveName);
    d.set("Relation", rec.Relation);
    d.set("IsPrint", rec.IsPrint);
    d.set("ContactId", contactid);
    return d.save();
  } else if (type == collectionNames.ancestor) {
    let d = new parse.Object(collectionNames.ancestor);
    d.set("objectId", rec.objectId);
    d.set("Surname", rec.Surname);
    d.set("LiveName", rec.LiveName);
    d.set("IsPrint", rec.IsPrint);
    d.set("ContactId", contactid);
    return d.save();
  }
}
function getTodayDateTime() {
  let dd = new Date();
  let mon = (dd.getMonth() + 1).toString().padStart(2, "0");
  let day = dd.getDate().toString().padStart(2, "0");
  let hh = dd.getHours().toString().padStart(2, "0");
  let mm = dd.getMinutes().toString().padStart(2, "0");
  return dd.getFullYear() + mon + day + hh + mm;
}
async function getContact(contactId) {
  let query = new parse.Query(collectionNames.contact);
  query.equalTo("objectId", contactId);
  let results = await query.find();
  let list = JSON.parse(JSON.stringify(results));
  if (list && list.length > 0)
    return list[0];
  return null;
}
async function readContactDetailData(contactid) {
  let detailData = {
    live: [],
    dead: [],
    ancestor: []
  };
  detailData.live = await loadContactDetail(collectionNames.live, contactid);
  detailData.dead = await loadContactDetail(collectionNames.dead, contactid);
  detailData.ancestor = await loadContactDetail(collectionNames.ancestor, contactid);
  return detailData;
}
const store = createStore({
  state: {
    showLoading: false,
    user: null,
    authIsReady: false,
    selectedIdx: -1,
    contacts: [],
    currentLive: [],
    currentDead: [],
    currentAncestor: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    setContacts(state, payload) {
      state.contacts = payload;
    },
    setSelectedIdx(state, payload) {
      state.selectedIdx = payload;
    },
    setLive(state, payload) {
      state.currentLive = payload;
    },
    setDead(state, payload) {
      state.currentDead = payload;
    },
    setAncestor(state, payload) {
      state.currentAncestor = payload;
    },
    setContactPrintIndividual(state, payload) {
      if (Array.isArray(state.contacts) && state.contacts.length > state.selectedIdx && state.selectedIdx >= 0) {
        let contact = state.contacts[state.selectedIdx];
        contact.IsPrint = printStatus.Individual;
      }
    },
    setShowLoading(state, payload) {
      state.showLoading = true;
    },
    setCloseLoading(state, payload) {
      state.showLoading = false;
    },
    addNewConact(state, payload) {
      state.contacts.push(payload);
    }
  },
  getters: {
    filteredContacts: (state) => (txt) => {
      return state.contacts.filter((c) => c.Name.indexOf(txt) >= 0 || c.Code.indexOf(txt.toUpperCase()) >= 0);
    },
    currentContact: (state) => {
      if (Array.isArray(state.contacts) && state.contacts.length > state.selectedIdx && state.selectedIdx >= 0) {
        return state.contacts[state.selectedIdx];
      }
      return {};
    },
    findContact: (state) => (name, code) => {
      let matched = state.contacts.filter((c) => c.Name == name && c.Code == code);
      if (matched.length > 0) {
        return matched[0];
      }
      return null;
    },
    findContactById: (state) => (cid) => {
      let matched = state.contacts.filter((c) => c.objectId == cid);
      if (matched.length > 0) {
        return matched[0];
      }
      return null;
    }
  },
  actions: {
    login,
    logout,
    signup,
    getAllContacts,
    addNewContact,
    addNewContactToStore,
    deleteContact,
    loadContact,
    updateContact,
    addDetail,
    setPrintState,
    selectContact,
    deleteDetail,
    updateDetail,
    readContactDetail,
    showLoading,
    closeLoading,
    loadOneDetail
  }
});
function showLoading(context) {
  context.commit("setShowLoading");
}
function closeLoading(context) {
  context.commit("setCloseLoading");
}
async function login(context, { email, password }) {
  showLoading(context);
  return backsignin(email, password).then(function(res) {
    closeLoading(context);
    if (res) {
      return context.commit("setUser", res.user);
    } else {
      throw new Error("could not complete login");
    }
  }, function(err) {
    closeLoading(context);
    throw err;
  });
}
async function logout(context) {
  await backsignout(auth);
  context.commit("setUser", null);
}
function signup(context, { email, password }) {
  return backsignup(email, password);
}
async function getAllContacts(context) {
  showLoading(context);
  getAllContactList(function(contactsArray) {
    context.commit("setContacts", contactsArray);
    closeLoading(context);
  });
}
async function addNewContact(context, { contact }) {
  return addNewContactFunc(contact.Name, contact.Code).then(function(result) {
    getAllContacts(context);
  });
}
function addNewContactToStore(context, { contact }) {
  context.commit("addNewConact", contact);
}
async function deleteContact(context, { id }) {
  return deleteContactFunc(id).then((result) => getAllContacts(context));
}
async function loadContact(context, { contactid }) {
  let list = await loadContactDetail(collectionNames.live, contactid);
  context.commit("setLive", list);
  checkContactPrintStatus(context, list, context.getters.currentContact);
  list = await loadContactDetail(collectionNames.dead, contactid);
  context.commit("setDead", list);
  checkContactPrintStatus(context, list, context.getters.currentContact);
  list = await loadContactDetail(collectionNames.ancestor, contactid);
  context.commit("setAncestor", list);
  checkContactPrintStatus(context, list, context.getters.currentContact);
}
async function readContactDetail(context, { contactId }) {
  let detailData = readContactDetailData(contactId);
  return detailData;
}
async function updateContact(context, { name, code, id }) {
  return updateContactInfo(name, code, id).then((result) => getAllContacts(context));
}
async function addDetail(context, { type, contactId, rec, isPrint }) {
  let colName = getColNameFromType(type);
  await addDetailRec(colName, contactId, rec, isPrint);
}
async function setPrintState(context, { id, printState }) {
  return setContactPrintState(id, printState).then((result) => getAllContacts(context));
}
async function selectContact(context, { idx }) {
  return context.commit("setSelectedIdx", idx);
}
async function deleteDetail(context, { type, rec }) {
  let colName = getColNameFromType(type);
  await deleteDetailFunc(colName, rec.objectId);
  let list = await loadContactDetail(colName, rec.ContactId);
  context.commit("set" + type, list);
}
async function updateDetail(context, { type, rec, notRefresh }) {
  let colName = getColNameFromType(type);
  await updateDetailFunc(colName, rec.ContactId, rec);
  if (!notRefresh) {
    let list = await loadContactDetail(colName, rec.ContactId);
    context.commit("set" + type, list);
  }
}
async function loadOneDetail(context, { type, contactId }) {
  let colName = getColNameFromType(type);
  let list = await loadContactDetail(colName, contactId);
  context.commit("set" + type, list);
}
function getColNameFromType(type) {
  return type + "s";
}
function checkContactPrintStatus(context, detailList, contact) {
  if (detailList && detailList.length > 0 && contact.PrintState == printStatus.No) {
    let hasPrint = detailList.some((item) => item.IsPrint);
    if (hasPrint) {
      context.commit("setContactPrintIndividual", contact.objectId);
    }
  }
}
function savePrintData(name, data) {
  if (window.localStorage) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}
function getPrintData(name, data) {
  if (window.localStorage) {
    let json = localStorage.getItem(name);
    return JSON.parse(json);
  }
}
const _sfc_main$7 = {
  setup(props) {
    const store2 = useStore();
    const allLive = ref([]);
    const allDead = ref([]);
    const allAncestor = ref([]);
    const isShowLink = ref(false);
    const activeViewTab = ref(printTabs.changshen);
    const printContacts = computed(() => {
      let list = store2.state.contacts.filter((item) => item.IsPrint != printStatus.No);
      return list;
    });
    const removeFromPrint = (id) => {
      store2.dispatch("setPrintState", { id, printState: printStatus.No });
    };
    const clearAll = () => {
      printContacts.value.forEach(async (c) => {
        await store2.dispatch("setPrintState", { id: c.objectId, printState: printStatus.No });
      });
    };
    const insertIntoList = (alllist, newlist) => {
      for (let i = 0; i < newlist.length; i++) {
        let lastPage = new Array(printFormat.rows).fill({}).map(() => new Array());
        if (alllist.length > 0) {
          let lastone = alllist[alllist.length - 1];
          if (lastone.some((x) => x.length < printFormat.cols)) {
            lastPage = lastone;
          } else {
            alllist.push(lastPage);
          }
        } else {
          alllist.push(lastPage);
        }
        for (var row = 0; row < printFormat.rows; row++) {
          if (lastPage[row].length < printFormat.cols) {
            lastPage[row].push(newlist[i]);
            break;
          }
        }
      }
    };
    const fillBlanks = (alllist) => {
      if (alllist.length > 0) {
        let lastone = alllist[alllist.length - 1];
        for (var row = 0; row < printFormat.rows; row++) {
          for (let i = lastone[row].length; i < printFormat.cols; i++) {
            lastone[row].push({
              LiveName: "",
              DeadName: "",
              SurName: "",
              Relation: ""
            });
          }
        }
      }
    };
    const generatePrint = async () => {
      await printContacts.value.reduce(async (prev, c) => {
        await prev;
        let oneDetail = await store2.dispatch("readContactDetail", { contactId: c.objectId });
        insertIntoList(allLive.value, oneDetail.live);
        insertIntoList(allDead.value, oneDetail.dead);
        insertIntoList(allAncestor.value, oneDetail.ancestor);
      }, void 0);
      fillBlanks(allLive.value);
      fillBlanks(allDead.value);
      fillBlanks(allAncestor.value);
      savePrintData(tabs.live, allLive.value);
      savePrintData(tabs.dead, allDead.value);
      savePrintData(tabs.ancestor, allAncestor.value);
      isShowLink.value = true;
    };
    return {
      printContacts,
      allLive,
      allDead,
      allAncestor,
      activeViewTab,
      printTabs,
      isShowLink,
      removeFromPrint,
      clearAll,
      generatePrint
    };
  }
};
const _hoisted_1$6 = { class: "card" };
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("header", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "box flexfullrow" }, [
    /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2 has-text-left" }, "Print List")
  ])
], -1);
const _hoisted_3$6 = { class: "card-content" };
const _hoisted_4$6 = { class: "content" };
const _hoisted_5$6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", null, "Contact"),
  /* @__PURE__ */ createBaseVNode("th", null, "Count"),
  /* @__PURE__ */ createBaseVNode("th")
], -1);
const _hoisted_6$4 = ["onClick"];
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-minus-circle" })
], -1);
const _hoisted_8$2 = [
  _hoisted_7$2
];
const _hoisted_9 = { class: "card-footer" };
const _hoisted_10 = { class: "box flexfullrow" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", null, "Generate Print File", -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" })
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", null, "Clear All", -1);
const _hoisted_16 = [
  _hoisted_14,
  _hoisted_15
];
const _hoisted_17 = { class: "box flexfullrow" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode("View ChangSheng");
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_20 = /* @__PURE__ */ createTextVNode("View YuanQin");
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_22 = /* @__PURE__ */ createTextVNode("View WangSheng");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_24 = /* @__PURE__ */ createTextVNode("View ZhuXian");
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("section", null, [
    createBaseVNode("div", _hoisted_1$6, [
      _hoisted_2$6,
      createBaseVNode("div", _hoisted_3$6, [
        createBaseVNode("div", _hoisted_4$6, [
          createBaseVNode("table", null, [
            _hoisted_5$6,
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.printContacts, (c) => {
                return openBlock(), createElementBlock("tr", {
                  key: c.objectId
                }, [
                  createBaseVNode("td", null, toDisplayString(c.Name), 1),
                  createBaseVNode("td", null, toDisplayString(c.IsPrint), 1),
                  createBaseVNode("td", null, [
                    createBaseVNode("button", {
                      class: "button is-danger mx-2",
                      onClick: ($event) => $setup.removeFromPrint(c.objectId)
                    }, _hoisted_8$2, 8, _hoisted_6$4)
                  ])
                ]);
              }), 128))
            ])
          ])
        ])
      ]),
      createBaseVNode("footer", _hoisted_9, [
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("button", {
            class: "button is-primary mx-2",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.generatePrint())
          }, _hoisted_13),
          createBaseVNode("button", {
            class: "button is-danger mx-2",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.clearAll())
          }, _hoisted_16)
        ])
      ])
    ]),
    withDirectives(createBaseVNode("div", _hoisted_17, [
      createVNode(_component_router_link, {
        to: "/printCS",
        target: "_blank"
      }, {
        default: withCtx(() => [
          _hoisted_18
        ]),
        _: 1
      }),
      _hoisted_19,
      createVNode(_component_router_link, {
        to: "/printYQ",
        target: "_blank"
      }, {
        default: withCtx(() => [
          _hoisted_20
        ]),
        _: 1
      }),
      _hoisted_21,
      createVNode(_component_router_link, {
        to: "/printWS",
        target: "_blank"
      }, {
        default: withCtx(() => [
          _hoisted_22
        ]),
        _: 1
      }),
      _hoisted_23,
      createVNode(_component_router_link, {
        to: "/printZX",
        target: "_blank"
      }, {
        default: withCtx(() => [
          _hoisted_24
        ]),
        _: 1
      }),
      _hoisted_25
    ], 512), [
      [vShow, $setup.isShowLink]
    ])
  ]);
}
var Print = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {
  setup(props) {
    const importData = ref("");
    const store2 = useStore();
    const importit = async () => {
      store2.dispatch("showLoading");
      let list = importData.value.split("\n");
      let liveList = [];
      let deadList = [];
      let anceList = [];
      await list.reduce(async (prev, item) => {
        await prev;
        let fields = item.split(",");
        if (fields.length < 3) {
          fields = item.split("	");
          if (fields.length < 3)
            return;
        }
        let name = fields[0];
        let code = fields[1];
        let contact = store2.getters.findContact(name, code);
        let contactId = null;
        if (!contact) {
          let result = await addNewContactFunc(fields[0], fields[1], printStatus.No);
          contact = result;
          contactId = contact.id;
          await store2.dispatch("addNewContactToStore", { contact: {
            Name: fields[0],
            Code: fields[1],
            LastPrint: "",
            PrintState: printStatus.No,
            objectId: contactId
          } });
        } else {
          contactId = contact.objectId;
        }
        if (fields.length == 3) {
          liveList.push(getDetailRec(collectionNames.live, contactId, { LiveName: fields[2] }, false));
        } else if (fields.length == 5) {
          deadList.push(collectionNames.dead, contactId, { DeadName: fields[2], LiveName: fields[3], Relation: fields[4] }, false);
        } else if (fields.length == 4) {
          anceList.push(collectionNames.ancestor, contactId, { Surname: fields[2], LiveName: fields[3] }, false);
        }
      }, void 0);
      await bulkSave(collectionNames.live, liveList);
      await bulkSave(collectionNames.dead, deadList);
      await bulkSave(collectionNames.ancestor, anceList);
      alert("all imported");
      store2.dispatch("closeLoading");
    };
    return { importData, importit };
  }
};
const _hoisted_1$5 = { class: "card" };
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("header", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "card-header-title" }, [
    /* @__PURE__ */ createBaseVNode("div", null, [
      /* @__PURE__ */ createBaseVNode("p", { class: "title has-text-left" }, "Data Import"),
      /* @__PURE__ */ createBaseVNode("p", { class: "has-text-left is-size-6" }, [
        /* @__PURE__ */ createTextVNode(" Format: (delimited by , or tab)"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createTextVNode(" 1. ContactName, ContactCode, LiveName;"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createTextVNode(" 2. ContactName, ContactCode, DeadName, LiveName, Relation"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createTextVNode(" 3. ContactName, ContactCode, Surname, LiveName;"),
        /* @__PURE__ */ createBaseVNode("br")
      ])
    ])
  ])
], -1);
const _hoisted_3$5 = { class: "card-content" };
const _hoisted_4$5 = { class: "content" };
const _hoisted_5$5 = { class: "card-footer" };
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-print" })
], -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", null, "Import Data", -1);
const _hoisted_8$1 = [
  _hoisted_6$3,
  _hoisted_7$1
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", null, [
    createBaseVNode("div", _hoisted_1$5, [
      _hoisted_2$5,
      createBaseVNode("div", _hoisted_3$5, [
        createBaseVNode("div", _hoisted_4$5, [
          withDirectives(createBaseVNode("textarea", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.importData = $event),
            class: "textarea"
          }, "\r\n\r\n      ", 512), [
            [vModelText, $setup.importData]
          ])
        ])
      ]),
      createBaseVNode("footer", _hoisted_5$5, [
        createBaseVNode("button", {
          class: "button is-primary mx-2",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.importit())
        }, _hoisted_8$1)
      ])
    ])
  ]);
}
var Data = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var _imports_0$3 = "/vueplque/assets/changsheng.652e2b4b.jpg";
const _sfc_main$5 = {
  setup() {
    const allLive = ref([]);
    const generatedTime = ref("");
    allLive.value = getPrintData(tabs.live);
    generatedTime.value = getTodayDateTime();
    const getMainNameCharList = (name) => {
      return getMainNameCharListFunc(name);
    };
    const getMainFontSize = (name) => {
      let list = getMainNameCharListFunc(name);
      return getMainFontSizeFunc(list);
    };
    return {
      allLive,
      getMainNameCharList,
      getMainFontSize,
      generatedTime
    };
  }
};
const _hoisted_1$4 = { class: "plaque-page-table" };
const _hoisted_2$4 = {
  colspan: "5",
  align: "right",
  class: "noborder-top"
};
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$3,
  class: "plaque-img"
}, null, -1);
const _hoisted_4$4 = { class: "main-name" };
const _hoisted_5$4 = {
  colspan: "5",
  align: "right",
  class: "noborder-bottom"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.allLive, (page, pageidx) => {
      return openBlock(), createElementBlock("div", {
        class: "plaque-page page",
        key: "p" + pageidx
      }, [
        createBaseVNode("table", _hoisted_1$4, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_2$4, toDisplayString(pageidx + 1) + " of " + toDisplayString($setup.allLive.length), 1)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(page, (row, idx) => {
            return openBlock(), createElementBlock("tr", {
              key: "row" + idx
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (rec, cidx) => {
                return openBlock(), createElementBlock("td", {
                  key: "col" + cidx,
                  class: "plaquebox border-td"
                }, [
                  _hoisted_3$4,
                  createBaseVNode("div", _hoisted_4$4, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getMainNameCharList(rec.LiveName), (c) => {
                      return openBlock(), createElementBlock("div", {
                        key: c,
                        class: normalizeClass([$setup.getMainFontSize(rec.LiveName)])
                      }, toDisplayString(c), 3);
                    }), 128))
                  ])
                ]);
              }), 128))
            ]);
          }), 128)),
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_5$4, toDisplayString($setup.generatedTime), 1)
          ])
        ])
      ]);
    }), 128))
  ]);
}
var PrintChangsheng = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var _imports_0$2 = "/vueplque/assets/yuanqing.555f3a05.jpg";
const _sfc_main$4 = {
  setup() {
    const allLive = ref([]);
    allLive.value = getPrintData(tabs.live);
    const getSidNameCharList = (name) => {
      let list = getSideNameCharListFunc(name);
      return list;
    };
    const getSideNameClass = (name) => {
      let list = getSideNameCharListFunc(name);
      return list.length == 1 ? "plaque-side-vertical" : "plaque-side-chinese";
    };
    return {
      allLive,
      getSidNameCharList,
      getTodayDateTime,
      getSideNameClass
    };
  }
};
const _hoisted_1$3 = { class: "plaque-page-table" };
const _hoisted_2$3 = {
  colspan: "5",
  align: "right",
  class: "noborder-top"
};
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$2,
  class: "plaque-img"
}, null, -1);
const _hoisted_4$3 = { class: "side-name" };
const _hoisted_5$3 = {
  colspan: "5",
  align: "right",
  class: "noborder-bottom"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.allLive, (page, pageidx) => {
      return openBlock(), createElementBlock("div", {
        class: "plaque-page",
        key: "p" + pageidx
      }, [
        createBaseVNode("table", _hoisted_1$3, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_2$3, toDisplayString(pageidx + 1) + " of " + toDisplayString($setup.allLive.length), 1)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(page, (row, idx) => {
            return openBlock(), createElementBlock("tr", {
              key: "row" + idx
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (rec, cidx) => {
                return openBlock(), createElementBlock("td", {
                  key: "col" + cidx,
                  class: "plaquebox border-td"
                }, [
                  _hoisted_3$3,
                  createBaseVNode("div", _hoisted_4$3, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getSidNameCharList(rec.LiveName), (c) => {
                      return openBlock(), createElementBlock("span", {
                        key: c,
                        class: normalizeClass([$setup.getSideNameClass(rec.LiveName)])
                      }, toDisplayString(c), 3);
                    }), 128))
                  ])
                ]);
              }), 128))
            ]);
          }), 128)),
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_5$3, toDisplayString($setup.getTodayDateTime()), 1)
          ])
        ])
      ]);
    }), 128))
  ]);
}
var PrintYuanqing = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var _imports_0$1 = "/vueplque/assets/wangshen.3e907a23.jpg";
const _sfc_main$3 = {
  setup() {
    const allLive = ref([]);
    const generatedTime = ref("");
    allLive.value = getPrintData(tabs.dead);
    generatedTime.value = getTodayDateTime();
    const getMainNameCharList = (name) => {
      return getMainNameCharListFunc(name);
    };
    const getMainFontSize = (name) => {
      let list = getMainNameCharListFunc(name);
      return getMainFontSizeFunc(list);
    };
    const getSideNameCharList = (name) => {
      let list = getSideNameCharListFunc(name);
      return list;
    };
    const getSideNameClass = (name) => {
      let list = getSideNameCharListFunc(name);
      return list.length == 1 ? "plaque-side-vertical-ws" : "plaque-side-chinese";
    };
    return {
      allLive,
      getMainNameCharList,
      getMainFontSize,
      generatedTime,
      getSideNameCharList,
      getSideNameClass
    };
  }
};
const _hoisted_1$2 = { class: "plaque-page-table" };
const _hoisted_2$2 = {
  colspan: "5",
  align: "right",
  class: "noborder-top"
};
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$1,
  class: "plaque-img"
}, null, -1);
const _hoisted_4$2 = { class: "main-name-ws" };
const _hoisted_5$2 = { class: "side-name-ws" };
const _hoisted_6$2 = {
  colspan: "5",
  align: "right",
  class: "noborder-bottom"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.allLive, (page, pageidx) => {
      return openBlock(), createElementBlock("div", {
        class: "plaque-page",
        key: "p" + pageidx
      }, [
        createBaseVNode("table", _hoisted_1$2, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_2$2, toDisplayString(pageidx + 1) + " of " + toDisplayString($setup.allLive.length), 1)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(page, (row, idx) => {
            return openBlock(), createElementBlock("tr", {
              key: "row" + idx
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (rec, cidx) => {
                return openBlock(), createElementBlock("td", {
                  key: "col" + cidx,
                  class: "plaquebox border-td"
                }, [
                  _hoisted_3$2,
                  createBaseVNode("div", _hoisted_4$2, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getMainNameCharList(rec.DeadName), (c) => {
                      return openBlock(), createElementBlock("div", {
                        key: c,
                        class: normalizeClass([$setup.getMainFontSize(rec.DeadName)])
                      }, toDisplayString(c), 3);
                    }), 128))
                  ]),
                  createBaseVNode("div", _hoisted_5$2, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getSideNameCharList(rec.Relation + " " + rec.LiveName), (c) => {
                      return openBlock(), createElementBlock("span", {
                        key: c,
                        class: normalizeClass([$setup.getSideNameClass(rec.Relation + rec.LiveName)])
                      }, toDisplayString(c), 3);
                    }), 128))
                  ])
                ]);
              }), 128))
            ]);
          }), 128)),
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_6$2, toDisplayString($setup.generatedTime), 1)
          ])
        ])
      ]);
    }), 128))
  ]);
}
var PrintWangshen = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var _imports_0 = "/vueplque/assets/zhuxian.fc190276.jpg";
const _sfc_main$2 = {
  setup() {
    const allLive = ref([]);
    const generatedTime = ref("");
    allLive.value = getPrintData(tabs.ancestor);
    generatedTime.value = getTodayDateTime();
    const getMainNameCharList = (name) => {
      return getMainNameCharListFunc(name);
    };
    const getMainFontSize = (name) => {
      let list = getMainNameCharListFunc(name);
      return getMainFontSizeFunc(list);
    };
    const getSideNameCharList = (name) => {
      let list = getSideNameCharListFunc(name);
      return list;
    };
    const getSideNameClass = (name) => {
      let list = getSideNameCharListFunc(name);
      return list.length == 1 ? "plaque-side-vertical-zx" : "plaque-side-chinese";
    };
    return {
      allLive,
      getMainNameCharList,
      getMainFontSize,
      generatedTime,
      getSideNameCharList,
      getSideNameClass
    };
  }
};
const _hoisted_1$1 = { class: "plaque-page-table" };
const _hoisted_2$1 = {
  colspan: "5",
  align: "right",
  class: "noborder-top"
};
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  class: "plaque-img"
}, null, -1);
const _hoisted_4$1 = { class: "main-name-zx" };
const _hoisted_5$1 = { class: "side-name-zx" };
const _hoisted_6$1 = {
  colspan: "5",
  align: "right",
  class: "noborder-bottom"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.allLive, (page, pageidx) => {
      return openBlock(), createElementBlock("div", {
        class: "plaque-page",
        key: "p" + pageidx
      }, [
        createBaseVNode("table", _hoisted_1$1, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_2$1, toDisplayString(pageidx + 1) + " of " + toDisplayString($setup.allLive.length), 1)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(page, (row, idx) => {
            return openBlock(), createElementBlock("tr", {
              key: "row" + idx
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (rec, cidx) => {
                return openBlock(), createElementBlock("td", {
                  key: "col" + cidx,
                  class: "plaquebox border-td"
                }, [
                  _hoisted_3$1,
                  createBaseVNode("div", _hoisted_4$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getMainNameCharList(rec.Surname), (c) => {
                      return openBlock(), createElementBlock("div", {
                        key: c,
                        class: normalizeClass([$setup.getMainFontSize(rec.Surname)])
                      }, toDisplayString(c), 3);
                    }), 128))
                  ]),
                  createBaseVNode("div", _hoisted_5$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getSideNameCharList(rec.LiveName), (c) => {
                      return openBlock(), createElementBlock("span", {
                        key: c,
                        class: normalizeClass([$setup.getSideNameClass(rec.LiveName)])
                      }, toDisplayString(c), 3);
                    }), 128))
                  ])
                ]);
              }), 128))
            ]);
          }), 128)),
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_6$1, toDisplayString($setup.generatedTime), 1)
          ])
        ])
      ]);
    }), 128))
  ]);
}
var PrintZhuxian = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  async setup() {
    const route = useRoute();
    var contactId = route.query.c;
    const details = await readContactDetailData(contactId);
    const contact = await getContact(contactId);
    return { details, contact };
  }
};
const _hoisted_1 = {
  border: "1",
  class: "table is-bordered"
};
const _hoisted_2 = {
  colspan: "3",
  class: "is-size-2"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("tr", { class: "has-text-weight-bold has-background-light" }, [
  /* @__PURE__ */ createBaseVNode("td", null, "LiveName"),
  /* @__PURE__ */ createBaseVNode("td"),
  /* @__PURE__ */ createBaseVNode("td")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("tr", { class: "has-text-weight-bold has-background-light" }, [
  /* @__PURE__ */ createBaseVNode("td", null, "DeadName"),
  /* @__PURE__ */ createBaseVNode("td", null, "LiveName"),
  /* @__PURE__ */ createBaseVNode("td", null, "Relation")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("tr", { class: "has-text-weight-bold has-background-light" }, [
  /* @__PURE__ */ createBaseVNode("td", null, "Surname"),
  /* @__PURE__ */ createBaseVNode("td", null, "LiveName"),
  /* @__PURE__ */ createBaseVNode("td")
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("td", null, null, -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", null, [
    createBaseVNode("table", _hoisted_1, [
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", _hoisted_2, " Detail " + toDisplayString($setup.contact.Name) + " - " + toDisplayString($setup.contact.Code) + " - " + toDisplayString(new Date().toISOString().split("T")[0]), 1)
        ]),
        _hoisted_3,
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.details.live, (rec) => {
          return openBlock(), createElementBlock("tr", {
            key: rec.id
          }, [
            createBaseVNode("td", null, toDisplayString(rec.LiveName), 1),
            _hoisted_4,
            _hoisted_5
          ]);
        }), 128)),
        _hoisted_6,
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.details.dead, (rec) => {
          return openBlock(), createElementBlock("tr", {
            key: rec.id
          }, [
            createBaseVNode("td", null, toDisplayString(rec.DeadName), 1),
            createBaseVNode("td", null, toDisplayString(rec.LiveName), 1),
            createBaseVNode("td", null, toDisplayString(rec.Relation), 1)
          ]);
        }), 128)),
        _hoisted_7,
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.details.ancestor, (rec) => {
          return openBlock(), createElementBlock("tr", {
            key: rec.id
          }, [
            createBaseVNode("td", null, toDisplayString(rec.Surname), 1),
            createBaseVNode("td", null, toDisplayString(rec.LiveName), 1),
            _hoisted_8
          ]);
        }), 128))
      ])
    ])
  ]);
}
var DetailListInternal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: { DetailListInternal }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DetailListInternal = resolveComponent("DetailListInternal");
  return openBlock(), createBlock(Suspense, null, {
    default: withCtx(() => [
      createVNode(_component_DetailListInternal)
    ]),
    _: 1
  });
}
var DetailList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const routes = [
  {
    path: "/",
    alias: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/Main",
    name: "main",
    component: Main,
    children: [
      {
        path: "",
        component: Edit
      },
      {
        path: "Print",
        component: Print
      },
      {
        path: "Editor",
        component: Editor
      },
      {
        path: "Data",
        component: Data
      }
    ]
  },
  {
    path: "/printCS",
    name: "printCS",
    component: PrintChangsheng
  },
  {
    path: "/printYQ",
    name: "printYQ",
    component: PrintYuanqing
  },
  {
    path: "/printWS",
    name: "printWS",
    component: PrintWangshen
  },
  {
    path: "/printZX",
    name: "printZX",
    component: PrintZhuxian
  },
  {
    path: "/detailList",
    name: "detailList",
    component: DetailList
  }
];
const router = createRouter({
  base: "/vueplque/",
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from) => {
  if (!store.state.user && donotRedirect(to))
    return "/login";
  else
    return true;
});
function donotRedirect(to) {
  return to.path != "/" && to.path != "/login" && to.path != "/printCS" && to.path != "/printYQ" && to.path != "/printWS" && to.path != "/printZX" && to.path != "/detailList";
}
var index = "";
var app = createApp(App);
app.mixin(appConfigMixin);
app.use(router);
app.use(store);
app.mount("#app");
