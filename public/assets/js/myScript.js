
$("#addCartModal").modal('toggle');
$("a[href]").not("#product-tab-desc, #product-tab-more-info, #product-tab-tags, #product-tab-reviews,#product-tab-features").attr({
  "data-toggle": "modal",
  "data-target": "#addCartModal",
});