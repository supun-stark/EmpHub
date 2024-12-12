package com.example.employeems.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseDTO {
    private String code;
    private String message;
    private Object content;

}

// Manually add the setters if Lombok is not generating them
//    public void setCode(String code) {
//        this.code = code;
//    }
//
//    public void setMessage(String message) {
//        this.message = message;
//    }
//
//    public void setContent(Object content) {
//        this.content = content;
//    }
