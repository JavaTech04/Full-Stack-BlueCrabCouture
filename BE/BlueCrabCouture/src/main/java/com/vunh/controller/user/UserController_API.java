package com.vunh.controller.user;

import com.vunh.entity.UserAccount;
import com.vunh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController_API {
    @Autowired
    private UserService userService;

    @GetMapping
    List<UserAccount> listUserAccount() {
        return this.userService.getAllUserAccount();
    }

    @GetMapping("/{id}")
    UserAccount findUserAccountById(@PathVariable Integer id){
        return this.userService.findByIdUserAccount(id).orElse(new UserAccount());
    }

    @PostMapping("/store")
    UserAccount storeUserAccount( @RequestBody UserAccount userAccount){
        return this.userService.storeOrUpdateUserAccount(userAccount);
    }

    @PutMapping("/update")
    UserAccount updateUserAccount( @RequestBody UserAccount userAccount){
        return this.userService.storeOrUpdateUserAccount(userAccount);
    }

    @DeleteMapping("/delete/{id}")
    String deleteUserAccount(@PathVariable Integer id){
        this.userService.deleteUserAccount(id);
        return "Remove successfully";
    }

    @PostMapping("/lock-account/{id}")
    UserAccount lockUserAccount(@PathVariable Integer id){
        return this.userService.lockOrUnlokUserAccount(id, true);
    }
    @PostMapping("/unlock-account/{id}")
    UserAccount unLockUserAccount(@PathVariable Integer id){
        return this.userService.lockOrUnlokUserAccount(id, false);
    }
}
