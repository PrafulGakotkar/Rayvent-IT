exports.id = 563;
exports.ids = [563];
exports.modules = {

/***/ 66229:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 99471, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 23458:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43155))

/***/ }),

/***/ 35797:
/***/ (() => {



/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 43155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js

function BackToTop({ scroll }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: scroll && /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
            className: "scroll-to-top scroll-to-target d-block",
            href: "#top",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                className: "fas fa-angle-up"
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/DataBg.js


function DataBg() {
    (0,react_.useEffect)(()=>{
        const elements = document.querySelectorAll("[data-bg]");
        elements.forEach((element)=>{
            element.style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


function Breadcrumb({ breadcrumbTitle }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "page-title centred",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "bg-layer",
                    style: {
                        backgroundImage: "url(/assets/images/background/page-title.png)"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "auto-container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content-box",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h1", {
                                children: breadcrumbTitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "bread-crumb clearfix",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                        children: breadcrumbTitle
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/SearchPopup.js


function SearchPopup({ isPopup, handlePopup }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            id: "search-popup",
            className: `search-popup ${isPopup ? "popup-visible" : ""}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "popup-inner",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "upper-box clearfix",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "close-search pull-right",
                            onClick: handlePopup,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                className: "far fa-times"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "overlay-layer"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "search-form",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("form", {
                                method: "post",
                                action: "index.html",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                type: "search",
                                                className: "form-control",
                                                name: "search-input",
                                                placeholder: "Search Here",
                                                required: true
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                                type: "submit",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "far fa-search"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Sidebar.js


function Sidebar({ isSidebar, handleSidebar }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {});
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer1.js


function Footer1() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "main-footer",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "widget-section",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pattern-layer",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "pattern-1",
                                    style: {
                                        backgroundImage: "url(assets/images/shape/shape-20.png)"
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "pattern-2",
                                    style: {
                                        backgroundImage: "url(assets/images/shape/shape-21.png)"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row clearfix",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "logo-widget footer-widget",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("figure", {
                                                    className: "footer-logo",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                            src: "assets/images/rayven_logo.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "links-widget footer-widget ml_50",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "widget-title",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                children: "Quick Link"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "widget-content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "links-list clearfix",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/",
                                                                            children: "Home"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/mission",
                                                                            children: "About Us"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/career",
                                                                            children: "Career"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/client-partners",
                                                                            children: "Clients & Partners"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "/contact",
                                                                            children: "Contact Us"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "links-widget footer-widget ml_50",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "widget-title",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Application Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "widget-content",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "links-list clearfix",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/application-development",
                                                                        children: "Application Development"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/outsourcing-manages-services",
                                                                        children: "Outsourcing and Managed Services"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/strategic-consulting",
                                                                        children: "Strategic Consulting"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "links-widget footer-widget ml_50 mt_20",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "widget-title",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            className: "links-list",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/flex-support",
                                                                    children: "Flex Support"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "widget-title",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Security,Risk and Compliance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "widget-content",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                                            className: "links-list clearfix",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/sap-grc",
                                                                    children: "SAP GRC"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "links-widget footer-widget ml_30",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                        children: " By Solutions"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "links-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/bigdata",
                                                                    children: "Analytics and Big Data"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/sap-hana",
                                                                    children: "SAP Hana"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/it-infra",
                                                                    children: "IT Infrastructure "
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/mobility",
                                                                    children: "Mobility"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/sap",
                                                                    children: "SAP"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/success-factor",
                                                                    children: "Success Factors"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/sap-mii",
                                                                    children: "SAP MII"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "contact-widget footer-widget",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "info-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                        className: "icon-23"
                                                                    }),
                                                                    "345 PLAINFIELD AVE, SUITE # 303 EDISON, NJ 08817 USA."
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                        className: "icon-3"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "info@rayvenit.solutions",
                                                                        children: "info@rayvenit.solutions"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                        className: "icon-2"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "tel:#",
                                                                        children: "(848)-459-5944"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                        className: "icon-2"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "tel:#",
                                                                        children: "(732)-749-8384  Extn: 111"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                        className: "icon-2"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "tel:#",
                                                                        children: "(732)-862-8384"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "footer-bottom centred",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "copyright",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Copyright ",
                                    new Date().getFullYear(),
                                    " by ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "#",
                                        children: "RAYVEN IT "
                                    }),
                                    "  All Right Reserved."
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer2.js


function Footer2() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "main-footer alternat-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "widget-section",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pattern-layer",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "pattern-1",
                                    style: {
                                        backgroundImage: "url(assets/images/shape/shape-27.png)"
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "pattern-2",
                                    style: {
                                        backgroundImage: "url(assets/images/shape/shape-28.png)"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row clearfix",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "logo-widget footer-widget",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("figure", {
                                                    className: "footer-logo",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                            src: "assets/images/logo.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                            children: "Lorem ipsum dolor sit amet consectetur adipiscing elitsollicit udin netus quis ornare. Massa pharetra in nec sed nunc."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                            children: "nisl viverra massa imperdiet. Dui mattis quis congue fames."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "links-widget footer-widget ml_50",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                        children: "Quick Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "links-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/about-us",
                                                                    children: "About Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/services1",
                                                                    children: "Services"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/career",
                                                                    children: "Career"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/pricing-table",
                                                                    children: "Pricing"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/contact",
                                                                    children: "Contact Us"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "links-widget footer-widget ml_30",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                        children: "Useful Links"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "links-list clearfix",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/index-2",
                                                                    children: "Privacy Policy"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/index-2",
                                                                    children: "Terms & Condition"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/index-2",
                                                                    children: "Support"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/index-2",
                                                                    children: "Disclaimer"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/faq",
                                                                    children: "Faq"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-12 footer-column",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "contact-widget footer-widget",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "widget-title",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "widget-content",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                            children: "Tincidunt neque pretium lectus donec risus."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "info-list clearfix",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "icon-23"
                                                                        }),
                                                                        "New Hyde Park, NY 11040"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "icon-3"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "mailto:example@info.com",
                                                                            children: "example@info.com"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "icon-2"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                            href: "tel:912136660027",
                                                                            children: "333 666 0000"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "footer-bottom centred",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "copyright",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Copyright 2023 by ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "/#",
                                        children: "biztech"
                                    }),
                                    " theme All Right Reserved."
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Menu.js


// import { useRouter } from "next/router"
function Menu() {
    // const router = useRouter()
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "navigation clearfix",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                    className: "",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "dropdown",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "#",
                            children: "Services"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: "Application Services"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/application-development",
                                                        children: "Application Development"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/data-science",
                                                        children: "Data Science and Analytics Consulting"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/outsourcing-manages-services",
                                                        children: "Outsourcing and Managed Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/strategic-consulting",
                                                        children: "Strategic Consulting"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: "Security,Risk and Compliance"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/sap-grc",
                                                    children: "SAP GRC "
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: "By Solutions"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/bigdata",
                                                        children: "Analytics and Big Data"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/sap-hana",
                                                        children: "SAP Hana"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/it-infra",
                                                        children: "IT Infrastructure"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/mobility",
                                                        children: "Mobility"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/sap",
                                                        children: "SAP"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/success-factor",
                                                        children: "Success Factors"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/sap-mii",
                                                        children: "SAP MII"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                    className: "",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "/flex-support",
                                        children: "Flex Support"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                        href: "/career",
                        children: "Careers"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "dropdown",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                            href: "#",
                            children: "About RAYVENT IT"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "/mission",
                                        children: "Mission"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "/client-partners",
                                        children: "Client & Partners"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "/contact",
                                        children: "Contact Us"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/MobileMenu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = (0,react_.useState)({
        status: false,
        key: "",
        subKey: ""
    });
    const handleToggle = (key)=>{
        setIsActive((prevState)=>({
                ...prevState,
                status: prevState.key !== key || !prevState.status,
                key: prevState.key !== key ? key : "",
                subKey: ""
            }));
    };
    const handleSubToggle = (subKey)=>{
        setIsActive((prevState)=>({
                ...prevState,
                subKey: prevState.subKey !== subKey ? subKey : ""
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mobile-menu",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "menu-backdrop",
                        onClick: handleMobileMenu
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "close-btn",
                        onClick: handleMobileMenu,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                            className: "far fa-times"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "menu-box",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "nav-logo",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/assets/images/rayven_logo.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "menu-outer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "collapse navbar-collapse show clearfix",
                                    id: "navbarSupportedContent",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navigation clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: isActive.key == 2 ? "dropdown current" : "dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/#",
                                                        children: "Services"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        style: {
                                                            display: `${isActive.key == 2 ? "block" : "none"}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: isActive.subKey == 3 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/#",
                                                                        children: "Application Services"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${isActive.subKey == 3 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/application-development",
                                                                                    children: "Application Development"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/data-science",
                                                                                    children: "Data Science and Analytics Consulting"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/outsourcing-manages-services",
                                                                                    children: "Outsourcing and Managed Services"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/strategic-consulting",
                                                                                    children: "Strategic Consulting"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/flex-support",
                                                                                    children: "Flex Support"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: isActive.subKey == 3 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleSubToggle(3),
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: isActive.subKey == 4 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/#",
                                                                        children: "Security,Risk and Compliance"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                                                        style: {
                                                                            display: `${isActive.subKey == 4 ? "block" : "none"}`
                                                                        },
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                href: "/sap-grc",
                                                                                children: "SAP GRC"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: isActive.subKey == 4 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleSubToggle(4),
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: isActive.subKey == 5 ? "dropdown current" : "dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/#",
                                                                        children: "By Solutions"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        style: {
                                                                            display: `${isActive.subKey == 5 ? "block" : "none"}`
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/bigdata",
                                                                                    children: "Analytics and Big Data"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/sap-hana",
                                                                                    children: "SAP Hana "
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/it-infra",
                                                                                    children: "IT Infrastructure"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/mobility",
                                                                                    children: "Mobility"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/sap",
                                                                                    children: "SAP "
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/success",
                                                                                    children: "Success Factors"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                    href: "/sap-mii",
                                                                                    children: "SAP MII"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: isActive.subKey == 5 ? "dropdown-btn open" : "dropdown-btn",
                                                                        onClick: ()=>handleSubToggle(5),
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "fa fa-angle-right"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn",
                                                        onClick: ()=>handleToggle(2),
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: isActive.key == 5 ? "dropdown current" : "dropdown",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/flex-support",
                                                    children: "FLEX Support"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/career",
                                                    children: "Careers"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: isActive.key == 6 ? "dropdown current" : "dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/#",
                                                        children: "About RAYVENT IT"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        style: {
                                                            display: `${isActive.key == 6 ? "block" : "none"}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/mission",
                                                                    children: "Mission"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/client-partners",
                                                                    children: "Client & Partners"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "/contact",
                                                                    children: "Contact Us"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn",
                                                        onClick: ()=>handleToggle(6),
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "social-links",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "clearfix",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "fab fa-pinterest-p"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "nav-overlay",
                style: {
                    display: `${isSidebar ? "block" : "none"}`
                },
                onClick: handleSidebar
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header1.js




function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: `main-header header-style-one ${scroll ? "fixed-header" : ""}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "header-top",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "top-inner",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "top-left",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "info clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-2"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "tel:(848)-459-5944",
                                                        children: "(848)-459-5944"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-3"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "mailto:info@rayvenit.solutions",
                                                        children: "info@rayvenit.solutions"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "top-right",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: " login social-links clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "https://www.facebook.com/people/Rayven-It-Solutions-LLC/100064230364799/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "https://www.linkedin.com/company/rayvenit-solutions",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "fab fa-linkedin-in"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "header-lower",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "outer-box",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "logo-box",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("figure", {
                                        className: "logo",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                src: "/assets/images/rayven_logo.png",
                                                alt: ""
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "menu-area clearfix",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mobile-nav-toggler",
                                            onClick: handleMobileMenu,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "icon-bar"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "icon-bar"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "icon-bar"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
                                            className: "main-menu navbar-expand-md navbar-light",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "collapse navbar-collapse show clearfix",
                                                id: "navbarSupportedContent",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Menu, {})
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: `sticky-header ${scroll ? "animated slideInDown" : ""}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "auto-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "outer-box",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "logo-box",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("figure", {
                                        className: "logo",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                src: "/assets/images/rayven_logo.png",
                                                alt: ""
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "menu-area clearfix",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
                                        className: "main-menu clearfix",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "collapse navbar-collapse show clearfix",
                                            id: "navbarSupportedContent",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Menu, {})
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(MobileMenu, {
                    handleMobileMenu: handleMobileMenu
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header2.js




function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `main-header header-style-two ${scroll ? "fixed-header" : ""}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "header-top",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "top-inner padding_0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "top-left",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "info clearfix",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "icon-2"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                            href: "tel:(848)-459-5944",
                                                            children: "(848)-459-5944"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "icon-3"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                            href: "mailto:info@rayvenit.solutions",
                                                            children: "info@rayvenit.solutions"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "top-right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: " login social-links clearfix",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "https://www.facebook.com/people/Rayven-It-Solutions-LLC/100064230364799/",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "https://www.linkedin.com/company/rayvenit-solutions",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fab fa-linkedin-in"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "header-lower",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "outer-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("figure", {
                                            className: "logo",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/assets/images/rayven_logo.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "menu-area clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mobile-nav-toggler",
                                                onClick: handleMobileMenu,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-bar"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
                                                className: "main-menu navbar-expand-md navbar-light",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "collapse navbar-collapse show clearfix",
                                                    id: "navbarSupportedContent",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Menu, {})
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                        className: "menu-right-content",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "btn-box"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: `sticky-header ${scroll ? "animated slideInDown" : ""}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "outer-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("figure", {
                                            className: "logo",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/assets/images/rayven_logo.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "menu-area clearfix",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
                                            className: "main-menu navbar-expand-md navbar-light",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "collapse navbar-collapse show clearfix",
                                                id: "navbarSupportedContent",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Menu, {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                        className: "menu-right-content",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "btn-box",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/contact",
                                                children: "Free Consulting"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(MobileMenu, {
                handleMobileMenu: handleMobileMenu,
                handleSidebar: handleSidebar,
                isSidebar: isSidebar
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header3.js




function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `main-header header-style-three ${scroll ? "fixed-header" : ""}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "header-lower",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "outer-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "outer-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("figure", {
                                            className: "logo",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "assets/images/rayven_logo.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "menu-area clearfix",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mobile-nav-toggler",
                                                onClick: handleMobileMenu,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-bar"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
                                                className: "main-menu navbar-expand-md navbar-light",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "collapse navbar-collapse show clearfix",
                                                    id: "navbarSupportedContent",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Menu, {})
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "menu-right-content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "search-box-outer search-toggler",
                                                onClick: handlePopup,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "icon-4"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "cart-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/shop",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "icon-26"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "btn-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/contact",
                                                    className: "theme-btn-one",
                                                    children: " Free Consulting "
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: `sticky-header ${scroll ? "animated slideInDown" : ""}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "auto-container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "outer-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "logo-box",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("figure", {
                                            className: "logo",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "assets/images/logo.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "menu-area clearfix",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
                                            className: "main-menu navbar-expand-md navbar-light",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "collapse navbar-collapse show clearfix",
                                                id: "navbarSupportedContent",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Menu, {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                        className: "menu-right-content",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "btn-box",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/contact",
                                                children: "Free Consulting"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(MobileMenu, {
                handleMobileMenu: handleMobileMenu,
                isSidebar: isSidebar,
                handleSidebar: handleSidebar
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 











function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = (0,react_.useState)(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = (0,react_.useState)(false);
    const handleMobileMenu = ()=>{
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    // Popup
    const [isPopup, setPopup] = (0,react_.useState)(false);
    const handlePopup = ()=>setPopup(!isPopup);
    // Sidebar
    const [isSidebar, setSidebar] = (0,react_.useState)(false);
    const handleSidebar = ()=>setSidebar(!isSidebar);
    (0,react_.useEffect)(()=>{
        const WOW = __webpack_require__(72996);
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(DataBg, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page-wrapper ${wrapperCls ? wrapperCls : ""}`,
                id: "#top",
                children: [
                    !headerStyle && /*#__PURE__*/ (0,jsx_runtime_.jsx)(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    headerStyle == 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 2 ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(Header2, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 3 ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(Header3, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(Sidebar, {
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(SearchPopup, {
                        isPopup: isPopup,
                        handlePopup: handlePopup
                    }),
                    breadcrumbTitle && /*#__PURE__*/ (0,jsx_runtime_.jsx)(Breadcrumb, {
                        breadcrumbTitle: breadcrumbTitle
                    }),
                    children,
                    !footerStyle && /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer1, {}),
                    footerStyle == 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer1, {}) : null,
                    !footerStyle && /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer2, {}),
                    footerStyle == 2 ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer2, {}) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(BackToTop, {
                scroll: scroll
            })
        ]
    });
}


/***/ }),

/***/ 95764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62109);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92162);
/* harmony import */ var public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_css_color_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34142);
/* harmony import */ var public_assets_css_color_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_color_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61676);
/* harmony import */ var public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56279);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43986);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88368);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79447);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36271);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_9__);






// import "swiper/css/navigation"



const metadata = {
    title: "RAYVENT IT",
    description: ""
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("html", {
        lang: "en",
        className: `${(_lib_font__WEBPACK_IMPORTED_MODULE_8___default().variable)} ${(_lib_font__WEBPACK_IMPORTED_MODULE_9___default().variable)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 40537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./components/elements/Preloader.js

function Preloader() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "loader-wrap",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "preloader",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "preloader-close",
                        children: "Preloader Close"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "layer layer-one",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                        className: "overlay"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "layer layer-two",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                        className: "overlay"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "layer layer-three",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                        className: "overlay"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/loading.js


function loading() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Preloader, {})
    });
}


/***/ }),

/***/ 52987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31841);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Error404() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            headerStyle: 2,
            footerStyle: 1,
            breadcrumbTitle: "404 Error",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                className: "error-section p_relative centred",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "auto-container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "inner-box",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figure", {
                                className: "error-image",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                    src: "assets/images/icons/error-1.png",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    "Oops! That Page Can Not ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                                    "be Found."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                className: "theme-btn-one",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                        className: "icon-5"
                                    }),
                                    "Back to Homepage"
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 31841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Project\Working Projects\Rayvent IT\Rayvent IT\components\layout\Layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"48x48"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92162:
/***/ (() => {



/***/ }),

/***/ 34142:
/***/ (() => {



/***/ }),

/***/ 61676:
/***/ (() => {



/***/ })

};
;