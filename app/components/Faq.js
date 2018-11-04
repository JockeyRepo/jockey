// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

type Props = {};

export default class Faq extends Component < Props > {
  props: Props;

  render() {
    return (
      <div class="wrapper">
        <div class="main">
                <section class="full-section wow fadeIn" data-wow-delay="0.2s">
                    <div class="main-logo">
                        <img src="./assets/images/logo.png" width="10%" alt="Logo" class="wow fadeIn" data-wow-delay="0.3s"  />
                        </div>
                        <div class="intro intro-settings" >
                            <div class="intro-text">
                               
                                <div class="faq-content">
                                 <h4 class="wow fadeInDown" data-wow-delay="0.4s">FAQ</h4>
                                  <p id="faq-text">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat neque sollicitudin eleifend sagittis. Sed viverra maximus nibh, viverra dignissim erat pharetra eget. Morbi erat mi, hendrerit quis luctus eu, pellentesque id risus. Vestibulum hendrerit commodo erat id blandit. Fusce in dapibus leo. Sed dignissim enim id orci semper malesuada. Duis dignissim suscipit semper. Nulla facilisi. Integer feugiat augue a nulla volutpat maximus. Donec et dolor condimentum, bibendum sem et, lacinia augue.

Pellentesque nec suscipit tellus. Donec eget enim ac nisl sollicitudin interdum id a erat. Suspendisse auctor vulputate mi. Cras mollis consequat ultricies. Suspendisse potenti. Nullam blandit sem arcu, eu porta est sollicitudin sit amet. Pellentesque orci arcu, pretium pharetra elit eget, fermentum congue odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer neque ligula, ultricies eget faucibus vulputate, varius at magna. Pellentesque accumsan mollis laoreet. Sed tincidunt viverra erat sed rhoncus. Nulla porttitor, enim in porta viverra, massa orci interdum velit, in dictum elit magna vitae eros. Phasellus ut varius lorem. Phasellus tincidunt vitae nulla ac bibendum. Nunc sodales lectus massa. Vivamus sit amet urna suscipit, placerat dui non, aliquam neque.

Nullam in iaculis neque, at consectetur metus. Aliquam blandit et est eu dignissim. Nam interdum fringilla ligula ut fermentum. Nunc maximus enim id nibh aliquam, vitae vestibulum diam tempor. Integer porttitor congue erat ac rhoncus. Cras scelerisque posuere commodo. Pellentesque eleifend neque ut aliquet mattis. Donec sed finibus felis, nec posuere arcu. Etiam pretium, lacus in pellentesque auctor, turpis ex aliquet velit, a volutpat magna libero in neque.

Mauris eu mollis metus, et porttitor enim. Vivamus eget lectus ut lacus consectetur suscipit. Nam nec tellus dignissim, finibus dui at, placerat elit. Maecenas vitae ipsum quis diam tincidunt egestas non non velit. Suspendisse nec gravida enim, vel ultricies ligula. Nam auctor nulla in gravida scelerisque. Fusce augue turpis, ornare a bibendum eu, convallis ut lorem. Sed id elit imperdiet, imperdiet neque tempus, ultrices est.

Curabitur dictum est ex, viverra feugiat orci vestibulum quis. Praesent suscipit vehicula nulla vel convallis. Praesent tempor erat lectus, vitae condimentum ex pretium sed. Nam et nunc eu nisi gravida scelerisque. Donec quis tellus et elit congue mollis. Pellentesque ullamcorper, lectus id dictum suscipit, nisl sapien fringilla lorem, eget ultrices magna lacus gravida metus. Nulla orci magna, placerat a vulputate sodales, dignissim nec nunc. Phasellus dignissim magna ac nisl ornare, ac accumsan turpis vulputate. Curabitur et vehicula tellus, quis imperdiet justo. Pellentesque sollicitudin lacus nunc, eu dapibus quam condimentum vitae. Curabitur quis mauris magna. Cras placerat facilisis neque, nec molestie nisi hendrerit et. Phasellus eu tortor nec elit lacinia elementum ac nec tellus. Proin cursus nibh felis, ac venenatis arcu imperdiet aliquet. Aliquam venenatis dolor nec vehicula luctus. Maecenas consequat ipsum sit amet pharetra tempor.

                                   </p>
                                <h4 class="wow fadeInDown" data-wow-delay="0.4s">Legal</h4>

                                <p id="faq-text">
                                Pellentesque nec suscipit tellus. Donec eget enim ac nisl sollicitudin interdum id a erat. Suspendisse auctor vulputate mi. Cras mollis consequat ultricies. Suspendisse potenti. Nullam blandit sem arcu, eu porta est sollicitudin sit amet. Pellentesque orci arcu, pretium pharetra elit eget, fermentum congue odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer neque ligula, ultricies eget faucibus vulputate, varius at magna. Pellentesque accumsan mollis laoreet. Sed tincidunt viverra erat sed rhoncus. Nulla porttitor, enim in porta viverra, massa orci interdum velit, in dictum elit magna vitae eros. Phasellus ut varius lorem. Phasellus tincidunt vitae nulla ac bibendum. Nunc sodales lectus massa. Vivamus sit amet urna suscipit, placerat dui non, aliquam neque.
                                </p>

                                 <h4 class="wow fadeInDown" data-wow-delay="0.4s">Licenses</h4>

                                <p id="faq-text">
                                Pellentesque nec suscipit tellus. Donec eget enim ac nisl sollicitudin interdum id a erat. Suspendisse auctor vulputate mi. Cras mollis consequat ultricies. Suspendisse potenti. Nullam blandit sem arcu, eu porta est sollicitudin sit amet. Pellentesque orci arcu, pretium pharetra elit eget, fermentum congue odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer neque ligula, ultricies eget faucibus vulputate, varius at magna. Pellentesque accumsan mollis laoreet. Sed tincidunt viverra erat sed rhoncus. Nulla porttitor, enim in porta viverra, massa orci interdum velit, in dictum elit magna vitae eros. Phasellus ut varius lorem. Phasellus tincidunt vitae nulla ac bibendum. Nunc sodales lectus massa. Vivamus sit amet urna suscipit, placerat dui non, aliquam neque.
                                </p>
                                  </div>




                              
                                <Link to={routes.HOME} class=" wow fadeInDown" id="go-back"><span><i class="fas fa-arrow-left icons"></i> Main Menu</span></Link>


                                    
                            </div>
                        
                    
                    </div>

            </section>
        </div>
    </div>
    );
  }
}
