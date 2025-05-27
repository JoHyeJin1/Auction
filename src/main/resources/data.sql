use auction;
#user 부분 data
#user domain에 없는 column 추가
ALTER TABLE `user`
    ADD COLUMN intro TEXT,
    ADD COLUMN profile_image VARCHAR(255);
#user Column 형태 바꿔야 할 부분
ALTER TABLE `user`
    MODIFY user_no BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY nickname VARCHAR(50) unique,
    MODIFY user_id VARCHAR(50) unique,
    MODIFY password VARCHAR(100),
    MODIFY email VARCHAR(100),
    MODIFY phone_number VARCHAR(20),
    MODIFY account_no VARCHAR(100);
#user에 data 추가
INSERT INTO `user` (nickname, user_id, password, address, category, email, phone_number, bank, account_no, intro, profile_image) VALUES
                                                                                                               ('홍길동', 'HongGillDong', 'hong12', NULL, NULL, NULL, '000-1111-2222', NULL, NULL, NULL, NULL),
                                                                                                               ('김영희', 'KimYoungHee', 'kim12', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
                                                                                                               ('이철수', 'LeeChulSoo', 'lee123', '대구광역시 수성구', NULL, 'lee@example.com', '010-3456-7890', NULL, NULL, NULL, NULL),
                                                                                                               ('박민수', 'ParkMinSoo', 'minsoo!', '경기도 성남시 분당구', NULL, 'park@example.com', '010-4567-8901', NULL, NULL, NULL, NULL),
                                                                                                               ('최지우', 'ChoiJiWoo', 'choipw', '인천광역시 연수구', NULL, 'choi@example.com', '010-5678-9012', NULL, NULL, NULL, NULL);


#category 부분 data
#category table 생성
describe category;
CREATE TABLE category(
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);
#category에 data 추가
INSERT INTO category(name) VALUES
                               ('디지털 기기'),
                               ('가구/인테리어'),
                               ('유아동 물품'),
                               ('여성의류'),
                               ('여성잡화'),
                               ('남성패션/잡화'),
                               ('생활가전'),
                               ('취미/게임/음반'),
                               ('뷰티/미용');


#UserInterestCategory 부분
#UserInterestCategory table 생성
CREATE TABLE UserInterestCategory (
                                      user_id VARCHAR(50),
                                      category_id INT,
                                      PRIMARY KEY (user_id, category_id)
);
#UserInterestCategory 연관관계 설정
ALTER TABLE UserInterestCategory
    ADD CONSTRAINT fk_userInterestCategory_user_id FOREIGN KEY (user_id) REFERENCES `user`(user_id),
    ADD CONSTRAINT fk_userInterestCategory_category_id FOREIGN KEY (category_id) REFERENCES category(category_id);
#UserInterestCategory에 data 추가
INSERT INTO UserInterestCategory (user_id, category_id) VALUES
                                                            ('HongGillDong', 1),
                                                            ('HongGillDong', 2),
                                                            ('KimYoungHee', 2),
                                                            ('KimYoungHee', 3);

#product 부분 data
ALTER TABLE product
    ADD COLUMN category_id INT,
    ADD COLUMN image_path VARCHAR(255),
    ADD COLUMN `condition` ENUM('새상품', '사용감 없음', '사용감 적음', '사용감 많음', '고장/파손'),
    ADD COLUMN created_at DATETIME;

ALTER TABLE product
    MODIFY user_id VARCHAR(50),
    MODIFY seller_id VARCHAR(50),
    MODIFY product_price DECIMAL(10,2),
    MODIFY name VARCHAR(100),
    MODIFY description TEXT;
#연관관계 설정
ALTER TABLE product
    ADD CONSTRAINT fk_product_seller_id FOREIGN KEY (seller_id) REFERENCES `user`(user_id),
    ADD CONSTRAINT fk_product_user_id FOREIGN KEY (user_id) REFERENCES `user`(user_id),
    ADD CONSTRAINT fk_product_category_id FOREIGN KEY (category_id) REFERENCES category(category_id);

INSERT INTO product(deadline, product_price, seller_id, user_id, description, name, status, category_id, image_path, `condition`, created_at) VALUES
                                                                                                                                                                     ('2025-06-10',50000, 'HongGillDong', NULL, '거의 새것 같은 디지털 카메라입니다.', '디지털 카메라', 'ON_SALE', 1, NULL,'사용감 없음', NOW()),
                                                                                                                                                                     ('2025-07-10', 150000, 'KimYoungHee', NULL, '4인용 고급 소파입니다.', '소파', 'ON_SALE', 2, NULL, '사용감 적음', NOW()),
                                                                                                                                                                     ('2025-07-01', 20000, 'LeeChulSoo', NULL, '아기 옷과 장난감 세트 함께 팔아요', '아기옷 & 장난감', 'SOLD_OUT', 3, NULL, '사용감 많음', NOW());


#Wishlist 부분
#wishlist table 생성
CREATE TABLE Wishlist(
                        wishlist_id BIGINT PRIMARY KEY AUTO_INCREMENT,
                        user_id VARCHAR(50),
                        product_id BIGINT
);
#연관관계 설정
ALTER TABLE wishlist
    ADD CONSTRAINT fk_wishlist_user_id FOREIGN KEY (user_id) references `user`(user_id),
    ADD CONSTRAINT fk_wishlist_product_id FOREIGN KEY (product_id) references product(product_id);
#wishlist에 data 추가
INSERT INTO Wishlist (user_id, product_id) VALUES
                                               ('HongGillDong', 1),
                                               ('KimYoungHee', 2),
                                               ('LeeChulSoo', 3);


#order 부분 data
#order domain에 없는 column 추가
describe `order`;
ALTER TABLE `order`
    ADD COLUMN product_id BIGINT,
    ADD COLUMN receiver_name VARCHAR(50),
    ADD COLUMN receiver_phone VARCHAR(20),
    ADD COLUMN ordered_at DATETIME;
#바꿔야 할 형태
ALTER TABLE `order`
    MODIFY buyer_id VARCHAR(50),
    MODIFY `order_status` ENUM('구매완료', '취소'),
    MODIFY shipping_address VARCHAR(255),
    MODIFY total_price DECIMAL(10, 2) NULL;
#order 관련 연관 관계 설정
ALTER TABLE `order`
    ADD CONSTRAINT fk_order_buyer_id FOREIGN KEY (buyer_id) REFERENCES `user`(user_id),
    ADD CONSTRAINT fk_order_product_id FOREIGN KEY (product_id) REFERENCES product(product_id);
#order부분 data 추가
INSERT INTO `order`(buyer_id, order_status, shipping_address, product_id, receiver_name, receiver_phone, ordered_at) VALUES
                                                                                                                         ('HongGillDong', '구매완료', '서울특별시 강남구 역삼동 123-45', 1, '홍길동', '010-1111-2222', NOW()),
                                                                                                                         ('KimYoungHee', '구매완료', '부산광역시 해운대구 88-77', 2, '김영희', '010-2222-3333', NOW()),
                                                                                                                         ('LeeChulSoo', '취소', '대구광역시 수성구 동대구로 123', 3, '이철수', '010-3333-4444', NOW());

#Address 부분
#Address table 생성
describe address;
CREATE TABLE Address(
                    address_id INT AUTO_INCREMENT PRIMARY KEY,
                    user_id VARCHAR(50),
                    receiver_name VARCHAR(50),
                    receiver_phone VARCHAR(20),
                    zipcode VARCHAR(10),
                    address VARCHAR(255),
                    is_default BOOLEAN
);
#Address 부분 연관 관계 설정
ALTER TABLE Address
    ADD CONSTRAINT fk_address_user_id FOREIGN KEY (user_id) REFERENCES `user`(user_id);
#Address 부분 data 추가
INSERT INTO Address (user_id, receiver_name, receiver_phone, zipcode, address, is_default) VALUES
                                                                                               ('HongGillDong', '홍길동', '010-1111-2222', '06234', '서울특별시 강남구 테헤란로 123', TRUE),
                                                                                               ('HongGillDong', '홍길동', '010-1111-2222', '06235', '서울특별시 서초구 반포대로 101', FALSE),
                                                                                               ('KimYoungHee', '김영희', '010-2222-3333', '48059', '부산광역시 해운대구 센텀중앙로 55', TRUE),
                                                                                               ('LeeChulSoo', '이철수', '010-3333-4444', '42035', '대구광역시 수성구 달구벌대로 1234', TRUE),
                                                                                               ('ParkMinSoo', '박민수', '010-4567-8901', '13595', '경기도 성남시 분당구 판교로 242', TRUE),
                                                                                               ('ChoiJiWoo', '최지우', '010-5678-9012', '21987', '인천광역시 연수구 송도과학로 27', TRUE);



#Notice 부분
#notice domain에 없는 column 추가
ALTER TABLE notice
    ADD COLUMN `type` ENUM('공지', '이벤트', '서비스 안내');
#형태 바꿔야 할 부분
ALTER TABLE notice
    MODIFY content text,
    MODIFY title VARCHAR(100);
#notice에 data 추가
INSERT INTO notice (title, content, type, created_at) VALUES
                                                          ('서버 점검 안내', '시스템 안정화를 위한 서버 점검이 6월 5일 새벽 1시부터 3시까지 진행됩니다.', '서비스 안내', NOW()),
                                                          ('신규 회원 이벤트!', '신규 가입 시 5,000포인트를 드리는 이벤트를 진행 중입니다.', '이벤트', NOW()),
                                                          ('중요 공지사항', '개인정보 처리방침이 2025년 7월 1일부터 변경됩니다. 자세한 내용은 공지사항을 확인하세요.', '공지', NOW()),
                                                          ('여름 맞이 이벤트', '7월 한 달간 전 카테고리 무료배송 이벤트를 진행합니다!', '이벤트', NOW()),
                                                          ('고객센터 운영시간 변경', '고객센터 운영시간이 오전 9시 ~ 오후 6시로 변경됩니다.', '서비스 안내', NOW());

#qna 부분
#qna table에 없는 column 추가
describe qna;
ALTER TABLE qna
    ADD COLUMN `category` ENUM('이용정책', '구매', '판매');
#qna table column들 형태 변환
ALTER TABLE qna
    MODIFY answer TEXT,
    MODIFY question TEXT;
#qna table data 추가
INSERT INTO qna (question, answer, category) VALUES
                                                 ('회원 탈퇴는 어떻게 하나요?', '마이페이지 > 계정설정 > 회원탈퇴에서 진행하실 수 있습니다.', '이용정책'),
                                                 ('상품을 구매했는데 배송이 오지 않아요.', '판매자에게 문의해보시고, 해결되지 않으면 고객센터로 연락주세요.', '구매'),
                                                 ('상품 등록 시 이미지를 몇 장까지 올릴 수 있나요?', '최대 5장까지 등록 가능합니다.', '판매'),
                                                 ('구매 후 환불은 어떻게 하나요?', '구매내역에서 환불 요청을 선택하시면 됩니다.', '구매'),
                                                 ('판매 수수료는 얼마인가요?', '판매 금액의 5%가 수수료로 부과됩니다.', '판매'),
                                                 ('부적절한 사용자는 어떻게 신고하나요?', '프로필 옆 신고 버튼을 통해 신고하실 수 있습니다.', '이용정책');