package com.deliveryapp;

import android.os.Bundle;
import com.facebook.react.ReactActivity;

// import com.facebook.react.bridge.JSIModulePackage; // <- add
// import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "deliveryapp";
  }

// //
// protected String getJSMainModuleName() {
//           return "index";
//         }

//         @Override
//         protected JSIModulePackage getJSIModulePackage() {
//           return new ReanimatedJSIModulePackage(); // <- add
//         }
// //

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }


}
