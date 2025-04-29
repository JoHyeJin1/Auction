package com.auction.auctionapp.service.impl;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public boolean login(String userId, String password) {
        // TODO: 로그인 로직 작성
        System.out.println("로그인 시도: " + userId);
        return true; // 지금은 더미(true) 반환
    }

    @Override
    public void signup(String userId, String password, String email) {
        // TODO: 회원가입 로직 작성
        System.out.println("회원가입 시도: " + userId + ", " + email);
    }

    @Override
    public void updateProfile(String userId, String newEmail, String newPassword) {
        // TODO: 프로필 수정 로직 작성
        System.out.println("프로필 수정 시도: " + userId);
    }
}
