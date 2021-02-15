$("#addCartModal").modal().hide();
$("a[href]").not("#product-tab-desc, #product-tab-more-info, #product-tab-tags, #product-tab-reviews").attr({
  "data-toggle": "modal",
  "data-target": "#addCartModal",
});
