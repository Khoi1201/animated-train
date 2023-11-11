import Image from 'next/image'
import { Category } from '../../ui/dashboard/category/category'
import Icon from '../../assets/Icon.jpg'
import mailIcon from '../../assets/mail_icon.svg'

export default function Page() {

  const linkCv =
    'https://www.vietnamworks.com/assets-wowcv/images/list_templates/cv_template_33.png'

  return (
    <div>
      <div className='container container--logo'>
        <Image
          src='https://dev_home.recruitery.co/assets/img/logo-text.png'
          width={160}
          height={300}
          alt='logo'
        />
      </div>
      <div className='container--feedback'>
        <span>
          <Image src={mailIcon} alt='feedback' width={20} height={20} />
          <br />
          nhận <br />
          xét
        </span>
      </div>

      <div className='container container--category'>
        <Category />
        <div className='category'>
          <div className='category--row'>
            <span className='category--list-name'>Vai trò:</span>
            <div className='category--items'>
              <span>Thực tập sinh [không có kinh nghiệm]</span>
              <span>Mới tốt nghiệp [&lt1 năm]</span>
              <span>Thiếu niên [1-3 năm]</span>
              <span>Trung cấp [3-5 năm]</span>
              <span>Người cao tuổi [5-10 năm]</span>
              <span>Người cao tuổi [10+ năm]</span>
            </div>
          </div>
          <div className='category--row'>
            <span className='category--list-name'>Ngành nghề:</span>
            <div className='category--items'>
              <span>Phát triển phụ trợ</span>
              <span>Phát triển điện thoại di động</span>
              <span>Bài kiểm tra</span>
              <span>Vận hành và bảo trì/hỗ trợ kỹ thuật</span>
              <span>Dữ liệu</span>
              <span>Quản lý dự án</span>
              <span>Vị trí kỹ thuật cao cấp</span>
              <span>Phát triển phần cứng</span>
              <span>Phát triển front-end</span>
            </div>
          </div>
        </div>
      </div>

      <div className='container cv'>
        <div className='cv-samples'>
          <div className='cv-card'>
            <Image src={linkCv} height={300} width={200} alt='cv sample' />
            <span>Mẫu Java đơn giản nâng cao [5-10 tuổi]</span>
          </div>
          <div className='cv-card'>
            <Image src={linkCv} height={300} width={200} alt='cv sample' />
            <span>Mẫu Java đơn giản nâng cao [5-10 tuổi]</span>
          </div>
          <div className='cv-card'>
            <Image src={linkCv} height={300} width={200} alt='cv sample' />
            <span>Mẫu Java đơn giản nâng cao [5-10 tuổi]</span>
          </div>
          <div className='cv-card'>
            <Image src={linkCv} height={300} width={200} alt='cv sample' />
            <span>Mẫu Java đơn giản nâng cao [5-10 tuổi]</span>
          </div>

          <div className='cv-card'>
            <Image src={linkCv} height={300} width={200} alt='cv sample' />
            <span>Mẫu Java đơn giản nâng cao [5-10 tuổi]</span>
          </div>
          <div className='cv-card'>
            <Image src={linkCv} height={300} width={200} alt='cv sample' />
            <span>Mẫu Java đơn giản nâng cao [5-10 tuổi]</span>
          </div>
          <div className='cv-card'>
            <Image src={linkCv} height={300} width={200} alt='cv sample' />
            <span>Mẫu Java đơn giản nâng cao [5-10 tuổi]</span>
          </div>
          <div className='cv-card'>
            <Image src={linkCv} height={300} width={200} alt='cv sample' />
            <span>Mẫu Java đơn giản nâng cao [5-10 tuổi]</span>
          </div>
        </div>
        <div className='pagination'>
          <div className='previous'>
            <span>{'<'}</span>
          </div>
          <div className='page-number current'>
            <span>1</span>
          </div>
          <div className='page-number'>
            <span>2</span>
          </div>
          <div className='page-number'>
            <span>3</span>
          </div>
          <div className='page-number'>
            <span>4</span>
          </div>
          <div className='page-number'>
            <span>5</span>
          </div>
          <div className='page-number'>
            <span>6</span>
          </div>
          <div className='page-number'>
            <span>...</span>
          </div>
          <div className='page-number'>
            <span>389</span>
          </div>
          <div className='next'>
            <span>{'>'}</span>
          </div>
        </div>
      </div>

      <div className='container relate-position'>
        <div className='logo-brand'>
          <Image
            src='https://dev_home.recruitery.co/assets/img/logo-text.png'
            width={300}
            height={300}
            alt='logo'
          />
          <span className='quote'>Những vị trí đáng tin cậy đang chờ bạn lựa chọn</span>
        </div>
        <div className='cards'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-logo'>
                <Image src={Icon} height={50} width={40} alt='icon' />
              </div>
              <div className='card-info'>
                <div className='card-title'>Công nghiệp ô tô BYD</div>
                <div className='card-props'>
                  <span className='card-prop-first'>vòng C</span>
                  <span className='card-prop-devider'>|</span>
                  <span className='card-prop-second'>sản xuất ô tô</span>
                </div>
              </div>
            </div>
            <hr className='card-hr' />
            <div className='card-more'>
              <span>Xem vị trí việc làm hot</span>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='card-logo'>
                <Image src={Icon} height={50} width={40} alt='icon' />
              </div>
              <div className='card-info'>
                <div className='card-title'>Công nghiệp ô tô BYD</div>
                <div className='card-props'>
                  <span className='card-prop-first'>vòng C</span>
                  <span className='card-prop-devider'>|</span>
                  <span className='card-prop-second'>sản xuất ô tô</span>
                </div>
              </div>
            </div>
            <hr className='card-hr' />
            <div className='card-more'>
              <span>Xem vị trí việc làm hot</span>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='card-logo'>
                <Image src={Icon} height={50} width={40} alt='icon' />
              </div>
              <div className='card-info'>
                <div className='card-title'>Công nghiệp ô tô BYD</div>
                <div className='card-props'>
                  <span className='card-prop-first'>vòng C</span>
                  <span className='card-prop-devider'>|</span>
                  <span className='card-prop-second'>sản xuất ô tô</span>
                </div>
              </div>
            </div>
            <hr className='card-hr' />
            <div className='card-more'>
              <span>Xem vị trí việc làm hot</span>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='card-logo'>
                <Image src={Icon} height={50} width={40} alt='icon' />
              </div>
              <div className='card-info'>
                <div className='card-title'>Công nghiệp ô tô BYD</div>
                <div className='card-props'>
                  <span className='card-prop-first'>vòng C</span>
                  <span className='card-prop-devider'>|</span>
                  <span className='card-prop-second'>sản xuất ô tô</span>
                </div>
              </div>
            </div>
            <hr className='card-hr' />
            <div className='card-more'>
              <span>Xem vị trí việc làm hot</span>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='card-logo'>
                <Image src={Icon} height={50} width={40} alt='icon' />
              </div>
              <div className='card-info'>
                <div className='card-title'>Công nghiệp ô tô BYD</div>
                <div className='card-props'>
                  <span className='card-prop-first'>vòng C</span>
                  <span className='card-prop-devider'>|</span>
                  <span className='card-prop-second'>sản xuất ô tô</span>
                </div>
              </div>
            </div>
            <hr className='card-hr' />
            <div className='card-more'>
              <span>Xem vị trí việc làm hot</span>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='card-logo'>
                <Image src={Icon} height={50} width={40} alt='icon' />
              </div>
              <div className='card-info'>
                <div className='card-title'>Công nghiệp ô tô BYD</div>
                <div className='card-props'>
                  <span className='card-prop-first'>vòng C</span>
                  <span className='card-prop-devider'>|</span>
                  <span className='card-prop-second'>sản xuất ô tô</span>
                </div>
              </div>
            </div>
            <hr className='card-hr' />
            <div className='card-more'>
              <span>Xem vị trí việc làm hot</span>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='card-logo'>
                <Image src={Icon} height={50} width={40} alt='icon' />
              </div>
              <div className='card-info'>
                <div className='card-title'>Công nghiệp ô tô BYD</div>
                <div className='card-props'>
                  <span className='card-prop-first'>vòng C</span>
                  <span className='card-prop-devider'>|</span>
                  <span className='card-prop-second'>sản xuất ô tô</span>
                </div>
              </div>
            </div>
            <hr className='card-hr' />
            <div className='card-more'>
              <span>Xem vị trí việc làm hot</span>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='card-logo'>
                <Image src={Icon} height={50} width={40} alt='icon' />
              </div>
              <div className='card-info'>
                <div className='card-title'>Công nghiệp ô tô BYD</div>
                <div className='card-props'>
                  <span className='card-prop-first'>vòng C</span>
                  <span className='card-prop-devider'>|</span>
                  <span className='card-prop-second'>sản xuất ô tô</span>
                </div>
              </div>
            </div>
            <hr className='card-hr' />
            <div className='card-more'>
              <span>Xem vị trí việc làm hot</span>
            </div>
          </div>
        </div>
        <div className='more-position'>
          <span>Xem thêm doanh nghiệp</span>
        </div>
      </div>
      <footer>
        <div className='footer-links'>
          <div className='footer-link'>Tuyển dụng trực tiếp BOSS</div>
          <div className='footer-link'>nhắm mục tiêu quản lý</div>
          <div className='footer-link'>cửa hàng trực tuyến để tuyển dụng trực tiếp</div>
        </div>
        <div className='copy-right'>
          <span>
            Bản quyền @2023 Sơ yếu lý lịch tuyển dụng trực tiếp ICP Bắc Kinh số 14013441-5 Chứng chỉ
            ICP Bắc Kinh số 150923
          </span>
        </div>
      </footer>
    </div>
  )
}
