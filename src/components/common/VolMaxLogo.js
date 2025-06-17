/**
 * EP-Ai - ElektroPlan AI
 * Copyright (c) 2025 VolMax Studio. All rights reserved.
 */

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function VolMaxLogo({ 
  variant = 'default', // 'default', 'light', 'dark', 'text-only'
  size = 'medium', // 'small', 'medium', 'large', 'xlarge'
  showText = true,
  style = {},
}) {
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          logoSize: { width: 40, height: 40 },
          textSize: 16,
          subtextSize: 10,
        };
      case 'medium':
        return {
          logoSize: { width: 60, height: 60 },
          textSize: 24,
          subtextSize: 12,
        };
      case 'large':
        return {
          logoSize: { width: 80, height: 80 },
          textSize: 32,
          subtextSize: 14,
        };
      case 'xlarge':
        return {
          logoSize: { width: 120, height: 120 },
          textSize: 48,
          subtextSize: 18,
        };
      default:
        return {
          logoSize: { width: 60, height: 60 },
          textSize: 24,
          subtextSize: 12,
        };
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'light':
        return {
          containerBg: '#ffffff',
          textColor: '#1a1a1a',
          subtextColor: '#666666',
        };
      case 'dark':
        return {
          containerBg: '#1a1a1a',
          textColor: '#ffffff',
          subtextColor: '#cccccc',
        };
      default:
        return {
          containerBg: 'transparent',
          textColor: '#ffffff',
          subtextColor: '#cccccc',
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();

  // Fallback SVG Logo Component (wenn keine image)
  const SVGLogo = () => (
    <View style={[styles.svgContainer, sizeStyles.logoSize]}>
      <View style={styles.vShape}>
        <View style={[styles.vLeft, { borderRightColor: '#00ff87' }]} />
        <View style={[styles.vRight, { borderLeftColor: '#00ff87' }]} />
      </View>
    </View>
  );

  if (variant === 'text-only') {
    return (
      <View style={[styles.container, { backgroundColor: variantStyles.containerBg }, style]}>
        <Text style={[styles.logoText, { fontSize: sizeStyles.textSize, color: variantStyles.textColor }]}>
          VolMax
        </Text>
        {showText && (
          <Text style={[styles.logoSubtext, { fontSize: sizeStyles.subtextSize, color: variantStyles.subtextColor }]}>
            STUDIO
          </Text>
        )}
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: variantStyles.containerBg }, style]}>
      {/* Logo Image or SVG */}
      <View style={styles.logoContainer}>
        {/* Uncomment when you have actual logo files */}
        {/* 
        <Image
          source={
            variant === 'light' 
              ? require('../../assets/images/logos/VolMax-logo-light.png')
              : variant === 'dark'
              ? require('../../assets/images/logos/VolMax-logo-dark.png')
              : require('../../assets/images/logos/VolMax-logo-transparent.png')
          }
          style={[styles.logoImage, sizeStyles.logoSize]}
          resizeMode="contain"
        />
        */}
        
        {/* Temporary SVG Logo */}
        <SVGLogo />
      </View>

      {/* Text */}
      {showText && (
        <View style={styles.textContainer}>
          <Text style={[styles.logoText, { fontSize: sizeStyles.textSize, color: variantStyles.textColor }]}>
            VolMax
          </Text>
          <Text style={[styles.logoSubtext, { fontSize: sizeStyles.subtextSize, color: variantStyles.subtextColor }]}>
            STUDIO
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 8,
  },
  logoImage: {
    // Will be applied when using actual images
  },
  textContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },
  logoSubtext: {
    fontWeight: '300',
    letterSpacing: 3,
    textAlign: 'center',
    marginTop: 2,
  },
  
  // Temporary SVG styles
  svgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  vShape: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '80%',
    width: '80%',
  },
  vLeft: {
    flex: 1,
    height: '100%',
    borderRightWidth: 8,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 8,
    borderLeftColor: '#00ff87',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ skewX: '15deg' }],
  },
  vRight: {
    flex: 1,
    height: '100%',
    borderLeftWidth: 8,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 8,
    borderRightColor: '#00ff87',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ skewX: '-15deg' }],
  },
});
