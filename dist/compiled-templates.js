angular.module("key-value-editor").run(["$templateCache", function($templateCache) {$templateCache.put("key-value-editor.html","<ng-form name=\"forms.keyValueEditor\" novalidate ng-if=\"entries\">\n  <div class=\"key-value-editor\" ng-model=\"entries\" as-sortable=\"dragControlListeners\">\n\n    <div\n      ng-if=\"showHeader\"\n      class=\"key-value-editor-entry\">\n      <div class=\"form-group key-value-editor-header\">\n        <div class=\"input-group\">\n          <span class=\"help-block\">{{keyPlaceholder}}</span>\n        </div>\n      </div>\n      <div class=\"form-group key-value-editor-header\">\n        <div class=\"input-group\">\n          <span class=\"help-block\">{{valuePlaceholder}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div\n      class=\"key-value-editor-entry\"\n      ng-class-odd=\"\'odd\'\"\n      ng-class-even=\"\'even\'\"\n      ng-repeat=\"entry in entries\"\n      as-sortable-item>\n      <!-- The name/key block -->\n      <div\n        class=\"form-group key-value-editor-input\"\n        ng-class=\"{ \'has-error\' :  (forms.keyValueEditor[\'key-value-editor-key-\' + unique + \'-\' + $index].$invalid) }\">\n\n        <label for=\"key-value-editor-key-{{unique}}-{{$index}}\" class=\"sr-only\">{{keyPlaceholder}}</label>\n\n        <!-- name/key has icon -->\n        <div class=\"input-group\" ng-if=\"entry.keyIcon\">\n          <span class=\"input-group-addon\">\n            <span\n              class=\"{{entry.keyIcon}}\"\n              aria-hidden=\"true\"\n              data-toggle=\"tooltip\"\n              data-placement=\"top\"\n              data-original-title=\"{{entry.keyIconTooltip || keyIconTooltip}}\"\n              title=\"{{entry.keyIconTooltip || keyIconTooltip}}\"></span>\n          </span>\n\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            ng-class=\"{ \'{{setFocusKeyClass}}\' : $last  }\"\n            id=\"key-value-editor-key-{{unique}}-{{$index}}\"\n            name=\"key-value-editor-key-{{unique}}-{{$index}}\"\n            ng-attr-placeholder=\"{{ (!isReadonlyAny) && keyPlaceholder || \'\'}}\"\n            ng-minlength=\"{{keyMinlength}}\"\n            maxlength=\"{{keyMaxlength}}\"\n            ng-model=\"entry.name\"\n            ng-readonly=\"isReadonlyAny || isReadonlySome(entry.name) || entry.isReadonlyKey || entry.isReadonly\"\n            ng-pattern=\"validation.key\"\n            ng-value\n            ng-attr-key-value-editor-focus=\"{{grabFocus && $last}}\">\n        </div>\n\n        <!-- name/key has no icon -->\n        <input\n          ng-if=\"(!entry.keyIcon)\"\n          type=\"text\"\n          class=\"form-control\"\n          ng-class=\"{ \'{{setFocusKeyClass}}\' : $last  }\"\n          id=\"key-value-editor-key-{{unique}}-{{$index}}\"\n          name=\"key-value-editor-key-{{unique}}-{{$index}}\"\n          ng-attr-placeholder=\"{{ (!isReadonlyAny) && keyPlaceholder || \'\'}}\"\n          ng-minlength=\"{{keyMinlength}}\"\n          maxlength=\"{{keyMaxlength}}\"\n          ng-model=\"entry.name\"\n          ng-readonly=\"isReadonlyAny || isReadonlySome(entry.name) || entry.isReadonlyKey || entry.isReadonly\"\n          ng-pattern=\"validation.key\"\n          ng-value\n          ng-attr-key-value-editor-focus=\"{{grabFocus && $last}}\">\n        <!-- name/key help block -->\n        <span\n          class=\"help-block\"\n          ng-show=\"(forms.keyValueEditor[\'key-value-editor-key-\' + unique + \'-\' + $index].$error.pattern)\">\n          <span>{{ entry.keyValidatorError || keyValidatorError ||  \'validation error\' }}</span>\n          <span ng-if=\"entry.keyValidatorErrorTooltip || keyValidatorErrorTooltip\" class=\"help action-inline\">\n            <a\n              aria-hidden=\"true\"\n              data-toggle=\"tooltip\"\n              data-placement=\"top\"\n              data-original-title=\"{{entry.keyValidatorErrorTooltip || keyValidatorErrorTooltip}}\"\n              title=\"{{entry.keyValidatorErrorTooltip || keyValidatorErrorTooltip}}\">\n              <i class=\"{{entry.keyValidatorErrorTooltipIcon || keyValidatorErrorTooltipIcon}}\"></i>\n            </a>\n          </span>\n        </span>\n        <span\n          class=\"help-block\"\n          ng-show=\"(forms.keyValueEditor[\'key-value-editor-key-\' + unique + \'-\' + $index].$error.minlength)\">\n          <span>Minimum character count is {{keyMinlength}}</span>\n        </span>\n      </div>\n      <!-- the value block -->\n      <div\n        class=\"form-group key-value-editor-input\"\n        ng-class=\"forms.keyValueEditor[\'key-value-editor-value-\' + unique + \'-\' + $index].$invalid ? \'has-error\' : \'\'\">\n\n        <label for=\"key-value-editor-value-{{unique}}-{{$index}}\" class=\"sr-only\">{{valuePlaceholder}}</label>\n\n        <!-- value has icon -->\n        <div\n          class=\"input-group\"\n          ng-if=\"entry.valueIcon\">\n          <span class=\"input-group-addon\">\n            <span\n              class=\"{{entry.valueIcon}}\"\n              aria-hidden=\"true\"\n              data-toggle=\"tooltip\"\n              data-placement=\"top\"\n              data-original-title=\"{{entry.valueIconTooltip || valueIconTooltip}}\"\n              title=\"{{entry.valueIconTooltip || valueIconTooltip}}\"></span>\n          </span>\n          <!-- valueAlt when value is not present or is on a separate object key such as valueFrom: { something: \'else\' } -->\n          <input\n            ng-if=\"entry.valueAlt\"\n            type=\"text\"\n            class=\"form-control\"\n            ng-class=\"{ \'{{setFocusValClass}}\' : $last  }\"\n            id=\"key-value-editor-value-{{unique}}-{{$index}}\"\n            name=\"key-value-editor-value-{{unique}}-{{$index}}\"\n            ng-attr-placeholder=\"{{ (!isReadonlyAny) && valuePlaceholder || \'\'}}\"\n            ng-model=\"entry.valueAlt\"\n            readonly>\n          <!-- default value display -->\n          <input\n            ng-if=\"(!entry.valueAlt)\"\n            type=\"text\"\n            class=\"form-control\"\n            ng-class=\"{ \'{{setFocusValClass}}\' : $last  }\"\n            id=\"key-value-editor-value-{{unique}}-{{$index}}\"\n            name=\"key-value-editor-value-{{unique}}-{{$index}}\"\n            ng-attr-placeholder=\"{{ (!isReadonlyAny) && valuePlaceholder || \'\'}}\"\n            ng-minlength=\"{{valueMinlength}}\"\n            maxlength=\"{{valueMaxlength}}\"\n            ng-model=\"entry.value\"\n            ng-readonly=\"isReadonlyAny || isReadonlySome(entry.name) || entry.isReadonly\"\n            ng-pattern=\"validation.val\">\n        </div>\n\n        <!-- value has no icon -->\n        <div ng-if=\"(!entry.valueIcon)\">\n          <!-- valueAlt when value is not present or is on a separate object key such as valueFrom: { something: \'else\' } -->\n          <input\n            ng-if=\"entry.valueAlt\"\n            type=\"text\"\n            class=\"form-control\"\n            ng-class=\"{ \'{{setFocusValClass}}\' : $last  }\"\n            id=\"key-value-editor-value-{{unique}}-{{$index}}\"\n            name=\"key-value-editor-value-{{unique}}-{{$index}}\"\n            ng-attr-placeholder=\"{{ (!isReadonlyAny) && valuePlaceholder || \'\'}}\"\n            ng-model=\"entry.valueAlt\"\n            readonly>\n\n          <!-- default value display -->\n          <input\n            ng-if=\"(!entry.valueAlt)\"\n            type=\"text\"\n            class=\"form-control\"\n            ng-class=\"{ \'{{setFocusValClass}}\' : $last  }\"\n            id=\"key-value-editor-value-{{unique}}-{{$index}}\"\n            name=\"key-value-editor-value-{{unique}}-{{$index}}\"\n            ng-attr-placeholder=\"{{ (!isReadonlyAny) && valuePlaceholder || \'\'}}\"\n            ng-minlength=\"{{valueMinlength}}\"\n            maxlength=\"{{valueMaxlength}}\"\n            ng-model=\"entry.value\"\n            ng-readonly=\"isReadonlyAny || isReadonlySome(entry.name) || entry.isReadonly\"\n            ng-pattern=\"validation.val\">\n        </div>\n\n        <!-- value help block -->\n        <span\n          class=\"help-block\"\n          ng-show=\"(forms.keyValueEditor[\'key-value-editor-value-\' + unique + \'-\' + $index].$error.pattern)\">\n          <span>{{ entry.valueValidatorError || valueValidatorError ||  \'validation error\' }}</span>\n          <span ng-if=\"entry.valueValidatorErrorTooltip || valueValidatorErrorTooltip\" class=\"help action-inline\">\n            <a\n              aria-hidden=\"true\"\n              data-toggle=\"tooltip\"\n              data-placement=\"top\"\n              data-original-title=\"{{entry.valueValidatorErrorTooltip || valueValidatorErrorTooltip}}\"\n              title=\"{{entry.valueValidatorErrorTooltip || valueValidatorErrorTooltip}}\">\n              <i class=\"{{entry.valueValidatorErrorTooltipIcon || valueValidatorErrorTooltipIcon}}\"></i>\n            </a>\n          </span>\n        </span>\n        <span\n          class=\"help-block\"\n          ng-show=\"(forms.keyValueEditor[\'key-value-editor-value-\' + unique + \'-\' + $index].$error.minlength)\">\n          <span>Minimum character count is {{valueMinlength}}</span>\n        </span>\n      </div>\n      <div class=\"key-value-editor-buttons\">\n        <span\n          ng-if=\"(!cannotSort) && (entries.length > 1)\"\n          class=\"fa fa-bars\"\n          role=\"button\"\n          aria-label=\"Move row\"\n          aria-grabbed=\"false\"\n          as-sortable-item-handle></span>\n        <a\n          href=\"\"\n          class=\"pficon pficon-close as-sortable-item-delete\"\n          role=\"button\"\n          aria-label=\"Delete row\"\n          ng-hide=\"cannotDeleteAny || cannotDeleteSome(entry.name) || entry.cannotDelete\"\n          ng-click=\"deleteEntry($index, 1)\"></a>\n      </div>\n    </div>\n\n    <div\n      class=\"key-value-editor-entry form-group\"\n      ng-if=\"(!cannotAdd) && addRowLink\">\n      <a\n        href=\"\"\n        role=\"button\"\n        aria-label=\"Add row\"\n        ng-click=\"onAddRow()\">{{ addRowLink }}</a>\n    </div>\n\n    <!-- the last one, placeholder -->\n    <div\n      class=\"key-value-editor-entry\"\n      ng-if=\"!cannotAdd && (!addRowLink)\">\n      <div\n        class=\"form-group key-value-editor-input\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{keyPlaceholder}}\"\n          ng-model=\"placeholder.name\"\n          ng-focus=\"onFocusLastKey()\">\n      </div>\n      <div\n        class=\"form-group key-value-editor-input\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{valuePlaceholder}}\"\n          ng-model=\"placeholder.value\"\n          ng-focus=\"onFocusLastValue()\">\n      </div>\n    </div>\n  </div>\n\n</ng-form>\n");}]);