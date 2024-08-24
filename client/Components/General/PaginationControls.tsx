// app/Admin/PaginationControls.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeContext } from '@/Context/ThemeContext';

interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (direction: 'prev' | 'next') => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ currentPage, totalPages, onPageChange }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={styles.pagination}>
            <FontAwesome
                name="arrow-circle-left"
                size={24}
                color={theme.buttonColors.primaryButtonBackground}
                onPress={() => onPageChange('prev')}
                disabled={currentPage === 1}
            />
            <Text style={styles.pageInfo}>Page {currentPage} of {totalPages}</Text>
            <FontAwesome
                name="arrow-circle-right"
                size={24}
                color={theme.buttonColors.primaryButtonBackground}
                onPress={() => onPageChange('next')}
                disabled={currentPage === totalPages}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pageInfo: {
        fontSize: 10,
    },
});

export default PaginationControls;
