  import { max } from 'moment';
  import { Theme } from '.';
  import { images } from '../assets/images';
  import AppIcons from './NativeIcons';
  import * as yup from 'yup';
  import { current } from '@reduxjs/toolkit';
  import i18n from '../translation/i18n';


  const emailRegex = /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;
  const generalEmailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;

  const getTranslation = (key) => {
    return i18n.t(key) || key;
  };

  export const loginSchema = yup.object().shape({
    email: yup.string()
      .required(getTranslation('Validations.emailRequired'))
      .test('no-spaces', getTranslation('Validations.spacesNotAllowedEmail'), (value) => {
        if (!value) return true;
        return !value.includes(' ');
      })
      .test('valid-format', getTranslation('Validations.emailMustContainAt'), (value) => {
        if (!value) return true;
        return value.includes('@');
      })
      .test('single-at', getTranslation('Validations.emailOnlyOneAt'), (value) => {
        if (!value) return true;
        return (value.match(/@/g) || []).length === 1;
      })
      .test('valid-local-part', getTranslation('Validations.invalidEmailFormat'), (value) => {
        if (!value) return true;
        const localPart = value.split('@')[0];
        // Local part should have at least 1 character and can contain letters, numbers, dots, hyphens, underscores, plus signs, percent signs
        return /^[a-zA-Z0-9._+%-]+$/.test(localPart) && localPart.length > 0;
      })
      .test('valid-domain', getTranslation('Validations.invalidDomainFormat'), (value) => {
        if (!value) return true;
        const parts = value.split('@');
        if (parts.length !== 2) return false;
        const domain = parts[1];
        
        // Domain must have at least one dot and proper structure
        if (!domain.includes('.')) return false;
        
        // Domain parts separated by dots
        const domainParts = domain.split('.');
        
        // Must have at least 2 parts (e.g., example.com)
        if (domainParts.length < 2) return false;
        
        // Each part must be 1-63 characters and contain only alphanumeric and hyphens
        for (let part of domainParts) {
          if (part.length === 0 || part.length > 63) return false;
          if (!/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(part)) return false;
        }
        
        // TLD must be at least 2 characters and contain only letters
        const tld = domainParts[domainParts.length - 1];
        if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;
        
        return true;
      })
      .test('no-duplicate-tld', getTranslation('Validations.noDuplicateTld'), (value) => {
        if (!value) return true;
        const domain = value.split('@')[1];
        if (!domain) return true;
        
      
        const tldMatches = domain.match(/\.([a-zA-Z]{2,})/g);
        if (!tldMatches || tldMatches.length < 2) return true; // Valid if only one TLD
        
        // Check if there are any duplicate TLDs
        const tlds = tldMatches.map(t => t.toLowerCase());
        const uniqueTlds = new Set(tlds);
        return tlds.length === uniqueTlds.size; // True if all TLDs are unique
      })
      .matches(generalEmailRegex, getTranslation('Validations.invalidEmailFormatFull')),
    password: yup.string()
      .min(6, getTranslation('Validations.passwordMinLength'))
      .matches(/^\S*$/, getTranslation('Validations.passwordNoSpaces'))
      .required(getTranslation('Validations.passwordRequired')),
  });


  export const SignupSchema = yup.object().shape({
    name: yup.string()
      .required(getTranslation('Validations.userNameRequired'))
      .min(3, getTranslation('Validations.userNameMin3'))
      .max(50, getTranslation('Validations.userNameMax50'))
      .test('no-spaces', getTranslation('Validations.userNameNoSpaces'), (value) => {
        if (!value) return true; // Allow empty value
        return !value.includes(' '); // Return false if any space exists
      })
      .test('valid-characters', getTranslation('Validations.userNameValidChars'), (value) => {
        if (!value) return true; // Allow empty value
        // Allow alphanumeric, hyphens, underscores, and periods
        return /^[a-zA-Z0-9\-_.]+$/.test(value);
      }),
    email: yup.string()
      .required(getTranslation('Validations.emailRequired'))
      .test('no-spaces', getTranslation('Validations.spacesNotAllowedEmail'), (value) => {
        if (!value) return true;
        return !value.includes(' ');
      })
      .test('valid-format', getTranslation('Validations.emailMustContainAt'), (value) => {
        if (!value) return true;
        return value.includes('@');
      })
      .test('single-at', getTranslation('Validations.emailOnlyOneAt'), (value) => {
        if (!value) return true;
        return (value.match(/@/g) || []).length === 1;
      })
      .test('valid-local-part', getTranslation('Validations.invalidEmailFormat'), (value) => {
        if (!value) return true;
        const localPart = value.split('@')[0];
        // Local part should have at least 1 character and can contain letters, numbers, dots, hyphens, underscores, plus signs, percent signs
        return /^[a-zA-Z0-9._+%-]+$/.test(localPart) && localPart.length > 0;
      })
      .test('valid-domain', getTranslation('Validations.invalidDomainFormat'), (value) => {
        if (!value) return true;
        const parts = value.split('@');
        if (parts.length !== 2) return false;
        const domain = parts[1];
        
        // Domain must have at least one dot and proper structure
        if (!domain.includes('.')) return false;
        
        // Domain parts separated by dots
        const domainParts = domain.split('.');
        
        // Must have at least 2 parts (e.g., example.com)
        if (domainParts.length < 2) return false;
        
        // Each part must be 1-63 characters and contain only alphanumeric and hyphens
        for (let part of domainParts) {
          if (part.length === 0 || part.length > 63) return false;
          if (!/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(part)) return false;
        }
        
        // TLD must be at least 2 characters and contain only letters
        const tld = domainParts[domainParts.length - 1];
        if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;
        
        return true;
      })
      .test('no-duplicate-tld', getTranslation('Validations.noDuplicateTld'), (value) => {
        if (!value) return true;
        const domain = value.split('@')[1];
        if (!domain) return true;
        
        // Check for patterns like .com.com, .org.org, etc.
        // Extract all TLDs (parts after dots that are only letters)
        const tldMatches = domain.match(/\.([a-zA-Z]{2,})/g);
        if (!tldMatches || tldMatches.length < 2) return true; // Valid if only one TLD
        
        // Check if there are any duplicate TLDs
        const tlds = tldMatches.map(t => t.toLowerCase());
        const uniqueTlds = new Set(tlds);
        return tlds.length === uniqueTlds.size; // True if all TLDs are unique
      })
      .matches(generalEmailRegex, getTranslation('Validations.invalidEmailFormatFull')),
    password: yup
      .string()
      .required(getTranslation('Validations.passwordRequired'))
      .min(6, getTranslation('Validations.passwordGreaterThan6'))
      .matches(/[!@#$%^&*(),.?":{}|<>]/, getTranslation('Validations.passwordSpecialChar'))
      .matches(/[A-Z]/, getTranslation('Validations.passwordCapitalLetter'))
      .matches(/[a-z]/, getTranslation('Validations.passwordLowercaseLetter'))
      .matches(/^\S*$/, getTranslation('Validations.passwordNoSpaces'))
      .matches(/[0-9]/, getTranslation('Validations.passwordNumber')),
      
      
  
  });

  export const forgetpaswordSchema = yup.object().shape({
    email: yup.string()
      .required(getTranslation('Validations.emailRequired'))
      .test('no-spaces', getTranslation('Validations.spacesNotAllowedEmail'), (value) => {
        if (!value) return true;
        return !value.includes(' ');
      })
      .test('valid-format', getTranslation('Validations.emailMustContainAt'), (value) => {
        if (!value) return true;
        return value.includes('@');
      })
      .test('single-at', getTranslation('Validations.emailOnlyOneAt'), (value) => {
        if (!value) return true;
        return (value.match(/@/g) || []).length === 1;
      })
      .test('valid-local-part', getTranslation('Validations.invalidEmailFormat'), (value) => {
        if (!value) return true;
        const localPart = value.split('@')[0];
        // Local part should have at least 1 character and can contain letters, numbers, dots, hyphens, underscores, plus signs, percent signs
        return /^[a-zA-Z0-9._+%-]+$/.test(localPart) && localPart.length > 0;
      })
      .test('valid-domain', getTranslation('Validations.invalidDomainFormat'), (value) => {
        if (!value) return true;
        const parts = value.split('@');
        if (parts.length !== 2) return false;
        const domain = parts[1];
        
        // Domain must have at least one dot and proper structure
        if (!domain.includes('.')) return false;
        
        // Domain parts separated by dots
        const domainParts = domain.split('.');
        
        // Must have at least 2 parts (e.g., example.com)
        if (domainParts.length < 2) return false;
        
        // Each part must be 1-63 characters and contain only alphanumeric and hyphens
        for (let part of domainParts) {
          if (part.length === 0 || part.length > 63) return false;
          if (!/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(part)) return false;
        }
        
        // TLD must be at least 2 characters and contain only letters
        const tld = domainParts[domainParts.length - 1];
        if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;
        
        return true;
      })
      .test('no-duplicate-tld', getTranslation('Validations.noDuplicateTld'), (value) => {
        if (!value) return true;
        const domain = value.split('@')[1];
        if (!domain) return true;
        
        // Check for patterns like .com.com, .org.org, etc.
        // Extract all TLDs (parts after dots that are only letters)
        const tldMatches = domain.match(/\.([a-zA-Z]{2,})/g);
        if (!tldMatches || tldMatches.length < 2) return true; // Valid if only one TLD
        
        // Check if there are any duplicate TLDs
        const tlds = tldMatches.map(t => t.toLowerCase());
        const uniqueTlds = new Set(tlds);
        return tlds.length === uniqueTlds.size; // True if all TLDs are unique
      })
      .matches(generalEmailRegex, getTranslation('Validations.invalidEmailFormatFull')),
  });


  export const ResetPasswordSchema = yup.object().shape({
   

    password: yup.string()
      .required(getTranslation('Validations.passwordRequired'))
      .min(6, getTranslation('Validations.passwordGreaterThan6'))
      .matches(/[!@#$%^&*(),.?":{}|<>]/, getTranslation('Validations.passwordSpecialChar'))
      .matches(/[0-9]/, getTranslation('Validations.passwordNumber'))
      .matches(/[a-z]/, getTranslation('Validations.passwordLowercaseLetter'))
      .matches(/^\S*$/, getTranslation('Validations.passwordNoSpaces'))
      .matches(/[A-Z]/, getTranslation('Validations.passwordCapitalLetter'))
      .test('not-same-as-old', getTranslation('Validations.newPasswordDifferent'), function(value) {
        const { oldPassword } = this.parent;
        if (!value || !oldPassword) return true;
        return value !== oldPassword;
      }),

    confirmPassword: yup
      .string()
      .required(getTranslation('Validations.confirmPasswordRequired'))
      .matches(/^\S*$/, getTranslation('Validations.passwordNoSpaces'))
      .oneOf([yup.ref('password'), null], getTranslation('Validations.passwordsNotMatch')),
  });


  export const profileValidationSchema = yup.object().shape({
    username: yup.string()
      .required(getTranslation('Validations.usernameRequired'))
      .min(3, getTranslation('Validations.usernameMin3'))
      .max(50, getTranslation('Validations.usernameMax50'))
      .test('no-spaces', getTranslation('Validations.usernameNoSpaces'), (value) => {
        if (!value) return true; // Allow empty value
        return !value.includes(' '); // Return false if any space exists
      })
      .test('valid-characters', getTranslation('Validations.usernameValidChars'), (value) => {
        if (!value) return true; // Allow empty value
        // Allow alphanumeric, hyphens, underscores, and periods
        return /^[a-zA-Z0-9\-_.]+$/.test(value);
      }),
    email: yup.string()
      .required(getTranslation('Validations.emailRequired'))
      .test('no-spaces', getTranslation('Validations.spacesNotAllowedEmail'), (value) => {
        if (!value) return true;
        return !value.includes(' ');
      })
      .test('valid-format', getTranslation('Validations.emailMustContainAt'), (value) => {
        if (!value) return true;
        return value.includes('@');
      })
      .test('single-at', getTranslation('Validations.emailOnlyOneAt'), (value) => {
        if (!value) return true;
        return (value.match(/@/g) || []).length === 1;
      })
      .test('valid-local-part', getTranslation('Validations.invalidEmailFormat'), (value) => {
        if (!value) return true;
        const localPart = value.split('@')[0];
        // Local part should have at least 1 character and can contain letters, numbers, dots, hyphens, underscores, plus signs, percent signs
        return /^[a-zA-Z0-9._+%-]+$/.test(localPart) && localPart.length > 0;
      })
      .test('valid-domain', getTranslation('Validations.invalidDomainFormat'), (value) => {
        if (!value) return true;
        const parts = value.split('@');
        if (parts.length !== 2) return false;
        const domain = parts[1];
        
        // Domain must have at least one dot and proper structure
        if (!domain.includes('.')) return false;
        
        // Domain parts separated by dots
        const domainParts = domain.split('.');
        
        // Must have at least 2 parts (e.g., example.com)
        if (domainParts.length < 2) return false;
        
        // Each part must be 1-63 characters and contain only alphanumeric and hyphens
        for (let part of domainParts) {
          if (part.length === 0 || part.length > 63) return false;
          if (!/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(part)) return false;
        }
        
        // TLD must be at least 2 characters and contain only letters
        const tld = domainParts[domainParts.length - 1];
        if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;
        
        return true;
      })
      .test('no-duplicate-tld', getTranslation('Validations.noDuplicateTld'), (value) => {
        if (!value) return true;
        const domain = value.split('@')[1];
        if (!domain) return true;
        
        // Check for patterns like .com.com, .org.org, etc.
        // Extract all TLDs (parts after dots that are only letters)
        const tldMatches = domain.match(/\.([a-zA-Z]{2,})/g);
        if (!tldMatches || tldMatches.length < 2) return true; // Valid if only one TLD
        
        // Check if there are any duplicate TLDs
        const tlds = tldMatches.map(t => t.toLowerCase());
        const uniqueTlds = new Set(tlds);
        return tlds.length === uniqueTlds.size; // True if all TLDs are unique
      })
      .matches(generalEmailRegex, getTranslation('Validations.invalidEmailFormatFull')),
    phone: yup.string()
    .matches(/^[0-9]+$/, getTranslation('Validations.phoneDigitsOnly'))
      .min(8, getTranslation('Validations.phoneMinLength'))
      .max(12, getTranslation('Validations.phoneMaxLength'))
    .required(getTranslation('Validations.phoneRequired')),
    
  });




  export const passwordValidationSchema = yup.object({
    oldPassword: yup
      .string()
      .required(getTranslation('Validations.oldPasswordRequired')),
    
    newPassword: yup
      .string()
      .required(getTranslation('Validations.newPasswordRequired'))
      .min(6, getTranslation('Validations.passwordGreaterThan6'))
      .matches(/[!@#$%^&*(),.?":{}|<>]/, getTranslation('Validations.passwordSpecialChar'))
      .matches(/[0-9]/, getTranslation('Validations.passwordNumber'))
      .matches(/[a-z]/, getTranslation('Validations.passwordLowercaseLetter'))
      .matches(/^\S*$/, getTranslation('Validations.passwordNoSpaces'))
      .matches(/[A-Z]/, getTranslation('Validations.newPasswordUppercase'))
      .test('not-same-as-old', getTranslation('Validations.newPasswordDifferent'), function(value) {
        return value !== this.parent.oldPassword;
      }),

    confirmPassword: yup
      .string()
      .required(getTranslation('Validations.confirmPasswordRequired'))
      .matches(/^\S*$/, getTranslation('Validations.passwordNoSpaces'))
      .oneOf([yup.ref('newPassword'), null], getTranslation('Validations.passwordsNotMatch'))
});

  export const CreateMeetupSchema = yup.object().shape({
    meetupTitle: yup.string()
      .required(getTranslation('Validations.meetupTitleRequired'))
      .min(3, getTranslation('Validations.meetupTitleMin3'))
      .max(100, getTranslation('Validations.meetupTitleMax100')),
    hostedBy: yup.string()
      .required(getTranslation('Validations.hostNameRequired'))
      .min(2, getTranslation('Validations.hostNameMin2'))
      .max(50, getTranslation('Validations.hostNameMax50')),
    date: yup.string()
      .required(getTranslation('Validations.dateRequired')),
    startTime: yup.string()
      .required(getTranslation('Validations.startTimeRequired')),
    location: yup.string()
      .required(getTranslation('Validations.locationRequired'))
      .min(3, getTranslation('Validations.locationMin3'))
      .max(200, getTranslation('Validations.locationMax200')),
    description: yup.string()
      .notRequired()
      .max(1000, getTranslation('Validations.descriptionMax1000')),
  });

 